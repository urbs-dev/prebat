<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Textarea, Select, Input } from 'gros/form'
    import CheckboxGroup from './CheckboxGroup.svelte'
    import Geocoder from './Geocoder.svelte'

    export let props
    export let close
    const form = props ?? {}
    let { id, use, shon, su, shab } = form

    const update = async () => {
        close()
        loading.start()
        const response = await fetch(`BASE_URL/prebat.api/locations/${id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ use, shon, su, shab })
        })
        await response.json()
        invalidateAll()
        loading.stop()
    }
</script>

<Modal title="Modifier les caractéristiques des sites" icon="edit">
    <section class="flex">
        <aside>
            <Select  big icon="chevron_right" label="Destination d'usage" bind:value={use} options={[
               'PREBAT', 'Autre'
            ]}/>
            <Input big number icon="chevron_right" label="SHON" bind:value={shon}/>
            <Input big number icon="chevron_right" label="SU" bind:value={shon}/>
            <Input big number icon="chevron_right" label="SHAB" bind:value={shon}/>
        </aside>
        <aside>
            <Geocoder icon="chevron_right" label="Localisation" bind:value={place}/>
            <Select  big icon="chevron_right" label="Nature des travaux" bind:value={engineering} options={[
                'Neuf', 'Rénovation', 'Extension'
             ]}/>
            <CheckboxGroup icon="chevron_right" label="Label / Certification" bind:result={label} values={[
                'BBC Effinergie',
                'BBC Effinergie R',
                'Effinergie R',
                'PASSIVHAUS',
                'MINERGIE',
                'MINERGIE P',
                'MINERGIE Eco',
                'MINERGIE P Eco',
                'Effinergie +',
                'BEPOS Effinergie',
                'E0',
                'E1',
                'E2',
                'E3',
                'E4',
                'C0',
                'C1',
                'C2',
                'HQE',
                'BREEAM',
                'LEED',
                'H&E',
                'Démarche BDM',
                'Autre',
            ]}/>
        </aside>
    </section>

    <svelte:fragment slot="footer">
        <button on:click={update}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    section {
        width: 840px;
        margin: 0 24px;
        justify-content: space-between;
        align-items: flex-start;
    }
    aside {
        width: 400px;
    }
</style>