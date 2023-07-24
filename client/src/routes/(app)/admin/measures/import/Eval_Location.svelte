<script>
    import Measures from './Eval_Measures.svelte'
    import { locations as icon } from '$lib/svg'
    export let location
    export let level = 1
    export let type = 'building'
    const { name, zones, rooms, measures } = location
 </script>

<section class="z-depth-{level}">
    <h3 class="alt-font flex {'l' + level}">
        <i class="icon">{@html icon[type]}</i>
        {name} 
        <span>{measures?.length ?? 0} points de mesure</span>
    </h3>
    {#if measures}
        <Measures {measures}/>
    {/if}

    {#if zones}
        {#each zones as zone}
            <svelte:self location={zone} level={level + 1} type={'zone'}/>
        {/each}
    {/if}
    {#if rooms}
        {#each rooms as room}
            <svelte:self location={room} level={level + 1} type={'room'}/>
        {/each}
    {/if}
</section>


<style>
    section {
        margin-top: 24px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 24px 32px;
    }
    h3 {
        color: var(--secondary-darken);
        border-bottom: 1px dashed var(--primary-lighten);
        padding: 0 0 8px 4px;
        align-items: center;
    }
    h3 span {
        color: #424242;
        font-family: JetBrains;
        font-size: 11px;
        padding-left: 24px;
    }
    h3.l1 {
        font-size: 22px;
    }
    h3.l2 {
        font-size: 18px;
    }
    h3.l3 {
        font-size: 16px;
    }
    i.icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }
</style>