<script>
    import { getPath, url } from 'gros/page'
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
</ul>

<style>
    ul {
        margin-left: 24px;
        margin-right: 24px;
        font-family: 'Lato';
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
        border-bottom: 3px solid var(--primary-lighten-3);
    }
</style>