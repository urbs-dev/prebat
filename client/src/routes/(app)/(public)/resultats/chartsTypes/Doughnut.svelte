<script>
    import * as echarts from 'echarts';

    import { onMount } from 'svelte';
    import { colors } from './utils';
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
            ],
            color: colors
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
        min-width: 400px;
        max-width: 400px;
        min-height: 400px;
        max-height: 400px;
    }
</style>