<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    export let value;

    let ctx;
    let chart;
    const getSeries = () => {
        return Object.keys(value).map((key) => ({
            name: key,
            type: "bar",
            stack: "total",
            data: Object.keys(value[key]).map((k) => value[key][k]),
        }));
    }
    const getXAxis = () => {
        const data = Object.keys(value[Object.keys(value)[0]]);
        if (!data) return false
        return  {
            type: "category",
            data: Object.keys(value[Object.keys(value)[0]]),
        }}

    let option = {
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
        xAxis: {},
        series: {},
    };
    onMount(async () => {
        chart = echarts.init(ctx);
        if (!value) return;
        const axis = await getXAxis();
        const series = await getSeries();
        if (!axis || !series) return;
        option.xAxis= axis;
        option.series = series;
        chart.setOption(option);
    });

    const update = async () => {
        if (!chart || !value) return;
        const axis = await getXAxis();
        const series = await getSeries();
        if (!axis || !series) return;
        option.xAxis= axis;
        option.series = series;
        chart.setOption(option);
    };
    $: update(value)
</script>

<div bind:this={ctx}></div>
<style>
    div {
        min-width: 400px;
        min-height: 250px;
        max-height: 250px;
    }
</style>
