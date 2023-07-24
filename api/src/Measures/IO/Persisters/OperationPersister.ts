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
            await OperationsModel.query().where('id', result.id).delete()
            await LocationsModel.query().where('operation_id', result.id).delete()
            await MeasuresModel.query().where('operation_id', result.id).delete()
            await DataModel.query().where('operation_id', result.id).delete()
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
                parent_id: this.id
            }
        })
        await MeasuresModel.createMany(measures)

        const data = new DataPersister(this.document.data.map(item => {
            return {
                ...item,
                operation_id: this.id,
                parent_id: this.id
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
}