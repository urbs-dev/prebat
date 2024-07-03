<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Input, Checkbox, Select, Textarea } from 'gros/form'
    import { parameters, getValues, sensor, system_category } from '../utils'
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
        console.log(result);
        invalidateAll()
        loading.stop()
    }
    let showUsage = true
    let showSensor = true
    let showSystem = true
    let showPrecision = true
    let showCalculation = true
</script>

<Modal title="Modifier les mesures" icon="edit">
    <article>
        <!-- Usage -->
        <section> 
            <button class="category" on:click={() => {showUsage = !showUsage}} class:active={showUsage}>
                <h2>Usage</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
            </button>
            {#if showUsage}
                <div transition:slide>
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
            {/if}
        </section>
        <!-- Sensor -->
         <section>
            <button class="category" on:click={() => {showSensor = !showSensor}} class:active={showSensor}>
                <h2>Capteur</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
            </button>
            {#if showSensor}
                <div transition:slide>
                    <Select
                        label="Capteur"
                        bind:value={form.sensor}
                        options={sensor.map(u => ({value: u.label}))}
                        placeholder="Choisir un capteur"
                    />
                    {#if form?.sensor}
                        <Select
                            label="Type de données"
                            bind:value={form.statement}
                            options={getValues(sensor, form.sensor)}
                            placeholder="Choisir un type de données"
                        />
                    {/if}
                </div>
            {/if}
        </section> 
        <!-- System -->
        <section>
            <button class="category" on:click={() => {showSystem = !showSystem}} class:active={showSystem}>
                <h2>Equipement</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
            </button>
            {#if showSystem}
                <div transition:slide>
                <Select 
                    label="Catégorie d'équipement"
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
            {/if}
        </section>
        <!-- Precision -->
        <section> 
            <button class="category" on:click={() => {showPrecision = !showPrecision}} class:active={showPrecision}>
                <h2>Précision</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
            </button>
            {#if showPrecision}
                <div transition:slide>
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
            {/if}
        </section>
        <section>
            <button class="category" on:click={() => {showCalculation = !showCalculation}} class:active={showCalculation}>
                <h2>Calcul</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"/></svg>
            </button>
            {#if showCalculation}
                <div transition:slide>
                    <Checkbox bind:checked={form.is_computed} size={20} margin={[0,8,0,0]}>
                        PM issue du calcul
                    </Checkbox>

                    {#if form?.is_computed}
                        <Input 
                            label="Formule de calcul"
                            bind:value={form.calculation}
                        />
                    {/if}
                </div>
            {/if}
        </section>
    </article>

    <svelte:fragment slot="footer">
        <button on:click={update}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    article {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        overflow: auto;
        max-height: 70vh;
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 4px;
        color: var(--primary-darken);
    }
    button.category {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background: #efefef;
        border: none;
        cursor: pointer;
        padding: 4px 8px;
        border-radius: 4px;
        min-width: 420px;
        color: var(--primary);
    }
    button svg{
        width: 18px;
        height: 18px;
        opacity: 0.8;
        transition: all 0.3s;
    }
    button.active svg{
        transform: rotate(90deg);
    }

    h2 {
        font-weight: bold;
        font-size: 18px;
        margin: 0;
    }
    h3 {
        font-size: 16px;
        margin: 0;
    }
    div {
        padding: 0 16px ;
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