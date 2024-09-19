<script lang="ts">
    import { Tooltip } from "gros/tooltip"
    
    const X = {
        hourly: Array.from({ length: 24 }),
        weekly: Array.from({ length: 52 })
    }
    const Y = {
        hourly: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
        weekly: ['']
    }
    const label = {
        hourly: "Heures",
        weekly: "Semaines"
    }
    export let type = "hourly"
    export let data = Y[type].map(() => X[type].map( () => false)) as boolean[][]
    export let name = ""
    export let id
    export let removeScenario

    let selectedX = []
    let selectedY = []
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let dataHover = Y[type].map(() => X[type].map( () => false))

    const selectX = (x) => {
        if (!selectedY[x] || selectedY[x] === undefined || selectedY[x] === null){
            selectedY[x] = true
            Y[type].map((_, y) => data[y][x] = true)
        } 
        else{
            selectedY[x] = false
            Y[type].map((_, y) => data[y][x] = false)
        }
    }
    const selectY = (y) => {
        if (!selectedX[y] || selectedX[y] === undefined || selectedX[y] === null){
            selectedX[y] = true
            X[type].map((_, x) => data[y][x] = true)
        } 
        else{
            selectedX[y] = false
            X[type].map((_, x) => data[y][x] = false)
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
        dataHover = Y[type].map(() => X[type].map( () => false))
    }

    const saveScenario = async () => {
        const response = await fetch(`BASE_URL/prebat.api/scenarios/${id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({data: JSON.stringify(data), name})
        })
        return await response.json()
    }

    const deleteScenario = async () => {
        const response = await fetch(`BASE_URL/prebat.api/scenarios/${id}`, {method: 'DELETE',})
        removeScenario(id)
        return await response.json()
    }

</script>
<section>
    <table  on:mouseleave={() => resetHover()}>
        {#if type === 'hourly'}
            <thead>
                <tr>
                    <th>{label[type]}</th>
                        {#each X[type] as _, i}
                            <th class="X" on:click={() => selectX(i)} >{i}</th>
                        {/each}
                    </tr>
            </thead>
            <tbody> 
                {#each Y[type] as day, y}
                    <tr>
                        <th class="Y" on:click={() => selectY(y) }>{day}</th>
                        {#each X[type] as _, x}
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
            </tbody>
        {:else if type === "weekly"}
            {#each Array.from({ length: 3 }) as  row, i}
               <thead>
                    <tr>
                        <th>{label[type]}</th>
                        {#each X[type].slice(i*24, i*24+24) as aled, x}
                            <th class="X" on:click={() => selectX(i*24+x)} >{i*24+x+1}</th>
                        {/each}
                    </tr>
               </thead>
               <tbody>
                    <tr>
                        <th class="Y" on:click={() => selectY(i)}>
                            {name}
                        </th>
                        {#each X[type].slice(i*24, i*24+24) as _, x}
                            <td
                                class:active={data[0][i*24+x]} 
                                class:hover={dataHover[0][i*24+x]}
                                on:mousedown={() => startDrag(i*24+x, 0)}
                                on:mouseup={() => endDrag(i*24+x, 0)}
                                on:mouseenter={() => Hover(i*24+x, 0, true)}
                                on:mouseleave={() => Hover(i*24+x, 0, false)}
                            >
                                
                            </td>
                        {/each}
                    </tr>
               </tbody>
                
            {/each}
        {/if}
    </table>
    <article class="action">
        <button class="save" on:click={() => saveScenario()}>
            <Tooltip right content="Sauvegardé les changements"/>
            <i class="micon">save</i>  
        </button>
        <button class="delete" on:click={() => deleteScenario()}>
            <Tooltip right content="Supprimer le scénario"/>
            <i class="micon">delete</i>  
        </button>
    </article>

</section>

<style>
    section{
        display: flex;
        flex-direction: row;
        align-items: start;
    }
    article.action{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 16px;
        gap: 8px;
    }

    table{
        width: auto;
        border-collapse: collapse;

        user-select: none; /* Standard syntax */
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        
        font-size: 12px;
        margin-bottom: 16px;
        margin-left: 8px;
    }
    th, td{
        border: 1px solid #e0e0e0;
        padding: 8px;
    }
    th{
        background: #f0f0f0;
        height: 32px;
        width: 32px;
        max-width: 32px;
        max-height: 32px;
    }
    th.Y{
        min-width: 75px;
    }

    th.X{
        text-align: center;
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

    .action button{
        position: relative;
        width: 32px;
        background: #f5f5f5;
        height: 32px;
        border-radius: 50%;
        margin: 0 8px;
    }
    .action button:hover{
        background: #e0e0e0;
    }
    .save{
        color: var(--ternary);
    }


</style>