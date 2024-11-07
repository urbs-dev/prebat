<script>
    import { DataHandler } from 'gros/datatable'
    import Datatable from './Datatable.svelte'
    import Search from './Search.svelte'
    import Operation from './Operation.svelte'
    export let data
    const handler = new DataHandler(data.operations, {rowsPerPage: 10})
    // console.log(data.operations[0])
    const rows = handler.getRows()

    let showMobileFilters = false
    let isMobile = false
    let innerWidth
    $: innerWidth < 950 ? isMobile = true : isMobile = false
</script>
<svelte:window bind:innerWidth/>

<section>
    {#if data.operations.length > 0}
        <Datatable {handler} bind:isMobile bind:showMobileFilters>
            <table>
                <thead>
                    <tr>
                        <th><Search {handler} {isMobile} bind:showMobileFilters/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {#each $rows as row}
                                <Operation {row}/>
                            {/each} 
                        </td>
                    </tr>
                </tbody>
            </table>
        </Datatable>
    {:else}
        <h1 class="alt-font">Aucune opération n'est disponible pour le moment</h1>
    {/if}
</section>
<style>
    section{
        position:absolute;
        z-index:2;
        top:calc(116px);left:0;right:0;bottom:0;
        overflow-y:auto;
        background-color:#fff;
    }
    thead {
        z-index: 2;
        background: #fff;
        transition: all 0.2s;
        /* background: rgba(255,255,255,0.5);
        backdrop-filter: blur(4px); */
    }
    h1 {
        text-align: center;
        color: var(--primary-lighten);
        font-size: 32px;
        margin-top: 24vh;
    }
</style>