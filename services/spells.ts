"use server"

import { Spell } from "@/lib/types/spells";



export async function getSpell(params: { id: string }): Promise<Spell> {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Spells/${params.id}`
    );
    const spell: Spell = await res.json();
    if (!res.ok) throw new Error(`Failed fetching spell data ${res}`)
    return spell

}

export async function getSpells(): Promise<Spell[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Spells`
    );

    const spells: Spell[] = await res.json();
    if (!res.ok) throw new Error(`Failed fetching spells data ${res}`)
    return spells
}