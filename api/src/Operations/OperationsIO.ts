import type OperationsModel from './OperationsModel'
import type ReportsModel from 'App/Reports/ReportsModel'
// import Measures from './IO/Measures'
// import Application from '@ioc:Adonis/Core/Application'
import Files from './IO/Files'
import { PATH_TO_FILES } from 'Core/utils'

export default class OperationsIO
{
    public report: ReportsModel
    public filename: string
    public name: string

    public PATH = PATH_TO_FILES
    public rowCount: number
    public columns: number[]
    public dir: Files

    constructor()
    {
        this.dir = new Files()
    }

    public async extract(operation: OperationsModel)
    {
        this.report = operation.report
        this.filename = operation.filename
        this.name = operation.name
        // this.dir.createTempdir()
        // const filename = this.dir.tempdir + 'Mesures_' + this.name + '.xlsx'

        // this.dir.copy(this.PATH + this.filename, filename)
        // this.dir.copy(this.PATH + 'resultats.xlsx', this.dir.tempdir + 'Résultats.xlsx')

        // const zipname = this.name + '_' + ( Math.random().toString(36).substring(2, 9) )
        // return this.dir.zipTempdir(zipname)

        const origin = this.PATH + this.filename
        const destination = this.dir.PATH_TO_FILES + 'Cerema-TAB-PREBAT_MESURES_' + this.name.substring(0, 4) + '.xlsx'
        this.dir.copy(origin, destination)
        return this.dir.toUrl(destination)
    }

    public async getResults()
    {
        const origin = this.PATH +  'resultats.xlsx'
        const destination = this.dir.PATH_TO_FILES + 'Cerema-TAB-Data_perfo_reelle_bat_Energie_Prebat.xlsx'
        this.dir.copy(origin, destination)
        return this.dir.toUrl(destination)
    }
}