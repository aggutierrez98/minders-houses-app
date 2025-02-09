"use server"

import { Spell } from "@/lib/types/spells";


interface GetSpellsResponse {
    data: Spell[] | null,
    message: string | null
}

interface GetSpellResponse {
    data: Spell | null,
    message: string | null
}

export async function getSpell(params: { id: string }): Promise<GetSpellResponse> {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Spells/${params.id}`
        );
        const spell: Spell = await res.json();
        if (!res.ok) throw new Error(`Failed fetching spell data ${res}`)
        return {
            data: spell,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load spells", data: null }
    }
}

export async function getSpells(): Promise<GetSpellsResponse> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Spells`
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const spells: Spell[] = await res.json();

        if (!res.ok) throw new Error(`Failed fetching spells data ${res}`)
        return {
            data: spells,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load spells", data: null }
    }
}