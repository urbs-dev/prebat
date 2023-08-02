import MeasuresModel from '../MeasuresModel'
import type Excel from 'exceljs'
import { query } from 'Config/pool'

export default class FilePersister
{
    public measures: MeasuresModel[]
    public sheet: Excel.Worksheet
    private skeleton = ['created_at', 'operation_id', 'building_id', 'zone_id', 'room_id', 'parent_id']

    constructor(sheet: Excel.Worksheet, measures: MeasuresModel[])
    {
        this.sheet = sheet
        this.measures = measures
    }

    public async insert()
    {
        const result = await MeasuresModel.createMany(this.measures)
        const data = this.getData()
        await this.createColumnsIfNotExists(data)
        await this.persist(data)
        return result
    }

    public async createColumnsIfNotExists(data: any[]) 
    {
        const addColumns = Object.keys(data[0])
            .filter(column => this.skeleton.includes(column) === false)
            .map(column => `ADD COLUMN IF NOT EXISTS ${column} DOUBLE PRECISION`)
        await query(`--sql
            ALTER TABLE data 
                ${addColumns.join(', ')}
            ;
        `).exec()
    }

    public async persist(data: any[])
    {
        const columns = Object.keys(data[0])
        const values = data.map(item => {
            let list = [] as any[]
            for (const column of Object.keys(item)) {
                if (this.skeleton.includes(column)) {
                    list.push(`'${item[column]}'`)
                }
                else {
                    list.push(item[column])
                }
            }
            return '(' + list.join(', ') + ')'
        })
        await query(`--sql
            INSERT INTO data (${columns.join(', ')})
            VALUES ${values.join(', \n')}
        `).exec()
    }


    private getData()
    {
        const rows = this.sheet.getRows(24, this.sheet.rowCount - 23)
        if (!rows) return []

        const [ measure ] = this.measures

        return rows.map(row => {
            try {
                const data = {
                    created_at: new Date(String(row.getCell(3).value)).toISOString(),
                    parent_id: measure.parent_id,
                    operation_id: measure.parent_id,
                    building_id: measure.building_id,
                    zone_id: measure.zone_id,
                    room_id: measure.room_id
                }
                for (const measure of this.measures) {
                    data[measure.columname] = this.round(row.getCell(measure.x).value)
                }
                return data
            } catch (error) {
                throw Error(`Error while parsing data at row n°${row.number}: ` + error.message)
            }
        })
    }

    private round(value: Excel.CellValue)
    {
        if (typeof value === 'number') {
            return Math.round((value + Number.EPSILON) * 100) / 100
        }
        return Number(value)
    }
}