<script>
    import { Modal, modal } from 'gros/modal'
    import { Input, Textarea, check  } from 'gros/form'
    import { loading } from 'gros/loading'
    import { page } from '$app/stores'
    import { slide } from 'svelte/transition'
    import ConfirmModal from './ConfirmModal.svelte'
    export let close
    export let props

    let errors = []
    let nok = false
    const form = {
        application: props.application,
        url: $page.url.href,
        title: '',
        message: ''
    }

    const handleSubmit = async () => {
        errors = check(form, ['title', 'message'])
        if (errors.length === 0) {
            loading.start()
            const response = await fetch(`BASE_URL/resources.api/applications/issue`, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json', 'Accept' : 'application/json' },
                body: JSON.stringify(form) 
            })
            if (!response.ok) {
                nok = true
                const json = await response.json()
                console.log(json)
            }
            else {
                close()
                modal.open(ConfirmModal, form)
            }
            loading.stop()
        }
    }

</script>


<Modal icon="bug_report" title="Signaler un bug">

    <section>
        {#if nok}
            <div class="nok" on:click={() => nok = false} on:keypress transition:slide={{ duration: 200 }}>
                Un erreur de soumission est survenue.
            </div>
        {/if}
        <Input big required field="title" {errors} label="Titre" icon="title" bind:value={form.title} spellcheck/>

        <Textarea big required field="message" {errors} label="Message" icon="message" bind:value={form.message} spellcheck height="200px"/>
    </section>

    <svelte:fragment slot="footer">
        <button on:click={close}>Annuler</button>
        <button class="btn" on:click={handleSubmit}>
            Envoyer
            <i class="micon">send</i>
        </button>
    </svelte:fragment>
</Modal>


<style>
    section {
        width: 600px;
        padding: 24px 40px;
    }
    button.btn {
        background: var(--primary);
        color: #fff;
        padding: 0 24px;
    }
    button.btn i {
        margin-left: 16px;
        font-size: 20px; 
    }

    div.nok {
        background: #ffebee;
        border: 1px solid #e57373;
        padding: 8px 24px;
        border-radius: 8px;
        color: #b71c1c;
        cursor: pointer;
    }

</style>