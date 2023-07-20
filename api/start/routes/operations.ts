import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('operations', 'OperationsController.index')

    Route.get('operations/form', 'OperationsController.form')

    Route.post('operations', 'OperationsController.store')

    Route.delete('operations/:id', 'OperationsController.destroy')

}).namespace('App/Operations')