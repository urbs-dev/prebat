import Route from '@ioc:Adonis/Core/Route'
import './routes/buildings'
import './routes/operations'
import './routes/measures'

Route.get('/', async () => {
	return { hello: 'Welcome to PREBAT API' }
})

Route.get('/swagger', async ({ view }) => {
	const specUrl = './swagger.json'
	return view.render('swagger', { specUrl })
})
