<script>
    import { invalidateAll, goto } from '$app/navigation'
	import { Modal } from 'gros/modal'
    import { getPath } from 'gros/page'
    export let props
    export let close

    const operation = props

    const destroy = async () => {
        close()
        const response = await fetch(`BASE_URL/prebat.api/operations/${operation.id}`, {
            method: 'DELETE'
        })
        await response.json()
        await goto( getPath('/admin/operations') )
        invalidateAll()
    }
 </script>

<Modal title="Supprimer une operation" icon="delete_forever">
    <aside>
        <p>Voulez-vous vraiment supprimer l'opération &laquo;&nbsp;{operation.name}&nbsp;&raquo; de manière définitive ?</p>
    </aside>
    <svelte:fragment slot="footer">
        <button on:click={destroy}>Supprimer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    aside{padding:20px 40px;width:400px;}
</style>