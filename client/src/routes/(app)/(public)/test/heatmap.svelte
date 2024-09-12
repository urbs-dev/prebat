<script>
    export let X = Array.from({ length: 24 })
    export let Y = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    export let label = "Heure" 
    export let data
    let selectedX = []
    let selectedY = []
    const selectX = (x) => {
        if (!selectedY[x] || selectedY[x] === undefined || selectedY[x] === null){
            selectedY[x] = true
            Y.map((_, y) => data[y][x] = true)
        } 
        else{
            selectedY[x] = false
            Y.map((_, y) => data[y][x] = false)
        }
    }

    const selectY = (y) => {
        if (!selectedX[y] || selectedX[y] === undefined || selectedX[y] === null){
            selectedX[y] = true
            X.map((_, x) => data[y][x] = true)
        } 
        else{
            selectedX[y] = false
            X.map((_, x) => data[y][x] = false)
        }
    }
</script>

<section>
    <h1>Heatmap</h1>
    <table>
        <thead>
            <tr>
                <th>{label}</th>
                {#each X as _, i}
                    <th class="X" on:click={() => selectX(i)} >{i}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each Y as day, y}
                <tr>
                    <th class="Y" on:click={() => selectY(y) }>{day}</th>
                    {#each X as _, x}
                        <td class:active={data[y][x]} on:click={() => {data[y][x] = !data[y][x]} }>
                        </td>
                    {/each}
                </tr>
            {/each}
    </table>
</section>

<style>
    section {
        padding-bottom: 96px;
        padding-top: 40px;
        background: #fff;
    }
    table{
        width: auto;
        border-collapse: collapse;
    }
    th, td{
        border: 1px solid #e0e0e0;
        padding: 8px;
    }
    th{
        background: #f0f0f0;
        height: 40px;
    }
    th.X{
        width: 40px;
    }
    td.active{
        background: #00e713;
    }
    .Y, .X{
        cursor: pointer;
    }

</style>