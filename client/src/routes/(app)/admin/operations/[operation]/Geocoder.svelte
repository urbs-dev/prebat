<script>
    import Geocoder from './Geocoder'
    import { Dropdown } from 'gros/dropdown'

    export let icon
    export let label = ''
    export let required = false
    export let value = {}
    let active = false

    let id = 'id' + (Math.random() + 1).toString(36).substring(7)
    let timeout
    let searchValue = value.name ? value.name + ' (' + value.department_code + ')' : ''
    let locations = []
    let placeholder = 'Rechercher une commune'

    const search = () => {
        clearTimeout(timeout)
        if (searchValue.length >= 3) {
            timeout = setTimeout( async () => {
                const result = await Geocoder.search(searchValue)
                if (result.length > 0) {
                    active = true
                    locations = result
                }
            }, 400)
        }
        else locations = []
    }
</script>

<section>
    <label for="{id}">
        <div class="flex">
            {#if icon}
                <i class="micon">{icon}</i>
            {/if}
            <span>
                {label}
                {#if required}
                    <b>*</b>
                {/if}
            </span>
        </div>
    </label>

    <Dropdown fixed-width position="bottom" {active}>
        <aside>
            <i class="micon search">place</i>
            <input
                type="text" spellcheck="false"
                bind:value={searchValue}
                on:input={() => search()}
                placeholder={placeholder}
            />
        </aside>
        <article slot="content">
            {#if locations.length > 0}
            <div class="z-depth-1 result">
                <table>
                    {#each locations as location}
                        <tr on:click={() => {value = location; searchValue = location.name + ' (' + location.department_code + ')'; active = false}}>
                            <td><b>{location.name}</b><br>{location.context}</td>
                            <td style="width:64px;"><i>{location.nature}</i></td>
                        </tr>
                    {/each}
                </table>
            </div>
            {/if}
        </article>
    </Dropdown>
</section>

<style>
    section {
        margin: 16px 0;
    }
    label{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:var(--primary);
        font-weight:normal;
        font-size:16px;
        color:var(--primary);
        margin:0;
        margin-bottom:4px;
    }
    label .flex{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        white-space:nowrap;
    }
    label b{
        color:var(--ternary);
    }

    label i.micon{
        padding-right:8px;
        color:var(--primary);
        font-size:22px;
    }
    aside{
        height:38px;
        border-radius: 0.4rem;
        width: 100%;
        display:flex; justify-content: flex-start; align-items: center;
        border:1px solid #d1d1d1;
        background:#fff;
    }
    i.search{color:#616161;font-size:20px;margin: 0 4px;}
    input{
        width:216px;
        border:none;
        font-size:13px;
        color:#424242;
        height: 28px;
        padding:0;
    }
    input::placeholder{color:#9e9e9e}

    div.result{
        background:#fff;
        border:1px solid #e0e0e0;
        width: 100%;
        margin-top: 2px;
        padding: 4px;
    }
	table{
        cursor:pointer;
        border-collapse: collapse;
        margin:auto;
        text-align: left;
    }
	table tr{
        font-size:13px;
        color:#616161;
        transition:all, 0.2s;
        border-bottom:1px solid #eeeeee;
    }
	table tr:hover{
        background:#f5f5f5;
    }
	table td{
        padding:4px 8px;
    }
	table td i{
        font-size:9px;
    }
    section :global(button.dropdown-trigger:active) {
        transform: none;
    }
    section :global(button.dropdown-trigger) {
        width: 100%;
    }
</style>