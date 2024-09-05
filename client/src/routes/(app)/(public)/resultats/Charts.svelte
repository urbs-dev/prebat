<script>
    import Charts from './Chart.svelte';
    import Filter from './Filter.svelte';
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
</script>

<section>
    <Filter bind:filters={filters} defaultAttributes={data.attributes} bind:attributes/>
    <article>
       {#each charts as theme }
            <h3> {theme?.theme} </h3>
            <div>
                {#each theme?.charts as chart }
                    <Charts chart={chart} bind:values={attributes}/>
                {/each}
            </div>
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
        margin: 16px 0 8px 0;
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
    }
</style>