import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.post('documentations', 'DocumentationsController.store')

    Route.delete('documentations/:id', 'DocumentationsController.destroy')

    Route.get('documentations/:id', 'DocumentationsController.extract')

}).namespace('App/Documentations')