<script>
    import Charts from './Chart.svelte';
    export let data;

</script>

    <article>
       {#each data.charts as theme }
       <h3> {theme?.theme} </h3>
       <div>
           {#each theme?.charts as chart }
               <Charts chart={chart} bind:values={data.attributes}/>
           {/each}
        </div>
       {/each}
    </article>

    <!-- <pre>
        {JSON.stringify(data.attributes, null, 2)}
    </pre> -->

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
    article {
        text-align: left;
        padding: 0 40px 40px 40px;

        width: 100%;
        height: 100%;
    }

</style>