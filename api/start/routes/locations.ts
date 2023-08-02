import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('locations', 'LocationsController.index')

    Route.post('locations', 'LocationsController.store')

    Route.put('locations/:id', 'LocationsController.update')

}).namespace('App/Locations')