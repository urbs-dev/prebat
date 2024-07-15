 <script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'

    export let close
    export let props

    const save = async () => {
        loading.start('Séquençage en cours', `Cela peut durer plus d'une minute`)
        await upload.getSequence(props.file)
        await upload.operation()
        await upload.sites()
        await upload.measures()
    }
</script>


<Modal icon=" warning" title="Opération déjà existante">
    <span>Cette opération existe déjà en base, <b>Vous allez écraser toutes les données qu'elle contient </b>, 
        <br>voulez-vous continuer ?</span>

    <svelte:fragment slot="footer">
        <button on:click={save}>écraser</button>
        <button on:click={close}>Cancel</button>
    </svelte:fragment>
</Modal>


<style>

    span{
        display: block;
        margin: 16px ;

        font-size: 16px;
    }

    button{
        text-transform: capitalize;
    }
</style>