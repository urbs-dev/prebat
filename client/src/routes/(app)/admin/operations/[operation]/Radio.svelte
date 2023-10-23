<script lang="ts">
    import { scale } from 'svelte/transition'
    export let checked = false
    export let size = 18
    export let margin = [0]
</script>


<button type="button" on:click>
    <button type="button" class="checkbox" on:click={() => checked = !checked}>
        <slot name="before"/>
        <span 
            style:height={size + 'px'} 
            style:width={size + 'px'}
            style:margin={margin.join('px ')}
        >
            {#if checked}
                <i 
                    transition:scale|local={{ duration:150 }}
                    style:height="{(size - 8) + 'px'}"
                    style:width="{(size - 8) + 'px'}"
                ></i>
            {/if}
        </span>
        <slot/>
    </button>

</button>

<style>
    button {
        display:flex; justify-content: center; align-items: center;
        width: 100%;
    }
    button:active{
        transform:none;
    }
    span {
        display:flex; justify-content: center; align-items: center;
        border: 2px solid #d1d1d1;
        border-radius: 50%;
        text-align: center;
        background: #fff;
    }
    span i {
        background: #000;
        display: block;
        border-radius: 50%;
    }
</style>