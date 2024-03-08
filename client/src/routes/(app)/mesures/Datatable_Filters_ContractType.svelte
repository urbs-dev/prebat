<script>
    export let handler

    const contracts = handler.createCalculation(row => row.report?.contract_type).distinct((values) => {
        return values
            .filter(Boolean)
            .sort((a, b) => { return a.localeCompare(b) })
    })
    const filter = handler.createAdvancedFilter(row => row.report?.contract_type)
    const selected = filter.getSelected()
</script>

<h3 class="flex">
    <div class="flex">
        <i class="micon" style="margin-right:6px;font-size: 18px;">filter_list</i>
        Maîtrise d'ouvrage
    </div>
    {#if $selected.length > 0}
        <button class="btn" style:color="#e57373" on:click={() => filter.clear()}>
            <i class="micon">clear</i>
        </button>
    {/if}
</h3>

<article>
    {#each contracts as contract}
        {@const { value, count } = contract}
        {#if value}
        <button on:click={() => filter.set(value)} class="btn select" class:active={$selected.includes(value)}>
            <i class="micon">
                {$selected.includes(value) ? 'check_box' : 'check_box_outline_blank'}
            </i>
            <span>{value}</span>
            <code>{count}</code>
        </button>
        {/if}
    {/each}
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
    button.select {
        justify-content: flex-start;
        width: 100%;
        font-size: 12px;
        padding: 4px 4px;
        text-transform: none;
        letter-spacing: 0;
        white-space: none;
        text-wrap: wrap;
    }
    button.select span {
        width: 152px;
        text-align: left;
    }
    button.select i {
        font-size: 18px;
        margin-right: 8px;
        color: #9e9e9e;
    }
    button.select:hover {
        background: var(--primary-lighten-1);
    }
    button.select.active {
        background: var(--primary-lighten-2);
    }
    code {
        font-family: JetBrains;
        color: var(--secondary);
        font-size: 14px;
        width: 16px;
        height: 16px;
        border-radius: 50px;
    }
</style>