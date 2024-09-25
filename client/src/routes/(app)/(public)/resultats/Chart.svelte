<script>
    export let chart
    export let values
    import { Dropdown } from 'gros/dropdown';

    import Doughnut from './chartsTypes/Doughnut.svelte';
    import Bar from './chartsTypes/Bar.svelte';
    import StackedHzBar from './chartsTypes/StackedHzBar.svelte';
    import StackedBar from './chartsTypes/StackedBar.svelte';
    import ErrorBar from './chartsTypes/ErrorBar.svelte';
    import MultipleErrorBar from './chartsTypes/MultipleErrorBar.svelte';
    import GroupedBar from './chartsTypes/GroupedBar.svelte';
    import Histogram from './chartsTypes/Histogram.svelte';
    let downloadCSV
    const TYPE = {
        'stacked_hzbar': StackedHzBar,
        'stacked_bar': StackedBar,
        'bar': Bar,
        'doughnut': Doughnut,
        'error_bar': ErrorBar,
        'multiple_error_bar': MultipleErrorBar,
        'grouped_bar': GroupedBar,
        'histogram': Histogram
    }

    const isArray = (value) => Array.isArray(value) && value.length > 0

    const valueIsSingle = (values, attribute) =>{
        if (isArray(attribute))  return false
        if (!values[attribute]) return false
        return true
    } 

    const getArrayValues = (attributes) => {
        let result = {}
        attributes.forEach(attribute => {
            if (!values[attribute]) return result = false
            result[attribute] = values[attribute]
        })
        return result
    }

</script>

<section class="chart">
    <h4>
        {chart.title}   
        <Dropdown  position="bottom-end">
            <button>
                <i class="micon"> more_vert </i>
            </button>
            <aside slot="content">
                {#if downloadCSV}
                    <button on:click={() => downloadCSV() }>
                        Télecharger les données en CSV
                    </button>
                {/if}
            </aside>
        </Dropdown>
    </h4>   
    <div>
        {#if values}
            {#if isArray(chart.attribute) && getArrayValues(chart.attribute)}
                {#key values}
                    <svelte:component this={TYPE[chart.type]} value={getArrayValues(chart.attribute)} options={chart} bind:downloadCSV/>
                {/key}
            {:else if valueIsSingle(values ,chart.attribute)}
                <svelte:component this={TYPE[chart.type]} bind:value={values[chart.attribute]} options={chart} bind:downloadCSV/>
            {:else}
                <svelte:component this={TYPE[chart.type]} bind:value={values} options={chart} row={true} bind:downloadCSV/>
            {/if}
        {/if}


    </div>
</section>

<style>
    section{
        padding: 0 16px;
        border-radius: 8px;
        width: fit-content;
        height: fit-content;
        background-color: #fefefe;

    }
    h4{
        color: var(--primary-lighten);
        font-size: 18px;
        margin: 16px 0 8px 0;
        display: flex;
        justify-content: space-between;
        position: relative;
    }
    div{
        display: flex;
        justify-content: center;
    }
    aside{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--background-lighten);
    }
    aside button {
        color: var(--background);
        padding: 8px;
    }
    aside button:hover {
        background-color: var(--background-darken);
    }
</style>