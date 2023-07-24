import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'

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
        operation.merge(data)
        const result =  await operation.save()
        return response.send(result)
    }

    public async destroy({ request, response }: HttpContextContract)
    {
        const result = await OperationsModel.query()
            .where('id', request.param('id'))
            .delete()
        return response.send(result)
    }
}