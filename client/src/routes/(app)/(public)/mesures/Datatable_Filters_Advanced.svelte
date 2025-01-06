<script>
    import Places from './Datatable_Filters/Places.svelte'
    import Select from './Datatable_Filters/Select.svelte'
    import Range from './Datatable_Filters/Range.svelte'
    import SensorModal from './Modal_Filters_Sensor.svelte'
    import { modal } from 'gros/modal'

    import { status } from '$module/session';
    export let handler
    export let isMobile = false
    const rows = handler.getAllRows()

    const downloads = async () =>{
        const ids = await $rows.map(row => row.id);
        console.log('download');
        const result = await fetch(`BASE_URL/prebat.api/operations/extracts`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ids}),
        }).then(response => response.blob());

        let url = window.URL.createObjectURL(result);
        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('hidden', '');
        link.style.visibility = "hidden";    
        link.setAttribute("download", "measures.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('download');
    }

    const openModal = () => {
        modal.open(SensorModal, {handler})
    }

    
    const adminFilters = [
        ["shon", "SHON", "range"],
        ["su", "SU", "range"],
        ["shab", "SHAB", "range"],
        ["departement", "Département", "places"],
        ["region", "Région", "places"],
        ["delivered_on", "Année de livraison", "range"],
        ["contract_type", "Type de maitrise d'ouvrage", "select"],
        ["engineering", "Nature des travaux", "select"],
        ["label", "Label / certification ", "select"],
        ["building_insulation", "Type d'isolation", "select"],
        ["wall_insulation", "Isolation mue", "select"],
        ["roof_insulation", "Type toiture", "select"],
        ["floor_insulation", "Type plancher", "select"],
        ["window_carpentry", "Menuiserie - vitrage", "select"],
        ["frame_carpentry", "Menuiserie - chassis", "select"],
        ["air_permeability", "Pérméabilité à l'air de l'enveloppe", "range"],
        // ["air_permeability_network", "Pérméabilité à l'air des réseaux", "range"],
    ]
</script>






<section class="thin-scrollbar" class:visible={!isMobile}>
    <h1>Filtres avancées</h1>
        <button class="btn" on:click={() => openModal()}>
            <i class="micon">cloud_download</i>
            <span>
                Télécharger les opérations filtrées
            </span>
        </button>
        {#each adminFilters as filter}
            {@const [field, title, type] = filter}
            {@const hide = true}
            {#if type === 'range'}
                <Range handler={handler} {field} {title} {hide}/>
            {:else if type === 'places'}
                <Places handler={handler} {field} {title} {hide}/>
            {:else}
                <Select handler={handler} {field} {title} {hide}/>
            {/if}
        {/each}
</section>


<style>
    section{
        display: none;
    }
    .visible {
        display: block;
    }
    section {
        position:sticky;
        top: 40px;
        margin-top: 40px;
        width: 320px;
        color: #fff;
        background: #002654;
        height: calc(100vh - 80px - 134px);
        border-radius: 8px;
        padding: 16px;
        overflow-y: auto;
        scrollbar-width: thin;
    }
    section::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    section::-webkit-scrollbar-track {
        background: var(--primary-lighten-1);
        border-radius: 0 8px 8px 0;
    }
    section::-webkit-scrollbar-thumb {
        background: var(--primary-lighten-1);
        border-radius: 0 8px 8px 0;
    }
    section::-webkit-scrollbar-thumb:hover {
        background: var(--primary-lighten-3);
    }
    h1 {
        font-size: 18px;
    }
    span {
        display: block;
        padding: 8px 0;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        font-size: 12px;
    }

    .btn{
        display: flex;
        justify-content: flex-start;
        
        background: var(--primary);
        color: #fff;
        border: none;
        width: 100%;

        border-radius: 4px;
        padding: 8px 16px;
        margin: 8px 0;
        text-align: center;
        cursor: pointer;
        gap: 8px;
    }
    .btn:hover{
        background: var(--primary-lighten-1);
    }
    .btn span{
        border: none;
        white-space: initial;
        text-align: left;
        line-height: 1.2em;
        letter-spacing: normal;
        font-size: 12px;
}
</style>