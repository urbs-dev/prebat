<script>
    import { getPath, url } from 'gros/page'
    import { Dropdown } from 'gros/dropdown'   
    export let isAuthenticated = false 
</script>

<Dropdown position="bottom-end">
    <button><i class="micon">menu</i></button>
    <ul slot="content">
        <a href="{getPath('/accueil')}">
            <li class:active={$url.indexOf('accueil') > -1}>
                Accueil
            </li>
        </a>
    
        <a href="{getPath('/mesures')}">
            <li class:active={$url.indexOf('mesures') > -1}>
                Mesures
            </li>
        </a>
        {#if isAuthenticated}
            <a href="{getPath('/admin/measures/import')}">
                <li class:active={$url.indexOf('admin/measures/import') > -1}>
                    Nouvelle opération
                </li>
            </a>
        {:else}
            <a href="{getPath('/auth')}">
                <li class:active={$url.indexOf('auth') > -1}>
                    Connexion
                </li>
            </a>
        {/if}
    </ul>
</Dropdown>

<style>

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    li{
        padding: 8px 16px;
        cursor: pointer;
        transition: background-color 0.2s;
    }
    
    li:hover{
        background-color: #f9f9f9;
    }
    li.active{
        color: var(--primary);        
    }
</style>