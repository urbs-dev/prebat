import Env from '@ioc:Adonis/Core/Env'
import pg from 'pg'

const PREBAT_DB = new pg.Pool({
    database: 'PREBAT',
    host: Env.get('DB_HOST'),
    port: Env.get('DB_PORT'),
    user: Env.get('DB_USER'),
    password: Env.get('DB_PASSWORD', ''),
    max: 100,
    idleTimeoutMillis: 30000,
})

const DATA_DB = new pg.Pool({
    database: 'DATA',
    host: Env.get('DB_HOST'),
    port: Env.get('DB_PORT'),
    user: Env.get('DB_USER'),
    password: Env.get('DB_PASSWORD', ''),
    max: 100,
    idleTimeoutMillis: 30000,
})

export default (dbname: string) => {
    if (dbname === 'PREBAT') {
        return PREBAT_DB
    }
    else {
        return DATA_DB
    }
}



export const query = (sql: string, dbname: 'DATA' | 'PREBAT' = 'PREBAT') => {
    return new Statement(sql, dbname)
}

class Statement
{
    private sql: string
    private db: any
    private try = true

    constructor(sql: string, dbname: 'DATA' | 'PREBAT' = 'PREBAT')
    {
        this.sql = sql
        this.db = dbname === 'DATA' ? DATA_DB : PREBAT_DB
    }

    public async all(statement: number|null = null)
    {
        const result = await this.exec()
        if (statement !== null) {
            return result[statement]
        }
        return result.rows
    }

    public async first(statement: number|null = null)
    {
        const result = await this.exec()
        if (statement !== null) {
            return result[statement]
        }
        return result.rows[0]
    }

    public noCatch()
    {
        this.try = false 
        return this
    }

    public async exec()
    {
        if (this.try === false) {
            return await this.db.query(this.sql)
        }
        try {
            return await this.db.query(this.sql)
        } catch (error) {
            return ({ error: error.stack.split(' at ')[0].replace('error: ', '') })
        }
    }
}
