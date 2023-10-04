<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Input, Checkbox } from 'gros/form'
    import { usages, getUseTypology } from './utils'
    export let props
    export let close
    const form = props ?? {}
    let { name, use, use_typology, shon, su, shab, height } = form

    const update = async () => {
        close()
        loading.start()
        const response = await fetch(`BASE_URL/prebat.api/operations/${name}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify({ name, use, use_typology, shon, su, shab, height })
        })
        await response.json()
        invalidateAll()
        loading.stop()
    }

    // selector for use_typology component
    const id = 'id' + (Math.random() + 1).toString(36).substring(7)
    let selected = use ? use.split(', ') : []
    const select = (value) => {
        if (selected.includes(value)) {
            selected = selected.filter((item) => item !== value)
        } else {
            selected = [value, ...selected].sort((a, b) => a.localeCompare(b))
        }
    }
    $: selected, use = selected.filter(Boolean).join(' ~ ')
    $: selected, use_typology = getUseTypology(selected)
</script>

<Modal title="Modifier les généralités" icon="edit">
    <section class="flex">
        <aside style="width:480px;margin:24px 24px 16px 0;">
            <label for="{id}">
                <div class="flex">
                    <i class="micon">chevron_right</i>
                    <span>Destination d'usage <b>*</b></span>
                </div>
            </label>
            <article class="thin-scrollbar">
                {#each usages as usage}
                    <div class="flex">
                        <i>{usage.typology}</i>
                        <ul>
                            {#each usage.values as value}
                            <li class:active={selected.includes(value)}>
                                <Checkbox checked={selected.includes(value)} size={16} margin={[0,8,0,0]} on:click={() => select(value, usage.typology)}>
                                    {value}
                                </Checkbox>
                            </li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </article>
        </aside>
        <aside>
            <Input big icon="chevron_right" label="SHON (m²)" bind:value={shon} number required/>
            <Input big icon="chevron_right" label="SU (m²)" bind:value={su} number/>
            <Input big icon="chevron_right" label="SHAB (m²)" bind:value={shab} number/>
            <Input big icon="chevron_right" label="Hauteur du bâtiment (m)" bind:value={height} number/>
        </aside>
    </section>

    <svelte:fragment slot="footer">
        <button on:click={update}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    section {
        margin: 24px;
        justify-content: space-between;
        align-items: flex-start;
    }
    aside {
        margin: 8px;
    }
    article {
        position: relative;
        max-height: 48vh;
        overflow-y: auto;
        border: 1px solid #d1d1d1;
        border-radius: 0.4rem;
        padding: 8px 16px;
    }
    article div.flex {
        align-items: flex-start;
        padding: 4px 0;
        border-bottom: 1px solid #eee;
    }
    article i {
        min-width: 96px;
        color: var(--primary-darken);
        font-size: 12px;
        font-style: normal;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    article li {
        border-radius: 2px;
    }
    article li:hover {
        background: #f5f5f5;
    }
    label{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--primary);
        font-weight:normal;
        font-size:16px;
        color:var(--primary);
        margin:0;
        margin-bottom:4px;
    }
    ul li.active :global(button.checkbox) {
        background: var(--primary-lighten-1);
    }
    ul li :global(button.checkbox) {
        width: 100%;
        justify-content: flex-start !important;
        padding: 2px 8px;
    }
    ul li :global(button:not(.checkbox)) {
        width: 100%;
    }
</style>