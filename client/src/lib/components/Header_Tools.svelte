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
        <a href="https://github.com/urbs-dev/prebat" rel="external">
            <li>
                <svg width="100%" height="100%" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27c-.68 0-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                Github
            </li>
        </a>


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
        color: var(--primary);
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
    svg {
        height: 18px;
        color:#616161;
        width: 18px;
        margin: 0 12px;
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