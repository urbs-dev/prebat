import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('measures', 'MeasuresController.index')

    Route.post('measures', 'MeasuresController.store')

    Route.put('measures:id', 'MeasuresController.update')

    Route.delete('measures:id', 'MeasuresController.destroy')

    Route.get('measures/test', 'MeasuresController.test')

}).namespace('App/Measures')