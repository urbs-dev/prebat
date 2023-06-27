<script>
	import { fade } from 'svelte/transition'
    import { getPath } from 'gros/page'
    import Errors from './Errors.svelte'
    import { goto } from '$app/navigation'

    export let token
    let errors = null
    let confirmed = false

	const form = {token: token, password: null,  password_confirm: null}
	const resetPassword = async () => {
        errors = null
		const response = await fetch(`/resources.api/account/password`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ 
                token: token,
                password: form.password,
                password_confirm: form.password_confirm,
            })
        })
        if (response.status !== 200) {
            const json = await response.json()
            errors = json.errors
        }
        else {
            confirmed = true
            token = null
        }
	}
</script>


<article class="anim_bottom">
    <img alt="imope-logo" src="STATIC_PATH/img/logo.svg"/>
    <div class="form">
        <section>
            <p class="title">Réinitialisation du mot de passe</p>
            {#if confirmed}
                <div class="confirmed">
                    <p>Votre mot de passe a été réinitialisé avec succès</p>
                </div>
                <button class="btn waves-effect" on:click={() => goto(getPath('/connexion'))}>
                    Se connecter
                    <i class="tall material-icons right">chevron_right</i>
                </button>
            {:else}
            <div class="error">
                {#if errors}
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class="message" in:fade on:keypress on:click={() => errors = null}>
                        <Errors errors={errors}/>
                    </div>
                {/if}
            </div>
            <form>  
                <aside class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input id="icon_login" type="password" class="field" spellcheck="false" bind:value={form.password}/>
                    <label for="icon_login">Nouveau mot de passe *</label>
                </aside>
                <aside class="input-field">
                    <i class="material-icons prefix">check_circle</i>
                    <input id="icon_password" type="password" class="field" bind:value={form.password_confirm}/>
                    <label for="icon_password">Confirmer le nouveau mot de passe *</label>
                </aside>
                <button class="btn waves-effect" type="submit" on:click|preventDefault={() => resetPassword()}>
                    Réinitialiser
                    <i class="tall material-icons right">chevron_right</i>
                </button>
            </form>
            {/if}
        </section>
    </div>
</article>


            


<style>
    article{position:relative;width:440px;height:544px;border-radius:4px;margin:80px auto;z-index:1;background:#fff;padding:24px 8px;
        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.8), 0 6px 30px 5px rgba(0, 0, 0, 0.20), 0 8px 10px -7px rgba(0, 0, 0, 0.10);box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.10), 0 8px 10px -7px rgba(0, 0, 0, 0.05);}
    article img{display:block;margin:40px auto 8px auto;width:72%;}
    article div:not(.error){padding:0 40px;}

	.form section{border-radius:4px;width:100%;margin:0 auto;overflow: hidden;padding:2% 2%;}
	.form section button.btn{position:absolute;bottom:40px;left:64px;right:64px;display:block;background:#f5f5f5;color:#bf9b30;text-align:center;border:0;border-radius:3px;font-size:18px;height:60px;box-shadow: 0 3px 6px rgba(189,189,189,0.12), 0 3px 6px rgba(189,189,189,0.24);}
	.form section .btn:focus{background:#f5f5f5;}
	.form aside{width:100%;margin:16px auto;}
	.form div.error{margin:0 auto 20px auto;width:100%;height:48px;}
	.form div.message{cursor:pointer;color:#e57373;border:1px solid #ffcdd2;font-size:12px;background:#ffebee;margin:0 auto;text-align:center;padding:4px;border-radius:4px;}
    p.title{margin:0 0 8px 0;color:#757575;text-transform:uppercase;text-align:center;}

    div.confirmed{cursor:pointer;border:1px solid #a5d6a7;font-size:16px;background:#e8f5e9;margin:40px auto;text-align:center;padding:16px 8px;border-radius:4px;}
    div.confirmed p{color:#4caf50;margin:24px auto;}
</style>