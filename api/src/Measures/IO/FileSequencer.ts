import { v4 as uuid } from 'uuid'

export default class Operation
{
    public document: any
    public id = uuid()
    public measures = [] as any[]
    public sites = [] as any[]

    constructor(document: any) 
    {
        this.document = document
    }

    public get()
    {
        this.getSites()
        const { name, time_step, sites, row_count, building_count } = this.document
        return {
            operation: {
                id: this.id,
                name, time_step, sites, row_count, building_count
            },
            sites: this.sites,
            measures: this.measures
        } 
    }


    public getSites()
    {
        const path = this.document.name
        if (this.document.measures) {
            this.sites = [...this.sites, {
                id: this.id,
                nature: 'collection',
                operation_id: this.id,
                name: this.document.name,
            }]
            this.getMeasures(this.document, path, {
                parent_id: this.id
            })
        }
        this.buildings(path)
    }
    

    public buildings(source: string)
    {
        if (!this.document.buildings) return

        for (const building of this.document.buildings) {
            const { name } = building
            const path = source + ' / ' + name
            const id = uuid()
            this.sites = [...this.sites, {
               id: id,
               nature: 'building',
               operation_id: this.id,
               parent_id: this.id,
               path,
               name,
            }]
            this.zones(building, path, id)
            this.rooms(building, path, id)
            this.getMeasures(building, path, {
                parent_id: id, 
                building_id: id
            })
        }
    }

    public zones(document: any, source: string, building_id: string)
    {
        if (!document.zones) return

        for (const zone of document.zones) {
            const { name } = zone
            const path = source + ' / ' + name
            const id = uuid()
            this.sites = [...this.sites, {
                id: id,
                nature: 'zone',
                operation_id: this.id,
                building_id: building_id,
                zone_id: id,
                parent_id: building_id,
                path,
                name,
            }]
            this.rooms(zone, path, building_id, id)
            this.getMeasures(zone, path, {
                parent_id: id,
                building_id,
                zone_id: id
            })
        }
    }

    public rooms(document: any, source: string, building_id: string, zone_id: string|null = null)
    {
        if (!document.rooms) return
        for (const room of document.rooms) {
            const { name } = room
            const path = source + ' / ' + name
            const id = uuid()
            this.sites = [...this.sites,         {
                id: id,
                nature: 'room',
                operation_id: this.id,
                building_id: building_id,
                zone_id: zone_id,
                room_id: id,
                parent_id: zone_id ?? building_id,
                path,
                name,
            }]
            this.getMeasures(room, path, {
                parent_id: id,
                building_id,
                zone_id,
                room_id: id
            })
        }
    }

    public getMeasures(document: any, source:string, p: {
        parent_id   ?: string|null 
        building_id ?: string|null 
        zone_id     ?: string|null 
        room_id     ?: string|null
    } = {})
    {
        if (!document.measures) return
        const entries = document.measures.map(item => {
            return {
                ...item,
                operation_id: this.id,
                building_id: p.building_id,
                zone_id: p.zone_id,
                room_id: p.room_id,
                parent_id: p.parent_id,

            }
        })
        this.measures = [...this.measures, {
            path: source,
            entries: entries
        }]
    }
}