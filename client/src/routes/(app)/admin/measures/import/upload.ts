import { toast } from '@zerodevx/svelte-toast'
import { loading } from 'gros/loading'
import { page, content } from './store'



export class Upload {

    public sequence: any = undefined

    public async getSequence(file)
    {
        if (!file) return
        const data = new FormData()
        data.append('xlsx', file, file.name)
        const response = await fetch(`BASE_URL/prebat.api/measures/sequence`, {
            method: 'POST',
            body: data
        })
        const json = await response.json()
        if (json.error) {
            page.set('error')
            content.set(json)
            return
        }
        this.sequence = json
        toast.push('Fichier séquencé avec succès')
    }

    public async checkAccess(filename){
        if (!filename) return
        const response = await fetch(`BASE_URL/prebat.api/operations/access/${filename}`)
        const json = await response.json()

        if (!json.alreadyExists) // if operation doesn't exist
        { 
            return json
        }
        else if (json.alreadyExists)  // if operation exists
        {
            if (json.access) return { alreadyExists: true }
            if (!json.access) return { error: `Le fichier ${filename} n'est pas accessible` }
        }
        else {
            return { error: `Une erreur est survenue lors de la vérification` }
        }
    }

    public async operation()
    {
        if (!this.sequence) return

        const { operation } = this.sequence
        const response = await fetch(`BASE_URL/prebat.api/operations`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(operation)
        })
        await response.json()
        toast.push(`Opérations ${operation.name} intégrée avec succès`)
    }

    public async sites()
    {
        if (!this.sequence) return

        const { sites } = this.sequence
        loading.start(`Intégration des ${sites.length} sites`)

        const response = await fetch(`BASE_URL/prebat.api/locations`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(sites)
        })
        await response.json()
        loading.stop()
        toast.push(`Les ${sites.length} sites ont été intégrés avec succès`)
    }

    public async measures()
    {
        if (!this.sequence) return

        const { measures, file } = this.sequence
        let i = 1

        for (const measure of measures) {

            loading.start(`Intégration des données [${i}/${measures.length}]`, `${measure.path} [${measure.entries?.length ?? 0} pdm]`)

            const response = await fetch(`BASE_URL/prebat.api/measures`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({ 
                    file, 
                    measures: measure.entries 
                })
            })
            await response.json()
            i = i + 1
        }
 
        loading.stop()
        toast.push(`Les données ont été intégrées avec succès`)
        page.set('result')
        content.set({
            operation: this.sequence.operation,
            sites: this.sequence.sites
        })
    }

}