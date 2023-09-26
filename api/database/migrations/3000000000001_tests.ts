import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tests extends BaseSchema {
	protected tablename = 'tests'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'		).primary()
			column.string	( 'nature'	).defaultTo('consistency')
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	