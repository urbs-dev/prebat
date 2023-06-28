import Excel from 'exceljs'
import type { CellValue } from 'exceljs'
import Application from '@ioc:Adonis/Core/Application'
import MeasuresModel from './MeasuresModel'

type Column = { columname: string|undefined, value: CellValue, x: number, address: string }

export default class MeasuresIO
{
    private PATH = (Application.appRoot + '/public/uploads/')
    public sheet: Excel.Worksheet
    private rowCount: number
    private id: string | undefined
    private columns: number[]
    public header: Column[]

    public async read(name: string)
    {
        const filename = this.PATH + name
        const workbook = new Excel.Workbook()
        await workbook.xlsx.readFile(filename)
        this.sheet = workbook.getWorksheet('Donnée_1h')
        this.rowCount = this.sheet.rowCount
        this.id = this.sheet.getCell('D1').value as string
        this.columns = Array.from({ length: this.sheet.lastColumn.number - 2 }, (_, i) => 2 + 1 + i)
        this.header = await this.getHeader()
        this.isValid()
        return this
    }

    public async getData()
    {
        // return this.sheet.getRow(24).getCell(4).value
        const rows = this.sheet.getRows(24, 10)?.map((row: Excel.Row) => {
            return this.getKeyVal(row)
        })
        return {
            id: this.id,
            rowCount: this.rowCount,
            rows: rows
        }
    }

    public async getHeader(): Promise<Column[]>
    {
        const measures = await MeasuresModel.all()
        const row = this.sheet.getRow(18)
        const map = this.columns.map(x => {
            const cell = row.getCell(x)
            return {
                x: parseInt(cell.col),
                address: cell.$col$row.replace(/[$]/g, ''),
                value: x === 3 ? 'Date' : cell.value,
                columname: x === 3 ? 'created_at' : measures.find(measure => measure.title === cell.value)?.columname,
            }
        })
        return map.filter(column => column.value).sort((a, b) => {
            if (!a.columname) return 1
            if (!b.columname) return -1
            if (a.columname === b.columname) return 0
            return a.columname.localeCompare(b.columname)
        })
    }

    private getKeyVal(row: Excel.Row)
    {
        const entries = this.header.map(({ x, columname }) => {
            const value = row.getCell(x).value
            // console.log(`${columname}: ${value}`)
            return [
                columname,
                this.round(value),
            ]
        })
        // return entries
        return Object.fromEntries(entries)
    }

    private isValid()
    {
        const errors = this.header.filter(cell => !cell.columname)
        if (errors && errors.length > 0) {
            throw new Error(`parsing XLSX file. Unknown columname for value(s): '${errors.map(error => error.value + `' in cell ${error.address}`).join(", '")}`)
        }
    }

    private round(value: CellValue)
    {
        if (typeof value === 'number') {
            return Math.round((value + Number.EPSILON) * 100) / 100
        }
        return value
    }
}