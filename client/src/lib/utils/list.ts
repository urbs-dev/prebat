export const usages = [
    {
        label: 'Habitation', 
        values: [
            'Habitation individuelle diffus',
            'Habitation individuelle groupée',
            'Habitation collective',
        ]
    },
    {
        label: 'Bureau', 
        values: ['Bureau']
    },
    {
        label: 'Enseignement', 
        values: [
            'Crèche',
            'Ecole',
            'Collège',
            'Lycée',
            'Université',
            'Enseignement - Autre',
        ]
    },
    {
        label: 'Commerce', 
        values: ['Commerce']
    },
    {
        label: 'Santé', 
        values: ['Santé']
    },
    {
        label: 'Hébergement', 
        values: [
            'EHPAD',
            'Hôtel',
            'Internat',
            'Hébergement - Autre',
        ]
    },
    {
        label: 'Restauration', 
        values: ['Restauration']
    },
    {
        label: 'Culture', 
        values: [
            'Bibliothèque',
            'Salle de spectacle',
            'Culture - Autre',
        ]
    },
    {
        label: 'Sport', 
        values: ['Sport']
    },
    {
        label: 'Autre', 
        values: ['Autre']
    },
]

export const getUseTypology = (selected: string[]) => {
    const def = usages.map(({label, values}) => {
        return values.map(value => {
            return { label, value }
        })
    }).flat()
    let typologies = []
    for (const value of selected) {
        typologies.push(def.find(item => item.value === value)?.label)
    }
    if (typologies.filter(Boolean).length === 0) {
        return null
    }
    return [ ...new Set(typologies.filter(Boolean))].join(' ~ ')
}

export const sensor = [
    {
        label: 'Compteur électrique',
        values: [
            `Index  `,
            `Consommation`,
            `Production`,
            `Puissance`,
            `Puissance apparente`,
            `Intensité  `,
            `Cos Phi`,
            `Autre`
        ]
    },
    {
        label: 'Compteur de calories',
        values: [
            'Index',
            'Consommation',
            'Volume',
            'T Chaud',
            'T Froid',
            'Débit eau',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique gaz',
        values: [
            'Index',
            'Volume',
            'Consommation',
            'Débit',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique fioul',
        values: [
            'Index',
            'Volume',
            'Consommation',
            'Débit',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique eau',
        values: [
            'Index',
            'Volume',
            'Débit',
            'Autre',
        ]
    },
    {
        label: 'tours (bois)',
        values: [
            'Tours (-)',
            'Index bois',
            'Autre',
        ]
    },
    {
        label: 'Débit',
        values: [
            'Débit eau',
            'Débit air',
            'Débit gaz',
            'Débit fioul',
            'Autre',
        ]
    },
    {
        'label': 'Pression',
        values: [
            'Pression',
        ]
    },
    {
        label: 'Température',
        values: [
            'Température',
        ]
    },
    {
        label: 'Humidité relative',
        values: [
            'Humidité relative',
        ]
    },
    {
        label: 'Capteur hygrothermique',
        values: [
            'Température',
            'Humidité relative',
        ]
    },
    {
        label: 'Capteur de pression',
        values: [
            'Différence de pression',
        ]
    },
    {
        label: 'Fluxmètre',
        values: [
            'Flux thermique',
        ]
    },
    {
        label: "Capteur de teneur en eau d'un matériau",
        values: [
            'Teneur en eau',
        ]
    },
    {
        label: "Capteur d'humectation",
        values: [
            "Indice d'humectation (SU)",
        ]
    },
    {
        label: 'Station météo',
        values: [
            'Température',
            'Humidité relative',
            'Vitesse du vent',
            'Direction du vent',
            'Pluviométrie',
            'Rayonnement Global horizontal (GLO)',
            'Rayonnement Global vertical (GLO)',
            'Rayonnement direct horizontal (GLO)',
            'Rayonnement diffus horizontal (GLO)',
            'Rayonnement CLO horizontal',
            'Rayonnement CLO vertical',
            'Autre',
        ]
    },
    {
        label: "Vitesse d'air",
        values: [
            "Vitesse d'air",
        ]
    },
    {
        label: 'Rayonnement',
        values: [
            'Rayonnement Global horizontal (GLO)',
            'Rayonnement Global vertical (GLO)',
            'Rayonnement direct horizontal (GLO)',
            'Rayonnement diffus horizontal (GLO)',
            'Rayonnement CLO horizontal',
            'Rayonnement CLO vertical',
            'Autre',
        ]
    },
    {
        label: 'Compteur de présence',
        values: [
            'Index présence',
            'Comptage présence',
        ]
    },
    {
        label:'CO2',
        values: [
            'CO2',
        ]
    },
    {
        label:'Eclairement',
        values: [
            'Eclairement',
        ]
    },
    {
        label: 'Consigne équipement',
        values: [
            'Température',
            'CO2',
            'Niveau robinet thermostatique',
            "Taux d'ouverture (registre ou V3V)",
            'Vitesse de fonctionnement',
            'Autre',
        ]
    },
    {
        label: "Etat de fonctionnement de l'équipement",
        values: [
            "M/A de l'équipement",
            "Vitesse de fonctionnement",
            "Taux d'ouverture",
            "Autre",
        ]
    },
    {
        label: 'Facture',
        values: [
            "Index gaz",
            "Volume gaz",
            "Consommation gaz",
            "Index électrique",
            "Consommation électrique",
            "Index Réseau de chaleur",
            "Consommation Réseau de chaleur",
            "Index eau",
            "Volume eau",
            "Volume de Fioul",
            "Consommation fioul",
            "Volume/masse de Bois livré",
            "Consommation bois",
            "Autre",
        ]
    },
    {
        label: "Perméabilité à l'air de l'enveloppe",
        values: [
            "Q4",
            "N50",
        ]
    },
    {
        label: "Autre",
    }

]

export const system_category = [
    {
        label: "Équipement de production de chauffage et/ou ECS et/ou Froid",
        values: [
            "PAC électrique",
            "PAC gaz",
            "Chaudiere Gaz",
            "Chaudière Fioul",
            "Chaudière bois",
            "Chauffe eau thermodynamique (CET)",
            "Groupe froid",
            "ballon electrique",
            "résistance électrique (appoint)",
            "capteur solaire",
            "reseau de chaleur",
            "Reseau de froid",
            "cogeneration",
            "stockage thermique",
        ]
    },
    {
        label: "Réseau hydraulique",
        values: [
            "Circulateur hydraulique",
            "Vanne 3 voies",
            "Réseau hydraulique",
            "échangeur/récupérateur hydraulique",
            "stockage thermique",
            "Récupérateur sur eau grise",
        ]
    },
    {
        label: "Émetteur de chauffage et de froid",
        values: [
            "Radiateur électrique",
            "Batterie électrique",
            "Batterie hydraulique",
            "Radiateur à eau",
            "Ventilo-convecteur hydraulique",
            "Ventilo-convecteur électrique",
            "Ventilo-convecteur détente directe",
            "Plancher chauffant",
            "Autres émetteurs",
        ]
    },
    {
        label: "Équipement de ventilation",
        values: [
            "CTA",
            "Ventilation naturelle",
            "VMC simple flux auto",
            "VMC simple flux hygro A",
            "VMC simple flux hygro B",
            "VMC double flux",
            "échangeur/récupérateur aéraulique",
            "Registre aéraulique",
            "Bouche de soufflage",
            "Bouche d'extraction",
            "Prise d'air neuf",
            "Rejet d'air vicié",
            "puits canadien / provençale",
        ]
    },
    {
        label: "Éclairage",
        values: [
            "Luminaire fixe",
            "Luminaire mobile",
            "BAES",
        ]
    },
    {
        label: "Equipement immobilier",
        values: [
            "Ascenseur",
            "Serveur",
            "équipement de sécurité",
        ]
    },
    {
        label: "Equipement mobilier",
        values: [
            "équipement de cuisson",
            "Réfrigérateur / Congélateur",
            "Lave Vaisselle",
            "Lave-linge / Seche-linge",
            "Petit électroménager (bouilloire, cafetière ...)",
            "Communication (Box, téléphone ...)",
            "audiovisuel",
            "Bureautique",
            "Impression",
        ]
    },
    {
        label: "Enveloppe",
        values: [
            "Fenêtres",
            "volet/occultation",
        ]
    },
    {
        label: "Production",
        values: [
            "photovoltaique",
            "cogeneration",
        ]
    },
    {
        label: "Divers",
        values: [
           "régulateurs/GTB",
        ]
    },
    {
        label: "Non concerné",
    },
    {
        label: "Autre",
    }
]

export const envelope = [
    { label: 'Système constructif *', name: 'constructive_system', values: [
        `Béton`,
        `Maçonnerie monomur`,
        `Maçonnerie ancienne`,
        `Maçonnerie - autre`,
        `Ossature bois`,
        `Ossature métallique`,
        `Mixte (bois, béton)`,
        `Mixte (bois, maçonnerie)`,
        `Mixte (acier, béton)`,
        `Mixte (acier, maçonnerie)`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Isolation du bâtiment', name: 'building_insulation', values: [
        `Isolation par l'intérieur (ITI)`,
        `Isolation par l'extérieur (ITE)`,
        `Isolation répartie (ITR)`,
        `Isolation intégrée (ITitg)`,
        `Non isolé`,
        `Ne sait pas`,
        
    ] },
    { label: 'Isolation murs', name: 'wall_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
        `Ne sait pas`,
    ] },
    { label: 'Isolation toiture', name: 'roof_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
        `Ne sait pas`,
    ] },
    { label: 'Isolation plancher', name: 'floor_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
        `Ne sait pas`,
    ] },
    { label: 'Menuiserie - vitrage', name: 'window_carpentry', values: [
        `Simple vitrage`,
        `Double vitrage`,
        `Triple vitrage`,
        `Double menuiseries`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Menuiserie - châssis', name: 'frame_carpentry', values: [
        `PVC`,
        `Bois`,
        `Alu`,
        `Mixte`,
        `Ne sait pas`,
        `Aucun`,
    ] },

]

export const system = [
    { label: 'Chauffage de base *', name: 'heating', values: [
        `Radiateurs électriques`,
        `PAC`,
        `Batterie ou résistance électrique`,
        `Chaudière gaz`,
        `Chaudière fioul`,
        `Chaudière bois`,
        `Réseau de chaleur urbain`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Eau chaude sanitaire *', name: 'hot_water', values: [
        `Groupée avec le système de chauffage`,
        `Production instantanée non groupée avec le chauffage`,
        `Ballon électrique`,
        `Ballon thermodynamique`,
        `ECS solaire`,
        `Résistance électrique pour appoint`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Ventilation *', name: 'airing', values: [
        `Ventilation naturelle`,
        `Ventilation hybride`,
        `VMC simple flux autoréglable`,
        `VMC simple flux hygro A`,
        `VMC simple flux hygro B`,
        `VMC double flux`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Climatisation / Rafraichissement', name: 'refresher', values: [
        `Climatisation à détente directe`,
        `Climatisation avec réseau d'eau glacée`,
        `PAC réversible`,
        `Rafraîchissement`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Emetteurs chaud', name: 'hot_emitter', values: [
        `Plancher chauffant`,
        `Plafond chauffant`,
        `Mur rayonnant`,
        `Radiateurs électriques`,
        `Radiateurs à eau basse température`,
        `Radiateurs à eau standards`,
        `Ventilo convecteur`,
        `Batterie à eau chaude dans la gaine de soufflage de la ventilation`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    { label: 'Emetteurs froid', name: 'cold_emitter', values: [
        `Plancher`,
        `Plancher rafraîchissant`,
        `Mur rayonnant`,
        `Poutre froide`,
        `Ventilo convecteur`,
        `Batterie froide`,
        `Autres`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    {
        label: `Pérméabilité à l'air de l'enveloppe`,
        unit: 'm³/(h.m²)',
        name: 'air_permeability', 
        type: 'number',
    },
    {
        label: `Perméabilité à l'air des réseaux`,
        unit: 'm³/(h.m²)',
        name: 'air_permeability_network', 
        type: 'number',
    }
]

export const resultsInfos = [
    {
        title: "Resultats",
        abstract: "Résultats de l’opération nécessaires à la réalisation des graphiques",
        hide: false,
        values: {
            fonction: { 
                label: "Fonction",
                details: "",
                type: "select",
                values: [
                    "1-Habitation individuelle",
                    "2-Habitat collectif",
                    "3-Bureau",
                    "4-Tertiaire autre",
                    "5-Mixte",
                    "6-Non renseigné",
                ]
            },
            permeabilite_air: { label: "Perméabilité à l’air", details: "", type: "number" },
            conso_tot: { label: "Consomation totale", details: "", type: "number" },
            conso_chauffage: { label: "Consommation de chauffage", details: "", type: "number" },
            conso_ecs: { label: "Consommation d'ECS", details: "", type: "number" },
            conso_ventilation: { label: "Consommation de ventilation", details: "", type: "number" },
            conso_eclairage: { label: "Consommation d’éclairage", details: "", type: "number" },
            confort_ete: { 
                label: "Confort été", 
                details: "", 
                type: "select",
                values: [
                    "inconfort localise",
                    "inconfort generalise",
                    "confortable"
                ]
            },
            confort_hiver: { 
                label: "Confort hiver", 
                details: "",
                type: "select",
                values: [
                    "inconfort localise",
                    "inconfort generalise",
                    "confortable"
                ]
            },
            dh26: { label: "DH26", details: "", type: "number" },
            structure: { 
                label: "Structure", 
                details: "",
                type: "select",
                values: [
                    "1-Béton",
                    "2-Maçonnerie-monomur",
                    "3-Maçonnerie-ancienne",
                    "4-Maçonnerie-autre",
                    "5-Ossature bois",
                    "6-Ossature métallique",
                    "7-Mixte (acier, béton)",
                    "8-Mixte (bois, maçonnerie)",
                    "9-Mixte (bois, béton)",
                    "10-Autre"
                ]
            },
            isolation_pvo:{
                label: "Isolation PVO",
                details: "",
                type: "select",
                values: [
                    "1-Isolation par l'intérieur (iti)",
                    "2-Isolation par l'extérieur (ite)",
                    "3-Isolation répartie (itr)",
                    "4-Isolation intégrée (itig)",
                    "5-Iti + ite",
                    "6-Itig + ite",
                    "7-Itig + iti",
                    "8-Itr +ite",
                    "9-Non renseigné"
        
                ]
            },
            conso_auxiliaire: { label: "Consommation auxiliaire", details: "", type: "number" },
            conso_refroidissement: { label: "Consommation refroidissement", details: "", type: "number" },
            conso_rt: { label: "Consommation RT", details: "", type: "number" },
            conso_nonrt: { label: "Consommation non RT", details: "", type: "number" },
            cop_chauffage: { label: "COP de la pompe a chaleur", details: "", type: "number" },
            rendement_chauffage: { label: "Rendement chauffage", details: "", type: "number" },
            rendement_ventilation: { label: "Rendement ventilation", details: "", type: "number" },
            rendement_ecs: { label: "Rendement ECS", details: "", type: "number" },
        }
    },
    {
        title: "Résultats synchronisables",
        abstract: "Résultats issus des questionnaires",
        hide: true,
        values: {
            nature_travaux: { 
                label: "Nature des travaux", 
                details: "",
                type: "select",
                syncable: true,
                values: [
                    "Neuf",
                    "Rénovation",
                    "Rénovation avec extension",
                ]
            },
            region: { label: "Région",  details: "", type:"text", syncable: true,},
            departement: { label: "Département", details: "", type: "number", syncable: true,},
            zone_climatique: { label: "Zone climatique", details: "", type: "text", syncable: true, editable: false },
            shon: { label: "SHON", details: "", type:"number", editable: false, syncable: true },
            surface: { label: "Surface", details: "", type:"number", editable: false, syncable: true},
            shab: { label: "SHAB", details: "", type:"number", editable: false, syncable: true },
            hauteur: { label: "Hauteur du bâtiment", details: "", type:"number", editable: false, syncable: true },
            volume: { label: "Volume", details: "", type:"number", syncable: true },
            label_energetique: { label: "Label energetique", details: "", editable: false, syncable: true  }, //Label / Certification
            systeme_chauffage: { label: "Chauffage de base", details: "", editable: false, syncable: true },
            ecs_principal: { label: "Eau chaude sanitaire", details: "", editable: false, syncable: true },
            fonction_detail: { label: "Fonction détaillé", details: "" , visible: false, syncable: true}, // visible ?
            systeme_ventilation: { label: "Système de ventilation", details: "", editable: false, syncable:true }, // airing
        }
    },
    {
        title: "Autres résultats",
        abstract: "Résultats supplémentaires non représentés dans les graphiques",
        hide: true,
        values: {
            maitre_ouvrage: {
                label: "Maître d'ouvrage",
                details: "",
                type: "select",
                values: [
                    "organisme non professionnel hors logement",
                    "organisme de logements sociaux",
                    "organisme professionnel prive",
                    "etat ou collectivite territoriale hors logement social",
                    "particulier",
                    "copropriete privée",
                    "autre"
                ]
            },
            altitude: { label: "Altitude", details: "", type: "number" },
            bepos: { 
                label: "BEPOS", 
                details: "", 
                type:"select",
                values: [
                    "Oui",
                    "Non",
                    "Ne sait pas",
                ]   
            },
            temp_consigne_rt: { label: "Température RT", details: "", type: "number" },
            temp_consigne_mesure: { label: "Température mesuré", details: "", type: "number" },
            ubat_rt: { label: "UBAT RT", details: "", type: "number" },
            ubat_mesure: { label: "UBAT mesure", details: "", type: "number"},
            classe_inertie: { 
                visible: false,
                label: "Classe d'inertie", 
                details: "",
                type: "select",
                values: [
                    "Très légère",
                    "légère",
                    "Moyenne",
                    "Lourde",
                    "Très lourde",
                    "Autre"
                ]
            },
        }
    }
]

export const parameters = [
    {
        label: "Global",
        values: [
            "Électrique",
            "Gaz",
            "Auto-consommation",
            "Autre",
        ]
    },
    {
        label: "Chauffage",
        values: [
            "Générateur de base",
            "Générateur d'appoint",
            "Apport (solaire, géothermie ... )",
            "Stockage",
            "Réseau primaire",
            "Réseau secondaire (distribution)",
            "Émetteur",
            "Pertes de distribution",
            "Autre",
        ]
    },
    {
        label: "ECS",
        values: [
            "Générateur de base",
            "Générateur d'appoint",
            "Apport (solaire, géothermie ... )",
            "Energie utile fournie par le générateur",
            "Stockage",
            "Production ECS",
            "Réseau primaire",
            "Réseau secondaire (distribution)",
            "Perte réseau bouclage",
            "Puisage ECS",
            "Autre",
        ]
    },
    {
        label: "Froid",
        values: [
            "Générateur de base",
            "Générateur d'appoint",
            "Apport (géothermie)",
            "Energie utile fournie par le générateur",
            "Production Primaire",
            "Production secondaire",
            "Autre",
        ]
    },
    {
        label: "Auxiliaire",
        values: [
            "Totale",
            "Auxiliaires de chauffage",
            "Auxilaires d'ECS",
            "Auxiliaires de froid",
            "Auxiliaire de chauffage et d'ECS",
            "Auxiliaire de chauffage et de Froid",
            "Auxiliaire de chauffage, ECS et Froid",
            "Autre",
        ]
    },
    {
        label: "Ventilation",
        values: [
            "Total",
            "Caisson",
            "Air neuf",
            "Air soufflé",
            "Air repris",
            "Air extrait",
            "Réseau",
            "by-pass",
            "Filtre",
        ]
    },
    {
        label: "Éclairage",
        values: [
            "Total",
            "Zone d'occupation (locaux, logement ...)",
            "Circulation et espace communs",
            "Parking",
            "Extérieur",
            "Éclairement",
            "Autre",
        ]
    },
    {
        label: "Électricité mobilier",
        values: [
            "Total",
            "Bureautique",
            "Électroménager",
            "Prise circulation et espace commun",
            "Prise zone d'occcupation",
            "Serveur",
            "Autre",
        ]
    },
    {
        label: "Électricité immobilier",
        values: [
            "Total",
            "BAES",
            "Ascenseur",
            "Autre",
        ]
    },
    {
        label: "Production électrique",
        values: [
            "Photovoltaïque",
            "Co-génération",
            "Micro-éolien",
        ]
    },
    {
        label: "Météo",
        values: [
            "Température extérieure",
            "Humidité relative extérieure",
            "Vitesse du vent",
            "Direction du vent",
            "Rayonnement",
            "Pluviométrie",
        ]
    },
    {
        label: "Ambiance",
        values: [
            "Température d'air",
            "Température radiative",
            "Températion opérative",
            "Humidité relative d'air",
            "CO2",
            "Différence de pression d'air",
            "Eclairement lumineux",
            "Autre",
        ]
    },
    {
        label: "Paroi",
        values: [
            "Température de surface ou à une interface",
            "Température dans un matériau",
            "Humidité relative en surface ou à une interface",
            "Humidité relative dans un matériau",
            "Teneur en eau dans un matriau",
            "Différence de pression d'air",
            "Flux thermique",
            "Humectation (mesure indicative de présence d'eau liquide)",
            "Perméabilité à l'air (en chantier)",
            "Perméabilité à l'air (à réception)",
        ]
    },
    {
        label: "Occupation",
        values: [
            "Détecteur de présence",
            "Comptage de passage",
            "Autre",
        ]
    },
    {
        label: "Autre",
    }
]
export const getValues = (array: Object[], label: string) => {
    let object = array[array.indexOf(array.find(a => a.label === label))]

    if ( object?.values ) {
        return object.values
    }
    return []
}

export const locationSystem = [
    { label: 'Système constructif *', name: 'constructive_system', values: [
        `Béton`,
        `Maçonnerie monomur`,
        `Maçonnerie ancienne`,
        `Maçonnerie - autre`,
        `Ossature bois`,
        `Ossature métallique`,
        `Mixte (bois, béton)`,
        `Mixte (bois, maçonnerie)`,
        `Mixte (acier, béton)`,
        `Mixte (acier, maçonnerie)`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ]},
    { label: 'Chauffage de base *', name: 'heating', values: [
        `Radiateurs électriques`,
        `PAC`,
        `Batterie ou résistance électrique`,
        `Chaudière gaz`,
        `Chaudière fioul`,
        `Chaudière bois`,
        `Réseau de chaleur urbain`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ]},
    { label: 'Eau chaude sanitaire *', name: 'hot_water', values: [
        `Groupée avec le système de chauffage`,
        `Production instantanée non groupée avec le chauffage`,
        `Ballon électrique`,
        `Ballon thermodynamique`,
        `ECS solaire`,
        `Résistance électrique pour appoint`,
        `Autre`,
        `Ne sait pas`,
    ] },
    { label: 'Ventilation *', name: 'airing', values: [
        `Ventilation naturelle`,
        `Ventilation hybride`,
        `VMC simple flux autoréglable`,
        `VMC simple flux hygro A`,
        `VMC simple flux hygro B`,
        `VMC double flux`,
        `Autre`,
        `Ne sait pas`,
        `Aucun`,
    ] },
    {
        label: `Pérméabilité à l'air de l'enveloppe`,
        unit: 'm³/(h.m²)',
        name: 'air_permeability', 
        type: 'number',
    },
]
