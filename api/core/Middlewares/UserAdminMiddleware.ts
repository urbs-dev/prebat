import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserAdminMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
		if (ctx?.user?.roles?.USER_ADMIN || ctx?.user?.roles?.GLOBAL_ADMIN) {
			return await next()
		}
		return ctx.response.status(412).send({ message: `Administrator role is required` })
		
	}
}