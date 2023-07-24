import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SetupExtensions extends BaseSchema {

	public up() {
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "unaccent"')
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "postgis"')
		this.schema.raw(`
			CREATE TABLE data (
				id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
				operation_id UUID,
				building_id UUID,
				zone_id UUID,
				room_id UUID,
				parent_id UUID,
				year INTEGER,
				month INTEGER,
				created_at TIMESTAMP WITH TIME ZONE
			);
		`)
	}

	public down() {
		this.schema.raw(`
			DROP TABLE IF EXISTS data CASCADE
		`)
	}

}
