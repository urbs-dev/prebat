<script>
    import { modal } from 'gros/modal'
    import Generalities from './Modal_Location_Report_Generalities.svelte'
    import System from './Modal_Location_Report_System.svelte'
    export let location
    export let operation
    let report = location.report ?? { name: operation.name, path: location.path }
    $: location, report = location.report ?? { name: operation.name, path: location.path }
</script>

<article>
    <h4 class="flex">
        Généralités
        <button class="btn" on:click={() => modal.open(Generalities, report)}>éditer</button>
    </h4>
    <ul>
        <li class="required" class:warning={!report.use}>
            <i>Destination d'usage <em>*</em></i>
            <b>{report.use ? report.use.replace(/ ~ /g, ', ') : ''}</b>
        </li>
        <li class="required">
            <i>Destination d'usage simplifée</i>
            <b>{report.use_typology ? report.use_typology.replace(/ ~ /g, ', ') : ''}</b>
        </li>
        <li class="required" class:warning={!report.shon}>
            <i>SHON <em>*</em></i>
            <b>{report.shon ? report.shon + ' m²' : ''}</b>
        </li>
        <li>
            <i>SU</i>
            <b>{report.su ? report.su + ' m²' : ''}</b>
        </li>
        <li>
            <i>SHAB</i>
            <b>{report.shab ? report.shab + ' m²' : ''}</b>
        </li>
        {#if location.nature === 'building'}
        <li>
            <i>Hauteur du bâtiment</i>
            <b>{report.height ? report.height + ' m' : ''}</b>
        </li>
        {/if}
    </ul>


    <h4 class="flex">
        Système
        <button class="btn" on:click={() => modal.open(System, report)}>éditer</button>
    </h4>
    <ul>
        <li class="required" class:warning={!report.constructive_system}>
            <i>Système constructif <em>*</em> </i>
            <b>{ report.constructive_system ? report.constructive_system.replace(/ ~ /g, ', ') : ''}</b>
        </li>
    <ul>
        <li class="required" class:warning={!report.heating}>
            <i>Chauffage de base <em>*</em></i>
            <b>{report.heating ? report.heating.replace(/ ~ /g, ', ') : ''}</b>
        </li>
        <li class="required" class:warning={!report.hot_water}>
            <i>Eau chaude sanitaire <em>*</em></i>
            <b>{report.hot_water ? report.hot_water.replace(/ ~ /g, ', ') : ''}</b>
        </li>
        <li class="required" class:warning={!report.airing}>
            <i>Ventilation <em>*</em></i>
            <b>{report.airing ? report.airing.replace(/ ~ /g, ', ') : ''}</b>
        </li>
        <li>
            <i>Pérméabilité à l'air de l'enveloppe</i>
            <b>{report.air_permeability ? report.air_permeability + ' m³/(h.m²)' : ''}</b>
        </li>
    </ul>
</article>

<style>
    article {
        padding: 0;
    }
    h4 {
        font-size: 20px;
        margin: 24px 0 16px 0;
        color: var(--secondary);
    }
    em {
        font-weight: bold;
        color: var(--secondary);
        font-style: normal;
    }
    button {
        color: var(--primary-darken);
        background: var(--primary-lighten-1);
        border: 1px solid #e0e0e0;
        margin: 4px 0 4px 24px;
    }
    ul {
        max-width: 540px;
        border-radius: 4px;

    }
    li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid #eee;
        padding: 4px 8px;
        transition: background, 0.2s;
        font-size: 12px;
    }
    li:hover {
        background: #f5f5f5;
    }
    li i {
        min-width: 224px;
        font-style:normal;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-weight: normal;
        color: #616161;
        /* text-align: right;
        padding-right: 16px; */
    }
    li b {
        font-weight: normal;
        color: var(--primary-darken);
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    li.warning {
        background: #ffebee;
        border-bottom: 1px solid #ffcdd2;
    }
    li.warning i {
        color: #e57373;
        font-style: oblique;
    }
</style>