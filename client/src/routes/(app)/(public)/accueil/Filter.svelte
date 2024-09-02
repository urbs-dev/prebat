<script>
    import { filtersFields, getFilterValues } from './chartsTypes/utils'
    export let filters = {}
    export let defaultAttributes = {}
    export let attributes

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

<article>
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
                    {#each Object.keys(values) as key}
                        {@const name = key }
                        {#key filters[attribute]}
                            <button on:click={() => toggle(attribute, key)} class:active={isActive(attribute, key)}  disabled={!values[key] > 0}>
                                <span class="flex">
                                    <i class="micon"> 
                                        {isActive(attribute, key) ? 'check_box' : 'check_box_outline_blank'} 
                                    </i>
                                    <span> {name.length > 15 ? elipsis(name) +  "..." : name}</span>
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
    article{
        display: flex;
        flex-direction: column;
        padding: 8px;
        border-radius: 8px;
        background-color: #002654;
        height: fit-content;
        color: #fff;
        gap: 16px;
    }
    section{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
    }
    h3 {
        color: #fff;
        margin: 24px 4px 4px 0;
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
</style>