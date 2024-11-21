<script>
    import Charts from './Chart.svelte';
    import Filter from './Filter.svelte';
    import { slide } from 'svelte/transition';
    import { charts } from './chartsTypes/utils'
    export let data;
    let filters = {};
    let attributes;
    let debugFilter

    const formatFilter = (filters) =>{
        let result = ""
        if(Object.keys(filters).length < 1 ) return result
        Object.keys(filters).map((key, index) => {
            if(filters[key].length > 0){
                result += `${key}=${filters[key].join("|")}`
                if(index < Object.keys(filters).length - 1) result += "&"
            }
        })
        debugFilter = result
        return result
    }

    const getAttributes = async (filters) => {
        const params = await formatFilter(filters)
        if (params === "") attributes = data.attributes
        
        const response = await fetch(`BASE_URL/prebat.api/results?${params.replace(/\+/g, '%')}`).then(res => res.json())
        attributes = response 
    }   
    $: getAttributes(filters)
    let hide = {}
</script>

<section>
    <Filter bind:filters={filters} defaultAttributes={data.attributes} bind:attributes/>
    <article>
       {#each charts as theme }
            <aside class:active={ !hide[theme?.theme]} >
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                <h3 on:click={() => hide[theme?.theme] =!hide[theme?.theme]}> 
                    <i class="micon">chevron_right</i>
                    {theme?.theme} 
                </h3>
                {#if !hide[theme?.theme]}
                    <div class="charts" transition:slide>
                            {#each theme?.charts as chart }
                                <Charts chart={chart} bind:values={attributes}/>
                            {/each}
                    </div>
                {/if}

            </aside>
       {/each}
    </article>
</section>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        justify-content: start;
        width: 100%;
        height: 100%;
    }
    h3 {
        color: var(--primary);
        font-size: 18px;

        display: flex;
        align-items: center;

        text-transform: uppercase;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        padding: 8px;
        margin: 0;
        border: 1px solid var(--primary-lighten-2);        

        width: 100%;
        background-color: var(--primary-lighten-2);
    }
    .active h3 i {
        transition: all 0.3s;
        transform: rotate(90deg);
    }
    .charts{
        transition: all 1s ease-out;
    }
    .active .charts{
        transition: all 1s ease-out;
        
    }
    h3 i{
        transition: all 0.3s;
    }
    section {
        text-align: left;
        padding: 0 40px 40px 40px;
        gap: 16px;
        display: flex;

        width: 100%;
        height: fit-content;
    }

    article{
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        min-width: 800px;
    }
    aside {
        display: flex;
        flex-direction: column;
        gap: 8px;
        background-color: var(--background-lighten);
        border-radius: 8px;
        min-height: 0;
        height: fit-content;
    }
    aside div {
        padding: 0 16px 16px 16px;
    }
</style>