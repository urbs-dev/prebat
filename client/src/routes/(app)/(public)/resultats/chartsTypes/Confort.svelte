<script>
    import * as echarts from "echarts";
    import { getTooltips, colors, getCSV } from "./utils";
    import { onMount } from "svelte";
    export let value ;
    export let options = {};
    export let row = false;
    export const downloadCSV = () => {
        if (!row) 
            return getCSV(option.series, 'stacked_hzbar', options.title)
        else 
            return getCSV(option.series, 'double_entry', options.title, option.yAxis.data)
    };

    const Xlables = [ "confortable", "inconfort localisé", "inconfort généralisé"]
    const yLables = [ "DH26=0", "0<DH26<=100", "100<DH26<=300", "300<DH26<=600", "DH26>600"]

    let ctx;
    let chart;

    const getSeries = async (data) => {
        if (!value || !options) return;
        
        return await yLables.map((name,index) => {
            return {
                name,
                type: "bar",
                stack: "total",
                barWidth: '85%',
                label: {
                    show: true,
                    formatter: function (params) {
                        if (params.value === 0) return ''
                        return params.value
                    }
                },
                data: data[index]
            };
        });
    }

    let option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: true,
            data: yLables,
            bottom: 20,
        },
        grid: {
            left: "3%",
            right: '4%',
            top: 10,
            bottom: "30%",
            containLabel: true,
        },
      
        yAxis: {
            type: 'value'
        },
        xAxis: {
            type: 'category',
            data: Xlables
        },
        color: colors
    };

    onMount(async () => {
        chart = echarts.init(ctx);
        if ( !value || !options) return;
        update(value);
    });

    const getData = (values) => {
        let data =  [
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
        ]
        values.forEach((row) => {
            let Yindex = null
            let Xindex 
            const valueX = row[option.attribute]
            if( valueX <=0) Xindex = 0
            else if (valueX <= 100) Xindex = 1
            else if (valueX <= 300) Xindex = 2
            else if (valueX <= 600) Xindex = 3
            else if (valueX > 600) Xindex = 4
            else return;

            const valueY = row[option.groupedBy]
            if (valueY === "confortable") Yindex = 0
            else if (valueY === "inconfort localisé") Yindex = 1
            else if (valueY === "inconfort généralisé") Yindex = 2
            else return;
           
            data[Xindex][Yindex]++
        });
        return data
    };

    const update = async (value) => {
        if (!chart || !value || !options) return;
        if (row && !value.rows ) return;
        const data = getData(value.rows);
        option.series = await getSeries(data);
        chart.setOption(option, {"notMerge": true});
    };

    $: update(value)
</script>


<div bind:this={ctx}></div>

<style>
    div {
        min-width: 650px;
        min-height: 400px;
        max-height: 400px;
    }
</style>
