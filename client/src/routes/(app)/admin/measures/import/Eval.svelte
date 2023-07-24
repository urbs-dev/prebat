<script>
    export let content
    const { name, time_step, sites, row_count, buildings } = content
    import Location from './Eval_Location.svelte'
</script>


<section>
    <h1 class="alt-font">{name}</h1>
    <ul class="flex">
        <li>
            interval <span class="num">{time_step}s</span>
        </li>
        <li>
            <span class="num">{sites.buildings.length}</span> bâtiment(s),
            <span class="num">{sites.zones.length}</span> zone(s),
            <span class="num">{sites.rooms.length}</span> pièce(s)
        </li>
        <li>
            <span class="num">{row_count}</span> lignes
        </li>
    </ul>
    <h2 class="alt-font">Sites</h2>
    {#each buildings as building}
        <Location location={building}/>
    {/each}
</section>

<style>
    section {
        padding: 40px 32px;
    }
    h1 {
        color: var(--secondary-darken);
    }
    h2 {
        color: var(--primary-darken);
    }
    span.num {
        color: var(--primary-lighten);
        font-family: JetBrains;
        font-size: 24px;
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
</style>