<script>
    import { invalidateAll } from '$app/navigation';
    import { Dropdown } from 'gros/dropdown';
    import { createEventDispatcher } from 'svelte';
    export let operation

    const files = [
        {name: "Fiche technique", url: "https://www.google.com", type: "pdf"},
    ]

    const FILE_TYPE_SVG = {
        pdf: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64zm384 64H256V0zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16m32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16z"/></svg>`,
        img: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M0 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm323.8 106.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6l-26.5-33.1c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S78.8 416 88 416h336c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7zM112 192a48 48 0 1 0 0-96a48 48 0 1 0 0 96"/></svg>`,
        xls: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm88 64v64H64V96zm56 0h88v64h-88zm240 0v64h-88V96zM64 224h88v64H64zm232 0v64h-88v-64zm64 0h88v64h-88zM152 352v64H64v-64zm56 0h88v64h-88zm240 0v64h-88v-64z"/></svg>`,
        default: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 384 512"><path fill="currentColor" d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm384 64H256V0z"/></svg>`
    }
    const dispatch = createEventDispatcher()
    const getFiles = (event) => {
        if(!event.dataTransfer){
            if (!event.target.files){
                return false
            } 
            else{
                return event.target.files
            }
        };
        return event.dataTransfer.files
    }
    const drop = (e) => {
        dragging = false
        const files = getFiles(e)
        if (!files) {
            filename = "Erreur, veuillez réessayer"
        }
        filename = files[0].name
        file = null
     
        file = files[0]
        filename = file.name
        dispatch('change')
    }
    const handleInput = (e) => {
        filename = e.target.files[0].name
        file = null

        file = e.target.files[0]
        filename = file.name
        dispatch('change')
    }

    const importFile = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('operation_id', operation.id)
        const response = await fetch(`BASE_URL/prebat.api/documentations`, {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            const json = await response.json()
            files.push(json)
            invalidateAll()
        }       
    }

    const download = async (id, name) => {
        const result = await fetch(`BASE_URL/prebat.api/documentations/${id}`, {
            method: 'GET',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
        })
        const blob = await result.blob()

        let url = window.URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('hidden', '');
        link.style.visibility = "hidden";    
        link.setAttribute("download", name);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const deleteFile = async (id) => {
        const response = await fetch(`BASE_URL/prebat.api/documentations/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
        })
        invalidateAll()
    }
    
    let file = undefined
    let filename = undefined
    let dragging = false
</script>


<section>
    <label class="dropzone file"
    class:empty={filename === undefined}
    for="upload" 
    id="dropcontainer" 
    class:dragging={dragging}
    on:dragleave={() => dragging = false}
    on:drop|preventDefault={(e) => drop(e)}
    on:dragenter={() => dragging = true}
    on:dragover|preventDefault
    >
        <div class="title">
            Importer un fichier
        </div>
        <div class="content">
            <div class="img">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z"/></svg>
                <p>{filename ?? 'Aucun fichier'}</p>
            </div>
            {#if !file}
                <span class="button">
                        Parcourir
                </span>
            {:else}
                <button class="button" on:click={() => importFile()}>
                    Importer
                </button>
            {/if}
                <input
                    on:change={(e) => handleInput(e)} 
                    type="file" 
                    id="upload" 
                    name="upload"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required 
                />
        </div>
    </label>
    {#each operation.documentations as file }
        <article class="file">
            <span class="title">
                <p>
                    {file.name}.{file.type}
                </p>
                <Dropdown  position="bottom-end">
                    <button>
                        <i class="micon"> more_vert </i>
                    </button>
                    <aside slot="content">
                            <button class="delete" on:click={() => deleteFile(file.id) }>
                                <i class="micon"> delete </i>
                                Supprimer
                            </button>
                    </aside>
                </Dropdown>
            </span>
            <div class="content">
                <div class="img">
                    {@html FILE_TYPE_SVG[file.type] || FILE_TYPE_SVG.default}
                </div>
                <span>
                    <button class="button" on:click={() => download(file.id,file.name)}>
                        Telecharger
                    </button>
                </span>
            </div>
        </article>
    {/each}
        
</section>

<style>
    label:hover,
    label.dragging {
        background: #fff;
        border-color: var(--primary);
    }
    label:hover span,
    label.dragging span {
        color: var(--primary-darken);
    }
    label.empty span {
        color: #424242;
    }

    .empty p {
        color: #9e9e9e;
        font-weight: normal;
    }
    input[type='file'] {
        width: 0.1px;
        height: 0.1px;
    }
    p, .title p  {
        display: block;
        margin: 0;
        padding: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
    }
    section{
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        gap: 10px;
    }
    .file, label{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid #9e9e9e;
        color: var(--primary);
        width: 250px;
        height: 250px;
        border-radius: 8px;
        background-color: var(--background-lighten);
    }
    .file div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .file .title{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 800;
        border-radius: 8px;
        height: fit-content;
        padding-bottom: 0.5em;
    }
    .file :global(svg){
        width: 50%;
        height: 50%;
    }
    .button{
        font-size: 16px;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--primary-lighten-3);
        color: var(--primary);
        text-align: center;
        font-weight: 800;
        line-height: normal;
        cursor: pointer;
        width: 100%;
    }
    div.img{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dropzone{
        background: repeating-linear-gradient(
            -45deg,
            #fff,
            #fff 10px,
            #fafafa 10px,
            #fafafa 20px
        );
        color: var(--primary-lighten);        
    }
    .button:hover{
        background-color: var(--primary-lighten-2);
    }
    label{
        margin: 0;
    }

    aside{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--background-darken);
        border: 1px solid var(--background-darken);
        border-radius: 8px;
    }
    aside button {
        color: var(--background);
        padding: 8px;
        display: flex;
        align-items: center;
        opacity: 0.7;

    }
    aside button:hover {
        opacity: 1;
    }
    .delete{
        color: var(--secondary-darken);
    }
</style>