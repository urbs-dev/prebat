import type OperationsModel from './OperationsModel'
import type ReportsModel from 'App/Reports/ReportsModel'
// import Measures from './IO/Measures'
import Application from '@ioc:Adonis/Core/Application'
import Files from './IO/Files'


export default class OperationsIO
{
    public report: ReportsModel
    public filename: string
    public name: string

    public PATH = (Application.appRoot + '/public/uploads/')
    public rowCount: number
    public columns: number[]
    public dir: Files

    constructor(operation: OperationsModel)
    {
        this.report = operation.report
        this.filename = operation.filename
        this.name = operation.name
        this.dir = new Files()
    }

    public async extract()
    {
        this.dir.createTempdir()
        const filename = this.dir.tempdir + 'Mesures_' + this.name + '.xlsx'

        this.dir.copy(this.PATH + this.filename, filename)
        this.dir.copy(this.PATH + 'resultats.xlsx', this.dir.tempdir + 'Résultats.xlsx')

        const zipname = this.name + '_' + ( Math.random().toString(36).substring(2, 9) )
        return this.dir.zipTempdir(zipname)
    }
}