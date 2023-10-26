<script lang="ts">
    import type { ComponentType } from 'svelte'
    import type {  DataHandler  } from 'gros/datatable'

    type T = $$Generic<Row>

    export let handler: DataHandler<T>

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
        <aside>
            <slot />
        </aside>
    </article>

    <footer class:container={hasFooter}>
        {#each footer as component}
            <svelte:component this={component} {handler} {small} {element}/>
        {/each}
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
        justify-content: space-between;
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
        overflow: auto;
        scrollbar-width: thin;
    }
    aside {
        margin: 0 auto;
        max-width: 960px;
        padding: 0 24px;
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
</style>