<script>
    import { url, getPath } from 'gros/page'  
    import { fly, slide } from 'svelte/transition'


    const nav = [ 
        {
            name: 'ADMIN',
            icon: 'settings_applications',
            active: false,
            routes: [
                { name: 'Users', icon: 'account_circle', location: `/admin/users`, routes: null },
                { name: 'Groups', icon: 'groups', location: `/admin/groups`, routes: null
                    // [
                    //     { name: 'Licenses', icon: 'assignment', location: `/admin/groups~licenses` },
                    //     { name: 'Territories', icon: 'map', location: `/admin/groups~territories` },
                    // ]
                },
                { name: 'Licenses', icon: 'assignment_turned_in', location: `/admin/licenses`, routes: null },
                { name: 'Packs', icon: 'storage', location: `/admin/packs`, routes: null },
            ]
        }, 
    ]
</script>

<section class="z-depth-2" transition:fly={{ x:-300, duration: 200}}>
    <a href="{getPath('/')}" rel="external"><i class="micon app">clear</i></a>

    <header>

    </header>
    <ul class="nav">
    {#each nav as item}
        <li class="item">
            <i class="micon">{item.icon}</i>{item.name}
        </li>
        <ul class="routes" transition:slide={{ duration:200 }}>
            {#each item.routes as route}
                <a href="{getPath(route.location)}">
                 <li
                    class="route waves-effect" 
                    class:active="{$url.includes(route.location) && !$url.includes('~')}"
                >
                    <i class="micon">{route.icon}</i>
                    {route.name}
                 </li>
                </a>
                {#if route.routes}
                <ul class="subroutes">
                    {#each route.routes as subroute}
                        <a href="{getPath(subroute.location)}">
                            <li 
                                class="subroute waves-effect" 
                                class:active="{$url.includes(subroute.location)}"
                            >
                            <i class="micon">{subroute.icon}</i>
                            {subroute.name}
                            </li>
                       </a>
                    {/each}
                </ul>
                {/if}
            {/each}
        </ul>
    {/each}
    </ul>
</section>

<style>
    section{
        position:fixed;
        z-index:901;
        top:0;
        left:0;
        bottom:0;
        width:240px;
        background-color:#fafafa;
        border-right:1px solid #eee;
    }
    header{
        background:transparent;
        padding:0 16px;
        margin:40px 0;
    }

    ul{
        margin:0;
        padding:0;
        color:#424242;
    }
    ul.nav{padding:0; margin:0 0 0 16px;}
    li{
        margin:0;
        width:100%;
        display:flex;justify-content:flex-start;align-items:center;
    }
    li.item{
        height:32px;
        line-height:32px;
        font-family:'Lato';
        font-size:18px;
        text-transform:uppercase;
        color:#00796b;
        font-weight:400;
        margin-left:8px;
        user-select: none;
        cursor:default;
    }
    li.item i{
        line-height:32px;
        width:32px;
        font-size:28px;
        margin:0 4px;
        padding:0;
    }
    li.route{
        padding-left:8px;
        height:32px;
        line-height:32px;
        background-color:transparent;
        font-size:13px;
        transition:all,0.4s;
        width:200px;
        border-radius:4px 2px 2px 4px;
        color:#616161;margin-left:16px;
    }
    li.route i{
        font-size:22px;
        width:20px;
        color:#616161;
        line-height:32px;
        margin-right:8px;
    }
    li.route:not(.active):hover{
        background-color:#eee;
    }
    li.route.active{
        background:#e0e0e0;
        border-right:4px solid #0288d1;
        width:200px;color:#424242;
    }
    li.route.active i{
        color:#0288d1;
    }
    ul.routes{
        margin-bottom:16px;
        background-color:transparent
    }
    ul a{
        color:#616161;
    }
    ul.routes{
        margin-bottom:16px;
        background-color:transparent
    }

    ul.subroutes{
        margin-bottom:16px;
        padding-left: 24px;
        background-color:transparent
    }
    li.subroute{
        padding-left:8px;
        height:24px;
        line-height:24px;
        background-color:transparent;
        font-size:12px;
        transition:all,0.4s;
        width:176px;
        border-radius:4px 2px 2px 4px;
        color:#616161;margin-left:16px;
    }
    li.subroute i{
        font-size:16px;
        width:20px;
        color:#616161;
        line-height:32px;
        margin-right:8px;
    }
    li.subroute:not(.active):hover{
        background-color:#eee;
    }
    li.subroute.active{
        background:#e0e0e0;
        border-right:4px solid #0288d1;
        width:176px;
        color:#424242;
    }
    li.subroute.active i{
        color:#0288d1;
    }
    i.app{
        position:absolute;
        top:8px;right:8px;
        width:32px;
        height:32px;
        border-radius:50%;
        color:#757575;
        transition:all,0.2s;
        text-align:center;
        line-height:32px;
    }
    i.app:hover{
        background:#eee;
    }
</style>