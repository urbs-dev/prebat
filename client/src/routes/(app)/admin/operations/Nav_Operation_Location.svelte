<script>
    import { getPath } from 'gros/page'
    import { page } from '$app/stores'
    export let location
    export let operation
    export let name
    import { locations as icon } from '$lib/svg'
    $: active = $page.params?.location  === location.id
</script>


<a href={getPath('/admin/operations/' + operation.id + '/' + location.id)}>
    <div class="flex" class:active={active}>
        <i class="icon">{@html icon[location.nature]}</i>
        {location.name === name || location.name === 'batiment' ? operation.name : location.name}
    </div>
</a>

<article>
    {#if location.locations}
        {#each location.locations as location}
            <svelte:self {location} {operation}/>
        {/each}
    {/if}
</article>


<style>
    div {
        margin-left: 6px;
        border-radius: 2px;
        padding: 2px 4px;
        transition: background, 0.2s;
    }
    div:hover {
        background: var(--primary-lighten-1)
    }
    div.active {
        background: var(--primary-lighten-2);
    }
    i {
        color: var(--primary-lighten);
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
    article {
        padding-top: 2px;
        margin-left: 19px;
        border-left: 1px dashed #e0e0e0;
    }
</style>