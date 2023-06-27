<script>
    import Auth from './Auth.svelte'
    import ResetPassword from './ResetPassword.svelte'
    import { page } from '$app/stores'

    $: forgotPassword = $page.url.searchParams.get('forgot-password')
    $: definePassword = $page.url.searchParams.get('define-password')

</script>

{#if forgotPassword}
    <ResetPassword bind:token={forgotPassword} type={'forgot'}/>
{:else if definePassword}
    <ResetPassword bind:token={definePassword} type={'define'}/>
{:else}
    <Auth/>
{/if}


