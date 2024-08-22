<script>
    import Show from "$module/session/account/Show.svelte";
    import { Legend } from "chart.js";
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    export let value;

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
<style>
    div {
        min-width: 300px;
        min-height: 250px;
        max-height: 250px;
    }
</style>

