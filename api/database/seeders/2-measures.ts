import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MeasuresModel from 'App/Measures/MeasuresModel'

export default class MeasuresSeeder extends BaseSeeder {
	public async run () {
		await MeasuresModel.createMany([
            {
              "title": "Apports (solaires, géothermiques, …)",
              "columname": "apport"
            },
            {
              "title": "CO2",
              "columname": "co2"
            },
            {
              "title": "Consommation ascenceur",
              "columname": "consoasc"
            },
            {
              "title": "Consommation aux ch",
              "columname": "consoch"
            },
            {
              "title": "Consommation aux ECS",
              "columname": "consoecs"
            },
            {
              "title": "Consommation aux froid",
              "columname": "consofroid"
            },
            {
              "title": "Consommation BAES",
              "columname": "consobaie"
            },
            {
              "title": "Consommation bureautique",
              "columname": "consobur"
            },
            {
              "title": "Consommation circulation et espaces communs",
              "columname": "consocommun"
            },
            {
              "title": "Consommation d'électricité (globale)",
              "columname": "consoelec"
            },
            {
              "title": "Consommation de gaz (globale)",
              "columname": "consogaz"
            },
            {
              "title": "Consommation du générateur d'appoint",
              "columname": "consogenappoint"
            },
            {
              "title": "Consommation du générateur de base",
              "columname": "consogenbase"
            },
            {
              "title": "Consommation électroménager",
              "columname": "consoelctromenag"
            },
            {
              "title": "Consommation extérieur",
              "columname": "consoext"
            },
            {
              "title": "Consommation Parking",
              "columname": "consoparking"
            },
            {
              "title": "Consommation serveur",
              "columname": "consoserveur"
            },
            {
              "title": "Consommation totale",
              "columname": "consototal"
            },
            {
              "title": "Consommation zone d'occupation",
              "columname": "consozoccup"
            },
            {
              "title": "Débit",
              "columname": "debit"
            },
            {
              "title": "Détecteur de présence",
              "columname": "detecpresence"
            },
            {
              "title": "Direction du vent",
              "columname": "directvent"
            },
            {
              "title": "Eclairement",
              "columname": "eclairement"
            },
            {
              "title": "Energie utile fournie par le générateur",
              "columname": "energieutile"
            },
            {
              "title": "Humidité relative d'ambiance",
              "columname": "humidamb"
            },
            {
              "title": "Humidité relative extérieure",
              "columname": "humidext"
            },
            {
              "title": "Pertes de bouclage",
              "columname": "perteboulcage"
            },
            {
              "title": "Pertes de distribution",
              "columname": "pertedistrib"
            },
            {
              "title": "Pression",
              "columname": "pression"
            },
            {
              "title": "Production co-génération",
              "columname": "prodcogen"
            },
            {
              "title": "Production ECS",
              "columname": "prodecs"
            },
            {
              "title": "Production micro éolien",
              "columname": "prodmeolien"
            },
            {
              "title": "Production photovoltaïque",
              "columname": "prodpvoltaique"
            },
            {
              "title": "Production primaire",
              "columname": "prodprimaire"
            },
            {
              "title": "Production secondaire",
              "columname": "prodsecondaire"
            },
            {
              "title": "Puisage",
              "columname": "puisage"
            },
            {
              "title": "Rayonnement solaire",
              "columname": "raysolaire"
            },
            {
              "title": "Tair extrait",
              "columname": "tairextrait"
            },
            {
              "title": "Tair neuf",
              "columname": "tairneuf"
            },
            {
              "title": "Tair repris",
              "columname": "tairrepris"
            },
            {
              "title": "Tair soufflé",
              "columname": "tairsouffle"
            },
            {
              "title": "Température d'ambiance",
              "columname": "tambiance"
            },
            {
              "title": "Température extérieure",
              "columname": "texterieur"
            },
            {
              "title": "Vitesse d'air",
              "columname": "vitesseair"
            },
            {
              "title": "Vitesse du vent",
              "columname": "vitessevent"
            }
        ])
	}
}