<script>
    import Place from './Operation_Place.svelte'
    import Label from './Operation_Label.svelte'
    import Contract from './Operation_Contract.svelte'
    import Climat from './Operation_Climat.svelte'
    import Engineering from './Operation_Engineering.svelte'
    export let operation 
    let { abstract, report } = operation
    $: operation, { abstract, report } = operation
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

</style>