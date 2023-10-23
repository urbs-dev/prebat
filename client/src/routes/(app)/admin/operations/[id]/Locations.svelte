<script>
    import Anchor from './Anchor.svelte'
    import { locations as icon } from '$lib/svg'
    import { slide } from 'svelte/transition'
    import Report from './Locations_Report.svelte'
    export let operation
    export let locations
    let active = false
    console.log(locations)
</script>

{#each locations as location}
    {@const { id, name, path, measures, nature } = location }
    <Anchor {id}>
        <section>
            <h3 class="alt-font flex">
                <i class="icon">{@html icon[nature]}</i>
                {name === operation.name ? 'Tout' : name}
            </h3>
            <span>{path ?? ''}</span>
            {#if path && location.name !== 'batiment'}
                <Report {location} {operation}/>
            {/if}
            {#if measures.length > 0}

            <h4 class="flex">
                Points de mesure
            </h4>

            <button class="btn measure" on:click={() => active = !active}>
                Points de mesure ({measures.length})
                <i class="micon">
                    {active ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                </i>
            </button>
                {#if active}
                    <table transition:slide={{ duration: 200 }}>
                        <thead>
                            <tr>
                                <th>Type de données</th>
                                <th>Capteur</th>
                                <th>Point de mesure</th>
                                <th>Unité</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each measures as measure}
                                <tr>
                                    <td style:color="var(--primary-darken)">{measure.typology}</td>
                                    <td>{measure.sensor}</td>
                                    <td>{measure.statement}</td>
                                    <td>{measure.unit}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                {/if}
            {/if}
            {#if location.locations}
                <svelte:self locations={location.locations} operation={location}/>
            {/if}
        </section>
    </Anchor>
{/each}

<style>
    section {
        margin-left: 16px;
    }
    h3 {
        color: var(--primary-darken);
        font-size: 24px;
        margin: 0;
        border-bottom: 1px dotted var(--primary-lighten);
        padding-bottom: 8px;
    }
    h3 i {
        color: var(--primary);
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    h4 {
        font-size: 20px;
        margin: 24px 0 16px 0;
        color: var(--secondary);
    }
    span {
        font-family: JetBrains;
        color: var(--ternary);
        font-size: 12px;
    }
    button.measure {
        background: #fafafa;
        width: 100%;
        justify-content: space-between;
        margin: 8px 0;
        border: 1px solid #e0e0e0;
    }
    table {
        padding: 0 8px;
    }
    td, th {
        padding: 4px 8px;
    }
    thead th {
        border-bottom: 1px solid #e0e0e0;
        background: #fafafa;
    }
    tbody tr {
        transition: background, 0.2s;
    }
    tbody tr:hover {
        background: #fafafa;
    }
    tbody td {
        border-bottom: 1px solid #eee;
    }

</style>