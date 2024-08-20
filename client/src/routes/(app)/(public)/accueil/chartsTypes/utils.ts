export const getTooltips = (row) => {
    if (!row)
        return {
            trigger: "item",
            formatter: function (params) {
                let colorSpan =
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params.color +
                    '"></span>';
                return `${params.seriesName} <br/> ${colorSpan} <b> ${params.value} </b>`;
            },
        };
    else {
        return {
            trigger: "axis",
        };
    }
};

export const getCategoreis = (row, attribute) => {
    if (!row) return [];
    if (!row[attribute]) return [];
    return Object.keys(row[attribute] )
    
}

export const deviation = (arr) =>{
    if (arr.length === 0) return 0;
    
    let mean = arr.reduce((acc, curr)=>{
        return acc + curr
    }, 0) / arr.length;
    arr = arr.map((k)=>{
        return (k - mean) ** 2
    })
    let sum = round(arr.reduce((acc, curr)=> acc + curr, 0));
    let result = round(Math.sqrt(sum / arr.length));
    if (isNaN(result) || result < 0) return 0;
    return result;
}

export const round = (value) => {
    return Math.round(value * 100) / 100;
}