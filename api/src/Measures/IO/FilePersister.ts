import OperationPersister from './Persisters/OperationPersister'

export default class FilePersister
{
    public document: any

    constructor(document: any)
    {
        this.document = document
    }

    public async insert()
    {
        const persister = new OperationPersister(this.document)
        const result = await persister.store()
        return result
    }
}