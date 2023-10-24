

export const removeEmptyString = (json: Object) => {
    // return Object.fromEntries(Object.entries(json).filter(([_, v]) => v !== ''))
    Object.keys(json).forEach(k => json[k] = json[k] === '' ? null : json[k])
    return json
}


export const removeNullEntries = (json: Object) => {
    return Object.fromEntries(Object.entries(json).filter(([_, v]) => v !== null))
}