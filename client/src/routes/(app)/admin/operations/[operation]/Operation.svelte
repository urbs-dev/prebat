<script>
    import Report from './Report.svelte'
    import Scenario from './Scenario.svelte'
    import Documentation from './Documentation.svelte';
    import { locations as icon  } from "$lib/svg"
    export let operation 
    let { sites } = operation
    $: operation, {  sites } = operation
    const s = (number) => number > 1 ? 's' : ''
    operation.report.name = operation.name

    let currentTab = 'general'

    const TABS = {
        general: Report,
        scenario: Scenario,
        documentation: Documentation
    }

</script>


{#if sites}
    <ul class="flex">
        <li class="flex">
            <i class="icon">{@html icon.building}</i>
            <span class="num">{sites.buildings.length}</span> 
            bâtiment{s(sites.buildings.length)}
        </li>

        <li class="flex">
            <i class="icon">{@html icon.zone}</i>
            <span class="num">{sites.zones.length}</span> 
            zone{s(sites.zones.length)}
        </li>

        <li class="flex">
            <i class="icon">{@html icon.room}</i>
            <span class="num">{sites.rooms.length}</span> 
            pièce{s(sites.rooms.length)}
        </li>
    </ul>
{/if}

<section>
    <ul>
        <li class:active={currentTab === 'general' } on:click={() => currentTab = 'general'} > Général </li>
        <li class:active={currentTab === 'scenario'} on:click={() => currentTab = 'scenario'} > Scénario </li>
        <li class:active={currentTab === 'documentation'} on:click={() => currentTab = 'documentation'} > Documentation </li>
    </ul>

    <svelte:component this={TABS[currentTab]} operation={operation} />
</section>
    

<style>

    section{
        border: #9e9e9e 1px solid;
        border-radius: 8px;
        width: 100%;
    }
    section ul{
        display: flex;
        margin: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background: #f5f5f5;
        border-bottom: #9e9e9e 1px solid;
    }
    section ul li{
        margin: 0;
        padding: 8px 16px;
        font-size: 16px;
        color: #424242;
        border-radius: 0;
        border-right: #9e9e9e 1px solid;
        cursor: pointer;
    }
    section ul li:first-child{
        border-top-left-radius: 8px;
    }
    section ul li.active{
        background: var(--primary-lighten-2);
        color: #424242;
        font-weight: bold;
    }



    span.num {
        font-family: JetBrains;
        font-size: 20px;
        line-height: 28px;
    }
    ul {
        margin: 16px 0;
        flex-wrap: wrap;
    }
    li {
        padding: 2px 8px;
        border-radius: 4px;
        margin: 0 8px 4px 0;
        color: #9e9e9e;
        font-family: Lato;
        font-size: 16px;
    }
    li.flex i.icon {
        width: 22px;
        height: 22px;
        color: var(--secondary-lighten)
    }
    li.flex span {
        margin: 0 4px 0 8px;
        color: #424242;
    }
</style>