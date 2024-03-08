<script>
    import { goto } from '$app/navigation'
	import { status } from '$module/session'
    import { getPath } from 'gros/page'
	import Header from '$lib/components/Header.svelte'
</script>

<svelte:head>
	<title>PREBAT</title>
</svelte:head>

<Header/>
<slot/>
