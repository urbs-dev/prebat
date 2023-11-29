<script>
    import { page } from '../'
</script>

    <button on:click={() => $page = 'show'} class="btn">
        <i class="micon">chevron_left</i>
        RETOUR
    </button>

<style>
    button{position:absolute;justify-content:flex-start;top:40px;left:0;right:0;background: #fff;color:var(--primary);padding:0 8px;font-size:16px;height:32px;}
    button i{font-size:30px;padding-right:16px;}
    button:hover{background-color:#eee}
</style>