<script>
    import { loading } from 'gros/loading'
    import { page, content } from './store'
    import { Upload } from './upload'
    import Dropzone from './Dropzone.svelte'

    let file

    const evaluate = async () => {
        if (!file) return
        loading.start('Évaluation en cours')
        $page = null
        const data = new FormData()
        data.append('xlsx', file, file.name)
        const response = await fetch(`BASE_URL/prebat.api/measures/eval`, {
            method: 'POST',
            body: data
        })
        const json = await response.json()
        $page = json.error ? 'error' : 'eval'
        $content = json
        loading.stop()
    }

    const store = async () => {
        if (!file) return
        loading.start('Séquençage en cours', `Cela peut durer plus d'une minute`)
        $page = null
        const upload = new Upload()

        await upload.getSequence(file)
        await upload.operation()
        await upload.sites()
        await upload.measures()
    }
</script>

<section>
    <form>
        <Dropzone bind:file/>
        <!-- <Dropzone bind:file/> -->

        {#if file}
        <aside>
            <button type="submit" class="btn" on:click={store}>
                <i class="micon">file_upload</i>
                importer
            </button>

            <button type="submit" class="btn" on:click={evaluate}>
                <i class="micon">autorenew</i>
                évaluer
            </button>
        </aside>
        {/if}
    </form>
</section>

<slot/>

<style>
    section {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 360px;
        background: #fafafa;
        border-right: 1px solid #e0e0e0;
        padding: 32px 40px;
    }
    aside {
        margin-top: 40px;
        justify-content: center;
    }
    button {
        width: 136px;
        padding: 12px;
        background: var(--primary);
        color: #fff;
        font-size: 16px;
        width: 100%;
        margin-bottom: 24px;
    }
    button i {
        margin-right: 8px;
    }

    button:hover {
        background: var(--primary-darken);
    }
</style>
