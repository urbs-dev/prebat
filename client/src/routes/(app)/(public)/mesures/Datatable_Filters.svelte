<script>
    import Places from './Datatable_Filters/Places.svelte'
    import Select from './Datatable_Filters/Select.svelte'
    import Range from './Datatable_Filters/Range.svelte'
    import Use from './Datatable_Filters/Use.svelte'

    import { status } from '$module/session';
    export let handler
    export let isMobile = false
    const rows = handler.getAllRows()



    const adminFilters = [
        ["use", "Destination d'usage"],
        ["climatic_zone", "Zone climatique"],
        ["constructive_system", "Système constructif"],
        ["heating", "Equipements de chauffage"],
        ["hot_water", "Equipements d'ECS"],
        ["airing", "Equipements de ventilation"],
    ]
</script>






<section class="thin-scrollbar" class:visible={!isMobile}>
    <h1>Mesures par opération</h1>
    <span>⚠️ Les mesures ne sont pas disponibles pour toutes les opérations.</span>

    {#if $status.isAuthenticated}
        {#each adminFilters as filter}
            {@const [field, title] = filter}
            {@const hide = true}
            <Select handler={handler} {field} {title} {hide}/>
        {/each}
    {:else}
        <Places {handler} title="Département"/> 
        <Select {handler} field="use" title="Destination d'usage"/>
        <Select {handler} field="engineering" title="Nature des travaux"/>
        <Select {handler} field="contract_type" title="Maîtrise d'ouvrage"/>
        <Range {handler} field="delivered_on" title="Année de livraison" hide={false}/>
    {/if}
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