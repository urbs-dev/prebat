import type Excel from 'exceljs'
import { typology, statement } from './namings'
import DataParser from './DataParser'

export default class MeasuresParser
{
    public sheet: Excel.Worksheet
    public scope: number[]
    public isPreview: boolean

    constructor(sheet: Excel.Worksheet, isPreview: boolean)
    {
        this.sheet = sheet
        this.isPreview = isPreview
    }

    public setScope(scope: number[])
    {
        this.scope = scope
        return this
    }

    public get()
    {
        const row = this.sheet.getRow(18)
        const map = this.scope.map(x => {
            const cell = row.getCell(x)
            return {
                columname: this.merge(x),
                title: String(this.sheet.getRow(23).getCell(x).value),
                parameters: this.getParameters(x),
                typology: cell.value,
                statement: this.sheet.getRow(20).getCell(x).value,
                unit: this.sheet.getRow(21).getCell(x).value,
                sensor: this.sheet.getRow(19).getCell(x).value,
                address: cell.$col$row.replace(/[$]/g, ''),
                x: parseInt(cell.col),
            }
        })
        const measures = map.filter(column => column.columname).sort((a, b) => {
            if (!a.columname) return 1
            if (!b.columname) return -1
            if (a.columname === b.columname) return 0
            return a.columname.localeCompare(b.columname)
        })

        const data = new DataParser(this.sheet, measures, this.isPreview)

        return {
            measures,
            data: data.get()
        }
    }

    private merge(x: number)
    {
        const result = [
            this.getKey(this.sheet.getRow(18).getCell(x).value, typology),
            this.getKey(this.sheet.getRow(20).getCell(x).value, statement),
        ]
        return result.join('_')
    }

    private getKey(cellValue: Excel.CellValue, source: typeof typology | typeof statement)
    {
        if (!source) return 'notFound'
        if (!source) return 'notFound'
        if (!source) return 'notFound'
        if (!Object.entries(source)) return 'notFound'
        const result = Object.entries(source).find(([_, value]) => this.stringify(value) === this.stringify(cellValue)) as [key: string, value: string]
        if (!result) return 'noResult'
        const [ key, value ] = result
        if (!key || !value) {
            return ''
        }
        return key
    }

    private stringify(value: string | Excel.CellValue = null) {
        return String(value)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
    }

    public getParameters(x: number)
    {
        const rows = this.sheet.getRows(5, 13)?.map((row: Excel.Row) => {
            return {
                value: row.getCell(x).value,
                parameter: row.getCell(2).value
            }
        })
        if (!rows) return []
        const result = rows.filter(item => item.value === 'x')
        return result.map( item => item.parameter ).join(', ')
    }

    // private isValid()
    // {
    //     const errors = this.header.filter(cell => !cell.columname)
    //     if (errors && errors.length > 0) {
    //         throw new Error(`parsing XLSX file. Unknown columname for value(s): '${errors.map(error => error.columname + `' in cell ${error.address}`).join(", '")}`)
    //     }
    // }

    // private getKeyVal(row: Excel.Row)
    // {
    //     const entries = this.header.map(({ x, columname }) => {
    //         const value = row.getCell(x).value
    //         // console.log(`${columname}: ${value}`)
    //         return [
    //             columname,
    //             this.round(value),
    //         ]
    //     })
    //     // return entries
    //     return Object.fromEntries(entries)
    // }

}