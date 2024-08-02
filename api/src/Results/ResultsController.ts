import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResultsModel from './ResultsModel'
import Database from '@ioc:Adonis/Lucid/Database'
export default class ResultsController 
{
  
    public async graph({ response }: HttpContextContract)
    {
        let counts = {}
        const fieldsWithCount = ['fonction','maitre_ouvrage','nature_travaux',
                                 'bepos','label_energetique','isoloation_pvo',
                                 'systeme_chauffage','ecs_principal','confort_ete',
                                 'confort_hiver','classe_inertie'
                                ]
        
        fieldsWithCount.map(async (field) => {
            const result = await this.getCount(field)
            counts[field] = result.rows.map((row) => row.count)
            counts[field] = counts[field].reduce((acc, cur) => {
                return { ...acc, ...cur }
            })
        })
        const rows = await ResultsModel.query().select('*')
        const result = { ...counts, rows } 

        return response.send(result)
    }

    private async getCount(field: string)
    {
        return await Database.rawQuery(`
            SELECT
                JSON_BUILD_OBJECT( ${field}, COUNT(*) ) as count
            FROM results
            GROUP BY ${field}
            ;`
        )

    }


}
