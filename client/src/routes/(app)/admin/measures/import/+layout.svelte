<script>
    import { loading } from 'gros/loading'
    import { page, content } from './store'
    import { Upload } from './upload'
    import Dropzone from './Dropzone.svelte'
    import Naming from './naming.svelte';
    import { Tooltip } from 'gros/tooltip'

    let file
    let name = "Ec.dep34.0001"
    let step = 3 // 1- button, 2- naming, 3- import 

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
    const copy = () => {
        navigator.clipboard.writeText(name)
    }
</script>

<section>
    <form>
        {#if step != 1}
            <button class="back" on:click={()=> step--}>
                <i class="micon">arrow_back</i>
            </button>
        {/if}
        {#if step === 1}
            <button class="btn" on:click={()=> step++}>
                <i class="micon">add
                </i>
                créer une opération
            </button>
        {:else if step === 2}
            <Naming bind:name bind:step/>
        {:else if step === 3}
            <div class="import">
                    <Dropzone bind:file/>
                    <!-- <Dropzone bind:file/> -->
                    <div class="info">
                        <span class="warning">
                            {#if name}
                                Veuillez anonymiser le fichier de donnée avec le nom suivant
                                avant de l'importer en base:
                                <button on:click={() => copy()} class='tooltip'>
                                    {name}
                                    <Tooltip top content="Cliquez pour copier"/>
                                </button>
                            {:else}
                                Veuillez anonymiser le fichier de donnée avant de l'importer en base.
                            {/if}
                            <p>
                                La procédure est décrite dans la notice du fichier.
                            </p>
                        </span>

                        <a class="file" href="/Cerema-TAB-PREBAT_MESURES_VIERGE.xlsx" download>
                            <i class="micon">file_download</i>
                            <span>
                                Télécharger le fichier vierge de mesure
                            </span>
                        </a>
                    </div>

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
            </div>
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
    .btn {
        width: 136px;
        padding: 12px;
        background: var(--primary);
        color: #fff;
        font-size: 16px;
        width: 100%;
        margin-bottom: 24px;
    }
    .btn i {
        margin-right: 8px;
    }

    .btn:hover {
        background: var(--primary-darken);
    }
    div.info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .warning {
        font-size: 18px;
        margin-top: 16px;
    }
    button.tooltip{
        background: none;
        border: none;
        color: var(--primary);
        font-size: 18px;
        padding: 4px 4px;
        background-color: #ddd;
    }
    a.file{
        margin-top: 16px;
        font-size: 12px;
        display: flex;
        align-items: center;
    }
    a.file i {
        margin-right: 8px;
    }
    .back{
        position: absolute;
        top: 8px;
        left: 8px;
        background: #fff;
        border-radius: 50%;
        padding: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tooltip{
        position: relative;
    }
    .import{ 
        margin: 24px 0;
    }
</style>
