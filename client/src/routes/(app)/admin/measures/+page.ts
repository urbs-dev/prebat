import type { PageLoad } from './$types'

export const load = (async () => {
    const response = await fetch(`BASE_URL/prebat.api/measures`)
    return {
        measures: response.json()
    }
}) satisfies PageLoad;