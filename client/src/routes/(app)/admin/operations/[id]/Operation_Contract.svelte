

<script>
    export let operation
    let { contract_type } = operation
    $: operation, { contract_type } = operation
</script>

{#if contract_type}
    <aside class="flex">
        <i class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6q-.425 0-.713-.288T2 5V2q0-.425.288-.713T3 1h3q.425 0 .713.288T7 2q0 .425-.288.713T6 3H4v2q0 .425-.288.713T3 6Zm18 0q-.425 0-.713-.288T20 5V3h-2q-.425 0-.713-.288T17 2q0-.425.288-.713T18 1h3q.425 0 .713.288T22 2v3q0 .425-.288.713T21 6ZM3 23q-.425 0-.713-.288T2 22v-3q0-.425.288-.713T3 18q.425 0 .713.288T4 19v2h2q.425 0 .713.288T7 22q0 .425-.288.713T6 23H3Zm15 0q-.425 0-.713-.288T17 22q0-.425.288-.713T18 21h2v-2q0-.425.288-.713T21 18q.425 0 .713.288T22 19v3q0 .425-.288.713T21 23h-3ZM7 20q-.825 0-1.413-.588T5 18V6q0-.825.588-1.413T7 4h10q.825 0 1.413.588T19 6v12q0 .825-.588 1.413T17 20H7Zm3-10h4q.425 0 .713-.288T15 9q0-.425-.288-.713T14 8h-4q-.425 0-.713.288T9 9q0 .425.288.713T10 10Zm0 3h4q.425 0 .713-.288T15 12q0-.425-.288-.713T14 11h-4q-.425 0-.713.288T9 12q0 .425.288.713T10 13Zm0 3h4q.425 0 .713-.288T15 15q0-.425-.288-.713T14 14h-4q-.425 0-.713.288T9 15q0 .425.288.713T10 16Z"></path></svg>
        </i>
        <div>
            <span>Maîtrise d'ouvrage :</span>
            <br>
            {contract_type}
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
        font-family: Lato;
    }
</style>