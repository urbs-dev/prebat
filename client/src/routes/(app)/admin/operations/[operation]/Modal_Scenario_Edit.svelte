<script>
    import { invalidateAll } from '$app/navigation'
	import { Modal } from 'gros/modal'
    export let props
    export let close


    const save = async () => {
        close()
        saveScenario(props.name, props.description)
    }

    const saveScenario = async (name, description) => {
        const response = await fetch(`BASE_URL/prebat.api/scenarios/${props.id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({name, description})
        })
        invalidateAll()
        return await response.json()
    }
 </script>

<Modal title="Editer un scénario" icon="save">
    <aside>
        <label>
            Nom du scénario:
            <input type="text" bind:value={props.name}  placeholder="ex:2020"/>
        </label>
        <label>
            Description:
            <textarea type="text" bind:value={props.description}  placeholder="Description..."/>
        </label>
        <p class="infos">
            ⚠️ Les modifications non sauvegardées seront perdues.
        </p>
    </aside>
    <svelte:fragment slot="footer">
        <button on:click={save}>Sauvegarder</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    aside{padding:20px 40px;width:400px;}

    .infos{
        color:var(--color-warning);
        font-size:12px;
        margin-top:20px;
    }
    label{margin-bottom:20px;}
    textarea{
        width:100%;
        height:100px;
    }
</style>