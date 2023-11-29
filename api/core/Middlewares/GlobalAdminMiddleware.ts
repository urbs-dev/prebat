import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GlobalAdminMiddleware {

	public async handle({ session, response }: HttpContextContract, next: () => Promise<void>) {

		const isGlobalAdmin = session?.roles?.GLOBAL_ADMIN
		if ( !isGlobalAdmin ) {
			return response.status(412).send({ message: `Global Administrator role is required` })
		}
		await next()
	}
}