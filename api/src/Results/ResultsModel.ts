import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class ResultsModel extends BaseModel
{
    public static table = 'results'

	@column({ isPrimary: true })
	public id: string

    @column()
    public nom: string

    @column()
    public fonction: string

    @column()
    public maitre_ouvrage:string

    @column()
    public nature_travaux: string

    @column()
    public adresse: string

    @column()
    public commune: string

    @column()
    public code_postal: number

    @column()
    public region: string

    @column()
    public altitude: number | null

    @column()
    public departement: number | null

    @column()
    public zone_climatique: string

    @column()
    public shon: number | null

    @column()
    public shab: number | null

    @column()
    public surface: number | null

    @column()
    public hauteur: number | null

    @column()
    public bepos: number | null

    @column()
    public volume: number | null

    @column()
    public label_energetique: string

    @column.dateTime()
    public date_construction: DateTime

    @column.dateTime()
    public date_livraison: DateTime

    @column.dateTime()
    public inauguration: DateTime

    @column.dateTime()
    public debut_an1: DateTime

    @column.dateTime()
    public fin_an2: DateTime

    @column.dateTime()
    public debut_an2: DateTime

    @column.dateTime()
    public fin_an2_1: DateTime

    @column()
    public isoloation_pvo : string | null
    @column()
    public systeme_chauffage : string | null
    @column()
    public systeme_ventilation : string | null
    @column()
    public ecs_principal : string | null
    @column()
    public confort_ete : string | null
    @column()
    public confort_hiver : string | null
    @column()
    public classe_inertie : string | null

    @column()
    public temp_consigne_rt: number | null
    @column()
    public temp_consigne_mesure: number | null
    @column()
    public ubat_rt: number | null
    @column()
    public ubat_mesure: number | null
    @column()
    public permeabilite_air: number | null
    @column()
    public conso_tot: number | null
    @column()
    public conso_chauffage: number | null
    @column()
    public conso_ecs: number | null
    @column()
    public conso_eclairage: number | null
    @column()
    public conso_ventilation: number | null


}