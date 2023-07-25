import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'
import { getClimaticZone } from './climat'
import OperationPersister from 'App/Measures/IO/Persisters/OperationPersister'

export default class OperationsController
{
    public async index({ response }: HttpContextContract)
    {
        const tree = await OperationsTree.all()
        return response.send(tree)
    }

    public async store({request, response }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        const result = await OperationsModel.create(data)
        return response.send(result)
    }

    public async show({ request, response }: HttpContextContract)
    {
        const id = request.param('id')
        const tree = await OperationsTree.find(id)
        if (!tree) return response.status(404).send({ message: 'Operation not found'})
        return response.send(tree)
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        const operation = await OperationsModel.find( request.param('id') )
        if (!operation) return response.status(404).send({ message: 'Operation not found'})

        if (data?.place?.department_code) {
            data.climatic_zone = getClimaticZone(data.place.department_code)
        }
        operation.merge(data)
        const result =  await operation.save()
        return response.send(result)
    }

    public async destroy({ request, response }: HttpContextContract)
    {
        const result = OperationPersister.drop(request.param('id'))
        return response.send(result)
    }
}