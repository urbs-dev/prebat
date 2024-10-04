<script lang="ts">
    export let X = Array.from({ length: 24 })
    export let Y = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    export let label = "Heure" 
    export let data = Y.map(() => X.map( () => false))
    let selectedX = []
    let selectedY = []
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let dataHover = Y.map(() => X.map( () => false))

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

    const startDrag = (x: number, y: number) => {
        isDragging = true;
        startX = x;
        startY = y;
    }
    const endDrag = (x: number, y: number) => {
        isDragging = false;
        resetHover();
        const minX = Math.min(startX, x);
        const maxX = Math.max(startX, x);
        const minY = Math.min(startY, y);
        const maxY = Math.max(startY, y);
        data = data.map((row, y) => {
            row = row.map((value, x) => {
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
                    return !value || false;
                }
                return value ;
            })
            return row;
        })
    }
    const Hover = (x: number, y:number, state: boolean) => {
        if(!isDragging) dataHover[y][x] = state;
        else {
            const minX = Math.min(startX, x);
            const maxX = Math.max(startX, x);
            const minY = Math.min(startY, y);
            const maxY = Math.max(startY, y);
            dataHover = dataHover.map((row, y) => {
                row = row.map((value, x) => {
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
                        return state;
                    }
                    return value;
                })
                return row;
            })
        }
    }
    const resetHover = () => {
        isDragging = false;        
        dataHover = Y.map(() => X.map( () => false))
    }

</script>

<section>
    <h1>Heatmap</h1>
    <table  on:mouseleave={() => resetHover()}>
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
                        <td 
                            class:active={data[y][x]} 
                            class:hover={dataHover[y][x]}
                            on:mousedown={() => startDrag(x, y)}
                            on:mouseup={() => endDrag(x, y)}
                            on:mouseenter={() => Hover(x, y, true)}
                            on:mouseleave={() => Hover(x, y, false)}
                            >
                        </td>
                    {/each}
                </tr>
            {/each}
    </table>
</section>

{JSON.stringify(data)}

<style>
    section {
        padding-bottom: 96px;
        padding-top: 40px;
        background: #fff;
    }
    table{
        width: auto;
        border-collapse: collapse;

        user-select: none; /* Standard syntax */
        -webkit-user-select: none; /* Safari */
         -ms-user-select: none; /* IE 10 and IE 11 */
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

    td {
        position: relative;
        cursor: pointer;
      
    }
    .hover:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.2;
    }

</style>