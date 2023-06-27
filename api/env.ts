import { config } from 'dotenv'

const result = config({ path: '../../.env'})
if (result.error) {
	config({ path: '../../../.env'})
}

import Env from '@ioc:Adonis/Core/Env'

export default Env.rules({
	HOST: Env.schema.string({ format: 'host' }),
	PORT: Env.schema.number(),
	APP_KEY: Env.schema.string(),
  	DRIVE_DISK: Env.schema.enum(['local'] as const),
	PROJ_DEBUG: Env.schema.number(),
	NODE_ENV: Env.schema.enum(['development', 'production', 'testing'] as const),

	DB_HOST: Env.schema.string({ format: 'host' }),
	DB_PORT: Env.schema.number(),
	DB_USER: Env.schema.string(),
	DB_PASSWORD: Env.schema.string.optional(),

	GEOSERVER_USER: Env.schema.string(),
	GEOSERVER_PASSWORD: Env.schema.string(),

	BASE_URL: Env.schema.string(),
})
