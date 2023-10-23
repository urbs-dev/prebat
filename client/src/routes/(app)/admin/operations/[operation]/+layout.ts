
export const load = (async ({params}) => {
    const response = await fetch(`BASE_URL/prebat.api/operations/${params.operation}`)
    const json = await response.json()
    json.report = json.report ?? {}
    return {
        operation: json
    }
})