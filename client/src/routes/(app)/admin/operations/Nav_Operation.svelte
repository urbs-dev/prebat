<script>
    import Building from './Nav_Operation_Building.svelte'
    import { slide } from 'svelte/transition'
    import { page } from '$app/stores'
    import { Dropdown } from 'gros/dropdown'
    export let operation
    let active = $page.params?.slug && $page.params.slug.includes(operation.id + '-')
</script>

<section class="flex">
    <button class="slider flex" on:click={() => active = !active} class:active={active}>
        <i class="micon show">keyboard_arrow_right</i>
        <i class="micon">{active ? 'folder_open' : 'folder'}</i>
        {operation.title}
    </button>
    <Dropdown fixedWidth position="bottom-end">
        <button class="menu">
            <i class="micon menu">more_vert</i>
        </button>
        <article slot="content" class="z-depth-1">
            <button class="btn">
                <i class="micon">edit</i>
                éditer l'opération
            </button>
            <button class="btn">
                <i class="micon">add</i>
                Ajouter un bâtiment
            </button>
            <button class="btn delete">
                <i class="micon">delete_forever</i>
                Supprimer l'opération
            </button>
        </article>
    </Dropdown>
</section>


{#if active}
    <aside transition:slide|local={{ duration:150 }}>
        {#each operation.buildings as building}
            <Building table={building}/>
        {/each}
    </aside>
{/if}

<style>
    section {
        justify-content: space-between;
        border-radius: 4px;
    }
    section:hover {
        background: #f5f5f5;
    }
    button.slider:hover {
        background: #f5f5f5;
    }
    button.slider {
        width: calc(100% - 32px);
        color: #424242;
        font-size: 16px;
        padding: 4px 8px;
    }

    i:not(.menu) {
        font-size: 20px;
        margin-right: 8px;
    }
    button i.show {
        transition: transform, 0.2s;
        margin-right: 4px;
    }
    button.active i.show {
        transform: rotate(90deg);
    }
    aside {
        border-left: 1px dashed var(--primary-lighten);
        padding:4px 8px;
        margin-left: 18px;
    }

    button.menu {
        border-radius: 50%;
        width: 32px;
        height: 32px;
        color: #757575;
    }
    button.menu:hover {
        background: #e0e0e0;
    }

    article {
        border: 1px solid #eee;
        padding:2px;
        border-radius: 4px;
    }
    article button {
        width: 100%;
        justify-content: flex-start;
        color: var(--primary);
        padding: 4px 8px;
    }
    article button.delete {
        color: #e57373;
    }
    article button:hover {
        background: #eee;
    }
</style>