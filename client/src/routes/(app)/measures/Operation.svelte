<script>
    import Figures from './Operation_Figures.svelte'
    import { loading } from 'gros/loading'
    import { initDownload } from '$lib/utils'
    export let row
    const stringify = (value) => {
        if (!value) return 'N/R'
        return String(value).replace(/ ~ /g, ', ')
    }

    const extract = async () => {
		loading.start(`Extraction en cours`, `Cela peut durer quelques secondes`)
        setTimeout(async () => {
            const response = await fetch(`BASE_URL/prebat.api/operations/${row.id}/extract`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            })
            const result = await response.json()
            initDownload(result.url)
            loading.stop()
        }, 960)
    }
</script>


<aside class="z-depth-1">
    <h1 class="flex">
        {row.name} 
        <button class="btn" on:click={extract}>
            <i class="micon" style:margin-right="4px">file_download</i>
            Télécharger
        </button>
    </h1>
    <Figures sites={row.sites} measuresCount={row.measures.length}/>
    <ul>
        <li class="alt-font flex"><span>Année de livraison :  </span><b>{stringify(row.report?.delivered_on)}</b></li>
        <li class="alt-font flex"><span>Maîtrise d'ouvrage :  </span><b>{stringify(row.report?.contract_type)}</b></li>
        <li class="alt-font flex"><span>Destination d'usage : </span><b>{stringify(row.report?.use)}</b></li>
        <li class="alt-font flex"><span>Nature des travaux :  </span><b>{stringify(row.report?.engineering)}</b></li>
    </ul>
</aside>

<style>
    aside {
        margin: 16px 0;
        background: #fff;
        border: 1px solid #e0e0e0;
        padding: 16px;
        border-radius: 8px;
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
    li {
        font-size: 16px;
        align-items: flex-end;
    }
    li span {
        width: 152px;
    }
    li b {
        font-family: JetBrains;
        font-weight: normal;
        font-size: 13px;
        color: var(--primary);
    }
</style>