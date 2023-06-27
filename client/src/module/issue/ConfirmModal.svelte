<script>
    import { Modal } from 'gros/modal'
    export let close
</script>

<Modal title="Bug enregistré" icon="bug_report">
    <section>
        <p><b>Merci pour votre aide!</b></p>
        <p>Votre message a été transmis aux équipes U.R.B.S. </p>
        <p>Nous vous informerons des suites dans les meilleurs délais.</p>
    </section>
    <svelte:fragment slot="footer">
        <button on:click={close}>Fermer</button>
    </svelte:fragment>
</Modal>

<style>
    section {
        width: 400px;
        padding: 40px;
    }
    b {
        color: var(--primary);
    }
</style>
