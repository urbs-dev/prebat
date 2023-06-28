import Env from '@ioc:Adonis/Core/Env'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
	connection: 'default',
	connections: {
		default: {
			client: 'pg',
			connection: {
				host: Env.get('DB_HOST'),
				port: Env.get('DB_PORT'),
				user: Env.get('DB_USER'),
				password: Env.get('DB_PASSWORD', ''),
				database: 'PREBAT',
			},
			migrations: {
				naturalSort: true,
			},
			healthCheck: false,
			debug: false,
		},

	}
}

export default databaseConfig
