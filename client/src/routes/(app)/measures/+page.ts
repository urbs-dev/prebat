 
export const load = ( async () => {
    const response = await fetch(`BASE_URL/prebat.api/operations`)
    return {
        operations: response.json()
    } 
})