<script>
    import { user, manager }    from '$module/session'
    import { Dropdown } from 'gros/dropdown'
    export let height
</script>

<Dropdown>
    <button class="account" style:height={height} on:click={() => manager.set(false)}>
        <span>
            <b>{$user.firstname}</b>&nbsp;<b>{$user.name}</b>
        </span>
        <i class="micon">arrow_drop_down</i>
    </button>

    <aside slot="content" class="z-depth-1">
        <button on:click={() => manager.set(true)}>
            <i class="micon">person</i>
            <span>Mon compte</span>
        </button>
        <slot/>
        <button on:click={() => user.logout()}>
            <i class="micon">exit_to_app</i>
            <span>Déconnexion</span>
        </button>
    </aside>
</Dropdown>


<style>
    button.account{display:flex;justify-content:space-between;align-items:center;font-weight:bold;color:#424242;padding:0 16px;min-width:168px;max-width:240px;font-size:13px;background:#fafafa;}
    button.account span{display:flex;line-height:16px;flex-wrap:wrap;}
    button.account span b{display:block;max-width:200px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
    button.account:hover{background:#f5f5f5;}
    button.account i{font-size:20px;padding:0;margin:0;}
    button.account:active{background-color:#eeeeee;}


    aside{font-family:'Roboto';background:#fff;padding:4px;border:1px solid #eee;border-radius:0 0 4px 4px;}
    aside button, aside :global(a){
        display:flex;justify-content:flex-start;align-items:center;width:100%;height:100%;border-radius:2px;
    }
    aside button, aside :global(a){min-height:32px;cursor:pointer;transition:all,.02s;font-size:14px;}
    aside button:hover, aside :global(a:hover){background:#eee;}
    aside :global(i){font-size:20px;padding:0 8px;color:#616161;}

</style>