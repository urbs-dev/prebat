import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import LocationsModel from 'App/Locations/LocationsModel'

export default class OperationsModel extends BaseModel
{
	public static table = 'operations'
	public static selfAssignPrimaryKey = true

	@column({ isPrimary: true })
	public id: string

	@column()
	public name: string

	@column()
	public time_step: number

	@column()
	public sites: { buildings: string[], zones: string[], rooms: string[] }

	@column()
	public building_count: number

	@column()
	public row_count: number

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
	public place: { 
		city_code: string, name: string, department_code: string, 
		lat: number, lon: number, context: string, nature: string 
	}

    @hasMany( () => LocationsModel, { 
		foreignKey: 'parent_id', 
		localKey: 'id', 
		onQuery(query) { query.orderBy('name', 'asc') } 
	})
	public locations: HasMany<typeof LocationsModel>

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}