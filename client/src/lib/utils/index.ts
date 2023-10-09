

export const removeEmptyString = (json: Object) => {
    return Object.fromEntries(Object.entries(json).filter(([_, v]) => v !== ''))
}