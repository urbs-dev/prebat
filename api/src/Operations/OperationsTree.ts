import OperationsModel from 'App/Operations/OperationsModel'

export default class Catalog
{
    public catalog: string = 'catalog'

    public static async all()
	{
		return await OperationsModel.query()
            .preload('locations', (query => {
                this.getLocationsPreview(query)
            }))
            .orderBy('name', 'asc')
	}

    public static async find(id: string)
    {
        return await OperationsModel.query()
            .where('id', id)
            .preload('report')
            .preload('scenarios')
            // .preload('locations', (query => {
            //     this.getLocations(query)
            // }))
            .first()
    }
    public static async findByOwner(owner: string)
    {
        return await OperationsModel.query()
            .where('owner', owner)
            .preload('locations', (query => {
                this.getLocationsPreview(query)
            }))
            .orderBy('name', 'asc')    
    }

    private static getLocationsPreview(query)
    {
        return query
            .select(['id', 'name', 'nature'])
            .orderBy('name')
            .preload('locations', (query => {
                this.getLocationsPreview(query)
        }))
    }

    private static getLocations(query)
    {
        return query
            .orderBy('name')
            .preload('measures')
            .preload('report')
            .preload('locations', (query => {
                this.getLocations(query)
        }))
    }
}