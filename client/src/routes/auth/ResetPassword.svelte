<script>
    import { getPath } from 'gros/page'
    import Define from './Define.svelte'
    import Forgot from './Forgot.svelte'

    export let token
    export let type

    const isValid = async () => {
        const response = await fetch(`/resources.api/account/password?is-valid-token=${token}`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'}
        })
        if (response.status !== 200) {
            return false
        }
        return true
    }
</script>

<section class="content">
    {#await isValid()}
        <span></span>
    {:then result}
        {#if result === false}
            <article>
                <p class="warning">Ce lien de réinitialisation n'est plus valide...</p>
                <p>Pour obtenir un nouveau lien, cliquez sur <i>"mot de passe oublié"</i> dans la page d'acceuil.</p>
                <a href="{getPath('/auth')}">&#8592; Retour à la page d'accueil</a>
            </article>
        {:else}
            {#if type === 'define'}
                <Define bind:token={token}/>
            {:else if type === 'forgot'}
                <Forgot bind:token={token}/>
            {/if}
        {/if}
    {/await}
    <aside class="bg" style:background-image={`url(STATIC_PATH/img/imope-login-background.jpg)`}>
        <img alt="urbs-logo" src="STATIC_PATH/img/urbs-logo-white.png"/>
    </aside>
</section>

<style>
    section.content{position:absolute;top:0;left:0;bottom:0;right:0;}
    article{position:relative;z-index:2;margin:20vh auto;width:560px;border-radius:4px;border:1px solid #c8b900;background:#fffde7;padding:24px 64px;}
    p{color:#c6a700;}
    p.warning{font-weight:bold;text-align:center;color:#c6a700;font-size:18px;}
    p i{color:#c8b900;}
    article a{text-transform:uppercase;}
    article a:hover{text-decoration:underline;}
    .content aside.bg{position:absolute;top:0;bottom:0;right:0;left:0;background-repeat:no-repeat;background-size:cover;}
    .content aside img{display:block;position:absolute;bottom:40px;right:40px;width:320px;}
</style>