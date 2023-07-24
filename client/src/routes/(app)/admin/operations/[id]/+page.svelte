<script>
    import { Tooltip } from 'gros/tooltip'
    export let data
    let operation
    $: data, operation = data.operation
</script>

<section>
    <h1 class="alt-font flex">
        {operation.name}
        <div class="flex">
            <button class="tooltip">
                <Tooltip bottom content="Éditer"/>
                <i class="micon">edit</i>
            </button>
            <button class="tooltip">
                <Tooltip bottom content="Supprimer"/>
                <i class="micon delete">clear</i>
            </button>
        </div>
    </h1>

</section>


<style>
    section {
        padding: 40px 0;
    }
    h1 {
        color: var(--secondary);
        font-size: 32px;
        border-bottom: 1px dotted var(--secondary-lighten);
        padding: 0 8px 8px 8px;
        justify-content: space-between;
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