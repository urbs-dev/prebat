import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DocumentationsModel from './DocumentationsModel'
import OperationsModel from 'App/Operations/OperationsModel'
import { PATH_TO_FILES } from 'Core/utils'
import { promises as fs } from 'fs';

export default class DocumentationsController 
{
    public async store({request, response, session }: HttpContextContract)
    {
        const file = request.file('file')
        
        const documentation = request.all()

        if (!file) return response.status(400).send({ message: 'file is required' })
        if (!documentation?.operation_id) return response.status(400).send({ message: 'operation_id is required' })
        if (!file.extname || !this.checkFileType(file.extname)) return response.status(400).send({ message: 'file type is invalid' })

        if ( !await OperationsModel.find(documentation.operation_id) )
            return response.status(404).send({ message: 'Operation not found' })

        const operation = await OperationsModel.find(documentation.operation_id)
        if (!operation) return response.status(404).send({ message: 'Operation not found' })
        if (operation.owner != session.id && !session.roles.USER_ADMIN && !session.roles.GLOBAL_ADMIN)
            return response.send({ error: "Acces denied" })

        const new_doc = await {name: file.clientName, type: file.extname, operation_id: documentation.operation_id}

        const result = await DocumentationsModel.create(new_doc)
        const import_status = await this.import(file, result.id)
        if (!import_status){
            await result.delete()
            return response.status(500).send({ message: 'File import failed' })
        }
        return response.send(result)
    }

    public async destroy({request, response, session }: HttpContextContract)
    {
        const id = request.param('id')
        if (!id) return response.status(400).send({ message: 'id is required' })        
        const documentation = await DocumentationsModel.find(id)

        if( !documentation )
            return response.status(404).send({ message: 'Documentation not found' })

        const operation = await OperationsModel.find(documentation.operation_id)
        if (!operation) return response.status(404).send({ message: 'Operation not found' })

        if (operation.owner != session?.id && !session.roles.USER_ADMIN && !session.roles.GLOBAL_ADMIN)
                return response.send({ error: "Acces denied" })

        try {
            await fs.unlink(`${PATH_TO_FILES}/documentations/${id}`);
            await documentation.delete()
            return response.send({ message: 'Documentation deleted' })
        } catch (error) {
            return response.status(500).send({ message: 'File not found' });
        }
    }

    public async extract({request, response, session }: HttpContextContract)
    {
        const id = request.param('id') 
        
        if (!id) return response.status(400).send({ message: 'id is required' })        
        const documentation = await DocumentationsModel.find(id)

        if( !documentation )
            return response.status(404).send({ message: 'Documentation not found' })

        const operation = await OperationsModel.find(documentation.operation_id)
        if (!operation) return response.status(404).send({ message: 'Operation not found' })

        if (operation.owner != session?.id && !session.roles.USER_ADMIN && !session.roles.GLOBAL_ADMIN)
                return response.send({ error: "Acces denied" })

        const ext = documentation.type
        try {
            const data = await fs.readFile(`${PATH_TO_FILES}/documentations/${id}`);
            const blob = await new Blob([data], { type: `application/${ext}` });
            const arrayBuffer = await blob.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            
            return response.status(200).send(buffer);
        } catch (err) {
            return response.status(500).send({ message: 'File not found' });
        }
    }

    private async checkFileType(ext: string){
        const types = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx']
        return types.includes(ext)
    }

    private async import(file, file_id){
        try {
            const path = `${PATH_TO_FILES}/documentations/`
            await file.move(path, { name: file_id,})
            return true
        }
        catch (error) {
            return false
        }
    }
  
}

