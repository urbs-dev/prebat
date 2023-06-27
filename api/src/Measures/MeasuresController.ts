import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MeasuresController {

    public async index({ response }: HttpContextContract)
    {
        return response.send([])
    }

    public async store({ request, response }: HttpContextContract)
    {
        const data = request.body()
        return response.send(data)
    }

}
