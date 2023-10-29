import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'
import ReportsModel from 'App/Reports/ReportsModel'
import { getClimaticZone } from './climat'
import OperationsManager from './OperationsManager'
import OperationsIO from './OperationsIO'

export default class OperationsController
{
    public async index({ user, response }: HttpContextContract)
    {
        const operations = await OperationsModel.query()
            .preload('report')
            .preload('measures')
            .whereIn('is_public', user ? [ true , false ] : [ true ])
        return response.send(operations)
    }

    public async tree({ response }: HttpContextContract)
    {
        const tree = await OperationsTree.all()
        return response.send(tree)
    }

    public async store({ request, response }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        await OperationsManager.dropIfExists(data.name)
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

    public async isPublic({ request, response }: HttpContextContract)
    {
        const isPublic = request.qs().value === 'true' ? true : false
        const operation = await OperationsModel.query()
            .where('id', request.param('id'))
            .first()
        if (!operation) {
            return response.status(404).send({ message: 'No operation found'})
        }
        operation.is_public = isPublic
        await operation.save()
        return response.send({ message: true })
    }

    public async extract({ request, response }: HttpContextContract)
    {
        const id = request.param('id')

        if (id === 'results') {
            const io = new OperationsIO()
            const url = await io.getResults()
            return response.send({ url })
        }

        const operation = await OperationsModel.query()
            .where('id', request.param('id'))
            .preload('report')
            .first()
        if (!operation) {
            return response.status(404).send({ message: 'No operation found'})
        }
        const io = new OperationsIO()
        const url = await io.extract(operation)
        return response.send({ url })
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as ReportsModel
        const operation = await ReportsModel.query()
            .where('name', data.name )
            .andWhereNull('path')
            .first()
        if (data?.place?.department_code) {
            data.climatic_zone = getClimaticZone(data.place.department_code)
        }

        if (!operation) {
            const result = await ReportsModel.create(data)
            return response.send(result)
        }
        operation.merge(data)
        const result =  await operation.save()
        return response.send(result)
    }

    public async destroy({ request, response }: HttpContextContract)
    {
        await OperationsManager.drop(request.param('id'))
        return response.send({ message: 'dropped'})
    }
}