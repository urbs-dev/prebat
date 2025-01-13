<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Checkbox } from 'gros/form'
    import { envelope } from '$lib/utils/list'
    import { removeEmptyString } from '$lib/utils'

    export let props
    export let close
    let active = envelope[0]
    const form = props ?? {}

    const update = async () => {
        close()
        loading.start()
        const response = await fetch(`BASE_URL/prebat.api/operations/${form.name}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(removeEmptyString({ 
                name: form.name, 
                constructive_system: form.constructive_system, 
                building_insulation: form.building_insulation, 
                wall_insulation: form.wall_insulation, 
                roof_insulation: form.roof_insulation, 
                floor_insulation: form.floor_insulation, 
                window_carpentry: form.window_carpentry, 
                frame_carpentry: form.frame_carpentry 
            }))
        })
        await response.json()
        invalidateAll()
        loading.stop()
    }

    let selected = []
    $: active, selected = form[active.name] ? form[active.name].split(' ~ ') : []
    const select = (value, name) => {
        if (selected.includes(value)) {
            selected = selected.filter((item) => item !== value)
        } else {
            selected = [value, ...selected].sort((a, b) => a.localeCompare(b))
        }
        form[name] = selected.filter(Boolean).join(' ~ ')
    }
</script>

<Modal title="Modifier les informations" icon="edit">
    <section class="flex">
        <nav>
        {#each envelope as item}
            <button class="btn" on:click={() => active = item} class:active={active === item}>
                {item.label}
            </button>
         {/each}
        </nav>
        {#if active}
            {@const id = 'id' + (Math.random() + 1).toString(36).substring(7)}
            <aside style="width:480px;">
                <label for="{id}">
                    <div class="flex">
                        <i class="micon">chevron_right</i>
                        <span>{active.label}</span>
                    </div>
                </label>
                <ul>
                    {#each active.values as value}
                    <li>
                        <Checkbox 
                            checked={selected.includes(value)} 
                            size={16} margin={[0,8,0,0]} 
                            on:click={() => select(value, active.name)
                        }>
                            {value}
                        </Checkbox>
                    </li>
                    {/each}
                </ul>
            </aside>
        {/if}
    </section>

    <svelte:fragment slot="footer">
        <button on:click={update}>Enregistrer</button>
        <button on:click={close}>Annuler</button>
    </svelte:fragment>
</Modal>

<style>
    section {
        width: 520px;
        margin: 24px;
        min-height: 34vh;
        justify-content: space-between;
        align-items: flex-start;
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
    nav {
        margin-right: 16px;
        border-right: 1px solid #d1d1d1;
    }
    nav button {
        min-width: 240px;
        justify-content: flex-start;
        border-radius: 0;
        text-transform: none;
    }
    nav button.active {
        background: var(--primary);
        color: #fff;
    }
    ul li {
        transition: background, .2s;
        border-radius: 2px;
        padding: 2px 8px;
    }
    ul li:hover {
        background: #f5f5f5;
    }
</style>