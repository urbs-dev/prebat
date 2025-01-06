<script>
    import { check } from 'gros/datatable'
    import { Range } from 'gros/form'
    export let handler
    export let field
    export let title
    export let hide = true 

    const [min, max] = handler.createCalculation(row => row.report[field]).bounds()
    let value = [min, max]
    const filter = handler.createFilter(row => row.report[field], check.isBetween)
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
        <button class="btn" class:active={hide} on:click={() => hide = !hide}>
            <i class="micon">keyboard_arrow_down</i>
        </button>
        <i class="micon" style="margin-right:6px;font-size: 18px;">filter_list</i>
        {title}
    </div>
    {#if value[0] !== min || value[1] !== max}
        <button class="btn" style:color="#e57373" on:click={() => value = [min, max]}>
            <i class="micon">clear</i>
        </button>
    {/if}
</h3>
{#if !hide}
    <article>
        <aside class="range">
            <div>Entre {value[0]} et {value[1]}</div>
            <Range bind:value min={min} max={max} step={1}/>
        </aside>
    </article>
{/if}




<style>
    article {
        width: 100%;
        border-radius: 4px;
        margin: 4px 0;
        background: #fafafa;
        padding: 8px;
        color: #616161;
        border: 1px solid #e0e0e0;
    }
    h3 {
        color: #fff;
        margin: 24px 4px 4px 0;
        font-family: Roboto;
        font-size: 15px;
        text-transform: none;
        letter-spacing: 0;
        justify-content: space-between;
    }
    h3 button {
        padding: 0;
    }
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
    h3 button i.micon{
        color: #9e9e9e;
        transition: all 0.2s;
    }
    h3 button.active i.micon{
        transform: rotate(-90deg);
        transition: all 0.2s;
    }
</style>