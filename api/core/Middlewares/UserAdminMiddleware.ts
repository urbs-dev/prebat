import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserAdminMiddleware {

	public async handle({ session, response }: HttpContextContract, next: () => Promise<void>) {
		if (session?.roles?.USER_ADMIN || session?.roles?.GLOBAL_ADMIN) {
			return await next()
		}
		return response.status(412).send({ message: `Administrator role is required` })
	}
}