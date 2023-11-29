import { writable } from 'svelte/store'

export { default as PresenceTable } from './PresenceTable.svelte'

let interval: any

export const reload = async () => {
    const response = await fetch(`BASE_URL/resources.api/account/presence`)
    if (response.status === 200) {
        const json = await response.json()
        presence.set(json)
    }
}

export const refresh = async () => {
    await reload()
    clearInterval(interval)
    interval = setInterval( async () => {
        await reload()
    }, 20_000)
}

export const stopPropagation = () => {
    clearInterval(interval)
}

export const presence = writable([])