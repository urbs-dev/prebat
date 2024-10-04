import Route from '@ioc:Adonis/Core/Route'
import './routes/locations'
import './routes/operations'
import './routes/measures'
import './routes/results'
import './routes/scenarios'

Route.get('/', async () => {
	return { hello: 'Welcome to PREBAT API' }
})

Route.get('/swagger', async ({ view }) => {
	const specUrl = './swagger.json'
	return view.render('swagger', { specUrl })
})
