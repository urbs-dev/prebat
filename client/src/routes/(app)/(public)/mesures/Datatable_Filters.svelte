<script>
    import DeliveredOn from './Datatable_Filters_DeliveredOn.svelte'
    import Use from './Datatable_Filters_Use.svelte'
    import ContractType from './Datatable_Filters_ContractType.svelte'
    import Engineering from './Datatable_Filters_Engineering.svelte'
    import Places from './Datatable_Filters_Places.svelte'
    export let handler
</script>






<section class="thin-scrollbar">
    <h1>Mesures par opération</h1>
    <span>⚠️ Les mesures ne sont pas disponibles pour toutes les opérations.</span>
    <Places {handler}/>
    <Use {handler}/>
    <Engineering {handler}/>
    <ContractType {handler}/>
    <DeliveredOn {handler}/>
</section>


<style>
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
</style>