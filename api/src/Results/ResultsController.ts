import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ResultsModel from './ResultsModel'
import OperationsModel from 'App/Operations/OperationsModel'
import { sessionAsPrivilege } from 'Core/utils'
import Database from '@ioc:Adonis/Lucid/Database'
export default class ResultsController 
{
  
    public async graph({request, response }: HttpContextContract)
    {
        const params = request.all() as JSON
        const where = await this.getFilter(params)

        let counts = {}
        const fieldsWithCount = ['fonction','zone_climatique','region','maitre_ouvrage','nature_travaux',
                                 'bepos','label_energetique','isolation_pvo',
                                 'confort_ete','confort_hiver','classe_inertie', 'structure', 
                                ]

        fieldsWithCount.map(async (field) => {
            const result = await this.getCount(field, where)
            if (result.rows.length === 0) return
            counts[field] = result.rows.map((row) => row.count)
            counts[field] = counts[field].reduce((acc, cur) => {
                return { ...acc, ...cur }
            })
        })

        const rows = await this.getRows(where)
        const result = { ...counts, rows } 

        return response.send(result)
    }

    public async update({request, response, session }: HttpContextContract)
    {
        if (!session ) return response.send({ error: 'You must be logged in'})

        const data = request.body().results as ResultsModel
        let result = await ResultsModel.query()
        .where('id', request.param('id'))
        .first()
        
        if(!result){
            await ResultsModel.create(data)
            return response.send({ message: 'created' })
        }

        const operation = await OperationsModel.query()
        .where('name', result.name)
        .first()
        if (!operation) return response.send({ error: 'Operation not found' })

        if (operation.owner === session.id || sessionAsPrivilege(session )) {
            result.merge(data)
            await result.save()
            return response.send({ message: 'updated' })
        }
        return response.send({ error: 'You are not the owner of this operation', })
    }


    private async getCount(field: string, where: string)
    {
  
        return await Database.rawQuery(`
            SELECT
                JSONB_BUILD_OBJECT( 
                    CASE WHEN ${field}='' THEN 'Non renseigné' ELSE ${field} END, COUNT(*)
                ) as count
                FROM results
            INNER JOIN operations as operations ON results.name = operations.name
            ${where}
            GROUP BY ${field}
            ;`
        )
    }
    private async getRows(where:string)
    {
        // const results = await Database.rawQuery(`SELECT * FROM results INNER JOIN operations as operations ON results.name = operations.name ${where};`)
        const results = await ResultsModel.query().innerJoin('operations', 'results.name', 'operations.name').whereRaw(where.slice(6))
        
        return results
    }

    private async getFilter(filters:JSON)
    {
        let where = "WHERE operations.is_public=true"
        if (filters) {
            const keys = Object.keys(filters)
            if (keys.length > 0) {
                where += " AND "
                keys.map((key) => {
                    const filter = filters[key].split('|')
                    if ( filter.length >1) {
                        where += "("
                        filter.map((f) => {
                             where += `${key}${this.formatFilter(f)} OR `
                        })
                        where = where.slice(0, -4)
                        where += ") AND "
                    } 
                    else where += `${key}${this.formatFilter(filters[key])} AND `
                })
                where = where.slice(0, -5)
            }
        }
        return where
    }

    private formatFilter(string:string)
    {
        if (string.includes(`'`) || string.includes(`"`) || string.includes(`(`) || string.includes(`)`) ||  string.includes(`%`)) {
                string = string.replace(/'/g, "%")
                string = string.replace(/"/g, '%')
                string = string.replace(/\(/g, '%')
                string = string.replace(/\)/g, '%')
                string = string.replace(/\+/g, '%')
                return ` LIKE '${string}'`
        }
        if (string === "Non renseigné") return `=''`
        else return `='${string}'`    }

}
