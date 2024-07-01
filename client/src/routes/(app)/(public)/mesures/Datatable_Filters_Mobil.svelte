<script>
    import DeliveredOn from './Datatable_Filters_DeliveredOn.svelte'
    import Use from './Datatable_Filters_Use.svelte'
    import ContractType from './Datatable_Filters_ContractType.svelte'
    import Engineering from './Datatable_Filters_Engineering.svelte'
    import Places from './Datatable_Filters_Places.svelte'
    export let handler
    export let isMobile = true
    export let showMobileFilters = false
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<section on:click={() => {showMobileFilters = false}} class:visible={isMobile && showMobileFilters}>
</section>
<article class="thin-scrollbar" class:visible={isMobile && showMobileFilters}>
    <h1>Mesures par opération</h1>
    <span>⚠️ Les mesures ne sont pas disponibles pour toutes les opérations.</span>
    <Places bind:handler/>
    <Use bind:handler/>
    <Engineering bind:handler/>
    <ContractType bind:handler/>
    <DeliveredOn bind:handler/>
</article>


<style>
    section, article {
        display: none;
    }
    .visible {
        display: block;
    }

    section{
        background-color: rgba(0, 0, 0, .4);
        position: fixed;
        backdrop-filter: blur(1px);
        z-index: 100;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        cursor: pointer;
    }
    article {
        position: fixed;
        color: #fff;
        top: 150px;
        left: 0;
        bottom: 0;
        z-index: 100;
        background: #002654;
        min-height: calc(100vh - 150px);
        padding: 16px;
        overflow-y: auto;
        scrollbar-width: thin;
        cursor: auto;

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