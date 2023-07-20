import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('buildings', 'BuildingsController.index')

    Route.get('buildings/form', 'BuildingsController.form')

    Route.post('buildings', 'BuildingsController.store')

    Route.delete('buildings/:id', 'BuildingsController.destroy')

}).namespace('App/Buildings')