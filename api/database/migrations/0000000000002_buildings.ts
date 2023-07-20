import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Buildings extends BaseSchema {
	protected tablename = 'buildings'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'					).primary()
			column.string	( 'title'		    	)
			column.text		( 'abstract' 			)
			column.string	( 'use'					).notNullable()
			column.string	( 'use_typology'		)
			column.float	( 'shon'				).notNullable()
			column.float	( 'su'					)
			column.float	( 'shab'				)
			column.float	( 'height'				)
			column.string	( 'constructive_system'	).notNullable()
			column.string	( 'insulation_type'		)
			column.string	( 'building_insulation' )
			column.string	( 'wall_insulation' 	)
			column.string	( 'roof_insulation' 	)
			column.string	( 'floor_insulation' 	)
			column.string	( 'window_carpentry' 	)
			column.string	( 'frame_carpentry' 	)
			column.string	( 'heating'				).notNullable()
			column.string	( 'hot_water'			).notNullable()
			column.string	( 'airing'				).notNullable()
			column.string	( 'refresher'			)
			column.string	( 'hot_emitter'			)
			column.string	( 'cold_emitter'		)
			column.string	( 'air_permeability'	)
			column.uuid		( 'parent_id'			)
			column.uuid		( 'operation_id'		)
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	