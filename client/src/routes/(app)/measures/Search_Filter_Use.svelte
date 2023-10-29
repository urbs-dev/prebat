<script>
    import { Dropdown } from "gros/dropdown"
    export let handler

    const usages = handler.createCalculation(row => row.report?.use).distinct((values) => {
        return values
            .map((value) => value ? value.split(' ~ ') : null )
            .flat()
            .filter(Boolean)
            .sort((a, b) => { return a.localeCompare(b) })
    })
    const filter = handler.createAdvancedFilter(row => row.report?.use)
    const selected = filter.getSelected()
</script>

<Dropdown position="bottom-start" preventClosing>
    <button class="btn dd">
        <i class="micon" style:margin-right="6px">filter_list</i>
        Destination d'usage
        <i class="micon" style:margin-left="4px">arrow_drop_down</i>
    </button>
    <article class="thin-scrollbar z-depth-2" slot="content">
        <!-- <h3 class="flex">
            <i class="micon">filter_list</i>
            by Types
            {#if $selected.length > 0}
                <button class="clear btn" on:click={() => filter.clear()}>
                    Clear
                </button>
            {/if}
        </h3> -->
        {#each usages as usage}
            {@const { value, count } = usage}
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
</Dropdown>




<style>
    article {
        width: 224px;
        position: relative;
        overflow-y: auto;
        border-radius: 4px;
        margin: 4px;
        background: #fff;
        padding: 8px;
        border: 1px solid #e0e0e0;
    }
    button.dd {
        color: #616161;
        background: #f5f5f5;
        margin: 4px 4px 4px 0;
        font-family: Roboto;
        font-size: 13px;
        text-transform: none;
        letter-spacing: 0;
    }
    button.dd i {
        font-size: 18px;
    }
    /* h3 {
        font-size: 16px;
        color: var(--secondary);
        font-weight: 400;
        margin: 0 0 16px 0;
        padding-bottom: 4px;
        border-bottom: 1px solid #eee;
    }
    h3 button {
        color: #e57373;
        border: 1px solid #e57373;
        padding: 2px;
        font-size: 10px;
        border-radius: 4px;
        margin-left: 8px;
    }
    h3 i {
        margin-right: 4px;
        font-size: 16px;
    } */
    button.select {
        justify-content: flex-start;
        width: 100%;
        font-size: 12px;
        padding: 4px 4px;
        text-transform: none;
    }
    button.select span {
        width: 140px;
        white-space: wrap;
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
        color: var(--primary);
        font-size: 14px;
        width: 16px;
        height: 16px;
        border-radius: 50px;
    }
</style>