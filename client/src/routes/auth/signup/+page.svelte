<h1>404</h1>


<!-- <script>
    import Form from './Form.svelte'
    import Confirmed from './Confirmed.svelte'
    let confirmed = false
    let email = 'test@test.fr'

    let element

    $: confirmed, scrollTop()

    const scrollTop = () => {
        if (!element) return
        element.scrollTop = 0
    }
</script>

<section class:confirmed bind:this={element} class="thin-scrollbar">
    <aside class="logo flex">
        <img alt="imope-logo" src="STATIC_PATH/img/logo.svg"/>
        <span class="alt-font">PREBAT</span>
    </aside>

    {#if !confirmed}
        <Form bind:confirmed bind:email />
    {:else}
        <Confirmed {email} />
    {/if}
</section>

<style>
   
    section {
        position:absolute;
        overflow-y: auto;
        left:0;top:0;bottom:0;
        width:392px;
        z-index:1;
        -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.8), 0 6px 30px 5px rgba(0, 0, 0, 0.20), 0 8px 10px -7px rgba(0, 0, 0, 0.10);
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.10), 0 8px 10px -7px rgba(0, 0, 0, 0.05);
        padding: 0 40px;
        background: #fff;
    }
    aside.logo {
        margin:40px auto 0 auto;
        justify-content: center;
    }
    aside.logo img{
        width: 64px;
        height: 64px;
    }
    aside.logo span {
        color: var(--primary);
        font-size: 56px;
        margin-left: 16px;
    }
</style> -->
