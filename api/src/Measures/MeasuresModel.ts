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

	@column()
	public columname: string

	@column()
	public type: string

	@column()
	public title: string

	@column()
	public abstract: string | null

	@column()
	public unit: string | null

	@column()
	public icon: string | null

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}