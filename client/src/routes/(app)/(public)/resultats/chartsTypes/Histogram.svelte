<script lang="ts">
    import * as echarts from 'echarts';
    import { onMount } from 'svelte';
    import { colors, round } from './utils.ts'

    export let value;
    export let options
    
    let ctx;
    let chart;
    let operationCount = 0

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
            data: ["renovation", "neuf"],
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
            if (row[attribute] === null) return
            if ( row.nature_travaux === "renovation") {
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
                name: "renovation",
                type: "bar",
                barWidth: '95%',
                stack: "total",
                barCategoryGap: "50%",
                data: series.renovation,
            },
            {
                name: "neuf",
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
                data: [options.fonction],
            }
        ]
    }

    const updated = async (value) => {
        if (!chart || !value || !options ) return;
        option.series = await getSerie(value)
        option.xAxis = await getxAxis(value)
        chart.setOption(option);
    };

    onMount(async () => {
        chart = echarts.init(ctx);
        updated(value)
    });

    $: updated(value);


</script>

<div bind:this={ctx}></div>

<style>
    div {
        min-width: 600px;
        min-height: 400px;
        max-height: 400px;
    }
</style>
