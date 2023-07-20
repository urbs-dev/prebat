import OperationsModel from 'App/Operations/OperationsModel'

export default class Catalog   
{
    public catalog: string = 'catalog'

    public static async getTree()
	{
		return await OperationsModel.query()
            .preload('buildings', (query => {
                this.getBuildingsQuery(query)
            }))
            .orderBy('title', 'asc')
	}

    private static getBuildingsQuery(query)
    {
        return query
            .select(['id', 'title', 'use', 'shon', 'constructive_system', 'heating', 'hot_water', 'airing'])
            .orderBy('title')
            .preload('children', query => {
                this.getBuildingsQuery(query)
            })
    }
}