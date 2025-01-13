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

export const sensor = [
    {
        label: 'électrique',
        values: [
            `Index électrique`,
            `Consommation électrique`,
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
            'Index compteur calories',
            'Consommation compteur calories',
            'Volume compteur calories',
            'T Chaud',
            'T Froid',
            'Débit eau',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique gaz',
        values: [
            'Index gaz',
            'Volume gaz',
            'Consommation gaz',
            'Débit gaz',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique fioul',
        values: [
            'Index fioul',
            'Volume fioul',
            'Consommation fioul',
            'Débit fioul',
            'Autre',
        ]
    },
    {
        label: 'Compteur volumétrique eau',
        values: [
            'Index eau',
            'Volume eau',
            'Débit eau',
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
