<script>
    export let email
</script>

<section>
    <article>
        <p><em>Merci pour votre inscription !</em></p>
        <p>
            Un mail de confirmation vous sera envoyé dans quelques instants à l'adresse indiquée : 
            <i>{email}</i>
        </p>
        <p>
            Vous y trouverez le lien d'activation pour valider votre accès à 
            <b>l'Observatoire National des Bâtiments</b>
        </p>
    </article>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 16px 64px 48px 64px;
        border-radius: 4px;
        overflow: hidden;
    }
    article {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        overflow: hidden;
        padding: 2% 1%;
    }
    p {
        color: #00796b;
        font-size: 18px;
        text-shadow: 2px 2px 0 #f5f5f5, 2px -2px 0 #f5f5f5, -2px 2px 0 #f5f5f5, -2px -2px 0 #f5f5f5,
            2px 0px 0 #f5f5f5, 0px 2px 0 #f5f5f5, -2px 0px 0 #f5f5f5, 0px -2px 0 #f5f5f5;
    }
    p em {
        font-size: 26px;
        font-style: normal;
        font-weight: bold;
    }
    p i {
        color: #ffa000;
        font-style: normal;
    }

    @media (min-height: 700px) {
        article {
            margin-top: 16vh;
        }
    }

    @media (max-width: 1000px) {
        p {
            text-align: center;
        }
    }
</style>
