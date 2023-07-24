import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import { v4 as uuid } from 'uuid'
import RoomPersister from './RoomPersister'
import DataPersister from './DataPersister'

export default class ZonePersister
{
    public document: any
    public id = uuid()
    public operation_id: string
    public building_id: string

    constructor(document: any, operation_id: string, building_id: string) 
    {
        this.document = document
        this.operation_id = operation_id
        this.building_id = building_id
    }

    public async store()
    {
        await this.measures()
        await this.rooms()
        return await this.zone()
    }

    public async zone()
    {
        const { name } = this.document
        return await LocationsModel.create({
           id: this.id,
           nature: 'zone',
           operation_id: this.operation_id,
           building_id: this.building_id,
           zone_id: this.id,
           parent_id: this.building_id,
           name,
        })
    }

    public async rooms()
    {
        if (!this.document.rooms) return
        for (const document of this.document.rooms) {
            const persister = new RoomPersister(document, this.operation_id, this.building_id, this.id)
            await persister.store()
        }
    }

    public async measures()
    {
        if (!this.document.measures) return
        const measures = this.document.measures.map(item => {
            return {
                ...item,
                zone_id: this.id,
                building_id: this.building_id,
                operation_id: this.operation_id,
                parent_id: this.id
            }
        })
        await MeasuresModel.createMany(measures)


        const data = new DataPersister(this.document.data.map(item => {
            return {
                ...item,
                zone_id: this.id,
                building_id: this.building_id,
                operation_id: this.operation_id,
                parent_id: this.id
            }
        }))
        await data.store()
    }
}