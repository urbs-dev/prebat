import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.post('scenarios', 'ScenariosController.store').middleware('isUserAdmin')
    Route.put('scenarios/:id', 'ScenariosController.update').middleware('isUserAdmin')
    Route.delete('scenarios/:id', 'ScenariosController.destroy').middleware('isUserAdmin')

}).namespace('App/Scenarios')