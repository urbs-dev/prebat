<script>
    import { filtersFields, getFilterValues, getFilterasCSV } from './chartsTypes/utils'
    export let filters = {}
    export let defaultAttributes = {}
    export let attributes = {}

    const toggle = (attribute, key) => {
        if (!filters[attribute]) filters[attribute] = []  

        if (filters[attribute].includes(key)) {
            filters[attribute] = filters[attribute].filter(item => item !== key)
        } else {
            filters[attribute] = [...filters[attribute], key]
        }
    }
    const isActive = (attribute, key) => {
        if (!filters[attribute]) return false
        return filters[attribute].includes(key)
    }
    const elipsis = (name) => {
        if (name.length > 15) return name.substring(0,15) +  "..."
        return name
    }
</script>

<article class="thin-scrollbar">
    <h1>Filtrer les résultats</h1>
    <span class="info">Nombre d'opérations: 
        <b>
            {attributes?.rows ? attributes.rows.length : 0}
        </b>
    </span>  

    <span class="warning">⚠️  Lorsque l’échantillon est très faible il ne peut être considéré comme une représentatif.</span>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span class="download" on:click={() => getFilterasCSV(attributes.rows)}>
        Télecharger les données filtrées <i class="micon">file_download</i>
    </span>
    {#each Object.keys(filtersFields) as attribute}
        <section>
            <h3 class="flex">
                <span class="title flex"> 
                    <i class="micon" style="margin-right:6px;font-size:18px;">filter_list</i>
                    {filtersFields[attribute]} 
                </span>
                {#if filters[attribute]?.length > 0}
                    <button class="btn" style:color="#e57373" on:click={() => filters[attribute] = []}>
                        <i class="micon">clear</i>
                    </button>
                {/if}
            </h3>
            <div class="filter">
                {#await getFilterValues(attribute, defaultAttributes, filters)}
                    <p>Chargement...</p>
                {:then values}
                    {#each Object.keys(values).sort() as key}
                        {@const name = key }
                        {#key filters[attribute]}
                            <button on:click={() => toggle(attribute, key)} class:active={isActive(attribute, key)}  disabled={!values[key] > 0}>
                                <span class="flex">
                                    <i class="micon"> 
                                        {isActive(attribute, key) ? 'check_box' : 'check_box_outline_blank'} 
                                    </i>
                                    {#if name.match(/^\d/)}  
                                        <span>
                                            {name.length > 15 ? elipsis(name.substring(2)) : name.substring(2)}
                                            {#if name.length > 15}
                                                <span class="tooltip">{name.substring(2)}</span>
                                            {/if}
                                        </span>
                                    {:else}
                                    <span>
                                        {name.length > 15 ? elipsis(name) : name}
                                        {#if name.length > 15}
                                            <span class="tooltip">{name}</span>
                                        {/if}
                                    </span>
                                    {/if}
                                </span>
                                <code>{values[key] || 0}</code>
                            </button>
                        {/key}
                    {/each}
                {/await}
            </div>
        </section>
    {/each}
</article>

<style>
    h1 {
        font-size: 18px;
    }

    span.warning {
        display: block;
        padding: 8px 0;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        font-size: 12px;
    }
    article{
        display: flex;
        flex-direction: column;
        padding: 8px;
        border-radius: 8px;
        background-color: #002654;
        height: fit-content;
        color: #fff;
        gap: 16px;
        max-width: 256px;
        padding: 16px;
        position: sticky;
        top: 20px;
        height: calc(100vh - 80px - 134px);

        overflow-y: auto;
        scrollbar-width: thin;
    }
    section{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
    }
    h3 {
        color: #fff;
        margin: 16px 4px 4px 0;
        font-family: Roboto;
        font-size: 15px;
        text-transform: none;
        letter-spacing: 0;
        justify-content: space-between;
    }
    h3 button {
        padding: 0;
    }
    h3 button i {
        font-size: 18px;
    }

    .filter{
        display: flex;
        width: 320px;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;

        width: 100%;
        margin: 4px 0;
        border-radius: 4px;
        background: #fafafa;
        padding: 8px;
        border: 1px solid #e0e0e0;
    }
    .filter button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 8px;
        padding: 4px 4px;
        letter-spacing: 0;
        text-transform: capitalize;
    }
    .filter button:hover{
        background: var(--primary-lighten-1);
    }
    .filter button.active{
        background: var(--primary-lighten-2);
    }
    .filter button:disabled{
        opacity: 0.6;
        cursor: default
    }
    .filter button span i{
        font-size: 18px;
        margin-right: 8px;
        color: #9e9e9e;
    }
    code {
        font-family: JetBrains;
        color: var(--secondary);
        font-size: 14px;
        width: 16px;
        height: 16px;
        border-radius: 50px;
    }

    .tooltip{
        display: none;
        position: absolute;
        background: #fff;
        color: #000;
        padding: 8px;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,0.2);
        z-index: 100;
    }
    .tooltip::before{
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        top: -8px;
        left: 50%;
        transform: translateX(50%);
    }
    .filter button:hover .tooltip{
        display: block;
    }
    span.info{
        font-size: 12px;
        color: #fff;
        display: flex;
        align-items: center;
        gap: 1em;
    }
    span.download{
        cursor: pointer;
        font-size: 12px;
        display: flex;
        color: var(--secondary-lighten);
    }
    span.download i{
        font-size: 18px;
        margin-right: 8px;
    }
</style>