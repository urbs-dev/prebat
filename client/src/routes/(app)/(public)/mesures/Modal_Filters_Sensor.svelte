<script>
    import { Modal } from "gros/modal";
    import Select from "./Modal_Filters_Sensor_Select.svelte" 
    import Usage from "./Modal_Filters_Sensor_Usage.svelte" 
    import { sensor, usages, system_category } from './utils'
    import { system } from "../../admin/operations/[operation]/utils";
    export let close
    export let props
    const rows = props.handler.getAllRows()

    let selected = {
        sensor: [],
        usages: [],
        system_category: [],
        system: []
    }
    let error = ""
    const download = async () => {
        error = false
        const ids = await $rows.map(row => row.id)
        const filter = selected
        const result = await fetch(`BASE_URL/prebat.api/operations/extracts`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ids, filter}),
        }).then(response => {
            if(!response.ok) throw new Errorr(response.json())
            return response.blob()
        }).catch(e => {
            console.error(e.message);
            
            error = "Aucune opérations ne correspond à votre selection"
        });

        let url = window.URL.createObjectURL(result);
        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('hidden', '');
        link.style.visibility = "hidden";    
        link.setAttribute("download", "Operations.zip");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
            return a
    }
</script>

<Modal title="Selection des mesures" icon="developer_board">
    <section>
        <article>
            <Usage title="Destination d'usage" list={usages} bind:selected={selected.usages} />
            <Select title="Capteur" list={sensor} bind:selected={selected.sensor} />
            <Usage title="Equipement" list={system_category} bind:selected={selected.system} bind:selectedParent={selected.system_category} />
        </article>

        <div>
            <span>
                <p>Seules les opérations contenant au moins un des capteurs sélectionnés seront exportées</p>
            </span>
        </div>
        {#if error}
            <p class="error">{error}</p>
        {/if}
</section>

    <footer slot="footer">
        <button on:click={download}>Exporter</button>
        <button on:click={close}>Fermer</button>
    </footer>
</Modal>    


<style>
    article {
        display: flex;
        width: 100%;
        height: 100%;
        margin: 4px 0;
        padding: 8px;
        overflow: hidden;
    }
    div {
        display: flex;
        justify-content: end;
        align-items: center;
        margin: 4px 0;
        padding: 8px;
    }
    h3 {
        font-family: Roboto;
        font-size: 18px;
        text-transform: none;
        letter-spacing: 0;
        justify-content: space-between;
    }
    div span p {
        font-size: 12px;
        color: #464646;
        margin: 0;
    }
    .error{
        color: var(--secondary-darken);
        font-size: 12px;
        margin: 8px 0;
    }
</style>