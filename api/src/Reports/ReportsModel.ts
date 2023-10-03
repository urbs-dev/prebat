import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class ReportsModel extends BaseModel
{
	public static table = 'reports'
	public static selfAssignPrimaryKey = true

	@beforeCreate()
	public static async createUUID (model: ReportsModel ) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

	@column()
	public name: string

	@column()
	public path: string

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
	public place: { 
		city_code: string, name: string, department_code: string, 
		lat: number, lon: number, context: string, nature: string 
	}

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}