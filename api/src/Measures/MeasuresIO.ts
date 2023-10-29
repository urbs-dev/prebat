import Excel from 'exceljs'
import FileParser from './IO/FileParser'
import FilePersister from './IO/FilePersister'
import FileSequencer from './IO/FileSequencer'
import MeasuresModel from './MeasuresModel'
import { PATH_TO_FILES } from 'Core/utils'

export default class MeasuresIO
{
    private PATH = PATH_TO_FILES
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
        const sequencer = new FileSequencer(document, this.name)
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