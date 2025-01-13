import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, hasOne, HasOne, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import { v4 as uuidv4 } from 'uuid'
import OperationsModel from 'App/Operations/OperationsModel'

export default class ResultsModel extends BaseModel
{
    public static table = 'results'

    @beforeCreate()
    public static async createUUID (model: OperationsModel ) { model.id = uuidv4() }

	@column({ isPrimary: true })
	public id: string

    @column()
    public name: string | null

    @column()
    public fonction: string | null

    @column()
    public maitre_ouvrage:string | null

    @column()
    public nature_travaux: string | null

    @column()
    public region: string | null

    @column()
    public altitude: number | null

    @column()
    public departement: number | null

    @column()
    public zone_climatique: string

    @column()
    public shon: number | null

    @column()
    public surface: number | null

    @column()
    public shab: number | null

    @column()
    public hauteur: number | null

    @column()
    public volume: number | null

    @column()
    public bepos: string | null

    @column()
    public label_energetique: string | null

    @column.dateTime()
    public date_construction: DateTime | null

    @column.dateTime()
    public date_livraison: DateTime | null

    @column.dateTime()
    public inauguration: DateTime | null

    @column.dateTime()
    public debut_an1: DateTime | null

    @column.dateTime()
    public fin_an2: DateTime | null

    @column.dateTime()
    public debut_an2: DateTime | null

    @column.dateTime()
    public fin_an2_1: DateTime | null

    @column()
    public temp_consigne_rt: number | null

    @column()
    public temp_consigne_mesure: number | null

    @column()
    public ubat_rt: number | null

    @column()
    public ubat_mesure: number | null

    @column()
    public isolation_pvo : string | null

    @column()
    public systeme_chauffage : string | null

    @column()
    public ecs_principal : string | null

    @column()
    public permeabilite_air: number | null

    @column()
    public conso_tot: number | null

    @column()
    public conso_chauffage: number | null

    @column()
    public conso_ecs: number | null
    
    @column()
    public conso_ventilation: number | null

    @column()
    public conso_eclairage: number | null

    @column()
    public confort_ete: string | null

    @column()
    public confort_hiver: string | null

    @column()
    public classe_inertie : string | null

    @column()
    public structure : string | null

    @column()
    public fonction_detail : string | null

    @column()
    public conso_auxiliaire: number | null

    @column()
    public conso_refroidissement: number | null

    @column()
    public conso_rt: number | null

    @column()
    public conso_nonrt: number | null

    @column()
    public cop_chauffage: number | null
    
    @column()
    public rendement_chauffage: number | null

    @column()
    public rendement_ventilation: number | null


    @column()
    public rendement_ecs: number | null

    @column()
    public systeme_ventilation : string | null

    @column()
    public dh26 : number | null

}