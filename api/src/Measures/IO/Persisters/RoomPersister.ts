import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import { v4 as uuid } from 'uuid'
import DataPersister from './DataPersister'

export default class RoomPersister
{
    public document: any
    public id = uuid()
    public operation_id: string
    public building_id: string
    public zone_id: string | null

    constructor(document: any, operation_id: string, building_id: string, zone_id?: string) 
    {
        this.document = document
        this.operation_id = operation_id
        this.building_id = building_id
        this.zone_id = zone_id ?? null
    }

    public async store()
    {
        await this.measures()
        return await this.room()
    }

    public async room()
    {
        const { name } = this.document
        return await LocationsModel.create({
           id: this.id,
           nature: 'room',
           operation_id: this.operation_id,
           building_id: this.building_id,
           zone_id: this.zone_id,
           room_id: this.id,
           parent_id: this.zone_id ?? this.building_id,
           name,
        })
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
                room_id: this.id,
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
                room_id: this.id,
                parent_id: this.id
            }
        }))
        await data.store()
    }
}