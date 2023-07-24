

import { query } from 'Config/pool'

export default class DataPersister
{
    public data: any
    public operation_id: string
    public building_id: string | null
    public zone_id: string | null
    public room_id: string | null
    private skeleton = ['created_at', 'operation_id', 'building_id', 'zone_id', 'room_id', 'parent_id']

    constructor(data: any) 
    {
        this.data = data
    }

    public async store()
    {
        await this.createColumnsIfNotExists()
        await this.persist()
    }

    public async createColumnsIfNotExists() 
    {
        const addColumns = Object.keys(this.data[0])
            .filter(column => this.skeleton.includes(column) === false)
            .map(column => `ADD COLUMN IF NOT EXISTS ${column} DOUBLE PRECISION`)
        await query(`--sql
            ALTER TABLE data 
                ${addColumns.join(', ')}
            ;
        `).exec()
    }

    public async persist()
    {
        const columns = Object.keys(this.data[0])
        const values = this.data.map(item => {
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

}