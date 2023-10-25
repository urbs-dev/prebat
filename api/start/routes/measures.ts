import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {

    Route.get('measures', 'MeasuresController.index').middleware('isUserAdmin')

    Route.get('measures/test', 'MeasuresController.test').middleware('isUserAdmin')

    Route.post('measures/sequence', 'MeasuresController.sequence').middleware('isUserAdmin')

    Route.post('measures', 'MeasuresController.store').middleware('isUserAdmin')

    Route.post('measures/eval', 'MeasuresController.eval').middleware('isUserAdmin')

    Route.put('measures/:id', 'MeasuresController.update').middleware('isUserAdmin')

    Route.delete('measures/:id', 'MeasuresController.destroy').middleware('isUserAdmin')


}).namespace('App/Measures')