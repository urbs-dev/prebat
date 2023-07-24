import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Catalog from './Catalog'
import OperationsModel from './OperationsModel'
import { form } from './Form'

export default class OperationsController
{
    public async index({ response }: HttpContextContract)
    {
        const catalog = await Catalog.getTree()
        return response.send(catalog)
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
        const result = await OperationsModel.query().where('id', id).first()
        if (!result) return response.status(404).send({ message: 'Operation not found'})

        
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        const operation = await OperationsModel.find( request.param('id') )
        if (!operation) return response.status(404).send({ message: 'No operation found'})
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

    public async form( { response }: HttpContextContract)
    {
        return response.send(form)
    }
}