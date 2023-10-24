<script>
	import { fade } from 'svelte/transition'
    import { modal } from 'gros/modal'
    import { ForgotPasswordModal, user } from '$module/session'
    import { Input } from 'gros/form'
    import { getPath } from 'gros/page'

	let form = {login: '', password:'', termsOfUse: true}
	let error = ''
	const connect = async () => {
		const response = await user.connect(form)
		error = response
	}
</script>


<article in:fade={{ duration:200 }}>
    <aside class="logo flex">
        <img alt="imope-logo" src="STATIC_PATH/img/logo.svg"/>
        <span class="alt-font">PREBAT</span>
    </aside>

    <form>
        <div class="error">
        {#if error.length > 0}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="message" on:keypress on:click={() => error = ''} transition:fade={{duration:200}}>{error}</div>
        {/if}
        </div>
        <Input big required icon="person" label="Identifant ou email" bind:value={form.login}/>
        <Input big required icon="lock" label="Mot de passe" bind:value={form.password} password/>

        <button class="btn z-depth-1" type="submit" on:click|preventDefault={() => connect()}>
            Se connecter
            <i class="tall material-icons right">chevron_right</i>
        </button>
    </form>
    <a href="{getPath('/auth/signup')}" class="btn z-depth-1">
        <i class="tall material-icons right" style:margin-right="8px">assignment_ind</i>
        Inscription
    </a>
    <button class="password-forgotten" on:click={() => modal.open(ForgotPasswordModal)}>Mot de passe oublié</button>
</article>

<style>
    article{
        position:absolute;
        left:0;top:0;bottom:0;
        width:392px;
        z-index:1;
        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.8), 0 6px 30px 5px rgba(0, 0, 0, 0.20), 0 8px 10px -7px rgba(0, 0, 0, 0.10);
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.10), 0 8px 10px -7px rgba(0, 0, 0, 0.05);
        padding: 0 40px;
        background: #fff;
    }
    aside.logo {
        margin:40px auto 24px auto;
        justify-content: center;
    }
    aside.logo img{
        width: 64px;
        height: 64px;
    }
    aside.logo span {
        color: var(--primary);
        font-size: 56px;
        margin-left: 16px;
    }

	form{
        width:100%;
        margin:0 auto;
        overflow: hidden;
        padding:8px 8px;
    }
	form button.btn{
        background: var(--primary);
        color: #eee;
        margin:40px auto 8px auto;
        width:100%;
        border:0;
        font-size:18px;
        height:60px;
        border:1px solid #eee;
    }
    a.btn {
        background: #f5f5f5;
        color:var(--primary);
        margin:0 auto 24px auto;
        width:calc(100% - 16px);
        border:0;
        font-size:18px;
        height:40px;
        border:1px solid #eee;
    }
	div.error{
        margin:0 auto 20px auto;
        height:48px;
    }
	div.message{
        cursor:pointer;
        color:#e57373;
        border:1px solid #ffcdd2;
        background:#ffebee;
        width:90%;
        margin:0 auto;
        text-align:center;
        padding:10px;
        border-radius:4px;
    }
	button.password-forgotten{
        display:block;
        margin:0 auto;
        background:#fff;
        color:#757575;
        cursor:pointer;
        font-size:13px;
        font-weight:400;
        text-decoration:underline;
        text-align:center;
    }
</style>