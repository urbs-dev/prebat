<script>
    import { user } from '$module/session'
    import { loading } from 'gros/loading'
    import { Input } from 'gros/form'
    import { fade } from 'svelte/transition'
    export let confirmed
    export let email
    const form = {
        email: '',
        name: '',
        firstname: '',
        organization: '',
        office: ''
    }
    let errors = []
    const register = async () => {
        loading.start()
        errors = []
        const response = await user.register(form)
        loading.stop()
        if (response.errors) {
            errors = response.errors
            return
        } else {
            confirmed = true
            email = form.email
        }
    }
</script>

<section in:fade={{ duration: 200 }}>
    <article>
        <form>
            <Input
                big
                required
                {errors}
                field="email"
                bind:value={form.email}
                label="Adresse Email"
            />
            <Input big required {errors} field="name" bind:value={form.name} label="Nom" />
            <Input
                big
                required
                {errors}
                field="firstname"
                bind:value={form.firstname}
                label="Prénom"
            />
            <Input
                big
                required
                {errors}
                field="organization"
                bind:value={form.organization}
                label="Organisme"
            />
            <Input big {errors} field="office" bind:value={form.office} label="Profession" />

            <button type="submit" class="btn" on:click|preventDefault={register}>
                S'inscrire
                <i class="micon">chevron_right</i>
            </button>
        </form>
    </article>
</section>

<style>
    section {
        width: 100%;
        margin: 0 auto;
        padding: 0 8px;
        border-radius: 4px;
    }
    article {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        overflow: hidden;
        padding: 0 1%;
    }
    button {
        background: var(--primary);
        color: #f5f5f5;
        margin: 40px auto 20px auto;
        text-align: center;
        width: 100%;
        border: 0;
        border-radius: 3px;
        font-size: 18px;
        height: 60px;
        justify-content: center;
    }
    button:active {
        background: var(--primary-darken);
    }
    button i {
        margin: 8px;
        padding: 0;
    }
    form :global(input) {
        background: #fff;
    }
    @media (min-height: 700px) {
        article {
            margin-top: 4vh;
        }
    }
    @media (max-width: 1000px) {
        section {
            padding: 16px 24px 48px 24px;
        }
    }
</style>
