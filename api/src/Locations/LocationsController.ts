import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LocationsModel from './LocationsModel'

export default class LocationsController 
{
    public async index({ response }: HttpContextContract)
    {
        return response.send([])
    }

    public async store({request, response }: HttpContextContract)
    {
        const data = request.body() as LocationsModel[]
        const result = await LocationsModel.createMany(data)
        return response.send(result)
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as LocationsModel
        const building = await LocationsModel.find( request.param('id') )
        if (!building) return response.status(404).send({ message: 'No building found'})
        building.merge(data)
        const result =  await building.save()
        return response.send(result)
    }
}
