<script>
    export let handler
    export let field
    export let title
    export let hide = false

    const contracts = handler.createCalculation(row => {
        const fields = field.split('.')
        if (fields.length === 1) return row.report[field]
        else {
            let value = row.report[fields[0]]
           for (let i = 1; i < fields.length; i++) {
               value = value[fields[i]]
           }
           return value
        }
    }).distinct((values) => {
        return values
                .map((value) => (value ? value.split(' ~ ') : null))
                .flat()
                .filter(Boolean)
                .sort((a, b) => {
                    return a.localeCompare(b)
                })
    })
    const filter = handler.createAdvancedFilter(row => {
        const fields = field.split('.')
        if (fields.length === 1) return row.report[field]
        else {
            let value = row.report[fields[0]]
           for (let i = 1; i < fields.length; i++) {
               value = value[fields[i]]
           }
           return value
        }
    })
    const selected = filter.getSelected()
</script>

<h3 class="flex">
    <div class="flex">
        <button class="btn" class:active={hide} on:click={() => hide = !hide}>
            <i class="micon">keyboard_arrow_down</i>
        </button>
        <i class="micon" style="margin-right:6px;font-size: 18px;">filter_list</i>
        {title}
    </div>
    {#if $selected.length > 0}
        <button class="btn" style:color="#e57373" on:click={() => filter.clear()}>
            <i class="micon">clear</i>
        </button>
    {/if}
</h3>
{#if !hide || $selected.length > 0}
    <article>
        {#each contracts as contract}
            {@const { value, count } = contract}
            {#if !hide || $selected.includes(value)}
                {#if value}
                <button on:click={() => filter.set(value)} class="btn select" class:active={$selected.includes(value)}>
                    <i class="micon">
                        {$selected.includes(value) ? 'check_box' : 'check_box_outline_blank'}
                    </i>
                    <span>{value}</span>
                    <code>{count}</code>
                </button>
                {/if}
            {/if}
        {/each}
    </article>
{/if}





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
    h3 button i.micon{
        color: #9e9e9e;
        transition: all 0.2s;
    }
    h3 button.active i.micon{
        transform: rotate(-90deg);
        transition: all 0.2s;
    }
</style>