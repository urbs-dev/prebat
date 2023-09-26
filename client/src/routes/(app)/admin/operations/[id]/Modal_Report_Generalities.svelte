<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Input } from 'gros/form'
    import CheckboxGroup from './CheckboxGroup.svelte'

    export let props
    export let close
    const form = props ?? {}
    let { name, use, shon, su, shab, height } = form

    const update = async () => {
        close()
        loading.start()
        const response = await fetch(`BASE_URL/prebat.api/operations/${name}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ name, use, shon, su, shab, height })
        })
        await response.json()
        invalidateAll()
        loading.stop()
    }
</script>

<Modal title="Modifier les généralités" icon="edit">
    <section class="flex">
        <aside>
            <Input big icon="chevron_right" label="SHON (m²)" bind:value={shon} number required/>
            <Input big icon="chevron_right" label="SU (m²)" bind:value={su} number/>
            <Input big icon="chevron_right" label="SHAB (m²)" bind:value={shab} number/>
            <Input big icon="chevron_right" label="Hauteur du bâtiment (m)" bind:value={height} number/>
        </aside>
        <aside style="width:480px">
            <CheckboxGroup icon="chevron_right" label="Destination d'usage" bind:result={use} values={[
                'Habitation individulle diffus',
                'Habitation individuelle groupée',
                'Habitation collective',
                'Bureau',
                'Ecole',
                'Crèche',
                'Collège',
                'Lycée',
                'Université',
                'Enseignement - Autre',
                'Commerce',
                'Santé',
                'EHPAD',
                'Hôtel',
                'Internat',
                'Hébergement - Autre',
                'Restauration',
                'Bibliothèque',
                'Salle de spectacle',
                'Culture - Autre',
                'Sport',
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
        margin: 24px;
        justify-content: space-between;
        align-items: flex-start;
    }
    aside {
        margin: 8px;
    }
</style>