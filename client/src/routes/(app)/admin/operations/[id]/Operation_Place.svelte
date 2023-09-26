<script>
    export let operation
    let place = operation?.report?.place
    $: operation, place = operation?.report?.place
</script>

{#if place}
    <aside class="flex">
        <i class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"></path></svg>
        </i>
        <div>
            {place.name}
            <br>
            <span>{place.context}</span>
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

    span {
        font-size: 14px;
        color: #9e9e9e;
        font-family: 'Lato';
    }
</style>