<script>
    import { AccountButton, AccountButtonLink as Link, Account, user, status } from '$module/session'
    import Tools from './Header_Tools.svelte'
    import { getPath, url } from 'gros/page'
    import Menu from './Header_Menu.svelte'
    import MobilNav from './Mobil_Nav.svelte';

    $: innerWidth = 0

</script>
<svelte:window bind:innerWidth/>

<header class="z-depth-2 flex">
    <article class="flex">
        {#if $status.isAuthenticated && ($user.roles.GLOBAL_ADMIN || $user.roles.USER_ADMIN) && innerWidth > 900}
            <a href="{getPath('/admin')}"><i class="micon app">menu</i></a>
        {/if}
        <div class="flex actors">
            <img src="STATIC_PATH/img/logo-rf.svg" alt="logo République Française">
            <img src="STATIC_PATH/img/logo-cerema-vert.png" alt="logo CEREMA">
        </div>
        <div class="divider"></div>
        <a href="{ getPath('/accueil')}">
            <div class="logo flex">
                <!-- <img alt="logo" src="STATIC_PATH/img/logo.svg"/> -->
                <span class="alt-font">PREBAT</span>
                <b>Plateforme Data des performances réelles en bâtiment</b>
            </div>
        </a>
    </article>

    {#if innerWidth > 900}
        <aside class="flex">
            <Menu isAuthenticated={$status.isAuthenticated && ($user.roles.GLOBAL_ADMIN || $user.roles.USER_ADMIN)}/>
            {#if $status.isAuthenticated}
                <AccountButton height={"64px"}>
                    <Link isExternal={true} role="USER_ADMIN" href="BASE_URL/prebat.api/swagger/" name="API doc" icon="code"/>
                </AccountButton>
                <Tools/>
            {:else}
                <a href="{getPath('/auth')}" class="btn">
                    Connexion
                </a>
            {/if}
            <!-- <img src="STATIC_PATH/img/logo-ademe.svg" alt="logo ADEME"/> -->
        </aside>
    {:else}
        <MobilNav isAuthenticated={$status.isAuthenticated && ($user.roles.GLOBAL_ADMIN || $user.roles.USER_ADMIN)}/>
    {/if}
</header>

<Account top={"64px"}/>

<style>
    header{
        font-family: 'Marianne';
        position:absolute;
        justify-content: space-between;
        align-items: center;
        top:0;
        left:0;
        right:0;
        font-weight: 600;
        height: 150px;
        z-index:800;
        background-color:#fff;
        border-bottom: 1px solid #e0e0e0;
        justify-content: space-around;
        transition:all,0.2s;
        -webkit-box-shadow: 0 10px 9px rgba(0, 0, 0, 0.14);
        box-shadow: 0 10px 9px rgba(0, 0, 0, 0.14);
    }
    header aside{
        justify-content:flex-end;
    }
    header aside img {
        margin: 0;
        height: 100px;
        margin-right:8px;
    }
    header div.logo{
        height:56px;
        justify-content: center;
        align-items: flex-start;
        transition: left, 0.2s;
        padding-left: 24px;
        flex-direction: column;
        text-align: left;
    }
    header div.logo img{
        width: 40px;
        height: 40px;
    }
    header div.logo span{
        font-weight: 600;
        font-size: 24px;
        line-height: 22px;
    }

    header div.logo b{
        font-weight: normal;
        color: #616161;
        font-weight: normal;
        font-size:14px;
        line-height: 22px;
    }

    i.app{
        position:absolute;
        top:8px;
        left:24px;
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
        color: #fff;
        border-radius: 2em;
        padding: .8em;
        margin-right: 16px;
        background: var(--secondary);
        transition: background, 0.2s;
    }
    a.btn:hover{
        background: var(--secondary-darken);
    }
    div.actors {
        padding-right: 24px;
    }
    .actors img{
        width: 100%;
        min-width: 80px;
        max-height: 140px;
        margin-right: 8px;
    }
    /* @media(max-width: 768px){
        header div.logo{
            padding-left: 0;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    } */

    div.divider {
        height: 40px;
        border-right: 1px solid #9e9e9e;
    }
</style>