"use server"
import { Wizard } from "@/lib/types/wizards";

export async function getWizard(params: { id: string }): Promise<Wizard> {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Wizards/${params.id}`
    );
    const wizard: Wizard = await res.json();
    if (!res.ok) throw new Error(`Failed fetching wizard data ${res}`)
    return wizard

}

export async function getWizards(): Promise<Wizard[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Wizards`
    );

    const wizards: Wizard[] = await res.json();

    if (!res.ok) throw new Error(`Failed fetching wizards data ${res}`)
    return wizards
}