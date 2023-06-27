import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class MeasuresModel extends BaseModel {

	public static table = 'measures'

	@beforeCreate()
	public static async createUUID (model: MeasuresModel) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

	@column()
	public tablename: string

	@column()
	public layername: string | null

	@column()
	public columname: string | null

	@column()
	public composite: string | null | string[]

	@column()
	public type: string | null

	@column()
	public title: string | null

	@column()
	public abstract: string | null

	@column()
	public granularity: string | null

	@column()
	public unit: string | null

	@column()
	public pack: string | null

	@column()
	public is_restricted: boolean

	@column()
	public article_url: string | null

	@column()
	public chart_type: string | null

	@column()
	public symbology: string | null

	@column()
	public bounds: any | number[]

	@column()
	public icon: string | null

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
	
}