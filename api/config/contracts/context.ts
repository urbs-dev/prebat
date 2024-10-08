
declare module '@ioc:Adonis/Core/HttpContext' {

	interface HttpContextContract {
	  	session: {
			id: string,
			roles: {
				MAINTAINER: boolean,
				GLOBAL_ADMIN: boolean,
				USER_ADMIN: boolean,
				USER: boolean
			},
			group: {
				name: string
			}
			packs: string[],
			licenses: { [name: string]: { expired_at: string, is_valid: boolean } },
		},
		token: string,
	}
}