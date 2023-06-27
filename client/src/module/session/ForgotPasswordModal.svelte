<script>
    import { Modal } from 'gros/modal'
    import { Input } from 'gros/form'
    import { getPath } from 'gros/page'
    export let close
    let show = 'form'
    let email

    const sendMail = () => {
        if (email === '' || !email) return
        show = 'confirmed'
        fetch('/resources.api/account/password', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ 
                email: email,
                url: 'BASE_URL' + getPath('/connexion'),
                sendMail: true,
                mailType: 'forgot-password'
            })
        })
    }
</script>


<Modal title="Mot de passe oublié" icon="lock">
    {#if show === 'form'}
        <article>
            <strong>Demande de réinitialisation de votre mot de passe :</strong>
            <Input big label="Adresse Email" icon="mail" bind:value={email}/>
        </article>
    {:else}
        <article>
            <strong>Demande de réinitialisation de votre mot de passe :</strong>
            <p>
                Un Email contenant un lien de réinitialisation vous sera transmis dans quelques instants 
                à l'adresse indiquée : <i>{email}</i>
            </p>
        </article>
    {/if}
    <svelte:fragment slot="footer">
        {#if show === 'form'}
            <button on:click={sendMail}>Envoyer</button>
        {:else}
            <button on:click={close}>Fermer</button>
        {/if}
    </svelte:fragment>
</Modal>


<style>
    article{margin:24px 32px 48px 32px;width:376px;}
    button{background:var(--primary);color:#fff;}
    button:hover{background:var(--primary-darken)}
    p i{color:var(--primary);font-style:normal;}
    strong{color:var(--secondary);padding:0 0 24px 0;font-size:16px;font-family:'Lato';font-weight:normal;}
</style>