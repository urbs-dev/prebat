import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import BuildingsModel from 'App/Buildings/BuildingsModel'
import { v4 as uuidv4 } from 'uuid'

export default class OperationsModel extends BaseModel
{
	public static table = 'operations'
	public static selfAssignPrimaryKey = true

	@beforeCreate()
	public static async createUUID (model: OperationsModel) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

	@column()
	public title: string

	@column()
	public abstract: string | null

	@column()
	public program: string | null

	@column()
	public delivered_on: number | null

	@column()
	public contract_type: string | null

	@column()
	public engineering: string | null

	@column()
	public label: string | null

	@column()
	public climatic_zone: string | null

	@column()
	public air_permeability: string | null

	@column()
	public city_code: string | null

    @hasMany( () => BuildingsModel, { 
		foreignKey: 'operation_id', 
		localKey: 'id', 
		onQuery(query) { query.orderBy('title', 'asc') } 
	})
	public buildings: HasMany<typeof BuildingsModel>

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}