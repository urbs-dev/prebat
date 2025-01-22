<script>
    import { Input, Select } from "gros/form";
    import { resultsInfos } from "$lib/utils/list";
    import { Tooltip } from 'gros/tooltip'
    import { slide } from 'svelte/transition'
    export let operation;
    let results = operation.results;
    let saving = false
    let visibility = [true,false,false]
    const synchronise = (key) => {
        switch (key) {
            case 'nature_travaux':
                if (operation.report.engineering === "Extension") results[key] = "Rénovation avec extension";
                else results[key] = operation.report.engineering;
                break;
            case 'region':
                results[key] = operation.report.place.context.split(",")[2].trim();
                break;
            case 'departement':
                results[key] = operation.report.place.department_code;
                break; 
            case 'zone_climatique':
                results[key] = operation.report.climate_zone;
                break;
            case 'shon':
                results[key] = operation.report.shon;
                break;
            case 'surface':
                results[key] = operation.report.su;
                break;
            case 'shab':
                results[key] = operation.report.shab;
                break;
            case 'hauteur':
                results[key] = operation.report.height;
                break;
            case 'volume':
                results[key] = operation.report.volume;
                break;
            case 'label_energetique':
                results[key] = operation.report.label;
                break;
            case 'systeme_chauffage':
                results[key] = operation.report.heating;
                break;
            case 'ecs_principal':
                results[key] = operation.report.hot_water;
                break;
            case 'systeme_ventilation':
                results[key] = operation.report.airing;
                break;
            case 'fonction_detail':
                results[key] = operation.report.use;
                break;
        }
    }
    const synchroniseAll = () => {
        for (const key in results) {
            synchronise(key);
        }
    }
    const save = async () => {
        saving = true;
        const response =  await fetch(`BASE_URL/prebat.api/results/${results.id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({results})
        })
        saving = false;
    }
    const deleteAll = async () => {
        Object.keys(results).map(key => results[key] = null)
    }

</script>

<section>
    <article class="action">
        <div>
            <button class="tooltip delete" on:click={deleteAll}>
                <Tooltip bottom content="Supprimer tous les résultats"/>
                <i class="micon">delete</i>
            </button>
            <button class="tooltip sync" on:click={synchroniseAll}>
                <Tooltip bottom content="Synchroniser depuis les questionnaires"/>
                <i class="micon">cloud_download</i>
            </button>
            <button class="tooltip save" on:click={() => save()}>
                <Tooltip bottom content="Enregistrer les modification"/>
                {#if saving}
                    <i class="micon saving">sync</i>
                {:else}
                    <i class="micon">save</i>
                {/if}
            </button>
        </div>
    </article>
{#each resultsInfos as category, i}
    <button  class="title" on:click={() => visibility[i] = !visibility[i]}>
        <h2>
            <i class="micon" class:active={visibility[i]}>chevron_right</i>
            <div>
                {category.title}
                <span class="abstract">{category.abstract}</span>
            </div>
        </h2>
    </button>
    {#if visibility[i]}
        <article class="content" transition:slide>
            {#each Object.keys(category.values) as key}
            {@const info = category.values[key]}
                {#if info.visible !== false}
                    <div class:disabled={info.syncable === true}>
                        <h3>
                            <i class="micon">chevron_right</i>
                            {info.label}
                        </h3>
                        {#if info.editable !== false && info.syncable !== true}
                            <span>
                                {#if info.type === 'number'}
                                    <input type="number" bind:value={results[key]} />
                                {:else if info.type === 'select'}
                                    <select bind:value={results[key]}>
                                        {#each info.values as value}
                                            <option value={value}>{value}</option>
                                        {/each}
                                    </select>
                                {:else if info.type === 'date'}
                                    {@const date = new Date(results[key]).toISOString().split('T')[0]}
                                    <input type="date" value={date} on:change={() => {
                                        results[key] = new Date(event.target.value).toISOString()
                                    }}/>
                                {:else}
                                    <input type="text" bind:value={results[key]}/>
                                {/if}
                                
                            </span>
                        {:else}
                            <span>
                                <input type="text" value={results[key]} disabled/>
                            </span>
                        {/if}
                        {#if info.syncable}
                            <span class="action">
                                <button class="tooltip sync" on:click={() => synchronise(key)}>
                                    <Tooltip bottom content="Synchroniser depuis les questionnaires"/>
                                    <i class="micon">cloud_download</i>
                                </button>
                            </span>
                        {/if}
                        <button class="tooltip delete" on:click={() => results[key] = null}>
                            <Tooltip right content="Supprimer"/>
                            <i class="micon">delete</i>
                        </button>
                    </div>
                    <!-- {#if resultsInfos.editable !== false}
                        {#if resultsInfos.type === 'number'}
                            <Input  icon="chevron_right" label={resultsInfos.label} bind:value={results[key]} />
                        {:else if resultsInfos.type === 'select'}
                            <Select  icon="chevron_right" label={resultsInfos.label} bind:value={results[key]} options={resultsInfos.values} />
                        {:else}
                            <Input   icon="chevron_right" label={resultsInfos.label} bind:value={results[key]} />
                        {/if}
                    {/if} -->
                {/if}
            {/each}
        </article>
    {/if}

{/each}

</section>

<style>
    section {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    div {
        display: flex;
        align-items: center;
    }
    select{
        appearance: none;
        background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: right 0.7rem top 50%;
        background-size: 0.65rem auto;    
    }
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        font-size: 24px;
        margin: 24px 0 16px 0;
        font-weight: 800;
        background-color: var(--primary-lighten-2);

        padding: 4px 8px;
        border-radius: 8px;
    }
 
    .title h2{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 8px;
        font-size: 22px;
        min-width: 250px;
    }
    .title h2 div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }
    h2 span.abstract{
        font-size: 16px;
        color: var(--primary-lighten);
    }
    .title i{
        margin-right: 8px;
        transition: all ease-in-out 0.3s;

    }
    .title h2 i.active{
        transform: rotate(90deg);
        transition: all ease-in-out 0.3s;

    }
    .content{
        transition: all ease-in-out 0.3s;
    }
    div h3{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 8px;
        font-size: 16px;
        color: var(--primary);
        min-width: 250px;
    }
    div button {
        background: none;
        border: none;
        cursor: pointer;
    }
    span.action{
        display: flex;
        margin: 0 8px;
    }

    article.action {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap : 8px;
    }
    .action button{
        background: #f5f5f5;
        border-radius: 50%;
        width: 32px;
        height: 32px;

    }
    .action button:hover{
        background: #e0e0e0;
    }
    .save{
        color: var(--ternary);
    }
    .sync{
        color: var(--secondary-lighten);
    }
    input, select{
        min-width: 200px;
    }
    .saving {
        animation: spin 3s linear infinite;

    }
    div.disabled h3{
        color: #9e9e9e;
    }
    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
   
   
</style>
