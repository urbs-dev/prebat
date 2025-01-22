<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Input, Checkbox, Select, Textarea } from 'gros/form'
    import { parameters, getValues, sensor, system_category } from '$lib/utils/list'
    import { slide } from 'svelte/transition';

    export let props
    const form = props ?? {}

    let bounds = { 
        min: form?.bounds?.min || null, 
        max: form?.bound?.max || null}
    export let close
    
    const update = async () => {
        close()
        loading.start()
        form.bounds = bounds
        let result = await fetch(`BASE_URL/prebat.api/measures/${form.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        invalidateAll()
        loading.stop()
    }
</script>

<Modal title="Modifier les mesures" icon="edit">
    <article>
        <aside>
            <!-- Usage -->
             
            <section> 
                <h2 class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Usage</span>
                </h2>
                <div>
                    <Select 
                        label="Usage"
                        bind:value={form.parameters}
                        options={parameters.map(p => ({value: p.label}))}
                        placeholder="Choisir un usage"
                    />
                    {#if form?.parameters}
                        <Select 
                            label="Sous catégorie"
                            bind:value={form.typology}
                            options={getValues(parameters, form.parameters)}
                            placeholder="Choisir une typologie"
                        />
                    {/if}
                </div>
            </section>
            <!-- Sensor -->
            <section>
                <h2 class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Capteur</span>
                </h2>
                <div>
                    <Select
                        label="Capteur"
                        bind:value={form.sensor}
                        options={sensor.map(u => ({value: u.label}))}
                        placeholder="Choisir un capteur"
                    />
                    {#if form?.sensor}
                        <Select
                            label="Grandeur mesurée"
                            bind:value={form.statement}
                            options={getValues(sensor, form.sensor)}
                            placeholder="Choisir une grandeur mesurée"
                        />
                    {/if}
                </div>
            </section> 
            <!-- System -->
            <section>
                <h2 class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Equipement</span>
                </h2>
                <div>
                <Select 
                    label="Type d'équipement"
                    bind:value={form.system_category}
                    options={system_category.map(p => ({value: p.label}))}
                    placeholder="Choisir un usage"
                />
                {#if form?.system_category}
                    <Select 
                        label="Sous catégorie"
                        bind:value={form.system}
                        options={getValues(system_category, form.system_category)}
                        placeholder="Choisir une typologie"
                    />
                {/if}
                </div>
            </section>
            <!-- Calculation -->
            <section>
                <h2 class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Calcul</span>
                </h2>
                <div >
                    <Checkbox bind:checked={form.is_computed} size={20} margin={[0,8,0,0]}>
                        PM issu du calcul
                    </Checkbox>

                    {#if form?.is_computed}
                        <span transition:slide>
                            <Input label="Formule de calcul" bind:value={form.calculation}/>
                        </span>
                    {/if}
                </div>
            </section>
        </aside>
        <aside>
            <!-- Precision -->
            <section> 
                <h2 class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Précision</span>
                </h2>
                <div>
                    <h3>Domaine de mesure :</h3>
                    <span>

                        <Input 
                        number
                        label="minimum"
                        bind:value={bounds.min}
                        />
                        <Input 
                        label="maximum"
                        bind:value={bounds.max}
                        number
                        />
                    </span>
                    <Select 
                        label="Agregat"
                        bind:value={form.agregate}
                        options={[ "moyenne (sur la période précédante)", "valeur à l'instant t", "somme", "Min", "Max", "Ecart-type"]}
                        placeholder="Choisir une unité"
                    />
                    <Select
                        label="Prise en compte de l'heure d'été/hiver"
                        bind:value={form.season_time}
                        options={[ "oui", "Non, bloqué en heure d'été", "Non, bloqué en heure d'hiver" ]}
                        placeholder="Choisir une unité"
                    />
                    <Input 
                        label="Précision"
                        bind:value={form.precision}
                        number
                    />
                    <Input
                        label="NB de chiffre significatif"
                        bind:value={form.significant_precision}
                        number
                    />
                    <Input
                        label="Marque référence du capteur"
                        bind:value={form.sensor_mark}
                    />
                    <Select
                        label="Qualité de la donnée"
                        bind:value={form.quality}
                        options={[  "Non satisfaisant", "peu satisfaisant", "Satisfaisant", "Très satisfaisant", "Sans avis" ]}
                        placeholder="Choisir une unité"
                    />
                    <Textarea 
                        label="Commentaire"
                        bind:value={form.comment}
                    />
                </div>
            </section>
        </aside>

     
    </article>

    <svelte:fragment slot="footer">
        <button on:click={update}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    article {
        display: flex;
        flex-direction: row;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 70vh;
    }
    aside{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 50%;
    }
    section{
        display: flex;
        flex-direction: column;
        color: var(--primary-darken);
        min-width: 380px;
    }
    
    h2 {
        color: var(--primary);
        font-size: 16px;
        margin: 0 0 4px 0;
        cursor: default;
    }
    h3 {
        color: var(--primary);
        font-size: 14px;
        margin: 0;
        cursor: default;
    }
    div {
        border: 1px solid #e0e0e0;
        border-radius: 0.4rem;
        padding: 8px 16px ;
    }
    span{
        display: flex;
        flex-direction: column;
        padding-left: 8px ;
    }
    span :global(section){
        padding: 0;
    }
    section div :global(h2){
        color: var(--primary-darken) !important;
    }
    section div :global(section){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
   
</style>