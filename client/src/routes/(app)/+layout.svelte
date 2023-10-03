<script>
    import { goto } from '$app/navigation'
	// import { Presence } from '$module/socket'
	import { user, status } from '$module/session'
	import { Loading } from 'gros/loading'
    import { getPath } from 'gros/page'
	import Header from '$lib/components/Header.svelte'
</script>

<svelte:head>
	<title>PREBAT</title>
</svelte:head>

{#await user.getAccount()}
	<Loading bootstrap/>
{:then}
	{#if $status.isAuthenticated}
		<Header/>
		<slot/>
		<!-- <Presence info={{ application: 'PREBAT' }}/> -->
	{:else}
		<button on:click={goto( getPath('/auth'))}/>
	{/if}
{/await}