<script>
    import * as echarts from "echarts";
    import { getTooltips, colors, getCSV } from "./utils";
    import { onMount } from "svelte";
    export let value;
    export let options = {};
    export let row = false;
    export const downloadCSV = () => {
        return getCSV(
            option.series,
            "double_entry",
            options.title,
            option.yAxis.data,
        );
    };

    let ctx;
    let chart;
    let legend = [];

    const getSeries = async () => {
        if (!value || !options) return;
        if (!value.rows) return;
        const data = value.rows;
        legend = [];
        const attributes = options.attribute;
        let axis = {};
        let series = [];

        data.forEach((element) => {
            if (!axis[element[attributes]]) axis[element[attributes]] = {};
            if (!axis[element[attributes]].Neuf)
                axis[element[attributes]].Neuf = 0;
            if (!axis[element[attributes]]["Rénovation"])
                axis[element[attributes]]["Rénovation"] = 0;
            if (!legend.includes(element[attributes]))
                legend.push(element[attributes]);

            if (element.nature_travaux === "Neuf")
                axis[element[attributes]].Neuf++;
            else axis[element[attributes]]["Rénovation"]++;
        });

        Object.keys(axis).forEach((key, i) => {
            series.push({
                name: key,
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                },
                emphasis: {
                    focus: "series",
                },
                data: [axis[key].Neuf],
            });
            series.push({
                name: key,
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                },
                itemStyle: {
                    decal: {
                        color: `rgba(0, 0, 0, .3)`,
                        borderWidth: 1,
                        dashArrayX: [1, 0],
                        dashArrayY: [2, 5],
                        rotation: 45,
                    },
                },
                emphasis: {
                    focus: "series",
                },
                data: [axis[key]["Rénovation"]],
            });
        });

        return series;
    };
    const getLegend = () => {
        return {
            bottom: "15%",
        };
    };

    let option = {
        tooltip: getTooltips(false),
        grid: {
            left: "3%",
            right: "4%",
            top: 10,
            bottom: "35%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
        },
        yAxis: {
            type: "category",
            data: [""],
        },
        color: colors,
    };

    onMount(async () => {
        chart = echarts.init(ctx);
        if (!value || !options) return;
        update(value);
    });

    const update = async (value) => {
        if (!chart || !value || !options) return;
        if (row && !value.rows) return;
        option.series = await getSeries();
        option.legend = await getLegend();
        chart.setOption(option, { notMerge: true });
    };

    $: update(value);
</script>

<article>
    <div bind:this={ctx}></div>
    <section>
        <span>
            <i class="micon">texture</i>
            Rénovation
        </span>
        <span>
            <i class="empty"></i>
            Neuf
        </span>
      
    </section>
</article>

<style>
    div {
        min-width: 650px;
        min-height: 400px;
        max-height: 400px;
    }
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    section {
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 0 16px;
        border-radius: 8px;
        background-color: #fefefe;
    }
    span {
        display: flex;
        align-items: center;
        margin: 0 8px;
    }

    span i.empty {
        border-radius: 10%;
        overflow: hidden;
        margin-right: 4px;
        padding: 0;
        border: 1px solid #000;
        background-size: 100%;
        width: 24px;
        height: 18px;
    }
    span i.micon {
        transform: rotate(90deg);
    }
</style>
