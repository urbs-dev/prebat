import OperationsModel from 'App/Operations/OperationsModel'
import LocationsModel from 'App/Locations/LocationsModel'
import MeasuresModel from 'App/Measures/MeasuresModel'
import ScenariosModel from 'App/Scenarios/ScenariosModel'
import DocumentationsModel from 'App/Documentations/DocumentationsModel'
import DataModel from 'App/Measures/DataModel'
import { PATH_TO_FILES } from 'Core/utils'
import fs from 'fs/promises'

export default class OperationsManager
{
    public static async drop(id: string)
    {
        await OperationsModel.query().where('id', id).delete()
        await LocationsModel.query().where('operation_id', id).delete()
        await MeasuresModel.query().where('operation_id', id).delete()
        await DataModel.query().where('operation_id', id).delete()
        await ScenariosModel.query().where('operation_id', id).delete()
        this.deleteDocumentations(id)
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

    private static async deleteDocumentations(operation_id: string)
    {
        const documentations = await DocumentationsModel.query().where('operation_id', operation_id)
        documentations.forEach( async (doc) => {
                await fs.unlink(`${PATH_TO_FILES}/documentations/${doc.id}`);            
                await doc.delete()
            })
    }
}