

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
    return [ ...new Set(typologies.filter(Boolean))].join(', ')
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
    {
        
    }
]