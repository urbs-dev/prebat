import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LocationsModel from './LocationsModel'
import ReportsModel from 'App/Reports/ReportsModel'

export default class LocationsController 
{
    public async index({ response }: HttpContextContract)
    {
        return response.send([])
    }

    public async show({ request, response }: HttpContextContract)
    {
        const id = request.param('id')
        const location = await LocationsModel.query()
            .where('id', id)
            .preload('report')
            .preload('measures')
            .first()
        if (!location) {
            return response.send({})
        }
        return response.send(location)
    }

    public async store({request, response }: HttpContextContract)
    {
        const data = request.body() as LocationsModel[]
        const result = await LocationsModel.createMany(data)
        return response.send(result)
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as ReportsModel
        const location = await ReportsModel.query()
            .where('path', data.path )
            .andWhereNotNull('path')
            .first()

        if (!location) {
            const result = await ReportsModel.create(data)
            return response.send(result)
        }
        location.merge(data)
        const result =  await location.save()
        return response.send(result)
    }
}
