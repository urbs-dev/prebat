import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class MeasuresModel extends BaseModel 
{
	public static table = 'measures'

	@beforeCreate()
	public static async createUUID (model: MeasuresModel) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

	@column() public columname: string
	@column() public type: string
	@column() public title: string
	@column() public parameters: string
	@column() public typology: string
	@column() public statement: string
	@column() public unit: string
	@column() public sensor: string
	@column() public address: string
	@column() public x: number

	// ajouter les entrées du formulaire

	@column() public operation_id: string | null
	@column() public building_id: string | null
	@column() public zone_id: string | null
	@column() public room_id: string | null
	@column() public parent_id: string | null

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}