import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ReportsModel extends BaseModel
{
	public static table = 'scenarios'
	public static selfAssignPrimaryKey = true

    @column({ isPrimary: true })
    public id: string

    @column()
    public operationId: string;

    @column()
    public nature: string = 'occupation';

    @column()
    public name?: string | null;

    @column()
    public type: string = 'hourly';

    @column()
    public data: boolean[][] | boolean[];

	

	@column.dateTime({ columnName: 'created_at', autoCreate: true })
	public createdAt: DateTime

	@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
	public updatedAt: DateTime
}