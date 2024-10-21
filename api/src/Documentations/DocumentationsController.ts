import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DocumentationsModel from './DocumentationsModel'
import OperationsModel from 'App/Operations/OperationsModel'
import { PATH_TO_FILES } from 'Core/utils'
import { promises as fs } from 'fs';

export default class DocumentationsController 
{
    public async store({request, response, session }: HttpContextContract)
    {
        if (!session ) return response.send({ message: 'You must be logged in'})
        const file = request.file('file')
        const MAX_SIZE = 100 * 1024 * 1024 // 100MB
    
        const documentation = request.all()
    
        if (!file) return response.status(400).send({ message: 'file is required' })
        const size = file?.size
        if (!documentation?.operation_id) return response.status(400).send({ message: 'operation_id is required' })
        if (!file.extname || !this.checkFileType(file.extname)) return response.status(400).send({ message: 'file type is invalid' })

        if ( !await OperationsModel.find(documentation.operation_id) )
            return response.status(404).send({ message: 'Operation not found' })

        const operation = await OperationsModel.find(documentation.operation_id)
        if (!operation) return response.status(404).send({ message: 'Operation not found' })
        if (operation.owner != session?.id && !session.roles.USER_ADMIN && !session.roles.GLOBAL_ADMIN)
            return response.send({ error: "Acces denied" })
        
        if (size > MAX_SIZE) return response.status(400).send({ message: 'File is too large', error: 'Fichier trop volumineux' })
            const has_space = await this.hasFreeSpace(size) 
        if (!has_space) return response.status(400).send({ message: 'Storage is full', error: 'Le stockage est plien' })
            
        const new_doc = await {name: file.clientName, type: file.extname, operation_id: documentation.operation_id, size: size}

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
        if (!session ) return response.send({ message: 'You must be logged in'})
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

    private async hasFreeSpace(size: number){
        const STORAGE_SIZE = 10 * 1024 * 1024 * 1024 // 10GB
        const documentations = await DocumentationsModel.query()
        const total_size = await documentations.reduce((acc, doc) => acc + Number(doc.size), 0)
        if (total_size + size > STORAGE_SIZE) return false
        return true
    } 
  
}

