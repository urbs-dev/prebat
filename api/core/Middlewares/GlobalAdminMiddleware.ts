import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GlobalAdminMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

		const isGlobalAdmin = ctx?.user?.roles?.GLOBAL_ADMIN
		if ( !isGlobalAdmin ) {
			return ctx.response.status(412).send({ message: `Global Administrator role is required` })
		}
		await next()
	}
}