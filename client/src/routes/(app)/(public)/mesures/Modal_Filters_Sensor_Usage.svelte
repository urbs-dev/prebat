<script>
    export let title = ''
    export let list = []
    export let selected = []
    export let selectedParent= []
    let hide = false
    import { Checkbox } from 'gros/form'

    const toggle = (value) => {
        if (selected.includes(value)) {
            selected = selected.filter(v => v !== value)
        } else {
            selected = [...selected, value]
        }
    }
    const toggleAll = (values) => {
        if( !values.values){
            toggleParent(values.label)
            return
        }
        const all = values.values.map(v => v)
        all.forEach(v => {
            if (selected.includes(v)) {
                selected = selected.filter(value => value !== v)
            } else {
                selected = [...selected, v]
            }
        })
       
    }
    const toggleParent = (value) => {
        if (selectedParent.includes(value)) {
            selectedParent = selectedParent.filter(v => v !== value)
        } else {
            selectedParent = [...selectedParent, value]
        }
    }

</script>

<section>
    <h3>
        <div class="flex">
            <i class="micon">chevron_right</i>
            <span>{title}</span>
        </div>
        {#if selected.length}
            <button class="close" on:click={() => selected = []}>
                <i class="micon">close</i>
            </button>
        {/if}
    </h3>
    <article>
        {#each list as value}
            {@const label = value.label || value}
            {#if !hide || selected.includes(label)}
            <div class="flex">
                <i>
                    <button on:click={() => {toggleAll(value)}}>
                        {value.label}
                    </button>
                </i>
                <ul>
                    {#if !value.values}
                        <li>
                            <Checkbox checked={selectedParent.includes(value.label)} size={16} margin={[0,8,0,0]} on:click={() => toggleParent(value.label)}>
                                {value.label}
                            </Checkbox>
                        </li>
                    {:else}
                        {#each value.values as value}
                            <li class:active={selected.includes(value)}>
                                <Checkbox checked={selected.includes(value)} size={16} margin={[0,8,0,0]} on:click={() => toggle(value)}>
                                    {value}
                                </Checkbox>
                            </li>
                        {/each}
                    {/if}
                </ul>
            </div>
            {/if}
        {/each}
    </article>
</section>


<style> 

    section{
        margin: 4px 0;
        padding: 8px;
    }
    h3{
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
    article {
            position: relative;
            max-height: 48vh;
            overflow-y: auto;
            border: 1px solid #d1d1d1;
            border-radius: 0.4rem;
            padding: 8px 16px;
    }
    article div.flex {
        align-items: flex-start;
        padding: 4px 0;
        border-bottom: 1px solid #eee;
        
    }

    article div i {
        min-width: 96px;
        max-width: 100px;
        overflow: hidden;
    }
    article div i button {
        font-size: 12px;
        overflow: hidden;
        color: var(--primary-darken);
        text-wrap: wrap;
        text-overflow: ellipsis;
        max-width: 100px;
        text-align: start;
        font-style: normal;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    article li {
        border-radius: 2px;
    }
    article li:hover {
        background: #f5f5f5;
    }
   
    ul li.active :global(button.checkbox) {
        background: var(--primary-lighten-1);
    }
    ul li :global(button.checkbox) {
        width: 100%;
        justify-content: flex-start !important;
        padding: 2px 8px;
    }
    ul li :global(button:not(.checkbox)) {
        width: 100%;
    }
    .close{
        background: none;
        border: none;
        color: var(--secondary-darken);
        cursor: pointer;
    }
    .close:hover{
        color: var(--secondary);
    }
    .close i{
        font-size: 22px;
    }
</style>