import type Excel from 'exceljs'
import type BuildingParser from './BuildingParser'
import type { Column } from '../FileParser'
import RoomParser from './RoomParser'
import type MeasuresParser from './MeasuresParser'

export default class ZoneParser
{
    public kindof = 'zone'
    public sheet: Excel.Worksheet
    public name: string
    public buildingName: string
    public rooms: { name: string, measures: number[] }[]
    public columns: Column[]
    public measureParser: MeasuresParser


    constructor(name: string, parser: BuildingParser)
    {
        this.sheet = parser.sheet
        this.columns = parser.columns
        this.measureParser = parser.measureParser
        this.name = name
        this.buildingName = parser.name
    }

    public get()
    {
        return {
            name: this.name,
            ...this.getMeasures(),
            rooms: this.getRooms(),
        }
    }

    public getMeasures()
    {
        const scope = [] as number[]

        for (const column of this.columns) {
            const { x, building, zone, room } = column
            if (room === 'Tout' && zone === this.name && building === this.buildingName) {
                scope.push(x)
            }
        }
        if (scope.length  === 0) return null

        return this.measureParser.setScope(scope).get()
    }

    public getRooms()
    {
        const rooms = [] as string[]
        for (const column of this.columns) {
            const { zone, room } = column
            if (zone === this.name && room !== 'Tout') {
                rooms.push(room)
            }
        }
        const result = [...new Set(rooms)].map(name => {
            const room = new RoomParser(name, this, 'zone')
            return room.get()
        })
        return result.length > 0 ? result : undefined
    }
}