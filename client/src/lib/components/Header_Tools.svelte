<script>
    import { Dropdown } from 'gros/dropdown'
    import { modal } from 'gros/modal'
    import { Modal } from '$module/issue'
</script>

<Dropdown fixedWidth position="bottom-start">
    <button class="btn">
        <i class="micon">settings</i>
    </button>

    <ul slot="content" class="z-depth-1">

        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:keypress on:click={() => modal.open(Modal, { application: 'prebat'})}>
            <i class="micon">bug_report</i>
            Signaler un bug...
        </li>

        <li class="divider"></li>
        <a href="/resources" rel="external">
            <li>
                <i class="micon">apps</i>
                Retour à l'accueil
            </li>
        </a>
    </ul>

</Dropdown>



<style>
    button{
        height:56px;
        width:56px;
        color: var(--secondary);
        border-left: 1px solid #eee;
    }
    button i {
        font-size: 20px;
    }
    button:hover{
        background-color:#f5f5f5;
    }
    ul{
        min-width:288px;
        background: #fff;
        border: 1px solid #eee;
    }
    ul li i{
        font-size:20px;
        color:#616161;
        margin:0 12px;
    }
    ul li:not(.divider){
        display: flex; justify-content: flex-start; align-items: center;
        min-height:32px;
        font-size:13px;
        color:#424242;
        text-align:left;
        vertical-align:middle;
        transition: background,.2s;
        cursor:pointer;
    }
    ul li:not(.divider):hover{
        background: #eee;
    }
    ul li.divider{
        border-top:1px solid #eee;
    }
</style>