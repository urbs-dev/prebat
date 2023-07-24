<script>
    import { loading } from 'gros/loading'
    import { page, content } from './store'
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
        loading.start('Intégration en cours', `Cela peut durer plus d'une minute`)
        $page = null
        const data = new FormData()
        data.append('xlsx', file, file.name)
        const response = await fetch(`BASE_URL/prebat.api/measures/store`, {
            method: 'POST',
            body: data
        })
        const json = await response.json()
        $page = json.error ? 'error' : 'result'
        $content = json
        loading.stop()
    }
</script>

<section>
    <form>
        <Dropzone bind:file on:change={evaluate}/>

        {#if file}
        <aside class="flex">
            <button type="submit" class="btn" on:click={() => store()}>
                <i class="micon">file_upload</i>
                importer
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
    }
    button i {
        margin-right: 8px;
    }

    button:hover {
        background: var(--primary-darken);
    }
</style>
