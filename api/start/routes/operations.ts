import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('operations', 'OperationsController.index')

    Route.post('operations', 'OperationsController.store')

    Route.get('operations/:id', 'OperationsController.show')

    Route.put('operations/:id', 'OperationsController.update')

    Route.delete('operations/:id', 'OperationsController.destroy')

}).namespace('App/Operations')