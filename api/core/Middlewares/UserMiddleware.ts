import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class AuthMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

		await next()

		const token = ctx.request.cookiesList()?.token
		if ( token ) {
			ctx.token = token
			const exists = await Redis.get(token)
			if (exists) {
				const session = JSON.parse(exists)
				if (session.roles.GLOBAL_ADMIN || session.group.name === 'prebat') {
					ctx.session = session
				}
			}
		}
		await next()
	}
}