import type Excel from 'exceljs'

export default class Location
{
    public static get(sheet: Excel.Worksheet, x: number)
    {
        return {
            building: sheet.getRow(2).getCell(x).value,
            zone: sheet.getRow(3).getCell(x).value,
            room: sheet.getRow(4).getCell(x).value 
        }
    }
}