<script>
    import Heatmap from './heatmap.svelte'
    let scenario1 = Array.from({ length: 7 }).map(() => Array.from({ length: 24 }).map(() => false))
    let scenario2 = Array.from({ length: 1 }).map(() => Array.from({ length: 52 }).map(() => false))

</script>

<div class="main">
    <section>
        <Heatmap bind:data={scenario1}/>
        <Heatmap bind:data={scenario2} X={Array.from({ length: 52 })} Y={['']} label={"Semaine"}/>
    </section>

    
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