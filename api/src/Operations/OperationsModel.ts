import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import ReportsModel from 'App/Reports/ReportsModel'
import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'

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
	public is_public: boolean

	@column()
	public filename: string

    @hasMany( () => LocationsModel, { 
		foreignKey: 'parent_id', 
		localKey: 'id', 
		onQuery(query) { query.orderBy('name', 'asc') } 
	})
	public locations: HasMany<typeof LocationsModel>

    @hasMany( () => MeasuresModel, { 
		foreignKey: 'operation_id', 
		localKey: 'id', 
		onQuery(query) { query.orderBy('typology', 'asc') } 
	})
	public measures: HasMany<typeof MeasuresModel>

	@hasOne( () => ReportsModel, { 
		onQuery(query) { query.whereNull('path') }, 
		foreignKey: 'name', 
		localKey: 'name'
	})
	public report: HasOne<typeof ReportsModel>

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}