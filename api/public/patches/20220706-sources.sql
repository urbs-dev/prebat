INSERT INTO sources (
	id, name, provider, domain, url, model_year, scope, charset, 
	srid, licence, reliability, tag, method, 
	created_at, updated_at
)
SELECT 
    id, nom, source, theme, url, millesime, emprise, encodage,
    2154::INTEGER AS srid, licence, qualite, tagsource, methode,
    TO_DATE(date_maj,'YYYY-MM-DD'), TO_DATE(date_maj,'YYYY-MM-DD')
FROM metadata.source