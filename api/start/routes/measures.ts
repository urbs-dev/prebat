import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('measures', 'MeasuresController.index')

    Route.post('measures/store', 'MeasuresController.store')

    Route.post('measures/eval', 'MeasuresController.eval')

    Route.put('measures/:id', 'MeasuresController.update')

    Route.delete('measures/:id', 'MeasuresController.destroy')


}).namespace('App/Measures')