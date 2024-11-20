<script lang="ts">
    import * as echarts from 'echarts';
    import { onMount } from 'svelte';
    import { colors, round, getCSV } from './utils.js'
    import { Select }  from 'gros/form'
    export let value;
    export let options
    export const downloadCSV = () => getCSV(option.series, 'histogram', options.title);
    
    let ctx;
    let chart;
    let operationCount = 0
    let fonction = "Tous"
    let fonctions = ["Tous"]

    // console.log(options)

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
            bottom: 0,
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
        const attributes = options.attribute
        const labels = options.label
        let series = {}
        attributes.map((attribute) => {
            series[attribute] = []
        })

        const orderRows = rows.sort((a, b) => {
            let a_total = 0
            let b_total = 0
            attributes.forEach(attribute => {
                if ( a[attribute] === null) a[attribute] = 0
                if ( b[attribute] === null) b[attribute] = 0
                a_total += round(a[attribute])
                b_total += round(b[attribute])
            })
            return a_total - b_total
        });
        orderRows.forEach(row => {
            if ( fonction !== "Tous" && row.fonction !== fonction) return
            if ( row === null) return
            attributes.forEach(attribute => {
                if ( row[attribute] === null) series[attribute].push("-")
                else series[attribute].push(round(row[attribute]))
            })
        });
        operationCount = series[attributes[0]].length

        return attributes.map((attribute, i) => {
            return {
                name: labels[i],
                type: "bar",
                barWidth: '95%',
                stack: "total",
                barCategoryGap: "50%",
                data: series[attribute],
            }
        })
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
        fonctions = ["Tous", ...Object.keys(value.fonction).sort()]
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
            label="Destination d’usage"
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
