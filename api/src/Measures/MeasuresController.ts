import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MeasuresModel from './MeasuresModel'
import MeasuresIO from './MeasuresIO'
import Application from '@ioc:Adonis/Core/Application'


export default class MeasuresController 
{
    public async index({ response }: HttpContextContract)
    {
        const measures = await MeasuresModel.all()
        return response.send(measures)
    }

    public async eval({ request, response }: HttpContextContract)
    {
        const file = await this.import({ request, response } as HttpContextContract) as string

        try {
            const io = new MeasuresIO()
            await io.read(file)
            const result = io.parse()
            return response.send(result)
        } catch (error) {
            return response.send({ error: error })
        }
    }

    public async store({ request, response }: HttpContextContract)
    {
        const file = await this.import({ request, response } as HttpContextContract) as string

        try {
            const io = new MeasuresIO()
            await io.read(file)
            const result = await io.store()
            return response.send(result)
        } catch (error) {
            return response.send({ error: error })
        }
    }

    public async test({ response }: HttpContextContract)
    {
        const file = '20170626_BDD_0101.xlsx'

        const io = new MeasuresIO()
        await io.read(file)
        const result = io.sequence()
        return response.send(result)
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as MeasuresModel
        const id = request.param('id')
        const measure = await MeasuresModel.find(id)
        if (!measure) {
            return response.status(404).send({ message: 'measure not found'})
        }
        measure.merge(data)
        await measure.save()
        return response.send(measure)
    }

    public async destroy({ request, response }: HttpContextContract)
    {
        const id = request.param('id')
        const result = await MeasuresModel.query()
            .where('id', id)
            .delete()
        return response.send(result)
    }

    private async import({ request, response }: HttpContextContract)
    {
        const xlsx = request.file('xlsx')
        if (!xlsx) return response.status(412).send({ message: 'No file in request body'})
        if (!xlsx.isValid) return response.status(412).send(xlsx.errors)
        await xlsx.move(Application.appRoot + '/public/uploads/', { name: xlsx.clientName, overwrite: true })
        return xlsx.clientName
    }
}
