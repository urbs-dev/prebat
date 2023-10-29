<script>
    import Footer from '$lib/components/Footer.svelte'
    import { getPath } from 'gros/page'
</script>

<header></header>

<section>
    <article>
        <!-- <h1 class="alt-font">Bienvenue sur la plateforme d'accès aux données de performance réelles des bâtiments résidentiels et tertiaires !</h1> -->

        <!-- <p class="alt-font" style:margin-top="40px">Tout acteur de la construction, rénovation, gestion ou exploitation de bâtiment, comme leurs occupants, utilisateurs ou usagers, trouveront ici les constats du Cerema de leur performance technique et d'usage, en conditions réelles de fonctionnement et d'occupation, et par contexte en type de bâtiment, nature de travaux, équipements, localisation...</p> -->

        <!-- <p>Ces constats sont disponibles aux trois niveaux de traitement suivants&nbsp;:</p> -->

        <p>En tant qu'acteur de la construction, rénovation, gestion ou exploitation de bâtiment résidentiel ou tertiaire, comme en tant qu'occupant, utilisateur ou usager, nous agissons tous sur leur performance effective. Le Cerema en donne ici ses constats techniques et d'usage, en conditions réelles de fonctionnement et d'occupation, par contexte, en type de bâtiment, nature de travaux, équipements, localisation... et aux trois niveaux de traitement suivants&nbsp;:</p>

        <ul>
            <li>Données élémentaires par bâtiment&nbsp;: mesures, observations et enquêtes;</li>
            <li>Résultats d'évaluation par bâtiment;</li>
            <li>Enseignements transversaux tirés des résultats des évaluations, par typologies générales ou sélection plus fine.</li>
        </ul>
    </article>

    <article>
        <!-- <p style:margin-top="40px">Données&nbsp;: tous les postes de consommation, performances du bâti et des équipements techniques, pratiques des acteurs et usage, notamment confort thermique. Mesures pendant les deux premières années d'occupation.</p> -->
        <h1 class="alt-font">Énergie et confort thermique</h1>

        <h2 class="flex" style:margin-top="40px">
            <i class="micon" style:margin-right="8px">navigate_next</i>
            Échantillon
        </h2>
        <p>166 opérations de bâtiments performants (niveau RT2012).</p>
        <img style:width="80%" src="STATIC_PATH/img/energie_confort_thermique.png" alt="Graphique énergie et confort thermique">

        <div class="h3">
            <h3><span>1.</span> Évaluations par opération</h3>
            <a href="{getPath('/downloads')}">
                <button class="btn" type="button">
                    <i class="micon">file_download</i>
                    <span>Télécharger les données de mesure par opération</span>
                </button>
            </a>
            <h3><span>2.</span> Résultats d'évaluation des opérations</h3>
            <button class="btn">
                <i class="micon">file_download</i>
                <span>Télécharger les résultats pour toutes les opérations</span>
            </button>
            <h3><span>3.</span> Enseignements inter-opérations</h3>

            <a href="https://www.cerema.fr/fr/centre-ressources/boutique/batiments-demonstrateurs-basse-consommation-energie-prebat-3">
                <button class="btn" type="button">
                    <i class="micon">exit_to_app</i>
                    <span>Rapport de capitalisation</span>
                </button>
            </a>
            <a href="https://www.cerema.fr/fr/centre-ressources/boutique/batiments-demonstrateurs-basse-consommation-energie-prebat-2">
                <button class="btn" type="button">
                    <i class="micon">exit_to_app</i>
                    <span>Synthèse</span>
                </button>
            </a>
            <a href="https://www.cerema.fr/fr/centre-ressources/boutique/enseignements-batiments-performants-energie">
                <button class="btn" type="button">
                    <i class="micon">exit_to_app</i>
                    <span>Agir en conséquence</span>
                </button>
            </a>

            <img style:width="80%" src="STATIC_PATH/img/enseignement_inter_operations.png" alt="Graphique enseignement inter-opérations">

        </div>

    </article>

</section>


<Footer/>

<style>
    header {
        height: 64px;
    }
    section {
        max-width: 960px;
        margin: 40px auto;
        padding-bottom: 96px;
    }

    section 
    article {
        text-align: left;
        margin: 40px auto;
    }
    h1 {
        display: inline;
        color: var(--primary-darken);
        /* background: linear-gradient(180deg,rgba(255,255,255,0) 75%, var(--primary-lighten-1) 15%); */
        font-size: 36px;
    }
    h2 {
        color: var(--primary-lighten);
        font-size: 24px;
        font-family: Lato;
        margin-top: 32px;
    }
    h3 {
        color: var(--primary);
        font-size: 20px;
        margin-top: 32px;
        margin-bottom: 8px;
    }
    h3 span {
        font-family: JetBrains;
        padding-right: 16px;
    }
    p, ul {
        font-size: 16px;
        font-weight: lighter;
        color: #616161;
    }
    ul {
        list-style-type: disc;
        margin-left: 32px;
    }
    /* .divider {
        height: 400px;
        background-image: url('STATIC_PATH/img/login-background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.5;
    } */
    div.h3 {
        margin-left: 24px;
    }
    div.h3 button.btn {
        margin: 4px 0;
        padding: 2px 8px 2px 4px;
        background: var(--primary-lighten-1);
        transition: background, 0.2s;
        border-radius: 2px;
        text-transform: none;
        letter-spacing: 0;
        font-size: 16px;
    }
    div.h3 button.btn:hover {
        background: var(--primary-lighten-2);
    }
    div.h3 button.btn:hover span {
        text-decoration: underline;
    }
    div.h3 button.btn:hover span {
        text-decoration: underline;
    }
    div.h3 button.btn i {
        color: var(--secondary);
        font-size: 20px;
        margin-right: 8px;
    }
</style>