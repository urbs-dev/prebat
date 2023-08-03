import { writable } from 'svelte/store'


let intersectionObserver: IntersectionObserver

function ensureIntersectionObserver() {
    if (intersectionObserver) return

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
                entry.target.dispatchEvent(new CustomEvent(eventName))
            })
        },
        {
            threshold: 0.8
        }
    )
}

export function viewport(element: HTMLElement) {
    ensureIntersectionObserver()

    intersectionObserver.observe(element)

    return {
        destroy() {
            intersectionObserver.unobserve(element)
        }
    }
}



export const anchor = writable(null)
