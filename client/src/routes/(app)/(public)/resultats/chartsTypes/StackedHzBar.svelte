<script>
    import * as echarts from "echarts";
    import { getTooltips } from "./utils";
    import { onMount } from "svelte";
    export let value ;
    export let options = {};
    export let row = false;

    let ctx;
    let chart;

    const getSeriesGroups = () => {
        if (!options.groupedBy || !value ) return;
        return Object.keys(value[options.groupedBy])
    }

    const getSeries = () => {
        if (!value || !options) return;
        if (!row){
            return Object.keys(value).map((key) => ({
                name: key,
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                },
                emphasis: {
                    focus: "series",
                },
                data: [value[key]],
            }));
        } else {
            const seriesGroups = getSeriesGroups()
            let series = {};
            let seriesName = [];
            let result = [];
            value.rows.forEach((row) => {
                if (!series[row[options.groupedBy]])
                    series[row[options.groupedBy]] = {};
                let subSeries = row[options.attribute];

                if (!seriesName.includes(subSeries)) seriesName.push(subSeries);
                if (series[row[options.groupedBy]][subSeries])
                    series[row[options.groupedBy]][subSeries]++;
                else series[row[options.groupedBy]][subSeries] = 1;
            });
            seriesName.forEach((name) => {
                return result.push({
                    name: name,
                    type: "bar",
                    stack: 'total',
                    label: {
                        show: true, 
                        formatter: function(param) {
                            return param.data == 0 ? '': param.data;
                            }
                        },
                    emphasis: {
                    },
                    data: seriesGroups.map((group) =>
                        series[group][name] ? series[group][name] : 0,
                    ),
                });
            });
            return result;
        }
    };

    const getYAxisOptions = () => {
        if (!row)
            return {
                type: "category",
                data: [""],
            };
        else {
            if (!options.groupedBy) return;
            return {
                type: "category",
                min: 1,
                data: getSeriesGroups(),
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    margin: 10,
                    textStyle: {
                        fontSize: 10,
                    },
                    formatter: function (value) {
                        if (value.length > 13) {
                            return value.substring(0, 13) + '...';
                        }
                        return value;
                    }
                },
            };
        }
    };

    let option = {
        tooltip: getTooltips(row),
        legend: {
            show: true,
            orient: "horizontal",
            type: "scroll",
            bottom: 20,
        },
        grid: {
            left: "3%",
            right: '4%',
            top: 10,
            bottom: "20%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
        }
    };

    onMount(async () => {
        chart = echarts.init(ctx);
        if ( !value || !options) return;
        update(value);
    });

    const update = async (value) => {
        if (!chart || !value || !options) return;
        if (row && !value.rows ) return;

        option.yAxis = await getYAxisOptions(value);
        option.series = await getSeries();
        chart.setOption(option, {"notMerge": true});
    };

    $: update(value)
</script>

<div bind:this={ctx}></div>

<style>
    div {
        min-width: 450px;
        min-height: 250px;
        max-height: 250px;
    }
</style>
