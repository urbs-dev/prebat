import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Documentations extends BaseSchema {
	protected tablename = 'documentations'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'						).primary()
			column.uuid		( 'operation_id'			).notNullable()
			column.string	( 'name'					)
			column.string   ( 'type'					)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	