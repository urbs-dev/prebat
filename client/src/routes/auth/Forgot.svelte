<script>
    import { fade } from 'svelte/transition'
    import { Input } from 'gros/form'
    import { getPath } from 'gros/page'
    import Errors from './Errors.svelte'
    import { goto } from '$app/navigation'

    export let token
    let errors = null
    let confirmed = false

    const form = { token: token, password: null, password_confirm: null }
    const resetPassword = async () => {
        errors = null
        const response = await fetch(`/resources.api/account/password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                token: token,
                password: form.password,
                password_confirm: form.password_confirm,
            }),
        })
        if (response.status !== 200) {
            const json = await response.json()
            errors = json.errors
        } else {
            confirmed = true
            token = null
        }
    }
</script>

<article class="anim_bottom z-depth-2">
    <img alt="imope-logo" src="STATIC_PATH/img/logo.svg" />
    <div class="form">
        <section>
            <p class="title">Réinitialisation du mot de passe</p>
            {#if confirmed}
                <div class="confirmed">
                    <p>Votre mot de passe a été réinitialisé avec succès</p>
                </div>
                <button class="btn waves-effect" on:click={() => goto(getPath('/auth'))}>
                    Se connecter
                    <i class="tall material-icons right">chevron_right</i>
                </button>
            {:else}
                <div class="error">
                    {#if errors}
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="message" in:fade on:keypress on:click={() => (errors = null)}>
                            <Errors {errors} />
                        </div>
                    {/if}
                </div>
                <form>
                    <Input big icon="lock" password required label="Nouveau mot de passe" bind:value={form.password}/>
                    <Input big icon="check_circle" password required label="Confirmer le nouveau mot de passe" bind:value={form.password_confirm}/>

                    <button class="btn z-depth-1" type="submit" on:click|preventDefault={() => resetPassword()}>
                        Réinitialiser
                        <i class="micon">chevron_right</i>
                    </button>
                </form>
            {/if}
        </section>
    </div>
</article>

<style>
    article {
        position: relative;
        width: 440px;
        height: 544px;
        border-radius: 8px;
        z-index: 400;
        margin: 80px auto;
        z-index: 1;
        background: #fff;
        padding: 16px 8px;
        border: 1px solid #e0e0e0;
    }
    article img {
        display: block;
        margin: 40px auto 8px auto;
        width: 80px;
    }
    article div:not(.error) {
        padding: 0 40px;
    }

    .form section {
        border-radius: 4px;
        width: 100%;
        margin: 0 auto;
        overflow: hidden;
        padding: 2% 2%;
    }
    .form section button.btn {
        position: absolute; bottom: 32px; left: 40px; right: 40px;
        margin-top: 40px;
        background: #f5f5f5;
        color: var(--secondary);
        font-size: 18px;
        height: 56px;
        border: 1px solid #eee;
    }
    .form section .btn:focus {
        background: #f5f5f5;
    }

    .form div.error {
        margin: 0 auto 20px auto;
        width: 100%;
        height: 48px;
    }
    .form div.message {
        cursor: pointer;
        color: #e57373;
        border: 1px solid #ffcdd2;
        font-size: 12px;
        background: #ffebee;
        margin: 0 auto;
        text-align: center;
        padding: 4px;
        border-radius: 4px;
    }
    p.title {
        margin: 0 0 8px 0;
        color: #757575;
        text-transform: uppercase;
        text-align: center;
    }

    div.confirmed {
        cursor: pointer;
        border: 1px solid #a5d6a7;
        font-size: 16px;
        background: #e8f5e9;
        margin: 40px auto;
        text-align: center;
        padding: 16px 8px;
        border-radius: 4px;
    }
    div.confirmed p {
        color: #4caf50;
        margin: 24px auto;
    }
</style>
