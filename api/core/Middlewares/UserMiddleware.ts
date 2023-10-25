import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt  from 'jsonwebtoken'

export default class AuthMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

		const cookie = ctx.request.cookiesList()?.jwt
		if ( cookie ) {
			jwt.verify(cookie, process.env.JWT_SECRET, (error, decoded) => {
				if (!error) {
					ctx.user = decoded
				}
			})
		}
		await next()
	}
}