
<section>
    <article>
        <slot/>
    </article>
    <div/>
</section>


<style>
    section {
        position:absolute;
        background-image: url('STATIC_PATH/img/login-background.jpg');
        top:0;bottom:0;right:0;left:0;
        background-repeat:no-repeat;
        background-size:cover;
    }
    article {
        position:absolute;
        top:0;bottom:0;right:0;left:0;
        z-index: 4;
    }
    div {
        position:absolute;
        top:0;bottom:0;right:0;left:0;
        z-index: 1;
        background: rgba(255,255,255,0.7);
    }
    img{
        display:block;
        position:absolute;
        bottom:40px;
        right:80px;
        width:400px;
        z-index: 2;
    }
</style>