<script>
    export let operation
    let certs = operation?.label?.split(', ')
    $: operation, certs = operation?.label?.split(', ')
</script>

{#if certs}
<aside class="flex">
    <i class="icon">
        <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M6.05 8.05a7.001 7.001 0 0 0-.02 9.88c1.47-3.4 4.09-6.24 7.36-7.93A15.952 15.952 0 0 0 8 19.32c2.6 1.23 5.8.78 7.95-1.37C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05z"></path><svg/>
    </i>
    <div class="flex">
        {#each certs as cert}
            <span>{cert}</span>
        {/each}
    </div>
</aside>
{/if}

<style>

    aside {
        font-size: 16px;
        color: #424242;
        padding: 0px 16px 8px 0;
        line-height: 18px;
    }
    span {
        margin:2px 2px;
        padding: 2px 8px;
        background: #e8f5e9;
        color: #2e7d32;
        font-size: 13px;
        border-radius: 4px;
        border: 1px solid #a5d6a7;
        white-space:nowrap;
    }
    div.flex {
        flex-wrap: wrap;
    }
</style>