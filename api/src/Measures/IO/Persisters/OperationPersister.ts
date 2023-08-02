import OperationsModel from 'App/Operations/OperationsModel'
import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import BuildingPersister from './BuildingPersister'
import DataPersister from './DataPersister'
import DataModel from 'App/Measures/DataModel'
import { v4 as uuid } from 'uuid'

export default class OperationPersister
{
    public document: any
    public id = uuid()

    constructor(document: any) 
    {
        this.document = document
    }

    public async store()
    {
        await this.dropIfExists()
        await this.measures()
        await this.buildings()
        return await this.operation()
    }

    public async dropIfExists()
    {
        const result = await OperationsModel.query()
            .where('name', this.document.name)
            .first()

        if (result) {
            await OperationPersister.drop(result.id)
        }
    }

    public async operation()
    {
        const { name, time_step, sites, row_count, building_count } = this.document
        return await OperationsModel.create({
           id: this.id,
           name, time_step, sites, row_count, building_count
        })
    }

    public async measures()
    {
        if (!this.document.measures) return
        const measures = this.document.measures.map(item => {
            return {
                ...item,
                operation_id: this.id,
                parent_id: null
            }
        })
        await MeasuresModel.createMany(measures)

        const data = new DataPersister(this.document.data.map(item => {
            return {
                ...item,
                operation_id: this.id,
                parent_id: null
            }
        }))
        await data.store()
    }

    public async buildings()
    {
        for (const document of this.document.buildings) {
            const persister = new BuildingPersister(document, this.id)
            await persister.store()
        }
    }

    public static async drop(id: string)
    {
        await OperationsModel.query().where('id', id).delete()
        await LocationsModel.query().where('operation_id', id).delete()
        await MeasuresModel.query().where('operation_id', id).delete()
        await DataModel.query().where('operation_id', id).delete()
    }
}