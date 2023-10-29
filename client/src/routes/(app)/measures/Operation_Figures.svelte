<script>
    import { locations as icon  } from "$lib/svg"
    export let sites = { buildings: [], zones: [], rooms: [] }
    export let measuresCount = 0
    const s = (number) => number > 1 ? 's' : ''
</script>


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


    <li class="flex">
        <i class="icon last">{@html icon.sensor}</i>
        <span class="num">{measuresCount}</span> 
        Point{s(measuresCount)} de mesure
    </li>
</ul>



<style>

    span.num {
        font-family: JetBrains;
        font-size: 20px;
        line-height: 28px;
    }
    ul {
        margin: 8px 0;
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
    li.flex i.icon.last {
        color: var(--primary-lighten)
    }
    li.flex span {
        margin: 0 4px 0 8px;
        color: #424242;
    }
</style>