import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Measures extends BaseSchema {
	protected tablename = 'measures'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'				).primary()
			column.string	( 'columname'		).unique().notNullable()
			column.string	( 'type' 		    ).defaultTo('NUMERIC')
			column.string	( 'title'			).notNullable()
			column.text	    ( 'abstract'		)
			column.string	( 'unit'		    )
			column.text	    ( 'icon'	        )
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	