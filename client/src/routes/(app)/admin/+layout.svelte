<script>
    import Nav from './Nav.svelte'
    import Header from './Header.svelte'
    import { goto } from '$app/navigation'
    import { sessionAsPrivilege } from '$lib/utils'
	import { status, user } from '$module/session'
    import { getPath } from 'gros/page'
</script>

<svelte:head>
    <title>PREBAT | Admin</title>
</svelte:head>



{#if $status.isAuthenticated && sessionAsPrivilege($user)}
    <Header/>
    <Nav/>
    <section>
        <slot/>
    </section>
{:else}
    <button on:click={goto( getPath('/'))}/>
{/if}


<style>
    section{
        position:absolute;
        top:64px;
        left:240px;
        bottom:0;
        right:0;
        background:#fff;
    }
</style>