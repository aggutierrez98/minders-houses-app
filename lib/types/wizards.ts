import { Elixir } from "./elixirs"

export interface Wizard {
    id: string
    firstName: string
    lastName: string
    elixirs: Pick<Elixir, "id" | "name">[]
}

export type DifficultyLevel = "Unknown" | "Advanced" | "Moderate" | "Beginner" | "OrdinaryWizardingLevel" | "OneOfAKind"

