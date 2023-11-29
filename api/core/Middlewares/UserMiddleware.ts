import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class AuthMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

		await next()

		const token = ctx.request.cookiesList()?.token
		if ( token ) {
			ctx.token = token
			const session = await Redis.get(token)
			if (session) {
				ctx.session = JSON.parse(session)
			}
		}
		await next()
	}
}