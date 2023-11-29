<script>
    import { user } from './'
    import { getPath } from 'gros/page'
    export let role = 'USER'
    export let isExternal = false
    export let href
    export let icon
    export let name

</script>

{#if isExternal && $user.roles[role] }
    <a href="{href}" rel="external">
        <i class="micon">{icon}</i>
        <span>{name}</span>
    </a>
{:else if $user.roles[role] || $user.roles.GLOBAL_ADMIN}
    <a href="{getPath(href)}">
        <i class="micon">{icon}</i>
        <span>{name}</span>
    </a>
{/if}