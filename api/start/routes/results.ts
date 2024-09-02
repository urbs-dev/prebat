import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('results', 'ResultsController.graph')

}).namespace('App/Results')