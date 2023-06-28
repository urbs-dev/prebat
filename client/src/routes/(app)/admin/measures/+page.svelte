<script>
    import { Datatable, Th, DataHandler } from 'gros/datatable'
    export let data

    const handler = new DataHandler(data.measures)
    const rows = handler.getRows()
</script>



<section class="thin-scrollbar">
    <Datatable {handler} pagination={false}>
        <table>
            <thead>
                <tr>
                    <Th {handler} orderBy="title">title</Th>
                    <Th {handler} orderBy="columname">columname</Th>
                    <Th {handler} orderBy="abstract">abstract</Th>
                    <Th {handler} orderBy="type">type</Th>
                    <Th {handler} orderBy="unit">unit</Th>
                    <Th {handler} orderBy="icon">icon</Th>
                </tr>
            </thead>
            <tbody>
                {#each $rows as row}
                    <tr>
                        <td>{row.title}</td>
                        <td class="db">{row.columname}</td>
                        <td>{row.abstract ?? ''}</td>
                        <td class="db">{row.type}</td>
                        <td>{row.unit ?? ''}</td>
                        <td>{@html row.icon ?? ''}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </Datatable>
</section>


<style>
    section {
        position: relative;
        overflow-y: auto;
        margin: 40px;
        max-width: 960px;
        border-radius: 8px;
        height: calc(100vh - 120px);
        border: 1px solid #e0e0e0;
        background: #fff;
    }
    thead {
        background: #fff;
    }
    tbody td {
        border: 1px solid #f5f5f5;
        padding: 4px 20px;
    }
    tbody tr {
        transition: all, 0.2s;
    }
    tbody tr:hover {
        background: #f5f5f5;
    }
    td.db {
        font-size: 11px;
        font-family: monospace;
        color: #616161;
    }
</style>