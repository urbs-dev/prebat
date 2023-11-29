<script>
	import { ModalContainer } from 'gros/modal'
	import { Loading } from 'gros/loading'
	import { user } from '$module/session'
</script>

<svelte:head>
	<title>PREBAT</title>
</svelte:head>

{#await user.getSession()}
	<Loading bootstrap/>
{:then}
	<slot/>
{/await}
<Loading process/>
<ModalContainer/>