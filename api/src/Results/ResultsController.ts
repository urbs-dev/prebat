import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResultsModel from './ResultsModel'
import Database from '@ioc:Adonis/Lucid/Database'
export default class ResultsController 
{
  
    public async graph({request, response }: HttpContextContract)
    {
        const params = request.all() as JSON
        const where = await this.getFilter(params)

        let counts = {}
        const fieldsWithCount = ['fonction','zone_climatique','maitre_ouvrage','nature_travaux',
                                 'bepos','label_energetique','isolation_pvo','ecs_principal',
                                 'confort_ete','confort_hiver','classe_inertie'
                                ]
        

        fieldsWithCount.map(async (field) => {
            const result = await this.getCount(field, where)
            counts[field] = result.rows.map((row) => row.count)
            counts[field] = counts[field].reduce((acc, cur) => {
                return { ...acc, ...cur }
            })
        })
        const rows = await this.getRows(where)
        const result = { ...counts, rows } 
        
        return response.send(result)
    }


    private async getCount(field: string, where: string)
    {
        return await Database.rawQuery(`
            SELECT
                JSONB_BUILD_OBJECT( 
                    CASE WHEN ${field}='' THEN 'Non renseigné' ELSE ${field} END, COUNT(*)
                ) as count
            FROM results
            ${where}
            GROUP BY ${field}
            ;`
        )
    }
    private async getRows(where:string)
    {
        const results = await Database.rawQuery(`SELECT * FROM results ${where};`)
        return results.rows
    }

    private async getFilter(filter:JSON)
    {
        let where = ""
        if (filter) {
            if (Object.keys(filter).length > 0) {
                where = "WHERE "
                for (const key in filter) {
                    where += `${key}='${filter[key]}' AND `
                }
                where = where.slice(0, -5)
            }
        }
        return where
    }

}
