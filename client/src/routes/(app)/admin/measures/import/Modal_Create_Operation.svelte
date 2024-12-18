<script>
	import { Modal } from 'gros/modal'
    import { Input } from 'gros/form';
    import { Tooltip } from "gros/tooltip"
    import { locations as icon } from '$lib/svg'
    import { page, content } from './store'
    export let props
    export let close

    let name = '' 
    let formatInvalid = false
    let locations = []

    const create = async () => {
        close()
        if (!name && props.name) name = props.name     
        const result = await fetch(`BASE_URL/prebat.api/operations/empty`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name, locations})
        })
        if (!result.ok) $page = 'error'
        else $page = 'result'
        $content = await result.json()
        
    }

    const isValidFormat = (str) => {
        const regex = /^[A-Za-z]{2}\.dep\d{2}\.\d{4}$/;
        return regex.test(str);
    }
    
    const next = () => {
        if (isValidFormat(name)) props.name = name
        else formatInvalid = true
    }

    const addBuilding = () => {
        locations = [...locations, {name: 'Nouveau batîment', zones: []}]
    }
    const addZones = (buildingIndex) => {
        let building = locations[buildingIndex]
        building.zones = [...building.zones, {name: 'Nouvelle zone', rooms: []}]
        locations[buildingIndex] = building
    }
    const addRooms = (buildingIndex,zoneIndex) => {
        let building = locations[buildingIndex]
        let zone = building.zones[zoneIndex]
        zone.rooms = [...zone.rooms, {name: 'Nouvelle pièce'}]
        building.zones[zoneIndex] = zone
        locations[buildingIndex] = building
        
    }
    const deleteLocation = (target, type) => {
        if( type === 'building') locations = locations.filter( el => el !== target)
        else if( type === 'zone') {
            locations = locations.map( building => {
                building.zones = building.zones.filter( el => el !== target)
                return building
            })
        }
        else if( type === 'room') {
            locations = locations.map( building => {
                building.zones.map( zone => {
                    zone.rooms = zone.rooms.filter( el => el !== target)
                    return zone
                })
                return building
            })
        }
    } 

 </script>

<Modal title="Crée une opération sans mesure" icon="save">
    <section>
        {#if !props.name} 
            <Input bind:value={name} required label="Nom de l'opération"/>
                {#if formatInvalid}
                    <i class="error">Le format du nom de l'opération est invalide (ex: MI.dep75.0001)</i>
                {/if}
        {:else} 
            <div class="locations">   
                <section>
                    <span>
                        <i class="micon">folder_open</i>
                        {props.name}
                    </span>
                    <button on:click={() => addBuilding()}>
                        <Tooltip bottom content="Ajouter un batîment"/>
                        <i class="micon">add</i>  
                    </button> 
                </section>
                {#if locations.length > 0}
                    <article class="building" >
                        {#each locations as building, i}
                            <div class="location">
                                <span>
                                    <i class="icon">{@html icon['building']}</i>
                                    <input type="text" bind:value={building.name}/>
                                </span>
                                <div class="action">
                                    <button on:click={() => addZones(i)}>
                                    <Tooltip bottom content="Ajouter une zone"/>
                                    <i class="micon">add</i>  
                                    </button> 
                                    <button class="delete" on:click={() => deleteLocation(building,"building")}>
                                        <Tooltip bottom content="Supprimer une piece"/>
                                        <i class="micon">delete</i>  
                                    </button>
                                </div>
                            </div>
                            {#if building?.zones && building.zones.length > 0}
                                <article>
                                    {#each building.zones as zone,y }
                                        <div class="location">
                                            <span>
                                                <i class="icon">{@html icon['zone']}</i>
                                                <input type="text" bind:value={zone.name}/>
                                            </span>
                                            <div class="action">
                                                <button on:click={() => addRooms(i,y)}>
                                                    <Tooltip bottom content="Ajouter une piece"/>
                                                    <i class="micon">add</i>  
                                                </button> 
                                                <button class="delete" on:click={() => deleteLocation(zone,"zone")}>
                                                    <Tooltip bottom content="Supprimer une piece"/>
                                                    <i class="micon">delete</i>  
                                                </button>
                                            </div>
                                        </div>
                                        {#if zone.rooms.length > 0}
                                            <article>
                                                {#each zone.rooms as room }
                                                    <div class="location">
                                                        <span>
                                                            <i class="icon">{@html icon['room']}</i>
                                                            <input type="text" bind:value={room.name}/>
                                                        </span>
                                                        <div class="action">
                                                            <button class="delete" on:click={() => deleteLocation(room,"room")}>
                                                                <Tooltip bottom content="Supprimer une piece"/>
                                                                <i class="micon">delete</i>  
                                                            </button>
                                                        </div>

                                                    </div>
                                                {/each}
                                            </article>

                                        {/if}
                                    {/each}
                                </article>
                            {/if}
                        {/each}
                    </article>
                {/if}
            </div>
        {/if}
    </section>


    <svelte:fragment slot="footer">
        <div class="footer">
            {#if !props.name}
                <button disabled>Retour</button>
                <span>
                    <button on:click={() => next()}>Suivant</button>
                    <button on:click={close}>Annuler</button>
                </span>
            {:else}
            <button on:click={() => props.name = ""}>Retour</button>
            <span>
                <button on:click={() => create()}>Suivant</button>
                <button on:click={close}>Annuler</button>
            </span>
            {/if}

        </div>
    </svelte:fragment>
</Modal>

<style>

    section{
        padding: 24px 16px;
        width: 400px;
        margin: 0 16px;
        max-height: 50vh;
        overflow-y: auto;
    }
   
    .error{
        color: var(--secondary-darken);
        font-size: 14px;
        opacity: 0.8;
    }
    section  button{
        position: relative;
        background: none;
        color: var(--primary);
    }
    .locations{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 8px;
    }
    .locations article{
        border-left: 1px dashed var(--primary-lighten);
        margin: 0 0 0 8px;
        padding: 0 0 0 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: end;
    }
    .locations .building{
        padding: 8px 0 0 16px;
    }
    .locations section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;
        border-radius: 8px;
        background: var(--primary-lighten-2);
        position: relative;
        width: 100%;
        overflow: visible;
    }
    .locations section span{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .locations section button{
        position: relative;
    }

    .location button{
        position: relative;
    }
    .location span{
        display: flex;
        align-items: center;
        width: 100%;
        gap: 8px;
    }
  
    .location{
        display: flex;
        gap: 8px;
        width: 100%;
    }
    i {
        color: var(--primary-lighten);
        width: 24px;
        height: 24px;
    }
    .delete i{
        color: var(--secondary);
    }
    .action{
        display: flex;
        gap: 8px;
        min-width: 60px;
        width: 60px;
        justify-content: end;
    }
    .footer{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-left: 12px;
    }
    .footer button:disabled{
        opacity: .6;
    }
    .footer button:disabled:hover{
        background: #eee;
        border: 1px solid #e0e0e0;
        cursor: default;
    }

   
</style>
