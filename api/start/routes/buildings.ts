import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('buildings', 'BuildingsController.index')

    Route.post('buildings', 'BuildingsController.store')

}).namespace('App/Buildings')