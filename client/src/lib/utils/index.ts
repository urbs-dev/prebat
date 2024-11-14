

export const removeEmptyString = (json: Object) => {
    // return Object.fromEntries(Object.entries(json).filter(([_, v]) => v !== ''))
    Object.keys(json).forEach(k => json[k] = json[k] === '' ? null : json[k])
    return json
}


export const removeNullEntries = (json: Object) => {
    return Object.fromEntries(Object.entries(json).filter(([_, v]) => v !== null))
}

export const initDownload = (url: string, name = '') => {
    const a = document.createElement('a')
    document.body.appendChild(a)
    a.setAttribute('href', url)
    a.setAttribute('download', name)
    a.click()
    document.body.removeChild(a)
}

export const sessionAsPrivilege = (session) => {
    if (!session) return false
    if ( new Date(session?.licenses?.prebat.end_at) > new Date() || session?.roles?.GLOBAL_ADMIN) return true
    else return false
}