import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Scenarios extends BaseSchema {
	protected tablename = 'scenarios'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'						).primary()
			column.string	( 'nature'		    		).defaultTo('occupation')
			column.uuid		( 'operation_id'			)
			column.uuid		( 'building_id'				)
			column.uuid		( 'zone_id'					)
			column.uuid		( 'room_id'					)
			column.uuid		( 'parent_id'				)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	