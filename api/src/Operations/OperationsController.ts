import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'
import OperationsReportModel from './OperationsReportModel'
import { getClimaticZone } from './climat'
import OperationsManager from './OperationsManager'

export default class OperationsController
{
    public async index({ response }: HttpContextContract)
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

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as OperationsReportModel
        const operation = await OperationsReportModel.query()
            .where('name', data.name )
            .first()
        if (data?.place?.department_code) {
            data.climatic_zone = getClimaticZone(data.place.department_code)
        }

        if (!operation) {
            const result = await OperationsReportModel.create(data)
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