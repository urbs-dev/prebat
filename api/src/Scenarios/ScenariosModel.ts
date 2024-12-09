import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class ScenariosModel extends BaseModel
{
    public static table = 'scenarios'
    
	@beforeCreate()
	public static async createUUID (model: ScenariosModel ) { model.id = uuidv4() }

    @column({ isPrimary: true })
    public id: string

    @column()
    public operation_id: string;

    @column()
    public nature: string = 'occupation';

    @column()
    public name?: string | null;
    
    @column()
    public description?: string | null;

    @column()
    public type: string = 'hourly';

    @column()
    public data: boolean[][] | boolean[];


	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}