
export const load = (async ({params}) => {
    const response = await fetch(`BASE_URL/prebat.api/locations/${params.location}`)
    const json = await response.json()
    json.report = json.report ?? {}
    return {
        location: json
    }
})