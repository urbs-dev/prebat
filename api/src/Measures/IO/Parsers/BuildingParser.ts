import type Excel from 'exceljs'
import ZoneParser from './ZoneParser'
import FileParser, { type Column } from '../FileParser'
import RoomParser from './RoomParser'
import type MeasuresParser from './MeasuresParser'

export default class BuildingParser
{
    public kindof = 'building'
    public sheet: Excel.Worksheet
    public name: string
    public zones: { name: string, measures: number[] }[]
    public columns: Column[]
    public measureParser: MeasuresParser


    constructor(name: string, parser: FileParser)
    {
        this.sheet = parser.sheet
        this.columns = parser.columns
        this.measureParser = parser.measureParser
        this.name = name
    }

    public get()
    {
        return {
            name: this.name === 'Tout' ? 'batiment' : this.name,
            ...this.getMeasures(),
            zones: this.getZones(),
            rooms: this.getRooms(),
        }
    }

    public getMeasures()
    {
        const scope = [] as number[]

        for (const column of this.columns) {
            const { x, building, zone, room } = column
            if (zone + room === 'ToutTout' && building === this.name) {
                scope.push(x)
            }
        }
        if (scope.length  === 0) return null

        return this.measureParser.setScope(scope).get()
    }

    public getZones()
    {
        const zones = [] as string[]
        for (const column of this.columns) {
            const { building, zone } = column
            if (zone !== 'Tout' && building === this.name) {
                zones.push(zone)
            }
        }
        const result = [...new Set(zones)].map(name => {
            const zone = new ZoneParser(name, this)
            return zone.get()
        })
        return result.length > 0 ? result : undefined
    }

    public getRooms()
    {
        const rooms = [] as string[]
        for (const column of this.columns) {
            const { building, zone, room } = column
            if (zone === 'Tout' && room !== 'Tout' && building === this.name) {
                rooms.push(room)
            }
        }
        const result = [...new Set(rooms)].map(name => {
            const room = new RoomParser(name, this)
            return room.get()
        })
        return result.length > 0 ? result : undefined
    }
}