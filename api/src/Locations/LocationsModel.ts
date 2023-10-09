import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import MeasuresModel from 'App/Measures/MeasuresModel'
import ReportsModel from 'App/Reports/ReportsModel'

export default class LocationsModel extends BaseModel
{
    public static table = 'locations'

    @column({ isPrimary: true })
    public id: string

    @column()
    public name: string

    @column()
    public path: string

    @column()
    public nature: 'building' | 'zone' | 'room'

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

    @hasMany( () => LocationsModel, { foreignKey: 'parent_id', localKey: 'id' })
    public locations: HasMany<typeof LocationsModel>

    @hasMany( () => MeasuresModel, { foreignKey: 'parent_id', localKey: 'id'})
    public measures: HasMany<typeof MeasuresModel>

	@belongsTo( () => ReportsModel, { 
		onQuery(query) { query.whereNotNull('path') }, 
		foreignKey: 'path',
		localKey: 'path'
	})
    public report: BelongsTo<typeof ReportsModel>

    @column.dateTime({ columnName: 'created_at', autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

}