<script>
    import { slide } from 'svelte/transition'
    export let measures
    const keys = Object.keys(measures[0])
    let show = false
</script>


<section>
    <header>
        <button on:click={() => show = !show} class="btn">
            <i class="micon">{show ? 'expand_more' : 'chevron_right'}</i>
            {show ? 'Masiquer' : 'Afficher'} les points de mesure
        </button>
    </header>
    {#if show}
    <article transition:slide={{ duration: 200 }}>
        <table>
            <thead>
                <tr>
                    {#each keys as key}
                        <th>{key}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                {#each measures as measure}
                    <tr>
                        {#each keys as key}
                            <td>{measure[key]}</td>
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </article>
    {/if}
</section>

<style>
    section {
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 4px 0;
        background: #fafafa;
        max-height: 50vh;
    }
    button {
        width: 100%;
        background: transparent;
        color: #757575;
        justify-content: flex-start;
    }
    table {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        font-size: 11px;
    }
    thead {
        position: sticky;
        inset-block-start: 0;
        z-index: 1;
        background: #fafafa;
    }
    thead tr:first-child th {
        padding: 8px 8px;
    }
    thead tr th {
        border-bottom: 1px solid #e0e0e0;
    }
    tbody tr {
        transition: background, 0.2s;
    }
    tbody tr:hover {
        background: #f5f5f5;
    }
    tbody td {
        padding: 2px 8px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    article {
        position: relative;
        height: 100%;
        overflow: auto;
        scrollbar-width: thin;
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
</style>