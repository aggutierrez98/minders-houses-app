import { Ingredient } from "./ingredients"
import { Wizard } from "./wizards"

export interface Elixir {
    id: string
    name: string
    effect: string
    sideEffects: string
    characteristics: string
    time: string
    difficulty: string
    ingredients: Ingredient[]
    inventors: Omit<Wizard, "elixirs">[]
    manufacturer: string
}

export interface Inventor {
    id: string
    firstName: string
    lastName: string
}

