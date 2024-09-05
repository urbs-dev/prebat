
export const load = ( async () => {
    const response = await fetch(`BASE_URL/prebat.api/results`)
    return {
        attributes: response.json(),
    } 
})