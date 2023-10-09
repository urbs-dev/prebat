

export const usages = [
    {
        typology: 'Habitation', 
        values: [
            'Habitation individuelle diffus',
            'Habitation individuelle groupée',
            'Habitation collective',
        ]
    },
    {
        typology: 'Bureau', 
        values: ['Bureau']
    },
    {
        typology: 'Enseignement', 
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
        typology: 'Commerce', 
        values: ['Commerce']
    },
    {
        typology: 'Santé', 
        values: ['Santé']
    },
    {
        typology: 'Hébergement', 
        values: [
            'EHPAD',
            'Hôtel',
            'Internat',
            'Hébergement - Autre',
        ]
    },
    {
        typology: 'Restauration', 
        values: ['Restauration']
    },
    {
        typology: 'Culture', 
        values: [
            'Bibliothèque',
            'Salle de spectacle',
            'Culture - Autre',
        ]
    },
    {
        typology: 'Sport', 
        values: ['Sport']
    },
    {
        typology: 'Autre', 
        values: ['Autre']
    },
]

export const getUseTypology = (selected: string[]) => {
    const def = usages.map(({typology, values}) => {
        return values.map(value => {
            return { typology, value }
        })
    }).flat()
    let typologies = []
    for (const value of selected) {
        typologies.push(def.find(item => item.value === value)?.typology)
    }
    if (typologies.filter(Boolean).length === 0) {
        return null
    }
    return [ ...new Set(typologies.filter(Boolean))].join(' ~ ')
}



export const envelope = [
    { label: 'Système constructif *', name: 'constructive_system', values: [
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
    ] },
    { label: 'Isolation du bâtiment', name: 'building_insulation', values: [
        `Isolation par l'intérieur (ITI)`,
        `Isolation par l'extérieur (ITE)`,
        `Isolation répartie (ITR)`,
        `Isolation intégrée (ITitg)`,
        `Non isolé`,
        
    ] },
    { label: 'Isolation murs', name: 'wall_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
    ] },
    { label: 'Isolation toiture', name: 'roof_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
    ] },
    { label: 'Isolation plancher', name: 'floor_insulation', values: [
        `Plastique alvéolaire (PSE, XPS, PUR, ...)`,
        `Laine minérale (roche, verre)`,
        `Bois (laine, fibre)`,
        `Ouate de cellulose`,
        `Autres biosourcés`,
        `Autres`,
        `Non isolés`,
    ] },
    { label: 'Menuiserie - vitrage', name: 'window_carpentry', values: [
        `Simple vitrage`,
        `Double vitrage`,
        `Triple vitrage`,
        `Double menuiseries`,
    ] },
    { label: 'Menuiserie - châssis', name: 'frame_carpentry', values: [
        `PVC`,
        `Bois`,
        `Alu`,
        `Mixte`,
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
    ] },
    { label: 'Climatisation / Rafraichissement', name: 'refresher', values: [
        `Climatisation à détente directe`,
        `Climatisation avec réseau d'eau glacée`,
        `PAC réversible`,
        `Rafraîchissement`,
        `Autre`,
        `Ne sait pas`,
    ] },
    { label: 'Emetteurs chaud', name: 'hot_emitter', type: 'radio', values: [
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
    ] },
    { label: 'Emetteurs froid', name: 'cold_emitter', type: 'radio', values: [
        `Plancher`,
        `Plancher rafraîchissant`,
        `Mur rayonnant`,
        `Poutre froide`,
        `Ventilo convecteur`,
        `Batterie froide`,
        `Autres`,
        `Ne sait pas`,
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



export const locationSystem = [
    { label: 'Système constructif *', name: 'constructive_system', values: [
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
    ] },
    {
        label: `Pérméabilité à l'air de l'enveloppe`,
        unit: 'm³/(h.m²)',
        name: 'air_permeability', 
        type: 'number',
    },
]