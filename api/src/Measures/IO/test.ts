
export const test =
// 20230802110324
// http://localhost/prebat.api/measures/test

{
    "name": "0101_avenue  de l'Europe",
    "time_step": 3600,
    "sites": {
      "buildings": [
        "cage escalier 1",
        "Tout",
        "cage escalier 2"
      ],
      "zones": [
        "extérieur bâtiment 1",
        "cave garage ",
        "Logement 121",
        "Logement 122",
        "Logement 201",
        "Logement 202",
        "Logement 211",
        "Logement 212"
      ],
      "rooms": [
        "séjour",
        "chambre"
      ]
    },
    "row_count": 17759,
    "building_count": 2,
    "measures": [
      {
        "columname": "apport_prod",
        "title": "Chaufferie_Cpt_Calories_Panneaux_Solaires (MW-hr)",
        "parameters": "Auxiliaire",
        "typology": "Apports (solaires, géothermiques, …)",
        "statement": "Production",
        "unit": "MWh",
        "sensor": "Compteur de calories",
        "address": "N18",
        "x": 14
      },
      {
        "columname": "consoch_conso",
        "title": "Chaufferie_Cpt_Elec_Armoire_Chauffage (kW-hr)",
        "parameters": "Chauffage",
        "typology": "Consommation aux ch",
        "statement": "Consommation",
        "unit": "kWh",
        "sensor": "Compteur électrique",
        "address": "O18",
        "x": 15
      },
      {
        "columname": "consoecs_conso",
        "title": "Chaufferie_Cpt_Elec_Armoire_ECS (kW-hr)",
        "parameters": "ECS",
        "typology": "Consommation aux ECS",
        "statement": "Consommation",
        "unit": "kWh",
        "sensor": "Compteur électrique",
        "address": "E18",
        "x": 5
      },
      {
        "columname": "consogaz_vol",
        "title": "Chaufferie_Cpt_Gaz_Global_Chaufferie (mÂ³)",
        "parameters": "Globale",
        "typology": "Consommation de gaz (globale)",
        "statement": "Volume",
        "unit": "m3",
        "sensor": "Compteur volumétrique",
        "address": "G18",
        "x": 7
      },
      {
        "columname": "prodecs_prod",
        "title": "Chaufferie_Cpt_Calories_ECS_Chaufferie (MW-hr)",
        "parameters": "ECS",
        "typology": "Production ECS",
        "statement": "Production",
        "unit": "MWh",
        "sensor": "Compteur de calories",
        "address": "L18",
        "x": 12
      },
      {
        "columname": "prodecs_vol",
        "title": "Chaufferie_Cpt_Volume_ECS (mÂ³)",
        "parameters": "ECS",
        "typology": "Production ECS",
        "statement": "Volume",
        "unit": "m3",
        "sensor": "Compteur volumétrique",
        "address": "H18",
        "x": 8
      },
      {
        "columname": "prodprim_prod",
        "title": "Chaufferie_Cpt_Calories_Global_Chauffage (MW-hr)",
        "parameters": "Chauffage",
        "typology": "Production primaire",
        "statement": "Production",
        "unit": "MWh",
        "sensor": "Compteur de calories",
        "address": "P18",
        "x": 16
      },
      {
        "columname": "raysol_ray",
        "title": "Station Meteo_Rayonnement Solaire (W/m²)",
        "parameters": "Météo",
        "typology": "Rayonnement solaire",
        "statement": "Rayonnement",
        "unit": "W/m²",
        "sensor": "Station météo",
        "address": "BI18",
        "x": 61
      },
      {
        "columname": "texter_temp",
        "title": "Station Meteo_Temperature Exterieure (°C)",
        "parameters": "Météo",
        "typology": "Température extérieure",
        "statement": "Température",
        "unit": "°C",
        "sensor": "Station météo",
        "address": "BH18",
        "x": 60
      },
      {
        "columname": "vitvent_vitair",
        "title": "Station Meteo_Vitesse Vent (m/s)",
        "parameters": "Météo",
        "typology": "Vitesse du vent",
        "statement": "Vitesse d'air",
        "unit": "m/s",
        "sensor": "Station météo",
        "address": "BG18",
        "x": 59
      }
    ],
    "data": [
      {
        "created_at": "2013-08-01T00:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0,
        "consoecs_conso": 0,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0,
        "prodprim_prod": 0,
        "raysol_ray": 41,
        "texter_temp": 21.4,
        "vitvent_vitair": 2.8
      },
      {
        "created_at": "2013-08-01T01:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.02,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0.02,
        "prodprim_prod": 0,
        "raysol_ray": 49,
        "texter_temp": 21.4,
        "vitvent_vitair": 1.09
      },
      {
        "created_at": "2013-08-01T02:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.01,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0.01,
        "prodprim_prod": 0,
        "raysol_ray": 50,
        "texter_temp": 20.9,
        "vitvent_vitair": 2.1
      },
      {
        "created_at": "2013-08-01T03:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.01,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0,
        "prodprim_prod": 0,
        "raysol_ray": 45,
        "texter_temp": 20.6,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T04:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.21,
        "consoecs_conso": 0.02,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0,
        "prodprim_prod": 0,
        "raysol_ray": 43,
        "texter_temp": 19.5,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T05:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.01,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0,
        "prodprim_prod": 0,
        "raysol_ray": 49,
        "texter_temp": 19.2,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T06:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.3,
        "consoecs_conso": 0.03,
        "consogaz_vol": 1.04,
        "prodecs_prod": 0,
        "prodecs_vol": 0.01,
        "prodprim_prod": 0,
        "raysol_ray": 38,
        "texter_temp": 18.4,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T07:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.01,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0.01,
        "prodprim_prod": 0,
        "raysol_ray": 10,
        "texter_temp": 18.9,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T08:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.2,
        "consoecs_conso": 0.02,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0.05,
        "prodprim_prod": 0,
        "raysol_ray": 25,
        "texter_temp": 21.2,
        "vitvent_vitair": 0.04
      },
      {
        "created_at": "2013-08-01T09:00:00.000Z",
        "apport_prod": 0,
        "consoch_conso": 0.21,
        "consoecs_conso": 0.01,
        "consogaz_vol": 0,
        "prodecs_prod": 0,
        "prodecs_vol": 0.06,
        "prodprim_prod": 0,
        "raysol_ray": 237,
        "texter_temp": 24.4,
        "vitvent_vitair": 0.04
      }
    ],
    "buildings": [
      {
        "name": "cage escalier 1",
        "measures": [
          {
            "columname": "consoelec_conso",
            "title": "Chaufferie_Cpt_Ecl_Communs_Bat1 (kW-hr)",
            "parameters": "Éclairage",
            "typology": "Consommation d'électricité (globale)",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "J18",
            "x": 10
          },
          {
            "columname": "noResult_conso",
            "title": "Chaufferie_Cpt_Elec_VMC1_Communs (kW-hr)",
            "parameters": "Ventilation",
            "typology": "Consommation ventilation",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "M18",
            "x": 13
          }
        ],
        "data": [
          {
            "created_at": "2013-08-01T00:00:00.000Z",
            "consoelec_conso": 0,
            "noResult_conso": 0
          },
          {
            "created_at": "2013-08-01T01:00:00.000Z",
            "consoelec_conso": 0,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T02:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T03:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T04:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T05:00:00.000Z",
            "consoelec_conso": 0,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T06:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T07:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T08:00:00.000Z",
            "consoelec_conso": 0.02,
            "noResult_conso": 0.19
          },
          {
            "created_at": "2013-08-01T09:00:00.000Z",
            "consoelec_conso": 0.01,
            "noResult_conso": 0.2
          }
        ],
        "zones": [
          {
            "name": "extérieur bâtiment 1",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Chaufferie_Cpt_Ecl_Exterieurs_Bat1 (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "D18",
                "x": 4
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0.01
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0.03
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0
              }
            ]
          },
          {
            "name": "Logement 121",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log121_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "V18",
                "x": 22
              },
              {
                "columname": "consotot_conso",
                "title": "Log121_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "R18",
                "x": 18
              },
              {
                "columname": "prodsec_prod",
                "title": "Log121_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "U18",
                "x": 21
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              },
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              }
            ]
          },
          {
            "name": "Logement 122",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log122_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AC18",
                "x": 29
              },
              {
                "columname": "consotot_conso",
                "title": "Log122_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "Z18",
                "x": 26
              },
              {
                "columname": "prodsec_prod",
                "title": "Log122_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "AA18",
                "x": 27
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0.02,
                "consotot_conso": 0.33,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.23,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0.01,
                "consotot_conso": 0.21,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.13,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.12,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.13,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.17,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0.06,
                "consotot_conso": 0.33,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              },
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "batiment",
        "measures": [
          {
            "columname": "apport_prod",
            "title": "Chaufferie_Cpt_Calories_Panneaux_Solaires (MW-hr)",
            "parameters": "Auxiliaire",
            "typology": "Apports (solaires, géothermiques, …)",
            "statement": "Production",
            "unit": "MWh",
            "sensor": "Compteur de calories",
            "address": "N18",
            "x": 14
          },
          {
            "columname": "consoch_conso",
            "title": "Chaufferie_Cpt_Elec_Armoire_Chauffage (kW-hr)",
            "parameters": "Chauffage",
            "typology": "Consommation aux ch",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "O18",
            "x": 15
          },
          {
            "columname": "consoecs_conso",
            "title": "Chaufferie_Cpt_Elec_Armoire_ECS (kW-hr)",
            "parameters": "ECS",
            "typology": "Consommation aux ECS",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "E18",
            "x": 5
          },
          {
            "columname": "consogaz_vol",
            "title": "Chaufferie_Cpt_Gaz_Global_Chaufferie (mÂ³)",
            "parameters": "Globale",
            "typology": "Consommation de gaz (globale)",
            "statement": "Volume",
            "unit": "m3",
            "sensor": "Compteur volumétrique",
            "address": "G18",
            "x": 7
          },
          {
            "columname": "prodecs_prod",
            "title": "Chaufferie_Cpt_Calories_ECS_Chaufferie (MW-hr)",
            "parameters": "ECS",
            "typology": "Production ECS",
            "statement": "Production",
            "unit": "MWh",
            "sensor": "Compteur de calories",
            "address": "L18",
            "x": 12
          },
          {
            "columname": "prodecs_vol",
            "title": "Chaufferie_Cpt_Volume_ECS (mÂ³)",
            "parameters": "ECS",
            "typology": "Production ECS",
            "statement": "Volume",
            "unit": "m3",
            "sensor": "Compteur volumétrique",
            "address": "H18",
            "x": 8
          },
          {
            "columname": "prodprim_prod",
            "title": "Chaufferie_Cpt_Calories_Global_Chauffage (MW-hr)",
            "parameters": "Chauffage",
            "typology": "Production primaire",
            "statement": "Production",
            "unit": "MWh",
            "sensor": "Compteur de calories",
            "address": "P18",
            "x": 16
          },
          {
            "columname": "raysol_ray",
            "title": "Station Meteo_Rayonnement Solaire (W/m²)",
            "parameters": "Météo",
            "typology": "Rayonnement solaire",
            "statement": "Rayonnement",
            "unit": "W/m²",
            "sensor": "Station météo",
            "address": "BI18",
            "x": 61
          },
          {
            "columname": "texter_temp",
            "title": "Station Meteo_Temperature Exterieure (°C)",
            "parameters": "Météo",
            "typology": "Température extérieure",
            "statement": "Température",
            "unit": "°C",
            "sensor": "Station météo",
            "address": "BH18",
            "x": 60
          },
          {
            "columname": "vitvent_vitair",
            "title": "Station Meteo_Vitesse Vent (m/s)",
            "parameters": "Météo",
            "typology": "Vitesse du vent",
            "statement": "Vitesse d'air",
            "unit": "m/s",
            "sensor": "Station météo",
            "address": "BG18",
            "x": 59
          }
        ],
        "data": [
          {
            "created_at": "2013-08-01T00:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0,
            "consoecs_conso": 0,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0,
            "prodprim_prod": 0,
            "raysol_ray": 41,
            "texter_temp": 21.4,
            "vitvent_vitair": 2.8
          },
          {
            "created_at": "2013-08-01T01:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.02,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0.02,
            "prodprim_prod": 0,
            "raysol_ray": 49,
            "texter_temp": 21.4,
            "vitvent_vitair": 1.09
          },
          {
            "created_at": "2013-08-01T02:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.01,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0.01,
            "prodprim_prod": 0,
            "raysol_ray": 50,
            "texter_temp": 20.9,
            "vitvent_vitair": 2.1
          },
          {
            "created_at": "2013-08-01T03:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.01,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0,
            "prodprim_prod": 0,
            "raysol_ray": 45,
            "texter_temp": 20.6,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T04:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.21,
            "consoecs_conso": 0.02,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0,
            "prodprim_prod": 0,
            "raysol_ray": 43,
            "texter_temp": 19.5,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T05:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.01,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0,
            "prodprim_prod": 0,
            "raysol_ray": 49,
            "texter_temp": 19.2,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T06:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.3,
            "consoecs_conso": 0.03,
            "consogaz_vol": 1.04,
            "prodecs_prod": 0,
            "prodecs_vol": 0.01,
            "prodprim_prod": 0,
            "raysol_ray": 38,
            "texter_temp": 18.4,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T07:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.01,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0.01,
            "prodprim_prod": 0,
            "raysol_ray": 10,
            "texter_temp": 18.9,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T08:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.2,
            "consoecs_conso": 0.02,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0.05,
            "prodprim_prod": 0,
            "raysol_ray": 25,
            "texter_temp": 21.2,
            "vitvent_vitair": 0.04
          },
          {
            "created_at": "2013-08-01T09:00:00.000Z",
            "apport_prod": 0,
            "consoch_conso": 0.21,
            "consoecs_conso": 0.01,
            "consogaz_vol": 0,
            "prodecs_prod": 0,
            "prodecs_vol": 0.06,
            "prodprim_prod": 0,
            "raysol_ray": 237,
            "texter_temp": 24.4,
            "vitvent_vitair": 0.04
          }
        ]
      },
      {
        "name": "cage escalier 2",
        "measures": [
          {
            "columname": "consoelec_conso",
            "title": "Chaufferie_Cpt_Ecl_Communs_Bat2 (kW-hr)",
            "parameters": "Éclairage",
            "typology": "Consommation d'électricité (globale)",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "K18",
            "x": 11
          },
          {
            "columname": "noResult_conso",
            "title": "Chaufferie_Cpt_Elec_VMC2_Communs (kW-hr)",
            "parameters": "Ventilation",
            "typology": "Consommation ventilation",
            "statement": "Consommation",
            "unit": "kWh",
            "sensor": "Compteur électrique",
            "address": "I18",
            "x": 9
          }
        ],
        "data": [
          {
            "created_at": "2013-08-01T00:00:00.000Z",
            "consoelec_conso": 0,
            "noResult_conso": 0
          },
          {
            "created_at": "2013-08-01T01:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.05
          },
          {
            "created_at": "2013-08-01T02:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.04
          },
          {
            "created_at": "2013-08-01T03:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.04
          },
          {
            "created_at": "2013-08-01T04:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.06
          },
          {
            "created_at": "2013-08-01T05:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.05
          },
          {
            "created_at": "2013-08-01T06:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.07
          },
          {
            "created_at": "2013-08-01T07:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.04
          },
          {
            "created_at": "2013-08-01T08:00:00.000Z",
            "consoelec_conso": 0.23,
            "noResult_conso": 0.03
          },
          {
            "created_at": "2013-08-01T09:00:00.000Z",
            "consoelec_conso": 0.22,
            "noResult_conso": 0.18
          }
        ],
        "zones": [
          {
            "name": "cave garage ",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Chaufferie_Cpt_Elec_Caves_Garages_Bat2 (kW-hr)",
                "parameters": "Élec. Immobilier",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "F18",
                "x": 6
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0.06
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0.06
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0.05
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0.53
              }
            ]
          },
          {
            "name": "Logement 201",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log201_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AF18",
                "x": 32
              },
              {
                "columname": "consotot_conso",
                "title": "Log201_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AE18",
                "x": 31
              },
              {
                "columname": "prodsec_prod",
                "title": "Log201_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "AI18",
                "x": 35
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0.01,
                "consotot_conso": 0.69,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.24,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.24,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.21,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.19,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.21,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.2,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.17,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.16,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              },
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              }
            ]
          },
          {
            "name": "Logement 202",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log202_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AM18",
                "x": 39
              },
              {
                "columname": "consotot_conso",
                "title": "Log202_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AR18",
                "x": 44
              },
              {
                "columname": "prodsec_prod",
                "title": "Log202_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "AL18",
                "x": 38
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.12,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.12,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.11,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.09,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.12,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.17,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0.01,
                "consotot_conso": 0.19,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              },
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              }
            ]
          },
          {
            "name": "Logement 211",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log211_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AW18",
                "x": 49
              },
              {
                "columname": "consotot_conso",
                "title": "Log211_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AT18",
                "x": 46
              },
              {
                "columname": "prodsec_prod",
                "title": "Log211_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "AX18",
                "x": 50
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.1,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.06,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.03,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.03,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.05,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              },
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              }
            ]
          },
          {
            "name": "Logement 212",
            "measures": [
              {
                "columname": "consoelec_conso",
                "title": "Log212_Compteur Auxiliaire Eclairage Logement (kW-hr)",
                "parameters": "Éclairage",
                "typology": "Consommation d'électricité (globale)",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "BE18",
                "x": 57
              },
              {
                "columname": "consotot_conso",
                "title": "Log212_Compteur GÃ©nÃ©ral Logement (kW-hr)",
                "parameters": "Globale",
                "typology": "Consommation totale",
                "statement": "Consommation",
                "unit": "kWh",
                "sensor": "Compteur électrique",
                "address": "AZ18",
                "x": 52
              },
              {
                "columname": "prodsec_prod",
                "title": "Log212_Compteur Calories Chauffage Logement (kW-hr)",
                "parameters": "Chauffage",
                "typology": "Production secondaire",
                "statement": "Production",
                "unit": "kWh",
                "sensor": "Compteur de calories",
                "address": "BC18",
                "x": 55
              }
            ],
            "data": [
              {
                "created_at": "2013-08-01T00:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T01:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T02:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T03:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T04:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T05:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T06:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.03,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T07:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T08:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.05,
                "prodsec_prod": 0
              },
              {
                "created_at": "2013-08-01T09:00:00.000Z",
                "consoelec_conso": 0,
                "consotot_conso": 0.04,
                "prodsec_prod": 0
              }
            ],
            "rooms": [
              {
                "name": "séjour",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Q18",
                    "x": 17
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AD18",
                    "x": 30
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AJ18",
                    "x": 36
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AO18",
                    "x": 41
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AS18",
                    "x": 45
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrometrie Sejour (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BB18",
                    "x": 54
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "W18",
                    "x": 23
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "X18",
                    "x": 24
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AG18",
                    "x": 33
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AQ18",
                    "x": 43
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AU18",
                    "x": 47
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Sejour (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BA18",
                    "x": 53
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 51.7,
                    "tamb_temp": 25.7
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 51.8,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 51.9,
                    "tamb_temp": 25.6
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 52,
                    "tamb_temp": 25.5
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 52.2,
                    "tamb_temp": 25.6
                  }
                ]
              },
              {
                "name": "chambre",
                "measures": [
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log121_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "S18",
                    "x": 19
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log122_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "Y18",
                    "x": 25
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log201_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AK18",
                    "x": 37
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log202_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AN18",
                    "x": 40
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log211_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "AV18",
                    "x": 48
                  },
                  {
                    "columname": "humidamb_humrel",
                    "title": "Log212_Hygrométrie Chambre (%RH)",
                    "parameters": "Ambiance",
                    "typology": "Humidité relative d'ambiance",
                    "statement": "Humidité relative",
                    "unit": "%",
                    "sensor": "Humidité relative",
                    "address": "BD18",
                    "x": 56
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log121_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "T18",
                    "x": 20
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log122_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AB18",
                    "x": 28
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log201_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AH18",
                    "x": 34
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log202_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AP18",
                    "x": 42
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log211_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "AY18",
                    "x": 51
                  },
                  {
                    "columname": "tamb_temp",
                    "title": "Log212_Température Chambre (°C)",
                    "parameters": "Ambiance",
                    "typology": "Température d'ambiance",
                    "statement": "Température",
                    "unit": "°C",
                    "sensor": "Température",
                    "address": "BF18",
                    "x": 58
                  }
                ],
                "data": [
                  {
                    "created_at": "2013-08-01T00:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T01:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T02:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 26
                  },
                  {
                    "created_at": "2013-08-01T03:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T04:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T05:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.9
                  },
                  {
                    "created_at": "2013-08-01T06:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T07:00:00.000Z",
                    "humidamb_humrel": 53,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T08:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.8
                  },
                  {
                    "created_at": "2013-08-01T09:00:00.000Z",
                    "humidamb_humrel": 54,
                    "tamb_temp": 25.9
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }