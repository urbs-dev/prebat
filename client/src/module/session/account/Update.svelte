<script>
    import { page, account } from '$module/session'
    import { Input } from 'gros/form'
    import { fade } from 'svelte/transition'
    import { loading } from 'gros/loading'
    import Nav from './Nav.svelte'
    export let user
    let errors = []

    const save = async () => {
        loading.start()
        errors = []
        const response = await account.update(user)
        loading.stop()
        if (response.errors) {
            errors = response.errors
            return
        }
        $page = 'show'
    }
</script>

<Nav/>

<section in:fade|global={{ duration: 300 }} class="thin-scrollbar">
    <form>
        <Input {errors} required field="login" label="Identifiant" bind:value={user.login}/>
        <Input {errors} required field="email" label="Email" bind:value={user.email}/>
        <Input {errors} required field="name" label="Nom" bind:value={user.name}/>
        <Input {errors} required field="firstname" label="Prénom" bind:value={user.firstname}/>
        <Input {errors} required field="organization" label="Organisme" bind:value={user.organization}/>
        <Input {errors} field="office" label="Fonction" bind:value={user.office}/>

        <button class="z-depth-1 btn" type="submit" on:click|preventDefault={save}>
            <i class="micon">save</i>
            ENREGISTRER
            <i class="micon">chevron_right</i>
        </button>
    </form>
</section>


<style>
    section{position:absolute;top:72px;left:0;bottom:0;right:0;overflow-y:auto;padding:8px 32px;}
    button[type=submit]{background:#f5f5f5;color:var(--primary);margin:16px 0;width:100%;font-size:18px;height:56px;margin-top:24px;}
    form{margin-top:32px;}
    button i{font-size:22px;margin:8px;}
	button:focus{background:#f5f5f5;}
    button:hover{background-color:#eee}
</style>