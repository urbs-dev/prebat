import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OperationsReport extends BaseSchema {
	protected tablename = 'operations_report'

	public async up () {
		this.schema.createTable(this.tablename, (column) => {
			column.uuid	    ( 'id'				).primary()
			column.string	( 'name'		    ).notNullable().unique() // Nom de l'opération *
			column.text		( 'abstract' 		) // Commentaire
            column.string   ( 'program'         ).defaultTo('PREBAT') // Nom du programme
            column.integer  ( 'delivered_on'    ) // Année de livraison
            column.string   ( 'contract_type'   ) // Type de maîtrise d'ouvrage
            column.string   ( 'engineering'     ) // Nature des travaux 
            column.string   ( 'label'           ) // Lavel / Certification
            column.string   ( 'climatic_zone'   ) // Zone climatique

            column.json    	( 'place'    		).defaultTo('{}') // Département, Région

			column.string	( 'use'						) // Destination d'usage *
			column.string	( 'use_typology'			) // Destination d'usage simplifiée
			column.float	( 'shon'					) // SHON
			column.float	( 'su'						) // SU
			column.float	( 'shab'					) // SHAB
			column.float	( 'height'					) // Hauteur du bâtiment
			column.string	( 'constructive_system'		) // Système constructif
			column.string	( 'insulation_type'			) // type isolation du bâtiment
			column.string	( 'building_insulation' 	) // Isolation du bâtiment
			column.string	( 'wall_insulation' 		) // Isolant murs
			column.string	( 'roof_insulation' 		) // Isolation toiture
			column.string	( 'floor_insulation' 		) // Isolation plancher
			column.string	( 'window_carpentry' 		) // Menuiserie - vitrage
			column.string	( 'frame_carpentry' 		) // Menuiserie - châssis
			column.string	( 'heating'					) // Chauffage de base
			column.string	( 'hot_water'				) // Eau chaude sanitaire
			column.string	( 'airing'					) // Ventilation
			column.string	( 'refresher'				) // Climatisation / Rafraichissement
			column.string	( 'hot_emitter'				) // Emetteurs chaud
			column.string	( 'cold_emitter'			) // Emetteurs froid
			column.float	( 'air_permeability'		) // Perméabilité à l'air de l'enveloppe
			column.float	( 'air_permeability_network') // Perméabilité à l'air des réseaux
			column.timestamps()
		})
	}

	public async down () {
		this.schema.dropTable(this.tablename)
	}
}

	