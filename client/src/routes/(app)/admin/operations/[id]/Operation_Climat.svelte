

<script>
    export let report = {}
    let { climatic_zone } = report
    $: report, { climatic_zone } = report
</script>

{#if climatic_zone}
<aside class="flex">
    <i class="icon">
        <svg width="100%" height="100%" viewBox="0 0 20 20"><path fill="currentColor" d="M9 11.17V7h2v4.17a3 3 0 1 1-2 0zm-1-.63a4 4 0 1 0 4 0V4a2 2 0 1 0-4 0v6.53zM6 9.53V4a4 4 0 0 1 8 0v5.53A5.99 5.99 0 0 1 10 20A6 6 0 0 1 6 9.53z"></path></svg>
    </i>
    <div class="alt-font">
        {climatic_zone}
    </div>
</aside>
{/if}

<style>
    div{
        display: inline-block;
    }
    aside {
        font-size: 16px;
        color: #424242;
        padding: 0px 16px 8px 0;
        line-height: 18px;
    }

    div {
        font-size: 24px;
    }
</style>