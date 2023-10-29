<script>
    import { getPath } from 'gros/page'
</script>




<footer class="flex">
    <aside class="flex">
        <img src="STATIC_PATH/img/logo-cerema.svg" alt="logo CEREMA">
        <span>Copyright 2023 © - Cerema</span>
        <a href="https://www.cerema.fr/fr/contact/form?source_entity_type=taxonomy_term&source_entity_id=1797&category=1797&message=Bonjour,%0AJe%20vous%20contacte%20suite%20%C3%A0%20ma%20visite%20sur%20le%20site%20avatar.cerema.fr.%0AJe%20souhaiterais%20prendre%20contact%20avec%20une%20personne%20de%20l%27%C3%A9quipe%20projet%20du%20Cerema.%20Merci%20de%20leur%20transmettre%20mes%20coordonn%C3%A9es.%0AVous%20remerciant%20par%20avance,%0ACordialement" rel="external">Nous contacter</a>
        <a href="{getPath('/legal')}">Mentions légales</a>
    </aside>
    <!-- <img src="STATIC_PATH/img/background-buildings.png" alt="illustration des bâtiments PREBAT" class="bg"> -->
</footer>




<style>
    footer {
        position: relative;
        height: 200px;
        background: #fafafa;
        border-top: 1px solid var(--primary-lighten-1)
    }

    /* img.bg {
        position: absolute;
        bottom:16px;
        left: 16px;
        height: 200px;
        z-index: 1;
    } */
    aside {
        margin: 0 240px 0 240px;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
    }
    aside a {
        text-decoration: underline;
        margin: 8px 16px;
    }
    aside img {
        height: 64px;
        margin: 8px 16px;
    }
    aside span {
        margin: 8px 16px;
    }
</style>