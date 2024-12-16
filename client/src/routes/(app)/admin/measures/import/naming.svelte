<script>
    import { Select, Input } from 'gros/form'
    import { Tooltip } from 'gros/tooltip'

    export let name 
    export let step
    export let withoutMeasures = false

    const types = [
        { value: 'MI', label: 'Habitation individuelle' },
        { value: 'LC', label: 'Habitation collective' },
        { value: 'Bu', label: 'Bureau' },
        { value: 'En', label: 'Enseignement' },
        { value: 'He', label: 'Hébergement' },
        { value: 'Re', label: 'Restauration' },
        { value: 'Sa', label: 'Santé' },
        { value: 'Cu', label: 'Culture' },
        { value: 'Sp', label: 'Sport' },
        { value: 'Co', label: 'Commerce' },
        { value: 'Mu', label: 'Mixte' },
    ]
    let type 
    let department

    const getName = () => {
        if (!type || !department) return
        const prefix = `${type}.dep${department}.`

        fetch(`BASE_URL/prebat.api/operations/name/${prefix}`)
            .then(response => response.json())
            .then(json => {
                name = `${prefix}${json.index.toString().padStart(4, "0")}`
                step++
            })
    }

    const copy = () => {
        navigator.clipboard.writeText(name)
    }
</script>

<div class="naming">
    <Select label="Fonction du bâtiment" bind:value={type} options={types} required/>
    <Input label="Département" placeholder="75" bind:value={department} required/>
    <div class="btn">
        <button type="submit" class="btn" on:click={() => getName()}>
            générer le code
        </button>
        <button on:click={()=> {name = null; step++ }}>j'ai déja un code</button>
    </div>
</div>

<style>

    div.naming{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 24px 16px;
        margin: 24px 0;
        color: #424242;

        border: 2px dashed #9e9e9e;
        border-radius: 8px;
    }

    span {
        font-size: 24px;
    }

    p {
        margin-top: 16px;
        font-size: 14px;
    }

    button.btn {
        width: 136px;
        padding: 12px;
        background: var(--primary);
        color: #fff;
        font-size: 16px;
        width: 100%;
    }

    div.btn{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>