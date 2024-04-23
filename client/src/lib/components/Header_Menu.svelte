<script>
    import { getPath, url } from 'gros/page'
    export let isAuthenticated = false
</script>

<ul class="flex">

    <a href="{getPath('/accueil')}">
        <li class:active={$url.indexOf('accueil') > -1}>
            Accueil
        </li>
    </a>

    <a href="{getPath('/mesures')}">
        <li class:active={$url.indexOf('mesures') > -1}>
            Mesures
        </li>
    </a>
    {#if isAuthenticated}
        <a href="{getPath('/admin/measures/import')}">
            <li class:active={$url.indexOf('admin/measures/import') > -1}>
                Nouvelle opération
            </li>
        </a>
    {/if}
</ul>

<style>
    ul {
        margin-left: 24px;
        margin-right: 24px;
        text-transform: uppercase;
        color: var(--primary-lighten);
    }
    li {
        transition: all, 0.2s;
        margin: 0 12px;
        border-bottom: 3px solid transparent;
        transition: all,0.2s;
    }
    li:hover {
        border-bottom: 3px solid var(--primary-lighten-1);
    }
    li.active {
        color: var(--primary-darken);
    }
</style>