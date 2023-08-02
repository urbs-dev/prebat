
export const operation = [
    // { key: 'title', name: `Nom de l'opération`, required: true, type: 'text', },
    // { key: 'abstract', name: 'Description', type: 'textarea', },
    { key: 'program', name: 'Nom du programme', type: 'select', value: [ 'PREBAT', 'Autre' ], default: 'PREBAT' },
    { key: 'delivered_on', name: 'Année de livraison', type: 'number' },
    { key: 'contract_type', name: `Type de maîtrise d'ouvrage`, type: 'select', value: [
        'Etat',
        'Logements sociaux',
        'Particulier',
        'Privé',
        'Copropriété privée',
        'Autre',
    ]},
    { key: 'engineering', name: `Nature des travaux`, type: 'select', value: [ 'Neuf', 'Rénovation', 'Extension' ]},
    { key: 'label', name: 'Label / Certification', type: 'checkbox-group', values: [
        'BBC Effinergie',
        'BBC Effinergie R',
        'Effinergie R',
        'PASSIVHAUS',
        'MINERGIE',
        'MINERGIE P',
        'MINERGIE Eco',
        'MINERGIE P Eco',
        'Effinergie +',
        'BEPOS Effinergie',
        'E0',
        'E1',
        'E2',
        'E3',
        'E4',
        'C0',
        'C1',
        'C2',
        'HQE',
        'BREEAM',
        'LEED',
        'H&E',
        'Démarche BDM',
        'Autre',
    ]},
    { key: 'city_code', name: 'Commune', type: 'geocoder' }
]


export const location = {
    general: [
        { key: 'title', name: 'Nom du bâtiment', required: true, type: 'text'},
        { key: 'abstract', name: 'Description', type: 'textarea'}, 
        { key: 'use', name: `Destination d'usage`, required: true, type: 'select', values: [
            `Habitation individulle diffus`,
            `Habitation individuelle groupée`,
            `Habitation collective`,
            `Bureau`,
            `Ecole`,
            `Crèche Collège`,
            `Lycée`,
            `Université`,
            `Enseignement - Autre`,
            `Commerce`,
            `Santé`,
            `EHPAD`,
            `Hôtel`,
            `Internat`,
            `Hébergement - Autre`,
            `Restauration`,
            `Bibliothèque`,
            `Salle de spectacle`,
            `Culture - Autre`,
            `Sport`,
            `Autre`,
        ]},
        { key: 'shon', name: 'SHON', required: true, type: 'number', unit: 'm²' },
        { key: 'su', name: 'SU', type: 'number', unit: 'm²' },
        { key: 'shab', name: 'SHAB', type: 'number', unit: 'm²' },
        { key: 'height', name: 'Hauteur du bâtiment', type: 'number', unit: 'm' },
    ]
}
/* 

Destination d'usage *
Destination d'usage simplifiée
SHON *
SU
SHAB
Département *
Région
Zone climatique
Année de livraison
Type de maîtrise d'ouvrage
Nature des travaux*
Label / Certification
*/

/*

Système constructif *
type Isolation du bâtiment
Isolation du bâtiment
Isolant murs
Isolation toiture
Isolation plancher
Menuiserie - vitrage
Menuiserie - châssis
Commentaires

Chauffage de base*
Eau chaude sanitaire*
Ventilation*
Climatisation/Rafraichissement
Emetteurs chaud
Emetteurs froid
Pérméabilité à l'air des réseaux
Commentaires
*/

/*
Système constructif *
    Maçonnerie Monomur
    Maçonnerie ancienne
    Maçonnerie - Autre
    Ossature Bois
    Ossature métallique
    Mixte (bois, béton)
    Mixte (bois, maçonnerie)
    Mixte (acier, béton)
    Mixte (acier, maçonnerie)
    Autre


type Isolation du bâtiment
Isolation du bâtiment
Isolant murs
Isolation toiture
Isolation plancher
Menuiserie - vitrage
Menuiserie - châssis
Commentaires
*/