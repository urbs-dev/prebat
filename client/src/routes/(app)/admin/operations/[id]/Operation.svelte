<script>
    import Place from './Operation_Place.svelte'
    import Label from './Operation_Label.svelte'
    import Contract from './Operation_Contract.svelte'
    import Climat from './Operation_Climat.svelte'
    import Engineering from './Operation_Engineering.svelte'
    import Report from './Report.svelte'
    import { locations as icon  } from "$lib/svg"
    export let operation 
    let { abstract, report, sites } = operation
    $: operation, { abstract, report, sites } = operation
    const s = (number) => number > 1 ? 's' : ''
    operation.report.name = operation.name
</script>


<aside>
    <Contract       {report}/>
    <Engineering    {report}/>
    <Label          {report}/>
    <Place          {report}/>
    <Climat         {report}/>
</aside>

{#if abstract}
    <fieldset>
        <legend>Résumé</legend>
        <p>{abstract}</p>
    </fieldset>
{/if}


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

<Report report={operation.report}/>


<style>
    p {
        font-family: 'Roboto';
        max-width: 640px;
        text-align: justify;
    }

    fieldset {
        margin-top: 16px;
        border: 1px solid #e0e0e0;
        padding: 8px 16px;
        max-width: 600px;
        border-radius: 8px;
    }
    fieldset legend {
        font-weight: normal;
        font-family: 'Lato';
        color: #9e9e9e;
    }

    aside :global(i.icon) {
        width:  24px;
        height: 24px;
        color: var(--secondary-lighten);
        margin-right: 16px;
    }
    aside :global(div) {
        font-family: JetBrains;
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