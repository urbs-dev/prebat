<script>
    import Operation from './Operation.svelte'
    import { Tooltip } from 'gros/tooltip'
    import { modal } from 'gros/modal'
    import DeleteModal from './Modal_Operation_Delete.svelte'
    // import Locations from './Locations.svelte'
    export let data
    let operation
    $: data, operation = data.operation
</script>

<section>
    <h1 class="alt-font flex">
        <div class="flex baseline">
            {operation.name}
        </div>
        <div class="flex">

            <button class="tooltip" on:click={() => modal.open(DeleteModal, operation)}>
                <Tooltip bottom content="Supprimer"/>
                <i class="micon delete">clear</i>
            </button>
        </div>
    </h1>
    <Operation {operation}/>

    <!-- <Locations locations={operation.locations} {operation}/> -->
</section>


<style>
    section {
        padding: 40px 0;
        max-width: 880px;
    }
    h1 {
        color: var(--secondary-darken);
        font-size: 32px;
        border-bottom: 1px dotted var(--secondary-lighten);
        padding: 0 8px 8px 8px;
        justify-content: space-between;
    }
    div.baseline {
        align-items: baseline;
    }
    button {
        width: 32px;
        background: #f5f5f5;
        height: 32px;
        border-radius: 50%;
        color: var(--primary);
        margin: 0 8px;
    }
    button i {
        font-size: 20px;
    }
    button:hover {
        background: #e0e0e0;
    }
</style>