<script>
    import { DataHandler } from 'gros/datatable'
    import Search from './Search.svelte'
    import Figures from './Figures.svelte'
    export let data
    const handler = new DataHandler(data.operations)
    const rows = handler.getRows()
</script>


<header class="flex">
    <Search {handler}/>
</header>
<section class="thin-scrollbar">
    <article>
        {#each $rows as row}
            <aside>
                <h1 class="flex">
                    {row.name} 
                    <button class="btn">
                        <i class="micon" style:margin-right="4px">file_download</i>
                        Télécharger
                    </button>
                </h1>
                <Figures sites={row.sites} measuresCount={row.measures.length}/>
                <ul>
                    <li>Année de livraison: {row.report?.delivered_on ?? 'N/R'}</li>
                    <li>Destination d'usage: {row.report?.use ?? 'N/R'}</li>
                    <li>Maîtrise d'ouvrage: {row.report?.contract_type ?? 'N/R'}</li>
                    <li>Nature des travaux: {row.report?.engineering ?? 'N/R'}</li>
                </ul>
            </aside>
        {/each}
    </article>
</section>

<style>
    header {
        height: 80px;
        align-items: flex-end;
        position:absolute;
        z-index:2;
        top:56px;left:0;right:0;bottom:0;
        padding:0 80px;
        background: #fdfdfd;
    }
    section{
        position:absolute;
        z-index:2;
        top:calc(56px + 80px);left:0;right:0;bottom:0;
        overflow-y:auto;
        background-color:#fdfdfd;
    }
    article{
        width:80%;
        max-width: 960px;
        margin:0 auto;
        padding: 24px 80px;
        color: #616161;
        border-radius: 8px;
    } 
    aside {
        margin: 0 0 40px 0;
    }
    h1 {
        font-size: 24px;
        color: var(--primary);
        border-bottom: 3px solid var(--primary-lighten-3);
        justify-content: space-between;
    }
    button {
        color: var(--primary);
    }
    button:hover {
        background: var(--primary-lighten-1);
        color: var(--primary-darken);
    }
</style>