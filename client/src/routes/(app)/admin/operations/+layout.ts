 
export const load = ( async () => {
    const response = await fetch(`BASE_URL/prebat.api/operations/tree`)
    return {
        operations: response.json()
    } 
})