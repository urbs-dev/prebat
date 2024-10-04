<script>
    import * as echarts from "echarts";
    import { onMount } from "svelte";
    import { getCategoreis, deviation, round, colors } from "./utils";
    export let value;
    export let options = {};

    let range = {}
    let rawData = {};
    let deviations = {};

    let categoryData = getCategoreis(value, options.groupedBy);

    const getBarData = (value) => {
        let data = {};
        let result = {};
        options.attribute.map((attribute, i) => {
            data[attribute] = {}
        });
        value.map(row => {
            options.attribute.map((attribute, i) => 
            {
                // error case
                if (!data[attribute][row[options.groupedBy]]) data[attribute][row[options.groupedBy]] = [];
                if (!range[attribute]) range[attribute] = {};
                if (!range[attribute][row[options.groupedBy]]) range[attribute][row[options.groupedBy]] = {min: Number(row[attribute]), max: Number(row[attribute])};
                if (!row[attribute] || isNaN(row[attribute])) return;

                data[attribute][row[options.groupedBy]].push(Number(row[attribute]));

                if (range[attribute][row[options.groupedBy]].min > Number(row[attribute]))
                    range[attribute][row[options.groupedBy]].min = round(Number(row[attribute]));
                if (range[attribute][row[options.groupedBy]].max < Number(row[attribute])) 
                    range[attribute][row[options.groupedBy]].max = round(Number(row[attribute]));
            });
        });

        rawData = data;
        categoryData.map((key, i) => {
            Object.keys(data).map((attribute, y) => {
                const arr = data[attribute][key];
                if (!result[attribute]) result[attribute] = [];
                result[attribute][i] = round(arr.reduce((acc, curr)=> {
                    return acc + curr
                }, 0) / arr.length);
                if (!deviations[attribute]) deviations[attribute] = {};
                deviations[attribute][key] = deviation(data[attribute][key]);
            });
        });
        let rangeResult = {min: [], max: []};
        categoryData.map((key, i) => {
            rangeResult.min[i] = [i];
            Object.keys(range).map((attribute, y) => {
                if(!range[attribute] || !range[attribute][key]) return;
                rangeResult.min[i][y + 1] = range[attribute][key].min;
            });
            rangeResult.max[i] = [i];
            Object.keys(range).map((attribute, y) => {
                if(!range[attribute] || !range[attribute][key]) return;
                rangeResult.max[i][y + 1] = range[attribute][key].max;
            })
        });
        
        range = rangeResult;
        return result;
    }

    let encodeY = []
    options.attribute.map((attribute, i) => {
        encodeY.push(i + 1)
    })

    const getErrorBar = () => {
        let arr = []
        Object.keys(deviations).map((attribute,i) => {
            if (!barData[attribute]) return;
            Object.keys(deviations[attribute]).map((key, y) => {
                if (!arr[y]) arr[y] = [y];
                arr[y].push(round(barData[attribute][y] - deviations[attribute][key]))
                arr[y].push(round(barData[attribute][y] + deviations[attribute][key]))
            })
        })
        deviations = arr;
        return [
            {
                type: 'custom',
                name: 'écart type',
                itemStyle: {
                    borderWidth: 1.5
                    
                },
                renderItem: function (params, api) {
                    var xValue = api.value(0);
                    var highPoint1 = api.coord([xValue, api.value(1)]);
                    var lowPoint1 = api.coord([xValue, api.value(2)]);

                    var highPoint2 = api.coord([xValue, api.value(3)]);
                    var lowPoint2 = api.coord([xValue, api.value(4)]);
                    
                    var halfWidth = api.size([1, 0])[0] * 0.1;
                    var style = api.style({
                        stroke: "#000",
                    });
                    return {
                        type: 'group',
                        children: [
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: highPoint1[0] - halfWidth * 3,
                                    y1: highPoint1[1],
                                    x2: highPoint1[0] - halfWidth,
                                    y2: highPoint1[1]
                                },
                                style: style,
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: highPoint1[0] - halfWidth * 2,
                                    y1: highPoint1[1],
                                    x2: lowPoint1[0]- halfWidth * 2,
                                    y2: lowPoint1[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: lowPoint1[0] - halfWidth * 3,
                                    y1: lowPoint1[1],
                                    x2: lowPoint1[0] - halfWidth,
                                    y2: lowPoint1[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: highPoint2[0] + halfWidth * 3,
                                    y1: highPoint2[1],
                                    x2: highPoint2[0] + halfWidth,
                                    y2: highPoint2[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: highPoint2[0] + halfWidth * 2,
                                    y1: highPoint2[1],
                                    x2: lowPoint2[0]+ halfWidth * 2,
                                    y2: lowPoint2[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: lowPoint2[0] + halfWidth * 3,
                                    y1: lowPoint2[1],
                                    x2: lowPoint2[0] + halfWidth,
                                    y2: lowPoint2[1]
                                },
                                style: style
                            }
                        ],
                        
                    }
                },
                encode: {
                    x: 0,
                    y: [1,2,3,4]
                },
                tooltip: {
                    formatter: function (params) {
                        let colorSpan = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params.color +'"></span>';
                        return `
                            ${colorSpan} ${params.seriesName} <br/>
                        [ ${ params.data[1]}, ${ params.data[3]} ]`;
                    }
                   
                },
                data: arr,
                z: 100
            },
        ]
    }

    const getMinMax = () => {
        return [
            {
                type: 'custom',
                name: 'min',
                itemStyle: {
                    borderWidth: 1.5
                    
                },
                renderItem: function (params, api) {
                    var xValue = api.value(0);
                    var series1 = api.coord([xValue, api.value(1)]);
                    var series2 = api.coord([xValue, api.value(2)]);
                    var halfWidth = api.size([1, 0])[0] * 0.1;
                    var style = api.style({
                        stroke: "#FFFF00",
                        fill: undefined,
                        lineWidth: 3,
                    });
                    return {
                        type : 'group',
                        children: [
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: series1[0] - halfWidth * 3,
                                    y1: series1[1],
                                    x2: series1[0] - halfWidth,
                                    y2: series1[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: series2[0] + halfWidth * 3,
                                    y1: series2[1],
                                    x2: series2[0] + halfWidth,
                                    y2: series2[1]
                                },
                                style: style
                            },
                        ],
                        };
                },
                encode: {
                    x: 0,
                    y: encodeY
                },
                data: range.min,
                z: 100
            },
            {
                type: 'custom',
                name: 'max',
                renderItem: function (params, api) {
                    var xValue = api.value(0);
                    var series1 = api.coord([xValue, api.value(1)]);
                    var series2 = api.coord([xValue, api.value(2)]);
                    var halfWidth = api.size([1, 0])[0] * 0.1;
                    var style = api.style({
                        stroke: "#BB0000",
                        fill: undefined,
                        lineWidth: 3,
                    });
                    return {
                        type : 'group',
                        children: [
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: series1[0] - halfWidth * 3,
                                    y1: series1[1],
                                    x2: series1[0] - halfWidth,
                                    y2: series1[1]
                                },
                                style: style
                            },
                            {
                                type: 'line',
                                transition: ['shape'],
                                shape: {
                                    x1: series2[0] + halfWidth * 3,
                                    y1: series2[1],
                                    x2: series2[0] + halfWidth ,
                                    y2: series2[1]
                                },
                                style: style

                            },
                        ],
                        };
                },
                encode: {
                    x: 0,
                    y: encodeY
                },
                data: range.max,
                z: 100
            }, 
        ]
    }

    const getSeries = () => {
       let series = []
        Object.keys(barData).map((key, i) => {
            series.push({
                type: 'bar',
                name: `moyenne ${key}`,
                data: barData[key],
            })
        })
        getMinMax().map((minMax, i) => {
            series.push(minMax)
        })
        getErrorBar().map((error, i) => {
            series.push(error)
        })
       return series
    }

    let barData = getBarData(value.rows);

    let ctx;
    let chart;

    let option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
            type: 'shadow'
            }
        },
        grid:{
            top: 10,
            bottom: 100,
        },
        legend: {
            bottom: 20,
            data: [
                ...Object.keys(barData).map((key, i) => {
                    return {name:`moyenne ${key}`}
                }),
                {
                    name: 'min',
                    itemStyle: {
                        color: "#FFFF00",
                        borderWidth: 0.5,
                        borderColor: "#000"

                    }
                },
                {
                    name: 'max',
                    itemStyle: {
                        color: "#BB0000"
                    }
                },
                {
                    name: 'écart type',
                    icon: 'path://M8.5 4h7v2H13v12h2.5v2h-7v-2H11V6H8.5z',
                    itemStyle: {
                        color: "#000"
                    }
                }
            ]
        },
        xAxis: {
            data: categoryData,
            axisLabel: {
                interval: 0,
                hideOverlap: true,
                margin: 10,
                rotate: 45,
                overflow: "truncate",
                textStyle: {
                    fontSize: 10,
                },
                formatter: function (value) {
                    if (value.length > 10) {
                        return value.substring(0, 10) + '...';
                    }
                    return value;
                }
            },
        },
        yAxis: {},
        series: getSeries(),
        color: colors
    };
  
    onMount(async () => {
        chart = echarts.init(ctx);
        chart.setOption(option);
    });

    const updated = async (value) => {
        if (!chart) return;
        range = {}
        categoryData = getCategoreis(value, options.groupedBy);
        barData = await getBarData(value.rows);
        option.xAxis.data = categoryData;
        option.series = await getSeries();
        chart.setOption(option);
    };

    $: updated(value);
</script>

<div bind:this={ctx}></div>
<style>
    div {
        min-width: 700px;
        min-height: 250px;
        max-height: 250px;
    }
</style>
