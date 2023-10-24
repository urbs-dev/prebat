<script>
    import { getPath, url } from 'gros/page'
</script>


<ul class="flex">

    <a href="{getPath('/home')}">
        <li class:active={$url.indexOf('home') > -1}>
            Accueil
        </li>
    </a>

    <a href="{getPath('/downloads')}">
        <li class:active={$url.indexOf('downloads') > -1}>
            Téléchargements
        </li>
    </a>
</ul>

<style>
    ul {
        margin-left: 24px;
        font-family: 'Lato';
        text-transform: uppercase;
        color: var(--primary-lighten);
    }
    li {
        transition: all, 0.2s;
        border-bottom: 3px solid transparent;
        margin: 0 8px;
    }
    li.active {
        color: var(--primary-darken);
        border-bottom: 3px solid var(--primary-lighten-3);
    }
</style>