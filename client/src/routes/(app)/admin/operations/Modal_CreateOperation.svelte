<script>
    import { Modal } from 'gros/modal'
    import { Input, Textarea, Select } from 'gros/form'
    import { invalidateAll } from '$app/navigation'
    export let close

    let inputs = [
        { key: 'title', name: `Nom de l'opération`, required: true, type: 'text', },
        { key: 'abstract', name: 'Description', type: 'textarea', },
        { key: 'program', name: 'Nom du programme', type: 'select', options: [ 'PREBAT', 'Autre' ] },
        { key: 'delivered_on', name: 'Année de livraison', type: 'number' },
        { key: 'contract_type', name: `Type de maîtrise d'ouvrage`, type: 'select', options: [
            'Etat',
            'Logements sociaux',
            'Particulier',
            'Privé',
            'Copropriété privée',
            'Autre',
        ] },
        { key: 'engineering', name: `Nature des travaux`, type: 'select', options: [ 'Neuf', 'Rénovation', 'Extension' ]},
        { key: 'label', name: 'Label / Certification', type: 'select', options: [
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
        ]},
        { key: 'air_permeability', name: `Pérméabilité à l'air des réseaux`, type: 'number'},
        { key: 'city_code', name: 'Commune', type: 'geocoder' }
    ]
    let form = {}

    const save = async () => {
        close()
        await fetch(`BASE_URL/prebat.api/operations`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(form)
        })
        invalidateAll()
    }
</script>


<Modal icon="folder" title="Créer une opération">
    <section class="thin-scrollbar">
        {#each inputs as input}
            {@const { key, type, name, required, options } = input}
            {#if type === 'text'}
                <Input big required={required} icon="chevron_right" label={name} bind:value={form[key]}/>
            {:else if type === 'number'}
                <Input big number required={required} icon="chevron_right" label={name} bind:value={form[key]}/>
            {:else if type === 'textarea'}
                <Textarea big required={required} icon="chevron_right" label={name} bind:value={form[key]}/>
            {:else if type === 'select'}
                <Select big required={required} icon="chevron_right" label={name} bind:value={form[key]}
                    options={options.map(option => { return { value: option, label: option }})}
                />
            {/if}
        {/each}
    </section>
    <svelte:fragment slot="footer">
        <button on:click={save}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    section {
        padding:16px 24px;
        position: relative;
        width: 400px;
        height: 64vh;
        overflow-y: auto;
        user-select: none;
    }
    section :global(button.checkbox span) { background: #fff; }
</style>