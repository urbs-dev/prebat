<script>
    import Nav from './Nav.svelte'
    import Header from './Header.svelte'
    import { goto } from '$app/navigation'
	import { status, user } from '$module/session'
    import { getPath } from 'gros/page'
</script>

<svelte:head>
    <title>PREBAT | Admin</title>
</svelte:head>



{#if $status.isAuthenticated && ($user.roles.USER_ADMIN || $user.roles.GLOBAL_ADMIN)}
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