<script>
    import Anchor from './Anchor.svelte'
    import { locations as icon } from '$lib/svg'
    export let locations
</script>

{#each locations as location}
    {@const { id, name, path, measures, nature } = location }
    <Anchor {id}>
        <section>
            <h3 class="alt-font flex">
                <i class="icon">{@html icon[nature]}</i>
                {name}
            </h3>
            <span>{path ?? ''}</span>
            {#if measures}
                {#each measures as measure}
                <article>
                    <h4>
                        {measure.title}
                    </h4>
                    <ul>
                        <li>unité: <b>{measure.unit}</b></li>
                        <li>capteur: <b>{measure.sensor}</b></li>
                        <li>grandeur: <b>{measure.typology} / {measure.statement}</b></li>
                    </ul>
                </article>

                {/each}
            {/if}
            {#if location.locations}
                <svelte:self locations={location.locations}/>
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
    span {
        font-family: JetBrains;
        color: var(--ternary);
        font-size: 12px;
    }

    h4 {
        font-family: Lato;
        font-size: 16px;
        margin: 16px 0 8px 0;
        color: var(--primary-lighten);
    }
    li {
        color: #9e9e9e;
        font-size: 12px;
    }
    li b {
        font-weight: normal;
        font-family: JetBrains;
        color: #424242;
    }
</style>