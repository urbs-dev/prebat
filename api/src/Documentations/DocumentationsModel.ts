import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate} from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'

export default class DocumentationsModel extends BaseModel
{
    public static table = 'documentations'

	@beforeCreate()
	public static async createUUID (model: DocumentationsModel ) { model.id = uuidv4() }

    @column({ isPrimary: true })
    public id: string

    @column()
    public name: string

    @column()
    public type: string

	@column()
	public operation_id: string | null

    @column.dateTime({ columnName: 'created_at', autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}