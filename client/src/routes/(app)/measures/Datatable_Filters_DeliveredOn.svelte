<script>
    import { check } from 'gros/datatable'
    import { Range } from 'gros/form'
    export let handler
    const [min, max] = handler.createCalculation(row => row.report?.delivered_on).bounds()
    let value = [min, max]
    const filter = handler.createFilter(row => row.report?.delivered_on, check.isBetween)
    const updateFilter = () => {
        if (value[0] === min && value[1] === max) {
            filter.clear()
        }
        else {
            filter.set(value)
        }
    }
    $: value, updateFilter()
</script>

<h3 class="flex">
    <div class="flex">
        <i class="micon" style="margin-right:6px;font-size: 18px;">filter_list</i>
        Année de livraison
    </div>
    <!-- {#if $selected.length > 0}
        <button class="btn" style:color="#e57373" on:click={() => filter.clear()}>
            <i class="micon">clear</i>
        </button>
    {/if} -->
</h3>

<article>
    <aside class="range">
        <div>Entre {value[0]} et {value[1]}</div>
        <Range bind:value min={min} max={max} step={1}/>
    </aside>
</article>




<style>
    article {
        width: 100%;
        border-radius: 4px;
        margin: 4px 0;
        background: #fafafa;
        padding: 8px;
        border: 1px solid #e0e0e0;
    }
    h3 {
        color: #616161;
        margin: 24px 4px 4px 0;
        font-family: Roboto;
        font-size: 15px;
        text-transform: none;
        letter-spacing: 0;
        justify-content: space-between;
    }
    /* h3 button {
        padding: 0;
    } */
    h3 button i {
        font-size: 18px;
    }
    aside.range {
        padding: 8px 16px 16px 16px;
    }
    aside.range div {
        margin: 0 0 8px 0;
        font-family: JetBrains;
        text-align: center;
    }
</style>