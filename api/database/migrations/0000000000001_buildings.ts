import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Buildings extends BaseSchema {
	protected tablename = 'buildings'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.string	( 'id'				).primary()
			column.string	( 'title'		    )
			column.text		( 'abstract' 		)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	