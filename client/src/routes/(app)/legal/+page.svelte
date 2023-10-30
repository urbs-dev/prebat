<script>
    import Footer from '$lib/components/Footer.svelte'
</script>

<section>
    <h1 class="alt-font">Mentions légales</h1>
    <h2 style:margin-top="64px">Utilisation du site</h2>
    <p>L'accès au site peut être interrompu à tout moment, sans préavis, notamment en cas de force majeure, de maintenance ou si le Cerema décide de suspendre ou d'arrêter la fourniture de ce service.</p>

    <h2>Contenu du site</h2>
    <p>Le Cerema s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées, au moment de leur mise en ligne sur le site. Cependant le Cerema ne garantit en aucune façon l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le site. Les informations présentes sur le site sont non-contractuelles et peuvent être modifiées à tout moment.</p>

    <p>Le site est régi par la loi française. Les utilisateurs étrangers acceptent formellement l'application de la loi française en visitant ce site et en utilisant tout ou partie des fonctionnalités du site. La responsabilité du Cerema ne pourra en aucun cas être engagée quant au contenu et aux informations figurant sur son site web, ou aux conséquences pouvant résulter de leur utilisation ou interprétation.</p>

    <h2>Propriété intellectuelle</h2>
    <p>Les contenus, les textes, y compris les communiqués de presse, les vidéos, les images, les photos et les animations qui apparaissent ou sont disponibles sur le site, sont protégés par le droit de la propriété intellectuelle et sont la propriété du Cerema et du ministère de l'Écologie et du développement durable. Ils sont sous Licence Ouverte.</p>

    <p>A ce titre, vous vous engagez à ne pas copier, traduire, reproduire, commercialiser, publier, exploiter et diffuser partiellement ou intégralement des contenus du site protégés par le droit de la propriété intellectuelle, sans mention du producteur de ce site, à savoir le Cerema et sans mention des sources des données utilisées.</p>

    <p>Les marques et les logos présents sur le site sont, sauf cas particulier, la propriété du Cerema.</p>

    <p>La violation de l'un de ces droits de propriété intellectuelle est un délit de contrefaçon passible de deux ans d'emprisonnement et de 150&nbsp;000 euros d'amende.</p>

    <h2>Vie privée</h2>
    <p>Le Cerema s'engage à ne pas divulguer à des tiers les informations que l'internaute lui communique. Celles-ci sont confidentielles et ne seront utilisées que pour les besoins du service. Le site répond à la réglementation relative à l'informatique, aux fichiers et aux libertés telle que définie par la loi n°78-17 du 6 janvier 1978 modifiée.</p>

    <h2>Liens</h2>
    <p>Le site peut contenir des liens vers des sites de partenaires ou de tiers. Le Cerema, ne disposant d'aucun moyen pour contrôler ces sites, n'offre aucune garantie quant au respect par ces sites des lois et règlement en vigueur.</p>

    <p>Le site du Cerema autorise la mise en place d'un lien hypertexte pointant vers son contenu sous réserve de&nbsp;:</p>

    <ul>
        <li>ne pas utiliser la technique du « lien profond »&nbsp;: les pages Cerema ne doivent pas être imbriquées à l'intérieur des pages d'un autre site, mais accessibles par l'ouverture d'une fenêtre séparée,</li>
        <li>d'indiquer impérativement dans le lien la source Cerema,</li>
        <li>n'utiliser les informations du site Cerema qu'à des fins personnelles, professionnelles ou associatives à l'exclusion de toute utilisation à des fins commerciales ou publicitaires.</li>
    </ul>

    <p>Cette autorisation ne s'applique que pour les sites dont le contenu n'est contraire ni à la loi ni aux bonnes mœurs, et dans la mesure où ces liens ne contreviennent pas aux intérêts du Cerema et garantissent pour l'utilisateur la possibilité d'identifier l'origine et l'auteur du document.</p>

    <h2>Modification</h2>
    <p>Le Cerema se réserve le droit de modifier, sans préavis, les présentes conditions générales d'utilisation du site. Pour toute remarque sur le présent site, vous pouvez nous écrire en recourant au formulaire de contact.</p>

    <h2>Droit applicable</h2>
    <p>Le présent site est soumis au droit français.</p>

    <h2>Hébergement</h2>
    <p>Ce site est hébergé sur une plateforme administrée par le Cerema</p>

    <h2>Conception</h2>
    <p>Ce site a été conçu et développé par <a href="https://www.urbs.fr/" rel="external">U.R.B.S</a> sur la base des préconisations du Cerema.</p>

</section>

<Footer/>

<style>
    section {
        max-width: 800px;
        margin: 120px auto;
    }
    h1 {
        display: inline;
        color: var(--primary-darken);
        background: linear-gradient(180deg,rgba(255,255,255,0) 75%, var(--primary-lighten-1) 15%);
        font-size: 36px;
    }
    h2 {
        color: var(--primary-lighten);
        font-size: 24px;
        font-family: Lato;
        margin-top: 32px;
    }
    ul {
        list-style-type: disc;
        margin-left: 24px;
    }
    p, ul {
        font-size: 16px;
    }
    a {
        color: var(--ternary);
        text-decoration: underline;
    }
</style>