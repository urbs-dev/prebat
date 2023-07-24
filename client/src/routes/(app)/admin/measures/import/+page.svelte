<script>
    import { page, content } from './store'
    import { fade } from 'svelte/transition'
    import Eval from './Eval.svelte'
    import Error from './Error.svelte'
    import Result from './Result.svelte'
</script>


<section transition:fade={{ duration: 200 }} class="thin-scrollbar">
    {#if $page}

        {#if $page === 'eval'}
            <Eval content={$content}/>
        {:else if $page === 'result'}
            <Result content={$content}/>
        {:else if $page === 'error'}
            <Error content={$content}/>
        {/if}

    {:else}
        <h1 class="alt-font">Chargez un fichier de mesure</h1>
    {/if}
</section>

<style>
    section {
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 360px;
        overflow-y: auto;
        padding-bottom: 400px;
        scrollbar-width: thin;
    }
    h1 {
        color: var(--secondary-lighten);
        margin: 32vh 40px;
        text-align:center;
        font-size: 24px;
    }
</style>