<script>
    export let title = ''
    export let list = []
    export let selected = []
    import { Input, Checkbox } from 'gros/form'
    let hide = false

    const toggle = (value) => {
        if (selected.includes(value)) {
            selected = selected.filter(v => v !== value)
        } else {
            selected = [...selected, value]
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
        <ul>
            {#each list as value}
                {@const label = value.label || value}
                {#if !hide || selected.includes(label)}
                <li class:active={selected.includes(label)}>
                    <Checkbox checked={selected.includes(label)} size={16} margin={[0,8,0,0]} on:click={() => toggle(label)}>
                        {label}
                    </Checkbox>
                </li>
                {/if}
            {/each}
        <ul>

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