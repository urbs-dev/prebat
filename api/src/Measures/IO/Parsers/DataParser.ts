import type Excel from 'exceljs'

export default class DataParser
{
    public sheet: Excel.Worksheet
    public measures: { columname: string, x: number }[]
    public isPreview: boolean

    constructor(sheet: Excel.Worksheet, measures: { columname: string, x: number }[], isPreview = true)
    {
        this.sheet = sheet
        this.measures = measures
        this.isPreview = isPreview
    }

    public get()
    {
        const rows = this.isPreview ? this.sheet.getRows(24, 10) : this.sheet.getRows(24, this.sheet.rowCount - 23)
        if (!rows) return []

        return rows.map(row => {
            try {
                const data = {
                    created_at: new Date(String(row.getCell(3).value)).toISOString()
                }
                for (const measure of this.measures) {
                    data[measure.columname] = this.round(row.getCell(measure.x).value)
                }
                return data
            } catch (error) {
                throw Error(`Error while parsing data at row n°${row.number}: ` + error.message)
            }


        })
    }

    private round(value: Excel.CellValue)
    {
        if (typeof value === 'number') {
            return Math.round((value + Number.EPSILON) * 100) / 100
        }
        return Number(value)
    }
}