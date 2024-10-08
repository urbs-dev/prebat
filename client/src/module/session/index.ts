import { writable, get } from 'svelte/store'
import { getPath }     from 'gros/page'

export { default as AccountButton } from './AccountButton.svelte'
export { default as AccountButtonLink } from './AccountButtonLink.svelte'
export { default as Account } from './Account.svelte'
export { default as ForgotPasswordModal } from './ForgotPasswordModal.svelte'

export const status = writable({ isAuthenticated: false, isAdmin: false })

const createUser = () => {
    const { subscribe, set, update } = writable(null)
    return {
        subscribe, set, update,
        get: () => { return get(user) },
        create: (session) => {
            if (session.group.name === 'prebat' || session.roles.GLOBAL_ADMIN) {
                user.set(session)
                document.cookie = `token=${session.token};path=/;`
                return true
            }
            return false
        },
        signIn: async (form: SignIn) => {
            const response = await fetch(`BASE_URL/resources.api/account/signin`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form)
            })
            const json = await response.json()
            if (response.status !== 200) {
                if (json.message === 'terms') return `Vous devez accepter les CGU`
                return 'Identifiant ou mot de passe incorrect'
            }
            if(json.redirect) {
                window.location.replace( json.redirect )
                return
            }
            user.create(json)
            window.location.replace( getPath('/') )
            return json
        },
        signUp: async (form) => {
            const response = await fetch(`BASE_URL/resources.api/account/signup`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form)
            })
            const json = await response.json()
            return json
        },
        signOut: async () => {
            const response = await fetch(`BASE_URL/resources.api/account/signout`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
            })
            await response.json()
            document.cookie = `token=null;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT"`
            user.set(null)
            document.location.reload()
            return
        },
        getSession: async () => {
            const response = await fetch(`BASE_URL/resources.api/account/session`)
            if (response.status === 200) {
                const json = await response.json()
                const isCreated = user.create(json)
                if (isCreated) {
                    status.set({ isAuthenticated: true, isAdmin: json.roles.GLOBAL_ADMIN })
                }
                return status
            }
            status.set({ isAuthenticated: false, isAdmin: false })
            user.set({ isAuthenticated: false, isAdmin: false })
        },
    }
}
export const user = createUser()

export const account = {
    update: async (form) => {
        const response = await fetch(`BASE_URL/resources.api/account`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        const json = await response.json()
        if (response.ok) {
            user.create(json)
        }
        return json
    },
    password: async (form) => {
        const response = await fetch(`BASE_URL/resources.api/account/password`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        return await response.json()
    },
    destroy: async () => {
        const response = await fetch(`BASE_URL/resources.api/account`, {
            headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
            method: 'DELETE',
        })
        if (response.status === 200) {
            user.signOut()
            document.location.reload()
            return
        }
        return
    }
}

export const manager = writable(false)
export const page = writable('show')


export type SignIn = {
    login: string,
    password: string,
    termsOfUse: boolean,
    sso?: string,
    sig?: string,
}