<script>
    export let location
    import { locations as icon } from '$lib/svg'
</script>


<div class="flex">
    <i class="icon">{@html icon[location.nature]}</i>
    {location.name}
</div>

<article>
    {#if location.locations}
        {#each location.locations as location}
            <svelte:self {location}/>
        {/each}
    {/if}
</article>





<style>
    div {
        margin-left: 6px;
    }
    i {
        color: var(--primary-lighten);
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    article {
        margin-top: 4px;
        margin-left: 24px;
    }
</style>