import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ScenariosModel from './ScenariosModel'
import OperationsModel from 'App/Operations/OperationsModel'

export default class ScenariosController 
{
   
    public async store({request, response }: HttpContextContract)
    {
        const scenario = request.all()
        if( scenario?.operation_id === undefined ) 
            return response.status(400).send({ message: 'operation_id is required' })

        if ( !await OperationsModel.find(scenario.operation_id) )
            return response.status(404).send({ message: 'Operation not found' })

        const result = await ScenariosModel.create(scenario)
        return response.send(result)
    }

    public async update({request, response }: HttpContextContract)
    {   
        const id = request.param('id')
        const scenario = request.all()

        const result = await ScenariosModel.find(id)
        
        if( !result )
            return response.status(404).send({ message: 'Scenario not found' })

        await result.merge(scenario).save()
        return response.send(scenario)
    }

    public async destroy({request, response }: HttpContextContract)
    {
        const id = request.param('id')
        const scenario = await ScenariosModel.find(id)

        if( !scenario )
            return response.status(404).send({ message: 'Scenario not found' })

        await scenario.delete()
        return response.send({ message: 'Scenario deleted' })
    }
}