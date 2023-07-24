import { writable, type Writable } from 'svelte/store'

export const content = writable(null)
export const page = writable(null) as Writable<'eval' | 'result' | 'error'>