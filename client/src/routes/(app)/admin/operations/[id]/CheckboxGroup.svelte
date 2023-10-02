<script>
    import { Checkbox } from 'gros/form'
    export let values = []
    export let icon
    export let label = ''
    export let required = false

    let selected = []

    let id = 'id' + (Math.random() + 1).toString(36).substring(7)

    export let result = ''
    if (result) {
        selected = result.split(', ')
    }
    const select = (value) => {
        if (selected.includes(value)) {
            selected = selected.filter((item) => item !== value)
        } else {
            selected = [value, ...selected].sort((a, b) => a.localeCompare(b))
        }
    }
    $: selected, result = selected.length === 0 ? null : selected.join(', ')
</script>

<section>
    <label for="{id}">
        <div class="flex">
            {#if icon}
                <i class="micon">{icon}</i>
            {/if}
            <span>
                {label}
                {#if required}
                    <b>*</b>
                {/if}
            </span>
        </div>
    </label>
    <div class="result flex">
        {#each selected as item}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <span on:click={() => select(item)}>{item}</span>
        {/each}
    </div>
    <article class="thin-scrollbar flex">
        {#each values as value}
            <div>
                <Checkbox checked={selected.includes(value)} size={16} margin={[0,8,0,0]} on:click={() => select(value)}>
                    {value}
                </Checkbox>
            </div>
        {/each}
    </article>
</section>


<style>
    section {
        margin: 16px 0;
    }
    article {
        position: relative;
        max-height: 32vh;
        overflow-y: auto;
        border: 1px solid #d1d1d1;
        border-radius: 0.4rem;
        padding: 8px 16px;
        flex-wrap: wrap;
    }
    article div {
        min-width: 48%;
    }

    label{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--primary);
        font-weight:normal;
        font-size:16px;
        color:var(--primary);
        margin:0;
        margin-bottom:4px;
    }
    label .flex{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        white-space:nowrap;
    }
    label b{
        color:var(--ternary);
    }

    label i.micon{
        padding-right:8px;
        color:var(--primary);
        font-size:22px;
    }
    section :global(button:not(.checkbox)) {
        width: 100%;
        justify-content: flex-start;
        padding: 4px 8px;
        border-radius: 4px;
    }
    section :global(button span) {
        background: #fff;
    }
    section :global(button:not(.checkbox):hover) {
        background: var(--primary-lighten-1);
    }
    div.result {
        color: var(--secondary-lighten);
        padding: 0 8px;
        min-height: 24px;
    }
    div.result span {
        margin: 0 2px;
        height: 20px;
        font-size: 11px;
        cursor: pointer;
        padding: 0 4px;
        background: #43a047;
        color: #fff;
        border-radius: 4px;
        line-height: 20px;
        user-select: none;
    }
</style>