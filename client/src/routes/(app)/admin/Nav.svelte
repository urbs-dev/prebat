<script>
    import { url, getPath } from 'gros/page'  
    import { fly, slide } from 'svelte/transition'


    const nav = [ 
            { 
                name: 'Mesures', 
                icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M7.76 16.24C6.67 15.16 6 13.66 6 12s.67-3.16 1.76-4.24l1.42 1.42C8.45 9.9 8 10.9 8 12c0 1.1.45 2.1 1.17 2.83l-1.41 1.41zm8.48 0C17.33 15.16 18 13.66 18 12s-.67-3.16-1.76-4.24l-1.42 1.42C15.55 9.9 16 10.9 16 12c0 1.1-.45 2.1-1.17 2.83l1.41 1.41zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm8 2c0 2.21-.9 4.21-2.35 5.65l1.42 1.42C20.88 17.26 22 14.76 22 12s-1.12-5.26-2.93-7.07l-1.42 1.42A7.94 7.94 0 0 1 20 12zM6.35 6.35L4.93 4.93C3.12 6.74 2 9.24 2 12s1.12 5.26 2.93 7.07l1.42-1.42C4.9 16.21 4 14.21 4 12s.9-4.21 2.35-5.65z"></path></svg>`, 
                routes: [
                    {
                        name: 'import',
                        location: `/admin/measures/import`, 
                        icon: 'file_upload'

                    }
                ]
            },
            { 
                name: 'Opérations', 
                icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M22 8H7.85q-1.55 0-2.7.975T4 11.45V18l1.975-6.575q.2-.65.738-1.038T7.9 10h12.9q1.025 0 1.613.813t.312 1.762l-1.8 6q-.2.65-.738 1.038T19 20H4q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h5.175q.4 0 .763.15t.637.425L12 6h8q.825 0 1.413.588T22 8Z"></path></svg>`, 
                location: `/admin/operations`, 
                routes: [
                    {
                        name: 'Liste',
                        location: `/admin/operations`, 
                        icon: 'format_list_bulleted' 
                    }
                ] 
            },
    ]
</script>

<section class="z-depth-2" transition:fly|global={{ x:-300, duration: 200}}>
    <a href="{getPath('/')}"><i class="micon app">clear</i></a>
    <header>

    </header>
    <ul class="nav">
    {#each nav as item}
        <li class="item flex">
            <i class="icon">{@html item.icon}</i>
            {item.name}
        </li>
        <ul class="routes" transition:slide={{ duration:200 }}>
            {#each item.routes as route}
                <a href="{getPath(route.location)}">
                 <li
                    class="route flex" 
                    class:active="{$url.includes(route.location)}"
                >
                    <i class="micon">{route.icon}</i>
                    {route.name}
                 </li>
                </a>
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
        background-color:#212121;
        border-right:1px solid #616161;
    }
    header{
        background:transparent;
        padding:0 16px;
        margin:40px 0;
        height: 80px;
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
    }
    li.item{
        height:32px;
        font-family:'Lato';
        font-size:18px;
        text-transform:uppercase;
        color:var(--secondary-lighten);
        font-weight:400;
        margin-left:8px;
        user-select: none;
        cursor:default;
    }
    li.item i.icon{
        width:24px;
        height: 24px;
        margin:0 8px;
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
        color:#eee;
        margin-left:16px;
    }
    li.route i{
        font-size:22px;
        width:20px;
        color:#eee;
        line-height:32px;
        margin-right:8px;
    }
    li.route:not(.active):hover{
        background-color:#424242;
    }
    li.route.active{
        background:#000;
        border-right:4px solid var(--primary);
        width:200px;color:var(--primary-lighten);
    }
    li.route.active i{
        color:var(--primary-lighten);
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
        background:#000;
    }
</style>