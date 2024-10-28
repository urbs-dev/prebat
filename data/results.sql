create table public.results as select * from test.general;

alter table public.results 
add column temp_consigne_rt numeric,
add column temp_consigne_mesure numeric,
add column ubat_rt numeric,
add column ubat_mesure numeric,
add column isoloation_pvo varchar,
add column systeme_chauffage varchar,
add column ecs_principal varchar,
add column permeabilite_air numeric;


--------------------------------------
update test.occupation set temperature_consigne_chaud_rt= replace(temperature_consigne_chaud_rt, ',', '.'),
temperature_chaud_mesuree = replace(temperature_chaud_mesuree, ',', '.');

update test.occupation set temperature_consigne_chaud_rt= NULL
WHERE temperature_consigne_chaud_rt = '';

update public.results set temp_consigne_rt = cast(occ.temperature_consigne_chaud_rt as numeric)
 from test.occupation occ
 where  id = occ.operation_id;

--------------------------------------
update test.conso_production set temperature_chaud_mesuree = replace(temperature_chaud_mesuree,  ',', '.');

update test.occupation set temperature_chaud_mesuree= NULL
WHERE temperature_chaud_mesuree = '';

update public.results set temp_consigne_mesure = cast(occ.temperature_chaud_mesuree as numeric)
 from test.occupation occ
 where  id = occ.operation_id;

-----------------------------------
update test.enveloppe set "Ubat_evalue"= replace(enveloppe."Ubat_evalue", ',', '.'),

update test.enveloppe  set "Ubat_evalue"= NULL
WHERE "Ubat_evalue" = '';

update public.results set ubat_mesure = cast("Ubat_evalue" as numeric)
 from test.enveloppe env
 where  id = env.operation_id;
----------------------------------

update test.enveloppe set "Ubat_etude_thermique"= replace(enveloppe."Ubat_etude_thermique", ',', '.'),

update test.enveloppe  set "Ubat_etude_thermique"= NULL
WHERE "Ubat_etude_thermique" = '';

update public.results set ubat_rt = cast("Ubat_etude_thermique" as numeric)
 from test.enveloppe env
 where  id = env.operation_id;

--------------------------------------

update test.conso_production set "Q4Pa_surf_mesure" = replace("Q4Pa_surf_mesure",  ',', '.');

update test.conso_production  set "Q4Pa_surf_mesure"= NULL
WHERE "Q4Pa_surf_mesure" = '';

update public.results set permeabilite_air = cast("Q4Pa_surf_mesure" as numeric)
 from test.conso_production prod
 where  id = prod.operation_id;

--------------------------------------

update public.results set isoloation_pvo = env.isolation_principale_pvo
from test.enveloppe env
 where  id = env.operation_id;

 -------------------------------

update public.results set  systeme_chauffage = cvc.systeme_chauffage
from test.cvc cvc
where  id = cvc.operation_id;

---------------------------------

update public.results set ecs_principal = cvc.type_production_principal
from test.cvc cvc
where  id = cvc.operation_id;


------------------------------------------------------------

alter table public.results 
add column conso_tot numeric,
add column conso_chauffage numeric,
add column conso_ecs numeric,
add column conso_ventilation numeric,
add column conso_eclairage numeric,
add column confort_ete varchar,
add column confort_hiver varchar;

------------------------------------

update test.conso_production set consotot_rt_avecreduc_an1 = replace(consotot_rt_avecreduc_an1,  ',', '.');

update test.conso_production  set consotot_rt_avecreduc_an1= NULL
WHERE consotot_rt_avecreduc_an1 = '';

update test.conso_production set consotot_rt_avecreduc_an2 = replace(consotot_rt_avecreduc_an2,  ',', '.');

update test.conso_production  set consotot_rt_avecreduc_an2= NULL
WHERE consotot_rt_avecreduc_an2 = '';

update public.results set conso_tot = ((cast(consotot_rt_avecreduc_an1 as numeric)) + cast(consotot_rt_avecreduc_an2 as numeric))
 from test.conso_production prod
 where  id = prod.operation_id;

 update public.results set conso_tot = (conso_tot/2)
 from test.conso_production prod
 where  id = prod.operation_id;

 -----------------------------------------------------------------

update test.cvc set conso_chauffage_an1 = replace(conso_chauffage_an1,  ',', '.');

update test.cvc  set conso_chauffage_an1= NULL
WHERE conso_chauffage_an1 = '';

update test.cvc set conso_chauffage_an2 = replace(conso_chauffage_an2,  ',', '.');

update test.cvc  set conso_chauffage_an2= NULL
WHERE conso_chauffage_an2 = '';

update public.results set conso_chauffage = ((cast(conso_chauffage_an1 as numeric)) + cast(conso_chauffage_an2 as numeric))
 from test.cvc cvc
 where  id = cvc.operation_id;

 update public.results set conso_chauffage = (conso_chauffage/2)
 from test.cvc
 where  id = cvc.operation_id;

 -------------------------------------------------------------------


update test.cvc set conso_ecs_an1 = replace(conso_ecs_an1,  ',', '.');

update test.cvc  set conso_ecs_an1= NULL
WHERE conso_ecs_an1 = '';

update test.cvc set conso_ecs_an2 = replace(conso_ecs_an2,  ',', '.');

update test.cvc  set conso_ecs_an2= NULL
WHERE conso_ecs_an2 = '';

update public.results set conso_ecs = ((cast(conso_ecs_an1 as numeric)) + cast(conso_ecs_an2 as numeric))
 from test.cvc cvc
 where  id = cvc.operation_id;

 update public.results set conso_ecs = (conso_ecs/2)
 from test.cvc
 where  id = cvc.operation_id;

 ------------------------------------------------------------------

 update test.cvc set conso_ventilation_an1 = replace(conso_ventilation_an1,  ',', '.');

update test.cvc  set conso_ventilation_an1= NULL
WHERE conso_ventilation_an1 = '';

update public.results set conso_ventilation = cast(conso_ecs_an1 as numeric)
 from test.cvc cvc
 where  id = cvc.operation_id;

--------------------------------------------------------------------

update test.eclairage set conso_an1 = replace(conso_an1,  ',', '.');

update test.eclairage  set conso_an1= NULL
WHERE conso_an1 = '';

update test.eclairage set conso_an2 = replace(conso_an2,  ',', '.');

update test.eclairage  set conso_an2= NULL
WHERE conso_an2 = '';

update public.results set conso_eclairage = ((cast(conso_an1 as numeric)) + cast(conso_an2 as numeric))
 from test.eclairage ecl
 where  id = ecl.operation_id;

 update public.results set conso_eclairage = (conso_eclairage/2)
 from test.eclairage ecl
 where  id = ecl.operation_id;

--------------------------------------------------------------------
update public.results set confort_ete = ther.confort_ete
from test.confort_thermique ther
where  id = ther.operation_id;

-------------------------------------------------------------------

update public.results set confort_hiver = ther.confort_hiver
from test.confort_thermique ther
where  id = ther.operation_id;


---------------------------------------------------------------------

alter table public.results 
add column classe_inertie varchar;

----------------------------------------------------------------------

update public.results set classe_inertie = env.classe_inertie
where id = env.classe_inertie;


UPDATE public.results set isoloation_pvo = LOWER(isoloation_pvo),
systeme_chauffage =LOWER(systeme_chauffage),
ecs_principal= LOWER(ecs_principal),
confort_ete = LOWER(confort_ete),
confort_hiver =LOWER(confort_hiver),
adresse = LOWER(adresse),
nature_travaux =LOWER(nature_travaux),
commune = LOWER(commune),
region = LOWER(region),
zone_climatique = LOWER(zone_climatique),
label_energetique =LOWER(label_energetique),
fonction = lower(fonction),
maitre_ouvrage = lower(maitre_ouvrage);


UPDATE public.results set isoloation_pvo = unacent(isoloation_pvo),
systeme_chauffage =unacent(systeme_chauffage),
ecs_principal= unacent(ecs_principal),
confort_ete = unacent(confort_ete),
confort_hiver =unacent(confort_hiver),
adresse = unacent(adresse),
nature_travaux =unacent(nature_travaux),
region = unacent(region),
zone_climatique = unacent(zone_climatique),
label_energetique =unacent(label_energetique),
fonction = unacent(fonction),
maitre_ouvrage = unacent(maitre_ouvrage);

UPDATE public.results set isoloation_pvo = unaccent(isoloation_pvo),
systeme_chauffage =unaccent(systeme_chauffage),
ecs_principal= unaccent(ecs_principal),
confort_ete = unaccent(confort_ete),
confort_hiver =unaccent(confort_hiver),
adresse = unaccent(adresse),
nature_travaux =unaccent(nature_travaux),
region = unaccent(region),
zone_climatique = unaccent(zone_climatique),
label_energetique =unaccent(label_energetique),
fonction = unaccent(fonction),
maitre_ouvrage = unaccent(maitre_ouvrage);



update public.results set shab = replace(shab,  ',', '.');
update public.results set hauteur = replace(hauteur,  ',', '.');
update public.results set volume = replace(volume,  ',', '.');
update public.results set shon = replace(shon,  ',', '.');
update public.results set surface = replace(surface,  ',', '.');



update public.results  set shon= NULL
WHERE shon = '';
update public.results  set surface= NULL
WHERE surface = '';
update public.results set shab= NULL
WHERE shab = '';
update public.results  set hauteur= NULL
WHERE hauteur = '';
update public.results  set volume= NULL
WHERE volume = '';


ALTER TABLE public.results ALTER COLUMN shon TYPE numeric USING shon::numeric;
ALTER TABLE public.results ALTER COLUMN surface TYPE numeric USING surface::numeric;
ALTER TABLE public.results ALTER COLUMN shab TYPE numeric USING shab::numeric;
ALTER TABLE public.results ALTER COLUMN hauteur TYPE numeric USING hauteur::numeric;
ALTER TABLE public.results ALTER COLUMN volume TYPE numeric USING volume::numeric;


UPDATE public.results set bepos = LOWER(bepos);


update public.results set date_construction = '01/' || date_construction,
date_livraison = '01/' || date_livraison,
debut_an1 = '01/'||debut_an1,
fin_an2 = '01/'||fin_an2,
debut_an2 = '01/' || debut_an2,
fin_an2_1 = '01/' || fin_an2_1;

update public.results set inauguration = '01/' || inauguration
where inauguration is not null

update  public.results set date_construction = null where date_construction = '01/';
update  public.results set date_livraison = null where date_livraison = '01/';
update  public.results set debut_an1 = null where debut_an1 = '01/';
update  public.results set fin_an2 = null where fin_an2 = '01/';
update  public.results set debut_an2 = null where debut_an2 = '01/';
update  public.results set fin_an2_1 = null where fin_an2_1 = '01/';
update  public.results set inauguration = null where inauguration = '01/';

ALTER TABLE public.results ALTER COLUMN date_construction TYPE date USING date_construction::date;
ALTER TABLE public.results ALTER COLUMN date_livraison TYPE date USING date_livraison::date;
ALTER TABLE public.results ALTER COLUMN inauguration TYPE date USING inauguration::date;
ALTER TABLE public.results ALTER COLUMN debut_an1 TYPE date USING debut_an1::date;
ALTER TABLE public.results ALTER COLUMN fin_an2 TYPE date USING fin_an2::date;
ALTER TABLE public.results ALTER COLUMN debut_an2 TYPE date USING debut_an2::date;
ALTER TABLE public.results ALTER COLUMN fin_an2_1 TYPE date USING fin_an2_1::date;
