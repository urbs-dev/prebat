<script>
    export let chart
    export let values

    import Doughnut from './chartsTypes/Doughnut.svelte';
    import Bar from './chartsTypes/Bar.svelte';
    import StackedHzBar from './chartsTypes/StackedHzBar.svelte';
    import StackedBar from './chartsTypes/StackedBar.svelte';
    import ErrorBar from './chartsTypes/ErrorBar.svelte';
    import MultipleErrorBar from './chartsTypes/MultipleErrorBar.svelte';
    import GroupedBar from './chartsTypes/GroupedBar.svelte';

    const TYPE = {
        'stacked_hzbar': StackedHzBar,
        'stacked_bar': StackedBar,
        'bar': Bar,
        'doughnut': Doughnut,
        'error_bar': ErrorBar,
        'multiple_error_bar': MultipleErrorBar,
        'grouped_bar': GroupedBar,
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
    <h4>{chart.title}</h4> 
    <div>
        {#if isArray(chart.attribute) && getArrayValues(chart.attribute)}
            <svelte:component this={TYPE[chart.type]} value={getArrayValues(chart.attribute)}/>
        {:else if valueIsSingle(values ,chart.attribute)}
            <svelte:component this={TYPE[chart.type]} value={values[chart.attribute]}/>
        {:else}
            <svelte:component this={TYPE[chart.type]} value={values} options={chart} row={true}/>
        {/if}

    </div>
</section>

<style>
    section{
        background: #f5f5f5;
        padding: 16px;
        border-radius: 8px;
    }
</style>