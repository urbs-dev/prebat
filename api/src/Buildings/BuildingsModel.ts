import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BuildingsModel extends BaseModel 
{
	public static table = 'buildings'

	@column({ isPrimary: true })
	public id: string

	@column()
	public title: string

	@column()
	public abstract: string | null

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
	
}