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
            formatter: function (params) {
                let result = `${params[0].axisValueLabel} <br/> `
                params.map((param)=> {
                    if ( param.value === 0 ) return
                    let colorSpan =
                        '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                        param.color +
                        '"></span>';
                    result = `${result} ${colorSpan} ${param.seriesName} 
                    <span style="float:right;margin-left:20px;font-size:14px;color:#666;font-weight:900">${param.value}</span> <br/>`
                })
                return result;
            },
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

export const getFilterValues = (keys, AllData, filters) => {
    let result = {}
    let total
    if (!AllData[keys]){
        AllData.rows.map((row)=>{
            if(!result[row[keys]]) result[row[keys]] = 0
        })
    }
    else {
        Object.keys(AllData[keys]).map((key)=>{
            if(key === "") return
            if(!result[key]) result[key] = 0
        })
    }

    const filtersKeys = Object.keys(filters)
    if (filtersKeys.length > 0){ 
        AllData.rows.map((row)=>{ // for each row
            let check = true
            filtersKeys.map((key)=>{ // for each filter
                if (key !== keys){ // if the filter is not the current filter
                    if (filters[key].length > 0){ // if the filter has values
                        if (!filters[key].includes(row[key])) check = false // if the row is in the filter
                    }
                }
            })
            if (row[keys] === "") return result["Non renseigné"] ++
            if (check) result[row[keys]] ++
        })
    }
    else {
        if (!AllData[keys]){
            AllData.rows.map((row)=>{
                if(row[keys] === "") return result["Non renseigné"] ++
                result[row[keys]] ++
            })
        }
        else{
            Object.keys(AllData[keys]).map((key)=>{
                result[key] = AllData[keys][key]
            })
        }
    }
    Object.keys(result).map((key)=>{
        if (!total) total = result[key]
        else total += result[key]
    })

  
    return result
}

export const charts = [
    {
        theme: 'Données générales',
        charts: [
            {
                title: 'Typologie et fonction principale des bâtiments',
                type: 'hzbar',
                attribute: 'fonction',
                rows: true
            },
            // {
            //     title: 'Zone climatique',
            //     type: 'bar',
            //     attribute: 'zone_climatique'
            // },
            {
                title: 'Consomation totale des habitations collectives',
                type: 'histogram',
                attribute: 'conso_tot',
                fonction: 'habitat collectif'
            },
            {
                title: 'Nature des travaux réalisés',
                type: 'doughnut',
                attribute: 'nature_travaux'
            },
            // {
            //     title: 'Label énergétique',
            //     type: 'doughnut',
            //     attribute: 'label_energetique'
            // }
        ]
    },
    {
        theme: 'ENVELOPPE ET SYSTEMES',
        charts: [
            // {
            //     title: 'Température de consigne théorique (RT) et mesurée',
            //     type: 'multiple_error_bar',
            //     attribute: ['temp_consigne_rt', 'temp_consigne_mesure'],
            //     groupedBy: 'fonction'
            // },
            // {
            //     title: 'Ubat',
            //     type: 'multiple_error_bar',
            //     attribute: ['ubat_rt', 'ubat_mesure'],
            //     groupedBy: 'fonction'
                
            // },
            {
                title: 'Typologie d’isolation principale (parois opaque)',
                type: 'stacked_hzbar',
                attribute: 'isolation_pvo'
            },
            {
                title: 'Classe d’inertie',
                type: 'stacked_hzbar',
                attribute: 'classe_inertie'
            }, 
            {
                title: 'Typologie de système de chauffage',
                type: 'stacked_hzbar',
                attribute: 'systeme_chauffage',
                groupedBy: "fonction"

            }, 
            {
                title: 'Typologie de système d’ECS',
                type: 'stacked_hzbar',
                attribute: 'ecs_principal',
                groupedBy: "fonction"

            },
            {
                title: 'Perméabilité à l’air',
                type: 'error_bar',
                attribute: ['permeabilite_air'],
                groupedBy: 'fonction',
                axisLabel:'Q4Pa (m³/(h.m²))'
            }
            
        ]
    },
    {
        theme: 'Consommation production',
        charts: [
            // {
            //     title: 'Consommation totale',
            //     type: 'grouped_bar',
            //     attribute: 'conso_tot',
            //     groupedBy: 'fonction',
            //     check: {attribute: 'nature_travaux', value: 'neuf'}
            // },
            {
                title: 'Consommation de chauffage',
                type: 'error_bar',
                attribute: ['conso_chauffage'],
                groupedBy: 'fonction',
                axisLabel:'Consommation (kWhₑₚ/(m².an))'
            },
            {
                title: 'Consommation de chauffage',
                type: 'histogram',
                attribute: 'conso_chauffage',
                fonction: 'habitat collectif'
            },
            {
                title: 'Consommation d’ECS',
                type: 'error_bar',
                attribute: ['conso_ecs'],
                groupedBy: 'fonction',
                axisLabel:'Consommation (kWhₑₚ/(m².an))'

            },
            {
                title: 'Consommation  des ventilations',
                type: 'error_bar',
                attribute: ['conso_ventilation'],
                groupedBy: 'fonction',
                axisLabel:'Consommation (kWhₑₚ/(m².an))'

            },
            {
                title: 'Consommation d’éclairage',
                type: 'error_bar',
                attribute: ['conso_eclairage'],
                groupedBy: 'fonction',
                axisLabel:'Consommation (kWhₑₚ/(m².an))'

            },
            // {
            //     title: 'Confort Thermique estival et hivernal',
            //     type: 'stacked_bar',
            //     attribute: ['confort_ete', 'confort_hiver'],
            //     groupedBy: 'fonction'
            // }
        ]
    }
]

export const filtersFields = {
    region: "Région",
    fonction : "Fonction",
    nature_travaux: "Nature des travaux",
}

export const colors = [
    "rgba(190, 205, 67, 1)",
    "rgba(47, 161, 124, 1)",
    "rgba(81, 189, 169, 1)",
    "rgba(51, 166, 189, 1)",
    "rgba(121, 198, 216, 1)",
    "rgba(255, 125, 36, 1)",
    "rgba(255, 78, 31, 1)",
    "rgba(137, 185, 65, 1)"
]

export const getCSV = async (series, type, title, yAxis = false) => {
    const csv = await getCSVData(series, type, yAxis)
    if (!csv) return false
    // return true

    download(csv, title)
    
    return true
}
export const getFilterasCSV = async (filters) => {
    let csv = ""
    let headers = ""
    let content = ""
    console.log(filters);
    
    Object.keys(filters[0]).map((key, i)=>{
        headers += `${key}`
        if (i < Object.keys(filters[0]).length - 1){
            headers += ";"
        }
    })
    console.log(headers);
    
    filters.map((row, i)=>{
        Object.keys(row).map((key, y)=>{
            content += `${row[key]}`
            if (y < Object.keys(row).length - 1){
                content += ";"
            }
        })
        content += "\n"
    })
    csv = `${headers}\n${content}`
    if (!csv) return false
    download(csv, "Résultats - Filtres")
    return true
}

const getCSVData = (series, type, yAxis) => {
    let csv = ""
    let headers = ""
    let content = ""

    if ( type === 'doughnut'){
        const data = series[0].data
        data.map((row, i)=>{
            headers += `${row.name}`
            content += `${row.value}`
            if (i < data.length - 1){
                headers += ";"
                content += ";"
            }
        })
    }
    else if ( type === 'stacked_hzbar') {
        const data = series
        data.map((row, i)=>{
            headers += `${row.name}`
            if (row.data[0] === "" )
                content += "0"
            else
                content += `${row.data[0]}`

            if (i < data.length - 1){
                headers += ";"
                content += ";"
            }
        })
    }
    else if ( type === 'histogram') {
        const data = series

        data.map((col, i)=>{
            headers += `${col.name}`
            if (i < data.length - 1){
                headers += ";"
            }
        })
        Array.from({ length: data[0].data.length }).map((_, i)=>{
            data.map((col, y)=>{
                content += `${col.data[i]}`
                if (y < data.length - 1){
                    content += ";"
                }
            })
            content += "\n"
        })
    }
    else if ( type === 'double_entry') {
        const data = series
        headers += " ;"
        data.map((row, i)=>{
            headers += `${row.name}`
            if (i < data.length - 1){
                headers += ";"
            }
        })
        yAxis.map((row, i)=>{
            content += `${row}`
            data.map((col, y)=>{
                content += `;${col.data[i]}`
            })
            content += "\n"
        })
    }
    csv = `${headers}\n${content}`
    return csv
}

const download = (csv, title) => {
    let blob = new Blob([csv], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement('a');

    link.href = url;
    link.setAttribute('hidden', '');
    link.style.visibility = "hidden";    
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}