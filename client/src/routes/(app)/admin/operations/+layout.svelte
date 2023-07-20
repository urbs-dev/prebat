<script>
    import Nav from './Nav.svelte'
    import { fade } from 'svelte/transition'
    export let data
</script>


<Nav data={data.operations}/>

<section class="thin-scrollbar" in:fade={{ duration:200 }}>
    <slot/>
</section>


<style>
    section {
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:280px;
        padding:0 40px;
        overflow-y: auto;
    }
</style>