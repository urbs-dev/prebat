<script>
	import { ModalContainer } from 'gros/modal'
	import { Loading } from 'gros/loading'
</script>

<svelte:head>
	<title>PREBAT</title>
</svelte:head>

<slot/>
<Loading process/>
<ModalContainer/>