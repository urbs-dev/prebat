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
        get: () => {
            return get(user)
        },
        create: (data, updateJwt = true) => {
            user.set(data)
            if (updateJwt) {
                document.cookie = `jwt=${data.jwt.token};expires=${new Date(data.jwt.expires).toUTCString()};path=/;`
            }
        },
        connect: async (form) => {
            const response = await fetch(`BASE_URL/resources.api/account/auth`, {
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
            user.create( json )
            window.location.replace( getPath('/') )
            return json
        },
        register: async (form) => {
            const response = await fetch(`BASE_URL/resources.api/account`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form)
            })
            const json = await response.json()
            return json
        },
        logout: () => {
            document.cookie = `jwt=null;path=/`
            user.set(null)
            document.location.reload()
            return
        },
        getAccount: async () => {
            const response = await fetch(`BASE_URL/resources.api/account`)
            const json = await response.json()
            if (response.status === 200) {
                status.set({ isAuthenticated: true, isAdmin: json.roles.GLOBAL_ADMIN })
                user.create(json)
                return status
            }
            status.set({ isAuthenticated: false, isAdmin: false })
            user.set(status)
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
            user.create( json, false )
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
            user.logout()
            document.location.reload()
            return
        }
        return
    }
}

export const manager = writable(false)
export const page = writable('show')