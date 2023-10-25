import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Operations extends BaseSchema {
	protected tablename = 'operations'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid	    ( 'id'				).primary()
			column.string	( 'name'		    ).notNullable().unique()
			column.integer	( 'time_step'		)
			column.json		( 'sites'			)
			column.integer	( 'building_count'	)
			column.integer	( 'row_count'		)
			column.boolean	( 'is_public'		).defaultTo(false)
			column.string	( 'filename'		)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	