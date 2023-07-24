
export const load = (async (url) => {
    const response = await fetch(`BASE_URL/prebat.api/operations/${url.params.id}`)
    return {
        operation: response.json()
    }
})