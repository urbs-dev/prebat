import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Measures extends BaseSchema {
	protected tablename = 'measures'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'				).primary()
			column.string	( 'columname'		).notNullable()
			column.string	( 'type' 		    ).defaultTo('NUMERIC')
			column.string	( 'title'			).notNullable()
			column.string   ( 'parameters'		)
			column.string   ( 'typology'		)
			column.string   ( 'statement'		)
			column.string   ( 'unit'			)
			column.string   ( 'sensor'			)
			column.string  	( 'address'        	)
			column.integer 	( 'x'        		)
			column.uuid		( 'operation_id'	)
			column.uuid		( 'building_id'		)
			column.uuid		( 'zone_id'			)
			column.uuid		( 'room_id'			)
			column.uuid		( 'parent_id'		)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	