import Server from '@ioc:Adonis/Core/Server'

Server.middleware.register([
	() => import('@ioc:Adonis/Core/BodyParser'),
	// () => import('Core/Middlewares/AuthMiddleware'),
])


Server.middleware.registerNamed({
	// isGlobalAdmin: 	() => import('Core/Middlewares/GlobalAdminMiddleware'),
	// isUserAdmin: 	() => import('Core/Middlewares/UserAdminMiddleware')
})
