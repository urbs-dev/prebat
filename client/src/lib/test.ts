

// export default class MyClass
// {
//     public value: StateRune
//     public readonly double: DerivedRune

//     constructor(value: number)
//     {
//         this.value = $state(value)
//         this.double = $derived(this.value * 2)
//     }
// }

import { writable, derived, type Writable, type Readable } from 'svelte/store'

export default class MyClass
{
    public value: Writable<number>
    public double: Readable<number>

    constructor(number: number)
    {
        this.value = writable(number)
        this.double = derived(this.value, $value => $value * 2)
    }
}

