import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scenarios extends BaseSchema {
	protected tablename = 'scenarios'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'						).primary()
			column.string	( 'nature'		    		).defaultTo('occupation')
			column.uuid		( 'operation_id'			).notNullable()
			column.string	( 'name'					)
			column.string   ( 'type'					).defaultTo('hourly')
			column.json    	( 'data'					)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	