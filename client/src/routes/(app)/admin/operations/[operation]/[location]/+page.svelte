<script>
    import Location from './Location.svelte'
    export let data
</script>

<Location location={data.location} operation={data.operation}/>