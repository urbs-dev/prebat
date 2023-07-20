import type Excel from 'exceljs'

export default class Parameters 
{
    public static get(sheet: Excel.Worksheet, x: number)
    {
        const rows = sheet.getRows(5, 13)?.map((row: Excel.Row) => {
            return {
                value: row.getCell(x).value,
                parameter: row.getCell(2).value
            }
        })
        if (!rows) return []
        const result = rows.filter(item => item.value === 'x')
        return result.map( item => item.parameter )
    }

}