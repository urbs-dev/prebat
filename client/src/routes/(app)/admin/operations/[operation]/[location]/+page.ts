
export const load = (async ({params}) => {
    const response = await fetch(`BASE_URL/prebat.api/locations/${params.location}`)
    return {
        location: response.json()
    }
})