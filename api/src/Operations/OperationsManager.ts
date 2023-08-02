import OperationsModel from 'App/Operations/OperationsModel'
import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import DataModel from 'App/Measures/DataModel'

export default class OperationsManager
{
    public static async drop(id: string)
    {
        await OperationsModel.query().where('id', id).delete()
        await LocationsModel.query().where('operation_id', id).delete()
        await MeasuresModel.query().where('operation_id', id).delete()
        await DataModel.query().where('operation_id', id).delete()
    }

    public static async dropIfExists(name: string)
    {
        const result = await OperationsModel.query()
            .where('name', name)
            .first()

        if (result) {
            await OperationsManager.drop(result.id)
        }
    }
}