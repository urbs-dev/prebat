<script>
    import { locations as icon  } from "$lib/svg"
    import Place from './Operation_Place.svelte'
    import Label from './Operation_Label.svelte'
    import Contract from './Operation_Contract.svelte'
    import Climat from './Operation_Climat.svelte'
    import Engineering from './Operation_Engineering.svelte'
    export let operation 
    let { abstract, sites, time_step } = operation
    $: operation, { abstract, sites, time_step } = operation
    const s = (number) => number > 1 ? 's' : ''
</script>


<aside>
    <Contract {operation}/>
    <Engineering {operation}/>
    <Label {operation}/>
    <Place {operation}/>
    <Climat {operation}/>
</aside>



{#if abstract}
    <fieldset>
        <legend>Résumé</legend>
        <p>{abstract}</p>
    </fieldset>
{/if}


<ul class="flex">
    <li>
        interval <span class="num">{time_step}s</span>
    </li>
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

<style>
    p {
        font-family: 'Roboto';
        max-width: 640px;
        text-align: justify;
    }
    span.num {
        color: var(--primary-darken);
        font-family: JetBrains;
        font-size: 24px;
        line-height: 28px;
    }
    ul {
        margin: 24px 0;
        flex-wrap: wrap;
    }
    li {
        padding: 4px 16px;
        border-radius: 4px;
        border: 1px dashed var(--primary-lighten-3);
        margin: 0 8px 4px 0;
        background: var(--primary-lighten-1);
    }
    li.flex i.icon {
        width: 28px;
        height: 28px;
        color: var(--primary)
    }
    li.flex span {
        margin: 0 4px 0 8px;
    }
    fieldset {
        margin-top: 24px;
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
</style>