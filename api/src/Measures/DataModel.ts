import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class MeasuresModel extends BaseModel
{
	public static table = 'data'

	@beforeCreate()
	public static async createUUID (model: MeasuresModel) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

	@column()
	public created_at: DateTime

	@column()
	public operation_id: string | null

	@column()
	public building_id: string | null

	@column()
	public zone_id: string | null

	@column()
	public room_id: string | null

	@column()
	public parent_id: string | null
}