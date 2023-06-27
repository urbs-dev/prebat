import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import jwt  from 'jsonwebtoken'

export default class AuthMiddleware {

	public async handle(ctx: HttpContextContract, next: () => Promise<void>) {

		if ( ctx.request.url().includes('/permalinks') ) {
			return await next()
		}

		// Bypass GeoServer
		const userAgent = ctx.request.header('user-agent')
		const isGeoserver = userAgent ? userAgent.includes('Java') : false
		if ( ctx.request.url().includes('/style/') && isGeoserver ) {
			return await next()
		}

		const cookie = ctx.request.cookiesList()?.jwt
		if ( !cookie ) {
			return ctx.response.status(412).send({ message: `Session token not found` })
		}

		jwt.verify(cookie, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				return ctx.response.status(412).send({ message: error })
			}
			ctx.user = decoded
		})
		await next()
	}
}