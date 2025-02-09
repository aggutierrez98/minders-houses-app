export interface Spell {
    id: string
    name: string
    incantation: string | null
    effect: string
    canBeVerbal: boolean
    type: string
    light: string
    creator: string | null
}

