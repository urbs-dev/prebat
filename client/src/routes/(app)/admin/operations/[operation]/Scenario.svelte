<script>
    import { slide } from "svelte/transition";
    import Heatmap from "./heatmap.svelte";
    import { Dropdown } from "gros/dropdown";
    import CreationModal from "./Modal_Scenario_Create.svelte"
    import { modal } from "gros/modal"
    export let operation

    let scenarios = operation.scenarios
    $: scenarios = operation.scenarios
    
    const  scenarioType = [
        {type: "occupation", label: "Scénario d'occuption", active: true},
        {type: "lighting", label: "Scénario d'éclairage", active: false},
        {type: "ventilation", label: "Scénario de ventilation", active: false}
    ]

    const hasHourly = (scenarios) => {
        console.log(scenarios.filter((el) =>{ return el.type === "hourly"}).length);
        return scenarios.filter((el) =>{ return el.type === "hourly"}).length > 0
    }

    const createScenario = async (nature , type, name = "") => {
        console.log("createScenario", nature, type, name);
        console.log(scenarios);
        
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
            body: JSON.stringify({ operation_id: operation.id, nature, type, name, data: JSON.stringify(data)})
        })

        const json = await response.json()
        json.data = data
        operation.scenarios = [...scenarios, json]
    }

    const removeScenario = async (id) => {
        scenarios = scenarios.filter((el) => el.id !== id)
        operation.scenarios = scenarios
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
                            {#if !hasHourly(scenarios)}
                                <button on:click={() => createScenario(type, "hourly" )}>Ajouter un scénario horraire</button>
                            {/if}
                            <!-- <button on:click={() => createScenario(type, "weekly" )}>Ajouter un scénario annuel</button> -->
                            <button on:click={() => modal.open(CreationModal, {createScenario, type})}>Ajouter un scénario annuel</button>
                        </aside>
                    </Dropdown>
                </span>
            </div>
            {#if active}
                <div transition:slide>
                    {#if scenarios.length === 0}
                        <p class="error"> Aucun scénario pour le moment</p>
                    {/if}
                    {#each scenarios as {data, type, name, id} }
                        <Heatmap bind:data {type} {name} {id} {removeScenario}/>
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

    button .micon{
        color: var(--primary-lighten);
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
</style>