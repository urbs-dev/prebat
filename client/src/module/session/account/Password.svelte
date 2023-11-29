<script>
    import { page, account }    from '../'
    import { Input }            from 'gros/form'
    import { loading }          from 'gros/loading'
    import { slide, fade }      from 'svelte/transition'
    import Nav                  from './Nav.svelte'
    export let user = {}
    let form = {login: user.login, email: user.email, password_verify: '', password: '', password_confirm: ''}
    let errors = []
    async function save() {
        loading.start()
        errors = []
        const response = await account.password(form)
        form.password_verify = ''
        form.password = ''
        form.password_confirm = ''
        loading.stop()
        if (response.errors) {
            errors = response.errors
            return
        }
        $page = 'show'
    }
</script>

<Nav/>

<section in:fade={{ duration: 300 }}>
    <div>
        {#if errors && errors.length > 0}
            <button class="message" in:slide={{ duration: 200 }} on:click={() => errors = false}>
                {#each errors as error}
                    <aside>&#8226; {error.message}</aside>
                {/each}
            </button>
        {/if}
    </div>
    <form>
        <Input big required password label="Mot de passe actuel" bind:value={form.password_verify}/>
        <Input big required password label="Nouveau mot de passe" bind:value={form.password}/>
        <Input big required password label="Confirmer le nouveau mot de passe" bind:value={form.password_confirm}/>

        <button class="z-depth-1 btn" type="submit" on:click|preventDefault={save}>
            <i class="micon">save</i>
            ENREGISTRER
            <i class="micon">chevron_right</i>
        </button>
    </form>
</section>

<style>
    section{position:absolute;top:80px;left:0;bottom:0;right:0;overflow-y:auto;padding:4px 32px;}
    div{min-height:48px;}
    button[type=submit]{justify-content:center;background:#f5f5f5;color:var(--primary);margin:16px 0;width:100%;font-size:18px;height:56px;margin-top:40px;}
    button i{font-size:22px;margin:8px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#eee}
    button.message{color:#e57373;border:1px solid #ffcdd2;font-size:12px;background:#ffebee;margin:0 auto;width:100%;text-align:left;padding:5px;border-radius:4px;letter-spacing:0;}
</style>