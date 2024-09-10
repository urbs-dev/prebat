<script>
    import { createEventDispatcher } from 'svelte';
    import { page, content } from './store'

    export let file = undefined
    let filename = undefined

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
        if (!checkName(files[0].name))
            return throwError()

        $page = null
        file = files[0]
        filename = file.name
        dispatch('change')
    }
    
    const handleInput = (e) => {
        filename = e.target.files[0].name
        file = null
        if (!checkName(e.target.files[0].name))
            return throwError()

        $page = null
        file = e.target.files[0]
        filename = file.name
        dispatch('change')
    }

    const checkName = (name) => {
        name = name.split('.')[0] + '.' + name.split('.')[1] + '.' + name.split('.')[2]
        const regex = /^[A-Za-z]{2}\.dep\d{2}\.\d{4}$/;
        return regex.test(name);
    }
    
    const throwError = () => {
        $page = 'error'
        $content = {error: 'Nom de fichier invalide, merci de respecter le format: XX.depXX.XXXX'}
    }

    let dragging = false
</script>



<label 
    class:empty={filename === undefined}
    for="upload" 
    id="dropcontainer" 
    class:dragging={dragging}
    on:dragleave={() => dragging = false}
    on:drop|preventDefault={(e) => drop(e)}
    on:dragenter={() => dragging = true}
    on:dragover|preventDefault
    >
    <span class="alt-font">Glissez le fichier ici</span>
    ou
    <div class="button">Parcourir...</div>
    <input
        on:change={(e) => handleInput(e)} 
        type="file" 
        id="upload" 
        name="upload"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" required 
    />
    <p class:empty={!filename}>{filename ?? 'Aucun fichier'}</p>
</label>

<style>
    label {
        position: relative;
        display: flex;
        gap: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 200px;
        padding: 16px;
        border-radius: 8px;
        border: 2px dashed #9e9e9e;
        cursor: pointer;
        background: repeating-linear-gradient(
            -45deg,
            #fff,
            #fff 10px,
            #fafafa 10px,
            #fafafa 20px
        );
        transition: all 0.2s ease-in-out, border 0.2s ease-in-out;
        font-weight: normal;
    }

    label:hover,
    label.dragging {
        background: #fff;
        border-color: var(--primary);
    }

    label:hover span,
    label.dragging span {
        color: var(--primary-darken);
    }
    span {
        color: var(--primary);
        font-size: 20px;
        font-weight: normal;
        text-align: center;
        transition: color 0.2s ease-in-out;
    }
    label.empty span {
        color: #424242;
    }

    input[type='file'] {
        width: 0.1px;
        height: 0.1px;
    }

    p {
        font-weight: bold;
        color: var(--secondary-darken);
    }
    .empty p {
        color: #9e9e9e;
        font-weight: normal;
    }
    div.button {
        background: var(--primary-lighten);
        color: #fff;
        border-radius: 4px;
        padding: 4px 16px;
        font-weight: normal;
        transition: background, 0.2s;
    }
    div.button:hover {
        background: var(--primary);
    }
</style>