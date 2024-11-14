import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { sessionAsPrivilege } from 'Core/utils'

export default class UserAdminMiddleware {

	public async handle({ session, response }: HttpContextContract, next: () => Promise<void>) {
		if (sessionAsPrivilege(session)) {
			return await next()
		}
		return response.status(412).send({ message: `Administrator role is required` })
	}
}