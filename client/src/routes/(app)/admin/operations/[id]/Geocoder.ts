import { get, writable, type Readable, type Writable } from 'svelte/store'


export default class Geocoder
{
    public static async search(value: string)
    {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${value}&limit=50`)
        const json  = await response.json()
        if (!json) {
            return []
        }
        const locations = this.serialize(json)
        return locations.slice(0, 10)
    }


    private static serialize(result: any)
    {
        const features = result.features
            .filter(feature => feature.properties.type === 'municipality')
            .map(feature => {
                let name = feature.properties.name
                const [ lon, lat ] = feature.geometry.coordinates
                return {
                    lat, lon,
                    name: name,
                    city_code: String(feature.properties?.citycode),
                    context: feature.properties.context,
                    nature: 'Commune',
                    department_code: String(feature.properties?.citycode).slice(0, 2),
                }
            })
        return features.filter((value, index, self) =>
            index === self.findIndex((item) => (
                item.city_code === value.city_code
            ))
        )
    }
}