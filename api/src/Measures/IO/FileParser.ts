import type Excel from 'exceljs'
import BuildingParser from './Parsers/BuildingParser'
import MeasuresParser from './Parsers/MeasuresParser'
import { DateTime } from 'luxon'


export type Column = { x: number, building: string, zone: string, room: string }

export default class FileParser
{
    public sheet: Excel.Worksheet
    public buildingCount: number
    public name: string
    public sites: { buildings: string[], zones: string[], rooms: string[] } 
    public columns: Column[]
    public rowCount: number
    public measureParser: MeasuresParser

    constructor(sheet: Excel.Worksheet, isPreview = true)
    {
        this.sheet = sheet
        this.columns = this.getColumns()
        this.sites = this.getSites()
        this.name = this.sheet.getRow(1).getCell(4).value as string
        this.buildingCount = this.getBuildingCount()
        this.rowCount = this.sheet.rowCount - 23
        this.measureParser = new MeasuresParser(this.sheet, isPreview)
    }

    public get()
    {
        return {
            name: this.sheet.getRow(1).getCell(4).value as string,
            time_step: this.getTimeStep(),
            sites: this.sites,
            row_count: this.rowCount,
            building_count: this.getBuildingCount(),
            ...this.getMeasures(),
            buildings: this.getBuildings(),
        }
    }

    public getBuildingCount() 
    {
        const { buildings } = this.sites
        if (buildings.length === 1 && buildings[0] === 'Tout') {
            return 1
        }
        return buildings.filter(building => building !== 'Tout').length
    }

    public getMeasures()
    {
        const scope = [] as number[]

        for (const column of this.columns) {
            const { x, building, zone, room } = column
            if (building + zone + room === 'ToutToutTout' && this.buildingCount > 1) {
                scope.push(x)
            }
        }
        if (scope.length  === 0) return null

        return this.measureParser.setScope(scope).get()
    }

    public getBuildings()
    {
        return this.sites.buildings.map( name => {
            const building = new BuildingParser(name as string, this) 
            return building.get()
        })
    }

    public getSites()
    {
        return {
            buildings: [
                    ...new Set(this.columns.map(column => column.building))
                ].filter(Boolean) as string[],
            zones: [
                    ...new Set(this.columns.map(column => column.zone))
                ].filter(Boolean)
                 .filter(item => item !== 'Tout') as string[], 
            rooms: [
                    ...new Set(this.columns.map(column => column.room))
                ].filter(Boolean)
                 .filter(item => item !== 'Tout') as string[], 
        }
    }

    public getColumns() 
    {
        const header = Array.from({ length: this.sheet.lastColumn.number - 4 }, (_, i) => 4 + i)
        return header.map(x => {
            return {
                x: x,
                building: this.sheet.getRow(2).getCell(x).value as string,
                zone: this.sheet.getRow(3).getCell(x).value as string,
                room: this.sheet.getRow(4).getCell(x).value as string
            }
        })
    }

    public getTimeStep()
    {
        const first  = String(this.sheet.getRow(24).getCell(3).value as string)
        const second = String(this.sheet.getRow(25).getCell(3).value as string)
        const start = DateTime.fromISO(new Date(first).toISOString())
        const end = DateTime.fromISO(new Date(second).toISOString())
        const diff = end.diff(start, ['seconds'])
        return diff.toObject().seconds
    }
}

