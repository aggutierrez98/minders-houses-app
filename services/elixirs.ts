import type { Elixir } from "@/lib/types/elixirs"
const apiUrl = process.env.NEXT_PUBLIC_WIZARD_API_URL

interface GetElixirResponse {
    data: Elixir | null,
    message: string | null
}

interface GetElixirsResponse {
    data: Elixir[] | null,
    message: string | null
}


export async function getElixirs(): Promise<GetElixirsResponse> {
    try {

        const res = await fetch(`${apiUrl}/Elixirs`)
        const elixir = await res.json()

        if (!res.ok) throw new Error(`Failed to fetch elixirs: ${res}`)
        return {
            data: elixir,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to fetch elixirs", data: null }
    }
}

export async function getElixirById(id: string): Promise<GetElixirResponse> {
    try {

        const res = await fetch(`${apiUrl}/Elixirs/${id}`)
        const elixirs = await res.json()

        if (!res.ok) throw new Error(`Failed to fetch elixir: ${res}`)
        return {
            data: elixirs,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to fetch elixir", data: null }
    }
}



