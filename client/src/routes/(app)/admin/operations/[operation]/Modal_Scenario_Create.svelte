<script>
    import { invalidateAll, goto } from '$app/navigation'
	import { Modal } from 'gros/modal'
    import { getPath } from 'gros/page'
    export let props
    export let close

    let name

    const create = async () => {
        close()
        props.createScenario(props.type, "weekly", name)
    }
 </script>

<Modal title="Crée un scénario" icon="save">
    <aside>
        <label>
            Année du scénario
            <input type="text" bind:value={name}  placeholder="ex:2020"/>
        </label>
        <p class="infos">
            ⚠️ Les modifications non sauvegardés seront perdus.
        </p>
    </aside>
    <svelte:fragment slot="footer">
        <button on:click={create}>Créer</button>
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
</style>