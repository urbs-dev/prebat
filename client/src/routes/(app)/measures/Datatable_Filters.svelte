<script>
    import Use from './Datatable_Filters_Use.svelte'
    import ContractType from './Datatable_Filters_ContractType.svelte'
    import Engineering from './Datatable_Filters_Engineering.svelte'
    export let handler
</script>






<section class="thin-scrollbar">
    <h1>Mesures par opération</h1>
    <span>⚠️ Les mesures ne sont pas disponibles pour toutes les opérations.</span>
    <ContractType {handler}/>
    <Use {handler}/>
    <Engineering {handler}/>
</section>


<style>
    section {
        position:sticky;
        top: 40px;
        margin-top: 40px;
        width: 320px;
        background: var(--primary-lighten-1);
        height: calc(100vh - 80px - 64px);
        border-radius: 8px;
        padding: 16px;
        overflow-y: auto;
        scrollbar-width: thin;
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