<script lang="ts">
    import { user } from '$module/session'
    import { presence } from '$module/socket'
    import io from 'socket.io-client'
    export let info: { application: string, territory?: string }

    const socket = io('BASE_URL', { path: '/resources.api/whosthere/' })
    socket.on('connect', () => {
        socket.emit('identify', { 
            id: $user.id,
            name: $user.name,
            firstname: $user.firstname,
            email: $user.email,
            login_count: $user.login_count,
            group: $user.group?.name,
            organization: $user.organization,
            info: [info]
        })
    })

    socket.on('users.new', ({user}) => {
        const exists = $presence.find(item => item.id === user.id)
        if (exists) {
            exists.count++
            exists.info = [ ...exists.info, ...user.info]
            const uniqueArray = exists.info.filter((value, index) => {
                const _value = JSON.stringify(value)
                return index === exists.info.findIndex(obj => {
                    return JSON.stringify(obj) === _value
                })
            })
            exists.info = uniqueArray
        } else {
            $presence = [...$presence, user]
        }
    })

    socket.on('users.leave', ({user}) => {

        const exists = $presence.find(item => item.id === user.id)
            if (exists) {
                exists.count--
                if (exists.count === 0) {
                    $presence = $presence.filter(item => item.id !== user.id)
                }
            }
    })

    socket.on('users', ({users}) => {
        $presence = users
    })
</script>