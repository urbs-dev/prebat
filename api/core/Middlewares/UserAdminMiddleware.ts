import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserAdminMiddleware {

	public async handle({ user, response }: HttpContextContract, next: () => Promise<void>) {
		if (user?.roles?.USER_ADMIN || user?.roles?.GLOBAL_ADMIN) {
			return await next()
		}
		return response.status(412).send({ message: `Administrator role is required` })
	}
}