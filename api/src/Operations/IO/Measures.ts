import Excel from 'exceljs'

export default class Measures
{
    public filename: string 
    public sheet: Excel.Worksheet

    constructor(filename: string)
    {
        this.filename = filename
    }

    public async write()
    {
        const workbook = new Excel.Workbook()
        await workbook.xlsx.readFile(this.filename)
        // this.sheet = workbook.addWorksheet('Informations')
        // this.sheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970,1,1)})
        await workbook.xlsx.writeFile(this.filename)
    }
}