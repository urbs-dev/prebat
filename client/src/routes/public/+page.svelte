<script>
    import { getPath } from 'gros/page'
</script>



<header class="z-depth-2 flex">
    <div></div>
    <a href="{getPath('/auth')}" class="btn">
        Connexion
    </a>
</header>


<article>
    Hello PREBAT
</article>

<aside>
</aside>

<article>
    Hello PREBAT
</article>

<footer>

</footer>

<style>
    header {
        height: 64px;
        background: #fff;
        justify-content: space-between;
        z-index: 2;
        position: relative;
    }
    article {
        min-height: 600px;
        padding: 40px 80px;
        background: #fff;
    }
    aside {
        height: 400px;
        background-image: url('STATIC_PATH/img/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    footer {
        height: 640px;
        background: #37474f;
    }
</style>