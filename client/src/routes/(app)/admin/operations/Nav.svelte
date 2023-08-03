<script>
    import { DataHandler } from 'gros/datatable'
    import Operation from './Nav_Operation.svelte'
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
    article{
        position:relative;
        margin-top: 4px;
        border-top: 1px dotted var(--primary-lighten-3);
        padding:16px 8px;
        overflow-y:auto;
        height:calc(100% - 16px)
    }
</style>