import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OperationsTree from './OperationsTree'
import OperationsModel from './OperationsModel'
import ReportsModel from 'App/Reports/ReportsModel'
import { getClimaticZone } from './climat'
import { PATH_TO_FILES, sessionAsPrivilege } from 'Core/utils'
import OperationsManager from './OperationsManager'
import OperationsIO from './OperationsIO'
import LocationsModel from 'App/Locations/LocationsModel'
import ResultsModel from 'App/Results/ResultsModel'
import Excel from 'exceljs'
import JSZip from 'jszip'
import { copyOperation, zipFiles } from './XlsxExtract'

export default class OperationsController
{
    public async index({ session, response }: HttpContextContract)
    {
        const operations = await OperationsModel.query()
            .preload('report')
            .preload('measures')
            .whereIn('is_public', session ? [ true , false ] : [ true ])
        return response.send(operations)
    }

    public async tree({ session, response }: HttpContextContract)
    {
        if (!session) return response.send({ error: 'Acces denied' })
        if (!sessionAsPrivilege(session))
        {
            const tree = await OperationsTree.findByOwner(session.id)
            return response.send(tree)
        }
        else{
            const tree = await OperationsTree.all()
            return response.send(tree)
        }
    }

    public async store({ request, response, session }: HttpContextContract)
    {
        const data = request.body() as OperationsModel
        const operation = await OperationsModel.query()
            .where('name', data.name)
            .first()
            
        if (operation)
        {
            if (!sessionAsPrivilege(session))
            {
                if (operation?.owner != session.id) return response.send({ error: "Acces denied" })
            }
            await OperationsManager.drop(operation.id)
        }
        else data.owner = session.id

        
        const operationCreated = await OperationsModel.create(data)
        const results = await ResultsModel.query()
            .where('name', data.name)
            .first()
            
        if (!results) {
            await ResultsModel.create({ name: data.name })
        }
        return response.send(operationCreated)
    }

    public async show({ request, response }: HttpContextContract)
    {
        const id = request.param('id')
        const tree = await OperationsTree.find(id)
        if (!tree) return response.status(404).send({ message: 'Operation not found'})
        return response.send(tree)
    }

    public async isPublic({ request, response }: HttpContextContract)
    {
        const isPublic = request.qs().value === 'true' ? true : false
        const operation = await OperationsModel.query()
            .where('id', request.param('id'))
            .first()
        if (!operation) {
            return response.status(404).send({ message: 'No operation found'})
        }
        operation.is_public = isPublic
        await operation.save()
        return response.send({ message: true })
    }

    public async extract({ request, response }: HttpContextContract)
    {
        const id = request.param('id')

        if (id === 'results') {
            const io = new OperationsIO()
            const url = await io.getResults()
            return response.send({ url })
        }

        const operation = await OperationsModel.query()
            .where('id', request.param('id'))
            .preload('report')
            .first()
        if (!operation) {
            return response.status(404).send({ message: 'No operation found'})
        }
        const io = new OperationsIO()
        const url = await io.extract(operation)
        return response.send({ url })
    }

    public async update({ request, response }: HttpContextContract)
    {
        const data = request.body() as ReportsModel
        const operation = await ReportsModel.query()
            .where('name', data.name )
            .andWhereNull('path')
            .first()
        if (data?.place?.department_code) {
            data.climatic_zone = getClimaticZone(data.place.department_code)
        }

        if (!operation) {
            const result = await ReportsModel.create(data)
            return response.send(result)
        }
        operation.merge(data)
        const result =  await operation.save()
        return response.send(result)
    }

    public async destroy({ request, response }: HttpContextContract)
    {
        await OperationsManager.drop(request.param('id'))
        return response.send({ message: 'dropped'})
    }

    public async getIndex({ request, response }: HttpContextContract)
    {
        const prefix = request.param('prefix')
        
        const operations = await OperationsModel.query()
        .where('name','LIKE', `${prefix}%` )
        
        return response.send({ index:  operations.length + 1 })
    }

    public async checkAccess({request, response, session }: HttpContextContract)
    {
        const name = request.param('name').split('.xls')[0]

        const operation = await OperationsModel.query()
            .where('name', name)
            .first()
            
        if (!session ) return response.send({ error: 'You must be logged in', access: false })
        if(!operation) return response.send({ access: true })
        if (operation.owner === session.id) return response.send({access: true, alreadyExists: true})

        if (sessionAsPrivilege(session)){
            return response.send({access: true,  alreadyExists: true})
        }
        return response.send({access: false,  alreadyExists: true})
    }

    public async storeWithoutMeasures({ request, response, session }: HttpContextContract)
    {
        const data = request.body()
        const locations = data.locations


        const alreadyExists = await OperationsModel.query()
        .where('name', data.name)
        .first()
        if (alreadyExists)
        {
            if (!sessionAsPrivilege(session))
            {
                if (alreadyExists?.owner != session.id) return response.send({ error: "Acces denied" })
            }
            await OperationsManager.drop(alreadyExists.id)
        }
 
        let sites = { buildings:[], zones:[], rooms:[] }
        await locations.map((building) => {
            sites.buildings.push(building.name)
            building.zones.map((zone) => {
                sites.zones.push(`${building.name} / ${zone.name}`)
                zone.rooms.map((room) => {
                    sites.rooms.push(`${building.name} / ${zone.name} / ${room.name}`)
                })
            })
        })

        const operation = {
            name: data.name,
            sites: await sites,
            time_step: 0,
            building_count: await sites.buildings.length,
            row_count: 0,
            is_public: false,
            filename: null,
            owner: await session.id,
        } as OperationsModel

        const result = await OperationsModel.create(operation)
        const operation_id = result.id
        await locations.map( async (building) => {
            let locations = { 
                path: `${operation.name}  / ${building.name}`,
                name: building.name, 
                operation_id, 
                nature: 'building', 
                parent_id: operation_id,
            } as LocationsModel
            const response = await LocationsModel.create(locations)
            const building_id = response.id

            building.zones.map( async (zone) => {
                locations.name = zone.name
                locations.path = `${operation.name}  / ${building.name} / ${zone.name}`
                locations.nature = 'zone'
                locations.parent_id = building_id
                locations.building_id = building_id
                const response = await LocationsModel.create(locations)
                const zone_id = response.id
                zone.rooms.map( async (room) => {
                    locations.name = room.name
                    locations.path = `${operation.name}  / ${building.name} / ${zone.name} / ${room.name}`
                    locations.nature = 'room'
                    locations.parent_id = zone_id
                    locations.zone_id = zone_id
                    await LocationsModel.create(locations)
                })
            })
        })
        
        const results = await ResultsModel.query()
        .where('name', data.name)
        .first()
        if (!results) {
            await ResultsModel.create({ name: data.name })
        }

        return response.send({ message: 'created' })
    }

      public async extracts({ request, response }: HttpContextContract)
    {
        const body = request.body()
        const ids = body.ids
        const filters = body.filter
        const OPERATION_PER_FILE = 20
        
        let operationToExtract: {name:string, columns:number[]}[] = []
        let operations = await OperationsModel.query().whereIn('id', ids).preload('measures').preload('report')
        
        const filtersKeys = ['sensor', 'system', 'system_category']
        if ( filters.system.length === 0 && filters.sensor.length === 0 && filters.system_category.length === 0) {
            // if no columns filter, export all 
            operations.map((operation) => {
                let columns = operation.measures.map((measure) => measure.x)
                if (!operation.filename) return
                operationToExtract.push({name: operation.filename, columns})
            })
        }else{
            await filtersKeys.map(async (key) => {
                if(filters[key].length > 0 ){ // if there is a filter
                    await operations.map(async (operation) => {
                        if (!operation.filename) return false
                        let columns: number[] = []
                        await operation.measures.map((measure) => {
                            if ( filters[key].includes(measure[key])){
                                columns.push(measure.x)
                            }
                        })
                        if( columns.length > 0) operationToExtract.push({name: operation.filename, columns: columns})
                        else operations.splice(operations.indexOf(operation), 1)

                    })
                }  
            })
        }
        
        if (filters.usages.length > 0){
            await operations.map(async (operation) => {
                if (!operation.report) return
                let use = operation.report.use.split('~')[0] 
                if (!filters.usages.includes(use)){
                    const index = operationToExtract.findIndex((op) => op.name === operation.filename)
                    if (index > -1){
                        operationToExtract.splice(index, 1)
                    }
                } 
            })
        }
        operations = []
        console.log(operationToExtract);
        
        if (operationToExtract.length === 0) return response.status(404).send({ message: 'No operation found'})
        // LOG FOR DEBUG
        // console.log('===============================================')
        // console.log("nombre d'opération à extraire: ", operationToExtract.length);
        // console.log("nombre de colonnes à extraire: ", operationToExtract.map((op) => op.columns.length).reduce((a,b) => a+b));
        // console.log('===============================================')
        // let nbcol = 0  

        let workbook = new Excel.Workbook();
        let zip = new JSZip();
        let file = 0
        for( let i = 0; i < operationToExtract.length; i++){
            // LOG FOR DEBUG
            // nbcol += operationToExtract[i].columns.length
            // console.log("Opération en cours: ",operationToExtract[i].name, "  index: ",i);
            // console.log("Nombre de colonnes à extraire: ",operationToExtract[i].columns.length);
            // console.log("Nombre total de colonnes extraites: ",nbcol);
            // console.log('-----------------------------------------------');
            // console.log('Mémoire utilisée: ', process.memoryUsage().heapUsed / 1024 / 1024, 'MB');
            // console.log('Mémoire totale: ', process.memoryUsage().heapTotal / 1024 / 1024, 'MB');
            console.log('===============================================');
            try {
                const worksheet = await workbook.addWorksheet(operationToExtract[i].name)
                await copyOperation(worksheet, operationToExtract[i].name, operationToExtract[i].columns)
                if ((i+1)% OPERATION_PER_FILE === 0 || i === operationToExtract.length -1){
                    zip = await zipFiles(workbook, zip, `Cerema-TAB-PREBAT_MESURES_${file*OPERATION_PER_FILE}_${i+1}.xlsx`)
                    workbook = await new Excel.Workbook();
                    file++
                }
                    
            }
            catch (error) {
                console.log(error);
                continue
            }
        }
        const content = await zip.generateAsync({ type: 'nodebuffer' });
        const buffer = Buffer.from(content);
        return response.status(200).send(buffer);

        // return response.status(200).send("ok");
    }

}