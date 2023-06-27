<script>
    import { presence } from '$module/socket'
    import { DataHandler, Datatable, Th, ThFilter } from 'gros/datatable'

    const handler = new DataHandler($presence, { rowsPerPage: 50 })
    const rows = handler.getRows()
    $: presence, handler.setRows($presence)
</script>

<section>
    <div class="flex alt-font">
        <h2>Utilisateurs connectés ({$presence.length})</h2>
        <h1>INTERFACE ADMIN</h1>
    </div>
    <aside>
    <Datatable {handler} sticky>
        <table>
            <thead>
                <tr>
                    <Th {handler} orderBy={row => row.firstname + row.name + row.email}>User</Th>
                    <Th {handler} orderBy="longin_count">Login count</Th>
                    <Th {handler} orderBy="group">Group</Th>
                    <Th {handler} orderBy="organization">Org.</Th>
                    <Th {handler} orderBy="count">Nb. co</Th>
                    <Th {handler} orderBy={row => JSON.stringify(row.info)}>Detail</Th>
                </tr>
                <tr>
                    <ThFilter {handler} filterBy={row => row.firstname + row.name + row.email}/>
                    <ThFilter {handler} filterBy="longin_count"/>
                    <ThFilter {handler} filterBy="group"/>
                    <ThFilter {handler} filterBy="organization"/>
                    <ThFilter {handler} filterBy="count"/>
                    <ThFilter {handler} filterBy="info"/>   
                </tr>
            </thead>
            <tbody>
                {#each $rows as user}
                <tr>
                    <td>
                        <strong>{user.firstname} {user.name}</strong>
                        <div>{user.email}</div>
                    </td>
                    <td>{user.login_count}</td>
                    <td>{user.group ?? ''}</td>
                    <td>{user.organization ?? ''}</td>
                    <td>{user.count}</td>
                    <td>
                        <ul>
                            {#each user.info as detail}
                                <li>
                                    <strong>{detail.application}</strong>
                                    <div>{detail.territory ?? ''}</div>
                                </li>
                            {/each}
                        </ul>
                    </td>
                </tr>
                {/each}
            </tbody>
        </table>
    </Datatable>
    </aside>
</section>

<style>
    section{
        max-width:1240px;
        height:80vh;
        margin:0 auto 0 auto;
        padding:0 80px;
    }
    div.flex{
        height:56px;
        justify-content: space-between;
        align-items:center;
    }
    h1, h2{margin: 0;}
    h1{
        font-size:24px;
        color:var(--secondary-lighten)
    }
    h2{
        margin:0;
        font-size:18px;
        color:var(--primary);
    }
    aside{
        height:calc(100vh - 112px);
    }
    table{
        border:1px solid #fafafa;
        margin:8px auto;
        font-size:12px;
        border-radius:4px;
    }
    tbody tr{
        transition:all,0.2s;
        color:var(--primary)
    }
    tbody tr:hover{
        background:#fafafa;
    }
    tbody td{
        border-bottom: 1px solid #e0e0e0;
    }
    td div {
        color:#757575;
    }
    td li{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    td strong{
        color:var(--ternary)
    }
</style>