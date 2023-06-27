import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SetupExtensions extends BaseSchema {

	public up() {
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "unaccent"')
		this.schema.raw('CREATE EXTENSION IF NOT EXISTS "postgis"')
	}

	public down() {
		
	}

}
