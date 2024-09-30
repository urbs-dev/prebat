import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('operations', 'OperationsController.index')

    Route.get('operations/tree', 'OperationsController.tree')

    Route.get('operations/name/:prefix', 'OperationsController.getIndex').middleware('isUserAdmin')

    Route.get('operations/access/:name', 'OperationsController.checkAccess').middleware('isUserAdmin')

    Route.post('operations', 'OperationsController.store').middleware('isUserAdmin')

    Route.get('operations/:id', 'OperationsController.show').middleware('isUserAdmin')

    Route.put('operations/:id', 'OperationsController.update').middleware('isUserAdmin')

    Route.put('operations/:id/is-public', 'OperationsController.isPublic').middleware('isUserAdmin')

    Route.post('operations/:id/extract', 'OperationsController.extract')

    Route.delete('operations/:id', 'OperationsController.destroy').middleware('isUserAdmin')

}).namespace('App/Operations')