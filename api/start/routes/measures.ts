import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('measures', 'MeasuresController.index')
    
    Route.post('measures', 'MeasuresController.store')

}).namespace('App/Measures')