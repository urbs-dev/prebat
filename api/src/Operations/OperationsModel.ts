import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import ReportsModel from 'App/Reports/ReportsModel'
import DocumentationsModel from 'App/Documentations/DocumentationsModel'
import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import { v4 as uuidv4 } from 'uuid'
import ScenariosModel from 'App/Scenarios/ScenariosModel'
export default class OperationsModel extends BaseModel
{
	public static table = 'operations'
	public static selfAssignPrimaryKey = true

	@beforeCreate()
	public static async createUUID (model: OperationsModel ) { model.id = uuidv4() }

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
	public filename: string | null
	
	@column()
	public owner: string | null

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

	@hasMany( () => ScenariosModel, {
		foreignKey: 'operation_id',
		localKey: 'id',
		onQuery(query) { query.orderBy('name', 'asc') }
	})
	public scenarios: HasMany<typeof ScenariosModel>

	@hasMany( () => DocumentationsModel, {
		foreignKey: 'operation_id',
		localKey: 'id',
		onQuery(query) { query.orderBy('name', 'asc') }
	})
	public documentations: HasMany<typeof DocumentationsModel>


	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}