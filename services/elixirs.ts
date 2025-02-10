import type { Elixir } from "@/lib/types/elixirs"
const apiUrl = process.env.NEXT_PUBLIC_WIZARD_API_URL

export async function getElixirs(): Promise<Elixir[]> {
    const res = await fetch(`${apiUrl}/Elixirs`)
    const elixir = await res.json()

    if (!res.ok) throw new Error(`Failed to fetch elixirs: ${res}`)
    return elixir
}

export async function getElixirById(id: string): Promise<Elixir> {

    const res = await fetch(`${apiUrl}/Elixirs/${id}`)
    const elixirs = await res.json()

    if (!res.ok) throw new Error(`Failed to fetch elixir: ${res}`)
    return elixirs
}



