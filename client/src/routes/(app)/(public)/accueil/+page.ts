
const charts = [
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
            {
                title: 'Label énergétique',
                type: 'doughnut',
                attribute: 'label_energetique'
            }
        ]
    },
    {
        theme: 'ENVELOPPE ET SYSTEMES',
        charts: [
            {
                title: 'Température de consigne théorique (RT) et mesurée',
                type: 'multiple_error_bar',
                attribute: ['temp_consigne_rt', 'temp_consigne_mesure'],
                groupedBy: 'fonction'
            },
            {
                title: 'Ubat',
                type: 'multiple_error_bar',
                attribute: ['ubat_rt', 'ubat_mesure'],
                groupedBy: 'fonction'
                
            },
            {
                title: 'Typologie d’isolation principale (parois opaque)',
                type: 'doughnut',
                attribute: 'isolation_pvo'
            },
            {
                title: 'Classe d’inertie',
                type: 'doughnut',
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
                attribute: 'ecs_principal'
            },
            {
                title: 'Perméabilité à l’air',
                type: 'error_bar',
                attribute: ['permeabilite_air'],
                groupedBy: 'fonction',
                

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
                groupedBy: 'fonction'

            },
            {
                title: 'Consommation d’ECS',
                type: 'error_bar',
                attribute: ['conso_ecs'],
                groupedBy: 'fonction'
            },
            {
                title: 'Consommation  des ventilations',
                type: 'error_bar',
                attribute: ['conso_ventilation'],
                groupedBy: 'fonction'
            },
            {
                title: 'Consommation d’éclairage',
                type: 'error_bar',
                attribute: ['conso_eclairage'],
                groupedBy: 'fonction'
            },
            {
                title: 'Confort Thermique estival et hivernal',
                type: 'stacked_bar',
                attribute: ['confort_ete', 'confort_hiver'],
                groupedBy: 'fonction'
            }
        ]
    }
  
]

export const load = ( async () => {
    const response = await fetch(`BASE_URL/prebat.api/results`)
    return {
        attributes: response.json(),
        charts
    } 
})