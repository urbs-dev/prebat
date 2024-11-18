import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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
                                 'confort_ete','confort_hiver','classe_inertie', 'structure'
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


    private async getCount(field: string, where: string)
    {
        console.log(`
            SELECT
                JSONB_BUILD_OBJECT( 
                    CASE WHEN ${field}='' THEN 'Non renseigné' ELSE ${field} END, COUNT(*)
                ) as count
            FROM results
            ${where}
            GROUP BY ${field}
            ;`)
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

    private async getFilter(filters:JSON)
    {
        let where = ""
        if (filters) {
            
            const keys = Object.keys(filters)
            if (keys.length > 0) {
                where = "WHERE "
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
