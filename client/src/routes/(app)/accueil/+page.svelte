<script>
    import Footer from '$lib/components/Footer.svelte'
    import { getPath } from 'gros/page'
    import { initDownload } from '$lib/utils'

    const download = async () => {
        const response = await fetch(`BASE_URL/prebat.api/operations/results/extract`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Accept': 'application/json'},
        })
        const result = await response.json()
        initDownload(result.url)
    }

</script>

<div class="main">

<section>
    <article class="presentation">
        <div>
            <!-- <h1 class="alt-font">Bienvenue sur la plateforme d'accès aux données de performance réelles des bâtiments résidentiels et tertiaires !</h1> -->

            <!-- <p class="alt-font" style:margin-top="40px">Tout acteur de la construction, rénovation, gestion ou exploitation de bâtiment, comme leurs occupants, utilisateurs ou usagers, trouveront ici les constats du Cerema de leur performance technique et d'usage, en conditions réelles de fonctionnement et d'occupation, et par contexte en type de bâtiment, nature de travaux, équipements, localisation...</p> -->

            <!-- <p>Ces constats sont disponibles aux trois niveaux de traitement suivants&nbsp;:</p> -->

            <span>Données & performances énergétiques des bâtiments issues de PREBAT</span>
            <p>
                Retrouvez les constants techniques et d'usage, en conditions réelles de fonctionnement et d'occupation, par contexte, en type de bâtiment, nature de travaux, équipements, localisation...
            </p>
            <!-- <p>En tant qu'acteur de la construction, rénovation, gestion ou exploitation de bâtiments résidentiels ou tertiaires, comme en tant qu'occupant, utilisateur ou usager, nous agissons tous sur leur performance effective. Le Cerema en donne ici ses constats techniques et d'usage, en conditions réelles de fonctionnement et d'occupation, par contexte, en type de bâtiment, nature de travaux, équipements, localisation... et aux trois niveaux de traitement suivants&nbsp;:</p> -->

            <ul>
                <li>Données élémentaires par bâtiment&nbsp;: mesures, observations et enquêtes;</li>
                <li>Résultats d'évaluation par bâtiment;</li>
                <li>Enseignements transversaux tirés des résultats des évaluations, par typologies générales ou sélection plus fine.</li>
            </ul>
        </div>

        <div></div>

    </article>

    <article class="content">
        <!-- <p style:margin-top="40px">Données&nbsp;: tous les postes de consommation, performances du bâti et des équipements techniques, pratiques des acteurs et usage, notamment confort thermique. Mesures pendant les deux premières années d'occupation.</p> -->
        <h1 class="alt-font">Énergie et confort thermique</h1>

        <h2 class="flex" style:margin-top="24px">
            <i class="micon" style:margin-right="8px">navigate_next</i>
            Échantillon
        </h2>
        <p>166 opérations de bâtiments performants (niveau RT2012).</p>
        <img style:width="600px" src="STATIC_PATH/img/energie_confort_thermique.png" alt="Graphique énergie et confort thermique">

        <h2 class="flex" style:margin-top="40px">
            <i class="micon" style:margin-right="8px">navigate_next</i>
            Données et enseignements
        </h2>

        <div class="h3">
            <h3><span>1.</span>Données et enseignements inter-opérations</h3>
            <div class="flex">
                <img style="width:650px;" src="STATIC_PATH/img/enseignement_inter_operations.png" alt="Graphique enseignement inter-opérations">
                <span>Consommations totales en énergie primaire par m² SHON et par an</span>
            </div>
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

            <button class="btn" type="button" on:click={download}>
                <i class="micon">file_download</i>
                <span>RESULTATS D'EVALUATION : télécharger les données pour toutes les opérations</span>
            </button>

            <h3 style:margin-top="40px"><span>2.</span>Données par opération</h3>
            <a href="{getPath('/mesures')}">
                <button class="btn" type="button">
                    <i class="micon">file_download</i>
                    <span>MESURES : sélectionner et télécharger les données par opération</span>
                </button>
            </a>

        </div>

    </article>

</section>


<Footer/>

</div>

<style>
    div.main {
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fdfdfd;
        overflow-y: auto;
    }
    section {
        padding-bottom: 96px;
        background: #fff;
    }
    .presentation{
        background-color: var(--primary-lighten-2);
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
    }
    .presentation div {
        padding: 40px;

    }
    .presentation  span{
        color: #424242;   
        font-size: 24px;
        font-weight: 600;
    }
    section 
    article {
        text-align: left;
        padding: 0 40px 40px 40px;
    }
    .content{
        padding: 0 8em ;        
    }
    .content h1 {
        display: inline;
        color: var(--primary-darken);
        background: linear-gradient(180deg,rgba(255,255,255,0) 75%, var(--primary-lighten-1) 15%);
        font-size: 24px;
    }
    h2 {
        color: var(--primary-lighten);
        font-size: 20px;
        font-family: Lato;
        margin-top: 32px;
    }
    h3 {
        color: var(--primary);
        font-size: 18px;
        margin-top: 16px;
        margin-bottom: 8px;
    }
    h3 span {
        font-family: JetBrains;
        padding-right: 16px;
    }
    p, ul {
        font-size: 15px;
        font-weight: lighter;
        color: #616161;
        line-height: 20px;
    }
    ul {
        list-style-type: decimal;
        margin-left: 32px;
    }
    ul li {
        margin: 4px 0;
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
        margin: 12px 0 12px 24px;
        padding: 2px 8px 2px 4px;
        background: #f5f5f5;
        border: 1px solid #eee;
        transition: background, 0.2s;
        border-radius: 2px;
        text-transform: none;
        letter-spacing: 0;
        font-size: 16px;
    }
    div.h3 button.btn:hover {
        background: var(--primary-lighten-1);
        border: 1px solid var(--primary-lighten-2);
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

    div.h3 div.flex {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0;
        margin-bottom: 24px;
    }
    div.h3 div.flex span {
        border-top: 1px solid #e0e0e0;
        color: #616161;
        font-family: JetBrains;
        font-size: 13px;
        width: 80%;
        padding-top: 4px;
    }
</style>