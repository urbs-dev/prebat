<script>
    import { AccountButton, AccountButtonLink as Link, Account, user, status } from '$module/session'
    import Tools from './Header_Tools.svelte'
    import { getPath, url } from 'gros/page'
    import Menu from './Header_Menu.svelte'
</script>

<header class="z-depth-2 flex">
    <article class="flex">
        {#if $status.isAuthenticated && ($user.roles.GLOBAL_ADMIN || $user.roles.USER_ADMIN)}
        <a href="{getPath('/admin')}"><i class="micon app">menu</i></a>
        {/if}
        <a href="{ getPath('/')}">
            <div style:margin-left={$url.includes('admin') ? '256px' : '80px'} class="logo flex">
                <img alt="logo" src="STATIC_PATH/img/logo.svg"/>
                <span class="alt-font">PREBAT</span>
            </div>
        </a>
        <Menu/>
    </article>

    <aside>
        {#if $status.isAuthenticated}
        <AccountButton height={"56px"}>
            <Link isExternal={true} role="USER_ADMIN" href="BASE_URL/prebat.api/swagger/" name="API doc" icon="code"/>
        </AccountButton>
        <Tools/>
        {:else}
            <a href="{getPath('/auth')}" class="btn">
                Connexion
            </a>
        {/if}
    </aside>
</header>

<Account top={"56px"}/>

<style>
    header{
        position:absolute;
        justify-content: space-between;
        top:0;
        left:0;
        right:0;
        height:56px;
        z-index:800;
        background-color:#fff;
        border-bottom: 1px solid #eee;
        transition:all,0.2s;
        -webkit-box-shadow: 0 4px 5px 0 rgba(224,224,224, 0.14), 0 1px 10px 0 rgba(224,224,224, 0.12), 0 2px 4px -1px rgba(224,224,224, 0.3);box-shadow: 0 4px 5px 0 rgba(224,224,224, 0.14), 0 1px 10px 0 rgba(224,224,224, 0.12), 0 2px 4px -1px rgba(224,224,224, 0.3);
    }
    header aside{
        display:flex;
        justify-content:flex-end;
        flex-direction:row;
    }
    header div.logo{
        height:56px;
        width:156px;
        justify-content: center;
        transition: left, 0.2s;
    }
    header div.logo img{
        width: 40px;
        height: 40px;
    }
    header div.logo span{
        font-weight: normal;
        font-family: 'Roboto';
        color:var(--primary);
        font-size:24px;
        margin-left: 8px;
    }

    i.app{
        position:absolute;
        top:8px;
        left:32px;
        width:40px;
        height:40px;
        border-radius:50%;
        color:#757575;
        transition:all,0.2s;
        text-align:center;
        line-height:40px;
        font-size:26px;
    }
    i.app:hover{
        background:#eee;
    }
    a.btn{
        color: var(--primary);
    }
</style>