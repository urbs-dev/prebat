<script>
    import { viewport, anchor } from '$lib/utils/viewport'
    export let id
</script>

<section use:viewport on:enterViewport={() => ($anchor = id)}>
    <!-- svelte-ignore a11y-missing-content -->
    <a class="anchor" {id}/>
    <slot />
</section>

<style>
    a {
        padding-top: 48px;
        display: block;
    }
</style>