<script>
    import { user } from '$module/session'
    import Header from '$lib/components/Header.svelte'
</script>


<Header/>
<div class="bg"/>
<section class="thin-scrollbar">
    <article>
        <p class="alt-font">
            Interface admin accessible en cliquant sur le hamburger en haut à gauche
        </p>
    </article>
</section>

<style>
    section{
        position:absolute;
        z-index:2;
        top:56px;left:0;right:0;bottom:0;
        overflow-y:auto;
        background-color:rgba(255,255,255,0.7)
    }
    .bg{
        position:absolute;
        top:56px;left:0;bottom:0;right:0;
        background-repeat:no-repeat;
        overflow-y:hidden;
        background-size:cover;
        background-image:url('STATIC_PATH/img/login-background.jpg')
    }
    article{
        background: rgba(255,255,255,0.8);
        width:80%;
        min-height: 2000px;
        margin:40px auto;
        padding: 80px;
        color: #616161;
        border-radius: 8px;
        border: 1px solid #e0e0e0;
    } 
    p {
        font-size: 24px;
        color: var(--primary);
    }
</style>