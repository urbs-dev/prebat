import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('measures', 'MeasuresController.index')

    Route.get('measures/test', 'MeasuresController.test')

    Route.post('measures/sequence', 'MeasuresController.sequence')

    Route.post('measures', 'MeasuresController.store')

    Route.post('measures/eval', 'MeasuresController.eval')

    Route.put('measures/:id', 'MeasuresController.update')

    Route.delete('measures/:id', 'MeasuresController.destroy')


}).namespace('App/Measures')