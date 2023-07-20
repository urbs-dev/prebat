<script>
    import { getPath, url } from 'gros/page'
    import { page } from '$app/stores'
    export let table

    $: active = $page.params.slug === `${table.schema}-${table.name}`
    $: isView = $url.includes('view') ? '/view' : ''
</script>



<a href="{getPath(`/admin/application/database/${table.schema}-${table.name}` + isView)}" class="flex" class:active={active}>
    <div class="flex">
        <i class="micon">grid_on</i>
        {table.name}
    </div>
    {#if table.has_geom}
        <i class="micon geom">language</i>
    {/if}
</a>


<style>
    a {
        transition: background, 0.2s;
        font-size: 13px;
        color: var(--primary);
        padding: 2px 0 2px 6px;
        margin-bottom: 2px;
        border-radius: 2px;
        border-right: 4px solid transparent;
        justify-content: space-between;
    }
    a:hover {
        background: #f5f5f5;
    }
    a.active {
        background: var(--primary-lighten-1);
        border-right: 4px solid var(--secondary);
        color: var(--primary-darken);
    }
    i {
        color: var(--primary-lighten-2);
        font-size: 20px;
        margin-right: 8px;
    }
    a.active i:not(.geom) {
        color: var(--secondary);
    }
    i.geom {
        color: var(--primary-lighten-3);
        font-size: 16px;
    }
</style>