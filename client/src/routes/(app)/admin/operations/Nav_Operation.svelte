<script>
    import Location from './Nav_Operation_Location.svelte'
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'
    import { getPath } from 'gros/page'   
    import { Tooltip } from 'gros/tooltip'
    // import { Dropdown } from 'gros/dropdown'
    export let operation
    $: active = $page.params?.operation  === operation.id
    $: selected = active && $page.params?.location === undefined
</script>

<section class="flex" class:selected={selected}>
    <a href="{getPath(`/admin/operations/${operation.id}`)}" >
        <button class="slider flex" class:active={active}>
            <i class="micon show">keyboard_arrow_right</i>
            <i class="micon">{active ? 'folder_open' : 'folder'}</i>
            {operation.name}
             {#if !operation.filename}
                <span class="tooltip">
                    <i class="micon nofile "> no_sim</i>
                    <Tooltip  content="Cette opération n'a pas de mesure "/>
                </span>
            {/if}
        </button>
    </a>
</section>
{#if active}
    <aside transition:slide|local={{ duration:150 }}>
        {#each operation.locations as location}
            <Location {location} name={operation.name} {operation}/>
        {/each}
    </aside>
{/if}

<style>
    section {
        justify-content: space-between;
        border-radius: 4px;
    }
    section:not(.selected):hover {
        background: var(--primary-lighten-1);
    }
    section.selected {
        background: var(--primary-lighten-2);
    }
    button.slider {
        width: calc(100% - 32px);
        width: 100%;
        color: #424242;
        font-size: 16px;
        padding: 4px 8px;
    }

    i:not(.menu) {
        font-size: 20px;
        margin-right: 8px;
    }
    button i.show {
        transition: transform, 0.2s;
        margin-right: 4px;
    }
    .active i.show {
        transform: rotate(90deg);
    }
    aside {
        border-left: 1px dashed var(--primary-lighten);
        padding:4px 8px;
        margin-left: 18px;
    }
    .nofile {
        opacity: 0.4;
    }
</style>