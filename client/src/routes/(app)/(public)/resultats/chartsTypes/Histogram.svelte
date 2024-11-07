<script lang="ts">
    import * as echarts from 'echarts';
    import { onMount } from 'svelte';
    import { colors, round, getCSV } from './utils'
    import { Select }  from 'gros/form'
    export let value;
    export let options
    export const downloadCSV = () => getCSV(option.series, 'histogram', options.title);
    let ctx;
    let chart;
    let operationCount = 0
    let fonction = "Tous"
    let fonctions = ["Tous"]

    let option = {
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataView: { readOnly: true },
               
        //     },
        // },
        tooltip: {
            show: true,
        },
        legend: {
            data: ["Rénovation", "Neuf"],
            bottom: 20,
        },
        xAxis: [],
        yAxis: {
            type: "value",
        },
        series: [],
        color: colors
    };
    const getSerie = (value) => {
        let rows = value.rows
        const attribute = options.attribute
        let series = { "renovation": [], "new": [] }

        rows.sort((a, b) => a[attribute] - b[attribute]);
        rows.forEach(row => {
            if ( fonction !== "Tous" && row.fonction !== fonction) return
            if (row[attribute] === null) return
            if ( row.nature_travaux.startsWith('Rénovation')) {
                series.renovation.push(round(row[attribute]))
                series.new.push("-")
            } else {
                series.new.push(round(row[attribute]))
                series.renovation.push("-")
            }
        });
        operationCount = series.renovation.length
        return [
            {
                name: "Rénovation",
                type: "bar",
                barWidth: '95%',
                stack: "total",
                barCategoryGap: "50%",
                data: series.renovation,
            },
            {
                name: "Neuf",
                type: "bar",
                stack: "total",
                barCategoryGap: "50%",
                barWidth: '95%',
                data: series.new,
            }
        ]
    }
    const getxAxis = () => {
        return [
            {
                data:  Array.from({length: operationCount}, () => ""),
                show: false,
            },
            {
                position: "bottom",
                data: [fonction],
            }
        ]
    }

    const updated = async (value) => {
        if (!chart || !value || !options ) return;
        if (!value.rows) return
        fonctions = ["Tous", ...Object.keys(value.fonction)]
        option.series = await getSerie(value)
        option.xAxis = await getxAxis()
        chart.setOption(option);
    };

    onMount(async () => {
        chart = echarts.init(ctx);
        updated(value)
    });

    $: updated(value);

    $: fonction, updated(value)

</script>
<section>
    {#key fonctions}
        <Select
            icon = "filter_list"
            label="Fonction"
            options={fonctions}
            bind:value={fonction}
        />
    {/key}
    
    
    <div bind:this={ctx}>
        {#if operationCount === 0}
        <span class="error">
            <p> Aucune donnée à afficher </p>
        </span>
        {/if}
    </div>

    
</section>
<style>
    section{
        display: flex;
        flex-direction: column;
        align-items: end;
        
        min-width: 600px;
        min-height: 400px;
        max-height: 400px;
    }
    div{
        position: relative;
        width: 100%;
        height: 80%;
        min-width: 100%;
        min-height: 80%;
    }
   .error{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
   }
   .error p{
        color: var(--secondary-darken);
        background-color: var(--background-lighten);
        padding: 16px;
        border-radius: 8px;
        
    }
</style>
