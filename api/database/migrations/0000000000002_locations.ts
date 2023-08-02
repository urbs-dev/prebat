import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
	protected tablename = 'locations'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid		( 'id'						).primary()
			column.string	( 'name'		    		)
			column.string	( 'path'		    		)
			column.string	( 'nature'		    		)
			column.text		( 'abstract' 				)
			column.string	( 'use'						)
			column.string	( 'use_typology'			)
			column.float	( 'shon'					)
			column.float	( 'su'						)
			column.float	( 'shab'					)
			column.float	( 'height'					)
			column.string	( 'constructive_system'		)
			column.string	( 'insulation_type'			)
			column.string	( 'building_insulation' 	)
			column.string	( 'wall_insulation' 		)
			column.string	( 'roof_insulation' 		)
			column.string	( 'floor_insulation' 		)
			column.string	( 'window_carpentry' 		)
			column.string	( 'frame_carpentry' 		)
			column.string	( 'heating'					)
			column.string	( 'hot_water'				)
			column.string	( 'airing'					)
			column.string	( 'refresher'				)
			column.string	( 'hot_emitter'				)
			column.string	( 'cold_emitter'			)
			column.string	( 'air_permeability'		)
			column.string	( 'air_permeability_network')
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

	