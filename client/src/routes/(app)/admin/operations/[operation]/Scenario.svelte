<script>
    import { slide } from "svelte/transition";
    import Heatmap from "./heatmap.svelte";
    import { Dropdown } from "gros/dropdown";
    import CreationModal from "./Modal_Scenario_Create.svelte"
    import { modal } from "gros/modal"
    import { Tooltip } from "gros/tooltip"
    import EditModal from "./Modal_Scenario_Edit.svelte"
    export let operation

    let scenarios = operation.scenarios
    $: scenarios = operation.scenarios
    
    const  scenarioType = [
        {type: "occupation", label: "Scénario d'occuption", active: true},
        {type: "lighting", label: "Scénario d'éclairage", active: false},
        {type: "ventilation", label: "Scénario de ventilation", active: false}
    ]

    const hasHourly = (scenarios) => {
        return scenarios.filter((el) =>{ return el.type === "hourly"}).length > 0
    }

    const saveScenario = async () => {
        const response = await fetch(`BASE_URL/prebat.api/scenarios/${id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({data: JSON.stringify(data), name, description})
        })
        return await response.json()
    }

    const createScenario = async (nature , type, name = "", description= "") => {
        const X = {
            hourly: Array.from({ length: 24 }),
            weekly: Array.from({ length: 52 })
        }
        const Y = {
            hourly: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            weekly: ['']
        }
        const data = Y[type].map(() => X[type].map( () => false))

        const response = await fetch(`BASE_URL/prebat.api/scenarios`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ operation_id: operation.id, nature, type, name,description, data: JSON.stringify(data)})
        })

        const json = await response.json()
        json.data = data
        operation.scenarios = [...scenarios, json]
    }

    const deleteScenario = async (id) => {
        const response = await fetch(`BASE_URL/prebat.api/scenarios/${id}`, {method: 'DELETE',})
        removeScenario(id)
        return await response.json()
    }

    const removeScenario = async (id) => {
        scenarios = scenarios.filter((el) => el.id !== id)
        operation.scenarios = scenarios
    }

    const downloadScenario = async (data, name, type) =>{ 
        if (!name) name = "scenario"

        let headers = []
        let firstColumn = [""]
        if (type === "hourly"){
            headers = ['Heures', ...new Array(24).fill(0).map((el, i) => `${i+1}`)]
            firstColumn = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
        } 
        else if (type === "weekly") {
            headers = ['Semaines', ...new Array(54).fill(0).map((el, i) => `${i+1}`)]
        }

        let csv = headers.join(",")
        await data.forEach((el, i) => {
            let modifiedArray = el.map(value => value === false ? "" : 1);
            csv += `\n${firstColumn[i]}, ${modifiedArray.join(",")}`
        })
        const blob = new Blob([csv], {type: 'text/csv'})
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${operation.name}_${name}_${type}.csv`
        a.click()
        window.URL.revokeObjectURL(url)

    }

</script>


<section>
    {#each scenarioType as {type, label, active}}
        {@const scenarios = scenarios.filter((el) =>{ return el.nature === type})}
        <article class:active={active}>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <div class="title">
                <h3 on:click={() => active = !active}>
                    <i class="micon">chevron_right</i>
                    {label}
                </h3>
                <span>
                    <Dropdown position="bottom-end">
                        <button>
                            <i class="micon"> more_vert </i>
                        </button>
                        <aside slot="content">
                            <button on:click={() => modal.open(CreationModal, {createScenario, type, time:"hourly"})}>Ajouter un scénario horaire</button>
                            <button on:click={() => modal.open(CreationModal, {createScenario, type, time:"weekly"})}>Ajouter un scénario annuel</button>
                        </aside>
                    </Dropdown>
                </span>
            </div>
            {#if active}
                <div transition:slide>
                    {#if scenarios.length === 0}
                        <p class="error"> Aucun scénario pour le moment</p>
                    {/if}
                    {#each scenarios as {data, type, name, description, id} }
                        <article class="scenario">
                            <div>
                                {#if name}
                                    <h4>{name}</h4> 
                                {/if}
                                {#if description}
                                    <p>{description}</p>
                                {/if}
                            </div>
                            <section>
                                <Heatmap bind:data {description} {type} {name} {id} {removeScenario}/>
                                <article class="action">
                                    <button class="save" on:click={() => modal.open(EditModal, {id,name, description})}>
                                        <Tooltip right content="Editer"/>
                                        <i class="micon">edit</i>  
                                    </button>
                                    <button class="save" on:click={() => saveScenario()}>
                                        <Tooltip right content="Sauvegarder les changements"/>
                                        <i class="micon">save</i>  
                                    </button>
                                    <button class="save" on:click={() => downloadScenario(data, name, type)}>
                                        <Tooltip right content="Exporter le scénario au format csv"/>
                                        <i class="micon">file_download</i>  
                                    </button>
                                    <button class="delete" on:click={() => deleteScenario(id)}>
                                        <Tooltip right content="Supprimer le scénario"/>
                                        <i class="micon">delete</i>  
                                    </button>
                                </article>
                            </section>
                        </article>
                    {/each}
                </div>
            {/if}
        </article>
        
    {/each}
</section>

<style>
    
    div.title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        font-size: 24px;
        margin: 24px 0 16px 0;
        font-weight: 800;
        background-color: var(--primary-lighten-2);

        padding: 4px 8px;
        border-radius: 8px;
    }
    .title span{
        display: flex;
        align-items: center;
    }
    article {
        margin: 8px;
        padding:  0 8px;
        border-radius: 8px;
    }
    .error {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        display: flex;
        align-items: center;
        margin: 0;
    }
    h3 .micon {
        font-size: 24px;
        transition: all ease-in-out 0.3s;
    }

    .active h3 .micon {
        transform: rotate(90deg);
    }


    aside{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--background-lighten);
    }
    aside button {
        color: var(--background);
        padding: 8px;
    }
    aside button:hover {
        background-color: var(--background-darken);
    }
    .scenario{
        display: flex;
        flex-direction: column;
        margin: 0;

    }
    .scenario div{
        display: flex;
        flex-direction: column;
        justify-content: start;
    }
    .scenario h4{
        margin: 0;
        padding: 8px;
    }
    .scenario p{
        margin: 0;
        padding: 8px;
        color: var(--color-lighten);
        opacity: 0.8;
    }
    .scenario section{
        display: flex;
        flex-direction: row;
        align-items: start;
    }

    .action{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .action button{
        position: relative;
        width: 32px;
        background: #f5f5f5;
        height: 32px;
        border-radius: 50%;
    }
    .action button:hover{
        background: #e0e0e0;
    }
    .save{
        color: var(--ternary);
    }
</style>