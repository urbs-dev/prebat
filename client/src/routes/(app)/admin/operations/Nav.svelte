<script>
    import { DataHandler } from 'gros/datatable'
    import Operation from './Nav_Operation.svelte'
    import CreateOperation from './Modal_CreateOperation.svelte'
    import { modal } from 'gros/modal'
    import { fly } from 'svelte/transition'
    export let data

    const handler = new DataHandler(data, { rowsPerPage: 50 })
    const rows = handler.getRows()
    $: data, handler.setRows(data)
    let value = ''
    let element

    handler.on('change',  () => {
        if (element) element.scrollTop = 0
    })
</script>

<nav class="z-depth-1" in:fly={{ duration:200, x:-280 }}>
    <div class="flex">
        <button class="btn" on:click={() => modal.open(CreateOperation)}>
            Créer une opérations
        </button>
    </div>
    <header>
        <i class="micon">search</i>
        <input 
            type="text" 
            bind:value={value} 
            on:input={() => handler.search(value)} 
            placeholder="Rechercher..." 
            spellcheck="false" 
        />
    </header>

    <article class="thin-scrollbar" bind:this={element}>
        {#each $rows as row}
            <Operation operation={row}/>
        {/each}
    </article>
</nav>

<style>
    nav{
        position:absolute;top:0;left:0;bottom:0;
        width:280px;
        background:#fff;
        border-right:1px solid #eee;
        padding-bottom: 40px;
    }
    div.flex {
        justify-content: space-between;
        margin-top: 8px;
    }
    header{
        height:40px;
        border:2px solid var(--primary-lighten-3);
        background:#fff;
        display:flex;justify-content:space-between;align-items:center;
        margin: 8px 16px 8px 16px;
        padding: 0 8px;
        border-radius: 4px;
        color:var(--primary);
    }
    header input{border:none;padding-left:4px;}
    button {
        margin:0 16px;
        color: var(--ternary);
        padding: 0;
        float: left;
    }
    article{
        position:relative;
        margin-top: 4px;
        border-top: 1px dotted var(--primary-lighten-3);
        padding:16px 8px;
        overflow-y:auto;
        height:calc(100% - 72px)
    }
</style>