<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    export let value;
    export let options;

    let ctx;
    let chart;
    let option = {
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: "category",
            data:  Object.keys(value).map((key) => key),
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: Object.keys(value).map((key) => value[key]),
                type: "bar",
            },
        ],
    };
    onMount(async () => {
        chart = echarts.init(ctx);
        chart.setOption(option);
    });

    const updated = (value) => {
        if (!chart) return;
        option.series[0].data = Object.keys(value).map((key) => value[key]);
        chart.setOption(option);

    };

    $: updated(value);
</script>

<div bind:this={ctx}></div>
{#if options.attribute === "zone_climatique"}
    <img src="STATIC_PATH/img/climate_zone.png" alt="bar chart" width="300" height="250">
{/if}

<style>
    div {
        min-width: 300px;
        min-height: 250px;
        max-height: 250px;
    }
    img {
        height: 235px;
        width: auto;
    }
</style>

