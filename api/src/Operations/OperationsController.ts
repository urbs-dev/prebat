import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'
import ReportsModel from 'App/Reports/ReportsModel'
import { getClimaticZone } from './climat'
import OperationsManager from './OperationsManager'
import OperationsIO from './OperationsIO'

export default class OperationsController
{
    public async index({ session, response }: HttpContextContract)
    {
        const operations = await OperationsModel.query()
            .preload('report')
            .preload('measures')
            .whereIn('is_public', session ? [ true , false ] : [ true ])
        return response.send(operations)
    }

    public async tree({ response }: HttpContextContract)
    {
        const tree = await OperationsTree.all()
        return response.send(tree)
    }

    public async store({ request, response, session }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        const operation = await OperationsModel.query()
            .where('name', data.name)
            .first()
            
        if (operation)
        {
            if (!session?.roles?.USER_ADMIN || !session?.roles?.GLOBAL_ADMIN)
            {
                if (operation?.owner != session.id) return response.send({ error: "Acces denied" })
            }
            await OperationsManager.drop(operation.id)
        }
        else data.owner = session.id
        
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

    public async getIndex({ request, response }: HttpContextContract)
    {
        const prefix = request.param('prefix')
        
        const operations = await OperationsModel.query()
        .where('name','LIKE', `${prefix}%` )
        
        return response.send({ index:  operations.length + 1 })
    }

    public async checkAccess({session, request, response }: HttpContextContract)
    {
        const name = request.param('name')
        const operation = await OperationsModel.query()
            .where('name', name)
            .first()
        if(!operation) return response.send({ access: true })
        if (operation.owner === session.id) return response.send({ access: true })
        return response.send({ error: 'Operation already exists', access: true}) // TODO: check access when we store uploder
    }
}