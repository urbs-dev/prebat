import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class MeasuresModel extends BaseModel 
{
	public static table = 'measures'
	
	@beforeCreate() public static async createUUID (model: MeasuresModel) { model.id = uuidv4() }
	@column({ isPrimary: true }) public id: string

	@column() public columname: 				string
	@column() public type:						string
	@column() public title:						string // Nom

	// Usage
	@column() public parameters:				string // Usage
	@column() public typology:					string // Sous-usage

	//Sensor
	@column() public sensor:					string // Capteur
	@column() public statement:					string // Grandeur  ???
	@column() public unit:						string // Unité de mesure
	
	// Precision
	@column() public address:					string // Adresse
	@column() public x:			 				number 

	// System
	@column() public system_category:  			string // Catégorie de système
	@column() public system:					string // Systeme

	// Precision
	@column() public bounds: 					{ min: number, max: number } // Domaine de mesure
	@column() public agregate:					string // Agrégati
	@column() public season_time:				string // Prise en compte de l'heure d'été/hiver
	@column() public precision:					number | null // Précision
	@column() public significant_precision:		number | null // Nombre de chiffres significatifs
	@column() public sensor_mark:				string | null // Marque de référence du capteur
	@column() public quality:					string | null // Qualité
	@column() public comment:					string | null // Commentaire
	
	// Calcul
	@column() public is_computed:				boolean // Formule
	@column() public calculation:				string | null // Grandeur à partir du calcul

	@column() public operation_id:	string | null
	@column() public building_id:	string | null
	@column() public zone_id:		string | null
	@column() public room_id:		string | null
	@column() public parent_id:		string | null
	
	@column.dateTime({ columnName: 'created_at', autoCreate: true }) 
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true }) 
	public updatedAt: DateTime
}