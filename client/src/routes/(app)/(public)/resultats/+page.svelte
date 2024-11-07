<script>
    import Footer from '$lib/components/Footer.svelte'
    import { getPath } from 'gros/page'
    import { initDownload } from '$lib/utils'
    import Charts from './Charts.svelte'
    export let data

    console.log(data)
</script>

<div class="main thin-scrollbar">

    <section>

        <Charts bind:data/>
        
    </section>


    <Footer/>

</div>

<style>
    div.main {
        position: absolute;
        top: 150px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fdfdfd;
        overflow-y: auto;
    }
    section {
        padding-bottom: 96px;
        padding-top: 40px;
        background: #fff;
    }
</style>