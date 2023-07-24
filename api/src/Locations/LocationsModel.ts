import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class LocationsModel extends BaseModel
{
    public static table = 'locations'

    @column({ isPrimary: true })
    public id: string

    @column()
    public name: string

    @column()
    public nature: 'building' | 'zone' | 'room'

    @column()
    public abstract: string | null

    @column()
    public use: string

    @column()
    public use_typology: string

    @column()
    public shon: number

    @column()
    public su: number | null

    @column()
    public shab: number | null

    @column()
    public height: number | null

    @column()
    public constructive_system: string

    @column()
    public insulation_type: string | null

    @column()
    public building_insulation: string | null

    @column()
    public wall_insulation: string | null

    @column()
    public roof_insulation: string | null

    @column()
    public floor_insulation: string | null

    @column()
    public window_carpentry: string | null

    @column()
    public frame_carpentry: string | null

    @column()
    public heating: string

    @column()
    public hot_water: string

    @column()
    public airing: string

    @column()
    public refresher: string | null

    @column()
    public hot_emitter: string | null

    @column()
    public cold_emitter: string | null

    @column()
    public air_permeability: string | null

    @column()
    public air_permeability_network: string | null

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


    @column.dateTime({ columnName: 'created_at', autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

}