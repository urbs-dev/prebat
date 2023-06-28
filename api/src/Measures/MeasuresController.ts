import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MeasuresModel from './MeasuresModel'
import MeasuresIO from './MeasuresIO'


export default class MeasuresController 
{
    public async test({ response }: HttpContextContract)
    {
        const file = '20170626_BDD_401.xlsx'
        const io = new MeasuresIO()

        try {
            const sheet = await io.read(file)
            const result = await sheet.getData()
            return response.send(result)
        } catch (error) {
            return response.status(500).send({ message: String(error) })
        }

    }

    public async index({ response }: HttpContextContract)
    {
        const measures = await MeasuresModel.all()
        return response.send(measures)
    }

    public async store({ request, response }: HttpContextContract)
    {
        const measure = request.body() as MeasuresModel
        const result = await MeasuresModel.create(measure)
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

    public async import({ request, response }: HttpContextContract)
    {
        const xlsx = request.file('xlsx')
        if (!xlsx) return response.status(404).send(request)
        if (!xlsx.isValid) return response.status(412).send(xlsx.errors)

        await xlsx.moveToDisk('./public/uploads')
        // const file = xlsx.filePath
        const schema = xlsx.clientName.replace('.xlsx', '').toLowerCase()

        // const io = await DatasetsIO.import(file, schema) 

        return response.send({
            // process: io,
            schema: schema
        })
    }
}
