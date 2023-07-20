import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Operations extends BaseSchema {
	protected tablename = 'operations'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid	    ( 'id'				).primary()
			column.string	( 'title'		    ).notNullable().unique()
			column.text		( 'abstract' 		)
            column.string   ( 'program'         )
            column.integer  ( 'delivered_on'    )
            column.string   ( 'contract_type'   )
            column.string   ( 'engineering'     )
            column.string   ( 'label'           )
            column.string   ( 'climatic_zone'   )
			column.string	( 'air_permeability')
            column.string   ( 'city_code'    	)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	