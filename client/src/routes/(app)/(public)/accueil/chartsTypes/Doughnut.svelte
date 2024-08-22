<script>
    import * as echarts from 'echarts';

    import { onMount } from 'svelte';
    export let value;
    
    let canvas;
    let chart;

    let option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove|click',
                formatter: function (params) {
                    let colorSpan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color + '"></span>';
                    return `${params.name} <br/> ${colorSpan} <b> ${params.percent}%  </b> 
                    <i>(${params.value})</i>`
                }
            },
            legend: {
                show: true,
                orient: "horizontal",
                bottom: 20,
                type: "scroll",
            },
            animation: true,
            series: [
                {
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '39%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                    },
                    data: Object.keys(value).map(key => ({value: value[key], name: key}))
                }
            ]
    }

    onMount(async () => {
        chart = echarts.init(canvas);
        chart.setOption(option);
    });

    const update = () => {
        if (!chart) return;
        option.series[0].data = Object.keys(value).map(key => ({value: value[key], name: key}));
        chart.setOption(option);
    }


    $: update(value);
</script>

<div bind:this={canvas}></div>

<style>
    div {
        min-width: 250px;
        max-width: 250px;
        min-height: 250px;
        max-height: 250px;
    }
</style>
