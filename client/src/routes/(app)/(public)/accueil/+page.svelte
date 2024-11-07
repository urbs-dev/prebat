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
            <span>Données & performances énergétiques des bâtiments issues de PREBAT</span>
            <p>
                En tant qu’acteur de la construction, rénovation, gestion ou exploitation de bâtiment résidentiel ou tertiaire, comme
                en tant qu’occupant, utilisateur ou usager, nous agissons tous sur leur performance effective. Le Cerema en donne
                ici ses constats techniques et d’usage, en conditions réelles de fonctionnement et d’occupation, par contexte, en
                type de bâtiment, nature de travaux, équipements, localisation… et aux trois niveaux de traitement suivants :
            </p>

            <ul>
                <li>Enseignements transversaux tirés des résultats des évaluations : par typologie générale ou sélection plus fine ;</li>
                <li>Résultats d’évaluation par bâtiment ;</li>
                <li>Données élémentaires par bâtiment : mesures, observations et enquêtes.</li>
            </ul>
        </div>
        <img src="STATIC_PATH/img/presentation-logo.svg" alt="">

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
                <span>Consommation totales en énergie primaire par m² <sub>SHON</sub> et par an</span>
            </div>
            <ul>
                <li>
                    <a href="https://www.cerema.fr/fr/centre-ressources/boutique/batiments-demonstrateurs-basse-consommation-energie-prebat-3" target= »firstwindow>
                        <i class="micon">exit_to_app</i>
                        <span>Rapport de capitalisation</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.cerema.fr/fr/centre-ressources/boutique/batiments-demonstrateurs-basse-consommation-energie-prebat-2" target= »secondwindow>
                        <i class="micon">exit_to_app</i>
                        <span>Synthèse</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.cerema.fr/fr/centre-ressources/boutique/enseignements-batiments-performants-energie" target= »thirdwindow>
                        <i class="micon">exit_to_app</i>
                        <span>Agir en conséquence</span>
                    </a>
                </li>
               
            </ul>
            <h3 style:margin-top="40px"><span>2.</span>Résultats</h3>
            <ul>
                <li>
                    <a href="BASE_URL/resultats">
                        <i class="micon">exit_to_app</i>
                        <span>Synthèse graphique des résultats</span>
                    </a>
                </li>
                <li>
                    <button class="btn" type="button" on:click={download}>
                        <i class="micon">file_download</i>
                        <span>Résultats d’évaluation de la campagne PREBAT : Télécharger les données pour toutes les opérations</span>
                        <span>Résultats d’évaluation de la campagne PREBAT : Télécharger les données pour toutes les opérations</span>
                    </button>
                </li>
            </ul>
            <h3 style:margin-top="40px"><span>3.</span>Données par opération</h3>
            <ul>

                <li>
                    <a href="{getPath('/mesures')}">
                        <i class="micon">file_download</i>
                        <span>MESURES : Sélectionner et télécharger les données par opération</span>
                    </a>
                </li>
            </ul>

           

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
        background-color: var(--background-lighten);
        margin-bottom: 40px;
        display: flex;
        font-size: 1.3em;
        justify-content: space-between;

    }
    .presentation div {
        padding: 40px;
        font-weight: 800;
        line-height: normal;
        display: flex;
        flex-direction: column;
        gap: .8em;
        max-width: 1000px;


    }
    .presentation  span{
        color: #424242;   
        font-size: 2.8em;
        font-weight: 800;
    }
    .presentation img{
        width: 100%;
        height: auto;
        max-height: 550px;
    }
    .presentation ul{
        list-style-type: "+ ";
        margin-left: 1em;
    }
    .presentation ul li{
        margin: .8em 0;
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
    div.h3 {
        margin-left: 24px;
    }
    div.h3 li{
        margin: 12px 0 12px 24px;
        padding: 2px 8px 2px 4px;
        background: #f5f5f5;
        border: 1px solid #eee;
        transition: background, 0.2s;
        border-radius: 2px;
        text-transform: none;
        letter-spacing: 0;
        font-size: 16px;
        width: fit-content;
    }
    div.h3 li span{
        letter-spacing: 0;
        text-transform: none;
        color: black;
        font-size: 16px;
    }
    div.h3 li button, div.h3 li a {
        display: flex;
        align-items: start;
        background: none;
        border: none;
        padding: 0;
        margin: 0;
    }
    div.h3 li button:hover {
        background: none;
    }

    div.h3 li:hover {
        background: var(--primary-lighten-1);
        border: 1px solid var(--primary-lighten-2);
    }
    div.h3 li:hover span {
        text-decoration: underline;
    }
    div.h3 li:hover span {
        text-decoration: underline;
    }
    div.h3 li i {
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

    @media ( max-width: 1280px ) {
        .presentation {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .content {
            padding: 0 1em;
        }
        div.h3 li {
            margin: 12px 0 12px 12px;
            padding: 2px 8px 2px 0;
        }
        div.h3 li span{
            text-overflow: ellipsis;
            white-space: wrap;
            text-align: st;
            max-width: 30em;
        }
    }
</style>