<script>
    import Operation from './Operation.svelte'
    import Sites from './Sites.svelte'
    import { Tooltip } from 'gros/tooltip'
    import { modal } from 'gros/modal'
    import UpdateModal from './Modal_Operation_Update.svelte'
    import DeleteModal from './Modal_Operation_Delete.svelte'
    export let data
    let operation
    $: data, operation = data.operation
</script>

<section>
    <h1 class="alt-font flex">
        <div class="flex baseline">
            {operation.name}
            <span>
                {operation.delivered_on ? operation.delivered_on + ',' : ''}
                {operation.program ?? ''}
            </span>
        </div>
        <div class="flex">
            <button class="tooltip" on:click={() => modal.open(UpdateModal, operation)}>
                <Tooltip bottom content="Éditer"/>
                <i class="micon">edit</i>
            </button>
            <button class="tooltip" on:click={() => modal.open(DeleteModal, operation)}>
                <Tooltip bottom content="Supprimer"/>
                <i class="micon delete">clear</i>
            </button>
        </div>
    </h1>
    <Operation {operation}/>


    <h2 class="alt-font flex">
        Sites
        <div class="flex">
            <button class="tooltip" on:click={() => modal.open(UpdateModal, operation)}>
                <Tooltip bottom content="Éditer"/>
                <i class="micon">edit</i>
            </button>
        </div>
    </h2>
    <Sites {operation}/>
</section>


<style>
    section {
        padding: 40px 0;
        max-width: 880px;
    }
    h1, h2 {
        color: var(--secondary-darken);
        font-size: 32px;
        border-bottom: 1px dotted var(--secondary-lighten);
        padding: 0 8px 8px 8px;
        justify-content: space-between;
    }
    div.baseline {
        align-items: baseline;
    }
    h1 span {
        margin-left: 24px;
        font-size: 14px;
        font-family: JetBrains;
        color: #424242;
    }
    h2 {
        font-size: 24px;
        margin-top: 24px;
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