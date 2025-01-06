<script lang="ts">
    import type { ComponentType } from 'svelte'
    import type {  DataHandler } from 'gros/datatable'
    import { status } from '$module/session';
    import { Pagination } from 'gros/datatable'
    import Filters from './Datatable_Filters.svelte'
    import AdvanceFilters from './Datatable_Filters_Advanced.svelte'
    import Mobilfilter from './Datatable_Filters_Mobil.svelte'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>
    export let isMobile = false
    export let showMobileFilters = false

    export let rowCount       = true
    export let selectedCount  = false
    export let pagination     = true

    export let header: ComponentType[] = []
    export let footer: ComponentType[] = []
    const hasHeader = header.filter(Boolean).length > 0
    const hasFooter = footer.filter(Boolean).length > 0

    let element: HTMLElement
    let clientWidth = 1000
    $: small = clientWidth < 600

    handler.on('change', () => {
        if (element) element.scrollTop = 0
    })

</script>

<section bind:clientWidth class={$$props.class ?? ''}>

    <header class:container={hasHeader}>
        {#each header as component}
            <svelte:component this={component} {handler} {small} {element}/>
        {/each}
    </header>

    <article bind:this={element}>
        <aside class="flex">
            <Filters {handler} bind:isMobile/>
            <Mobilfilter bind:handler bind:showMobileFilters bind:isMobile/>
            <slot />
            {#if $status.isAuthenticated}
                <AdvanceFilters {handler} bind:isMobile/>
            {/if}
        </aside>
        
    </article>

    <footer class:container={rowCount || pagination}>
        {#if pagination}
            <Pagination {handler} small={clientWidth < 600} />
        {/if}
    </footer>

</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
    section :global(table) {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
    }
    section :global(thead) {
        position: sticky;
        inset-block-start: 0;
        z-index: 1;
    }
    section :global(thead tr:first-child th) {
        padding: 8px 20px;
    }
    section :global(thead tr th) {
        border-bottom: 4px solid var(--primary-lighten-1);
    }
    section :global(tbody tr) {
        transition: background, 0.2s;
    }
    section :global(tbody td) {
        padding: 4px 20px;
    }
    section :global(tbody td.numeric) {
        text-align: right;
        font-family: monospace, inherit;
    }
    header,
    footer {
        min-height: 4px;
        padding: 0 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    footer {
        border-top: 1px solid #e0e0e0;
    }
    header.container,
    footer.container {
        min-height: 48px;
    }

    article {
        position: relative;
        height: 100%;
        overflow: scroll;
        scrollbar-width: thin;
        background: #fff;
    }
    article::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    article::-webkit-scrollbar-track {
        background: #f5f5f5;
    }
    article::-webkit-scrollbar-thumb {
        background: #c2c2c2;
    }
    article::-webkit-scrollbar-thumb:hover {
        background: #9e9e9e;
    }
    article :global(.hidden) {
        display: none;
    }

    aside {
        margin: 0 auto;
        max-width: 1600px;
        padding: 0 24px;
        align-items: flex-start;
    }
</style>