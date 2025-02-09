"use server"

import { Wizard } from "@/lib/types/wizards";


interface GetWizardsResponse {
    data: Wizard[] | null,
    message: string | null
}

interface GetWizardResponse {
    data: Wizard | null,
    message: string | null
}

export async function getWizard(params: { id: string }): Promise<GetWizardResponse> {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Wizards/${params.id}`
        );
        const wizard: Wizard = await res.json();
        if (!res.ok) throw new Error(`Failed fetching wizard data ${res}`)
        return {
            data: wizard,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load wizards", data: null }
    }
}

export async function getWizards(): Promise<GetWizardsResponse> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Wizards`
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const wizards: Wizard[] = await res.json();

        if (!res.ok) throw new Error(`Failed fetching wizards data ${res}`)
        return {
            data: wizards,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load wizards", data: null }
    }
}