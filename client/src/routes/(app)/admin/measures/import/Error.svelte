<script>
    export let content
</script>

<pre>
{JSON.stringify(content, null, 4)}
</pre>


<style>
    pre {
        margin: 40px;
        background: #fafafa;
        color: var(--primary-darken);
        padding: 24px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        font-family: JetBrains;
    }
</style>