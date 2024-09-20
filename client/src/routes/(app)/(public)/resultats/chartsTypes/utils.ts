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
                type: 'stacked_hzbar',
                attribute: 'fonction',
            },
            {
                title: 'Zone climatique',
                type: 'bar',
                attribute: 'zone_climatique'
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