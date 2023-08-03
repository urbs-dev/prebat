import type Excel from 'exceljs'
import type ZoneParser from './ZoneParser'
import type BuildingParser from './BuildingParser'
import type { Column } from '../FileParser'
import type MeasuresParser from './MeasuresParser'

export default class RoomParser
{
    public sheet: Excel.Worksheet
    public name: string
    public timeStep: string
    public columns: Column[]
    public measureParser: MeasuresParser
    public zoneName: string
    public buildingName: string


    constructor(name: string, parser: ZoneParser | BuildingParser, parentType = 'zone')
    {
        this.sheet = parser.sheet
        this.columns = parser.columns
        this.measureParser = parser.measureParser
        this.name = name
        this.zoneName = parentType === 'zone' ? parser.name : 'Tout'  
        this.buildingName = parentType === 'zone' ? parser.buildingName : parser.name
    }

    public get()
    {
        return {
            name: this.name,
            ...this.getMeasures(),
        }
    }

    public getMeasures()
    {
        const scope = [] as number[]

        for (const column of this.columns) {
            const { x, room, zone, building } = column
            if (room === this.name && zone === this.zoneName && building === this.buildingName) {
                scope.push(x)
            }
        }
        if (scope.length  === 0) return null

        return this.measureParser.setScope(scope).get()
    }
}