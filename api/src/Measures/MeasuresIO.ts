import Excel from 'exceljs'
import Application from '@ioc:Adonis/Core/Application'
import FileParser from './IO/FileParser'
import FilePersister from './IO/FilePersister'


export default class MeasuresIO
{
    private PATH = (Application.appRoot + '/public/uploads/')
    public sheet: Excel.Worksheet
    public rowCount: number
    public columns: number[]

    public async read(name: string)
    {
        const filename = this.PATH + name
        const workbook = new Excel.Workbook()
        await workbook.xlsx.readFile(filename)
        this.sheet = workbook.getWorksheet('Données')
        this.rowCount = this.sheet.rowCount
        return this
    }

    public parse(param = { isPreview: true })
    {
        const parser = new FileParser(this.sheet, param.isPreview)
        return parser.get()
    }

    public async store()
    {
        const document = this.parse({ isPreview: false })
        const persister = new FilePersister(document)
        return await persister.insert()
    }

}