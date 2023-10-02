
export const load = (async (url) => {
    const response = await fetch(`BASE_URL/prebat.api/operations/${url.params.id}`)
    const json = await response.json()
    json.report = json.report ?? {}
    return {
        operation: json
    }
})