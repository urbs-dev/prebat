declare module '@ioc:Adonis/Core/HttpContext' {
  
	interface HttpContextContract {
	  	user: {
			id: string,
			roles: {
				GLOBAL_ADMIN: boolean,
				USER_ADMIN: boolean,
				USER: boolean
			},
			group_id: string,
			packs: string[],
			territory_id: null | string
		}
	}

}