<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    export let value;

    let ctx;
    let chart;
    const option = {
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
        // if (!chart) return;
        // const data = {
        //     labels: Object.keys(value),
        //     datasets: [
        //         {
        //             data: Object.keys(value).map((key) => value[key]),
        //         },
        //     ],
        // };
        // chart.data = data;
        // chart.update();
    };

    $: updated(value);
</script>

<div bind:this={ctx}></div>
<style>
    div {
        min-width: 600px;
        max-width: 600px;
        min-height: 300px;
        max-height: 300px;
    }
</style>

