import OperationsModel from 'App/Operations/OperationsModel'

export default class Catalog   
{
    public catalog: string = 'catalog'

    public static async getTree()
	{
		return await OperationsModel.query()
            .preload('locations', (query => {
                this.getLocationsQuery(query)
            }))
            .orderBy('name', 'asc')
	}

    private static getLocationsQuery(query)
    {
        return query
            .select(['id', 'name', 'nature', 'use', 'shon', 'constructive_system', 'heating', 'hot_water', 'airing'])
            .orderBy('name')
            .preload('locations', (query => {
                this.getLocationsQuery(query)
            }))
    }
}