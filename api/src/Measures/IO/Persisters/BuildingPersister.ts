import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import { v4 as uuid } from 'uuid'
import ZonePersister from './ZonePersister'
import RoomPersister from './RoomPersister'
import DataPersister from './DataPersister'

export default class BuildingPersister
{
    public document: any
    public id = uuid()
    public operation_id: string

    constructor(document: any, operation_id: string) 
    {
        this.document = document
        this.operation_id = operation_id
    }

    public async store()
    {
        await this.measures()
        await this.zones()
        await this.rooms()
        return await this.building()
    }

    public async building()
    {
        const { name } = this.document
        return await LocationsModel.create({
           id: this.id,
           nature: 'building',
           operation_id: this.operation_id,
           parent_id: this.operation_id,
           name,
        })
    }

    public async zones()
    {
        if (!this.document.zones) return
        for (const document of this.document.zones) {
            const persister = new ZonePersister(document, this.operation_id, this.id)
            await persister.store()
        }
    }

    public async rooms()
    {
        if (!this.document.rooms) return
        for (const document of this.document.rooms) {
            const persister = new RoomPersister(document, this.operation_id, this.id)
            await persister.store()
        }
    }

    public async measures()
    {
        if (!this.document.measures) return
        const measures = this.document.measures.map(item => {
            return {
                ...item,
                building_id: this.id,
                operation_id: this.operation_id,
                parent_id: this.operation_id
            }
        })
        await MeasuresModel.createMany(measures)

        const data = new DataPersister(this.document.data.map(item => {
            return {
                ...item,
                building_id: this.id,
                operation_id: this.operation_id,
                parent_id: this.id
            }
        }))
        await data.store()
    }
}