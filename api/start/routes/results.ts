import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('results', 'ResultsController.graph')
    Route.put('results/:id', 'ResultsController.update').middleware('isUserAdmin')

}).namespace('App/Results')