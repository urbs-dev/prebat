<script>
    import { Modal } from 'gros/modal'
    import { loading } from 'gros/loading'
    import { invalidateAll } from '$app/navigation'
    import { Checkbox } from 'gros/form'
    import Radio from '../Radio.svelte'
    import { locationSystem as system } from '$lib/utils/list'
    import { removeEmptyString } from '$lib/utils'

    export let props
    export let close
    let active = system[0]
    const form = props ?? {}
    const update = async () => {
        close()
        loading.start()
        const response = await fetch(`BASE_URL/prebat.api/locations/${form.name}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(removeEmptyString({ 
                name: form.name, 
                path: form.path,
                constructive_system: form.constructive_system, 
                heating: form.heating, 
                hot_water: form.hot_water, 
                airing: form.airing, 
                air_permeability: form.air_permeability,
            }))
        })
        await response.json()
        invalidateAll()
        loading.stop()
    }

    let selected = []
    $: active, selected = form[active.name] && active.type !== 'number' ? form[active.name].split(' ~ ') : []
    const select = (value, name, replace = false) => {
        if (replace) {
            form[name] = value
            return
        }

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
        {#each system as item}
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
                        <span>{active.label}&nbsp;</span>
                        {#if active.unit}
                            <code>[{active.unit}]</code>
                        {/if}
                    </div>
                </label>
                {#if active.type === 'radio'}
                <ul>
                    {#each active.values as value}
                    <li class:active={selected.includes(value)}>
                        <Radio 
                            checked={selected.includes(value)} 
                            size={16} margin={[0,8,0,0]} 
                            on:click={() => select(value, active.name, true)
                        }>
                            {value}
                        </Radio>
                    </li>
                    {/each}
                </ul>
                {:else if active.type === 'number'}
                    <input type="number" bind:value={form[active.name]}/>
                {:else}
                <ul>
                    {#each active.values as value}
                    <li class:active={selected.includes(value)}>
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
                {/if}
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
        width: 680px;
        margin: 24px;
        min-height: 40vh;
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
    ul li:hover {
        background: #f5f5f5;
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