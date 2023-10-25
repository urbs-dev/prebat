import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('locations', 'LocationsController.index').middleware('isUserAdmin')

    Route.get('locations/:id', 'LocationsController.show').middleware('isUserAdmin')

    Route.post('locations', 'LocationsController.store').middleware('isUserAdmin')

    Route.put('locations/:id', 'LocationsController.update').middleware('isUserAdmin')

}).namespace('App/Locations')