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
    if (dbname === 'PREBAT_DB') {
        return PREBAT_DB
    }
    else {
        return DATA_DB
    }
}

