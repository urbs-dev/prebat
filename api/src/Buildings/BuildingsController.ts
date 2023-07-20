import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BuildingsModel from './BuildingsModel'

export default class BuildingsController {

    public async index({ response }: HttpContextContract)
    {
        return response.send([])
    }

    public async store({request, response }: HttpContextContract)
    {
        const data = request.body() as BuildingsModel
        const result = await BuildingsModel.create(data)
        return response.send(result)
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as BuildingsModel
        const building = await BuildingsModel.find( request.param('id') )
        if (!building) return response.status(404).send({ message: 'No building found'})
        building.merge(data)
        const result =  await building.save()
        return response.send(result)
    }
}
