<script>
    import Nav from './Nav.svelte'
    import { fade } from 'svelte/transition'
    import { afterNavigate } from '$app/navigation'
    export let data
    let element

    afterNavigate( () => {
        element.scrollTop = 0
    })
</script>


<Nav data={data.operations}/>

<section class="thin-scrollbar" in:fade={{ duration:200 }} bind:this={element}>
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