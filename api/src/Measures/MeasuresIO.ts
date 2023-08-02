import Excel from 'exceljs'
import Application from '@ioc:Adonis/Core/Application'
import FileParser from './IO/FileParser'
import FilePersister from './IO/FilePersister'
import FileSequencer from './IO/FileSequencer'
import MeasuresModel from './MeasuresModel'

export default class MeasuresIO
{
    private PATH = (Application.appRoot + '/public/uploads/')
    public sheet: Excel.Worksheet
    public rowCount: number
    public columns: number[]
    public name: string

    public async read(name: string)
    {
        this.name = name
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

    public sequence()
    {
        const document = this.parse({ isPreview: true })
        const sequencer = new FileSequencer(document)
        return {
            file: this.name, 
            ...sequencer.get()
        }
    }

    public async store(measures: MeasuresModel[])
    {
        const persister = new FilePersister(this.sheet, measures)
        return persister.insert()
    }

}