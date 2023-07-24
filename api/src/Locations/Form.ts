export const form = {
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