<script lang="ts">
    import type { DataHandler, Row } from '@vincjo/datatables'

    type T = $$Generic<Row>
    export let isMobile: boolean = false
    export let showMobileFilters: boolean = false
    export let handler: DataHandler<T>
    let value = ''

    const rowCount = handler.getRowCount()

    handler.on('clearSearch', () => value ='')
</script>

<section class="flex">
    <aside>
        <i class="search">
            <svg viewBox="0 0 15 15" fill="none"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </i>
        <input
            bind:value={value} 
            placeholder="Filtrer les opérations..."
            spellcheck="false"
            on:input={() => handler.search(value)}
        />
        {#if isMobile}
            <button on:click={() => {showMobileFilters = !showMobileFilters}}>
                <i class="micon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"/></svg>
                </i>
            </button>
        {/if}
    </aside>
    <span>{$rowCount.total} opération{$rowCount.total > 1 ? 's' : ''}</span>
</section>



<style>
    section {
        margin: 32px 0 16px 0;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    aside {
        position: relative;
        margin: 0;
        background: #fff;
        min-width: 400px;
        margin-right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    i {
        width: 24px;
        height: 24px;
        color: #9e9e9e;
    }
    .search{
        position: absolute; top:8px; left: 8px;
    }
    input{
        outline:none;
        padding:0 8px 0 40px;
        line-height: 32px;
        margin:0;
        height:40px;
        background:transparent;
        width: 100%;
        transition:border, 0.1s;
        border:1px solid var(--primary-lighten-3);
        /* border-radius:4px; */
        border-radius: 6px;
        font-size: 14px;
    }
    input:focus {
        border:1px solid var(--primary-lighten);
    }
    input::placeholder {
        color:#9e9e9e;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height:24px;
        font-weight: 200;
        font-size: 14px;
    }

    
    span {
        color: #616161;
        line-height: 32px;
        font-size: 13px;
        font-weight: normal;
        font-family: JetBrains; 
    }
</style>