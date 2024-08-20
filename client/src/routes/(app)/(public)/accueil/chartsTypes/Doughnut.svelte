<script>
    import * as echarts from 'echarts';

    import { onMount } from 'svelte';
    export let value;
    
    let canvas;
    let chart;

    const option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove|click',
                formatter: function (params) {
                    let colorSpan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color + '"></span>';
                    return `${params.name} <br/> ${colorSpan} <b> ${params.percent}%  </b> 
                    <i>(${params.value})</i>`
                }
            // formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                show: true,
                orient: "horizontal",
                top: "85%",
                type: "scroll",
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    labelLine: {
                        show: false
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
        chart.setOption(option);
    }


    $: update(value);

</script>

<div bind:this={canvas}></div>

<style>
    div {
        min-width: 600px;
        max-width: 600px;
        min-height: 300px;
        max-height: 300px;
    }
</style>
