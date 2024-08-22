<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    export let value;

    let ctx;
    let chart;
    const series = Object.keys(value).map((key) => ({
        name: key,
        type: "bar",
        stack: "total",
        data: Object.keys(value[key]).map((k) => value[key][k]),
        
    }));

    const option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            selectedMode: false,
            bottom: 20, 
        },
        grid:{
            top: 10,
            bottom: 100,    
        },
        yAxis: {
            type: "value",
        },
        xAxis: {
            type: "category",
            data: Object.keys(value[Object.keys(value)[0]]),
        },
        series,
    };
    onMount(async () => {
        chart = echarts.init(ctx);
        chart.setOption(option);
    });

    const update = () => {
        if (!chart) return;
        chart.setOption(option);
    };
</script>

<div bind:this={ctx}></div>

<style>
    div {
        min-width: 400px;
        min-height: 250px;
        max-height: 250px;
    }
</style>
