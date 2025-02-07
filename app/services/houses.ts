"use server"

import { House } from "@/lib/types/houses";


interface GetHousesResponse {
    data: House[] | null,
    message: string | null
}
export async function getHouse(params: { id: string }) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Houses/${params.id}`
    );
    const house: House = await res.json();
    if (!res.ok) return { message: "Failed load house" }
    return house;
}

export async function getHouses(): Promise<GetHousesResponse> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Houses`
        );
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const houses: House[] = await res.json();

        if (!res.ok) throw new Error(`Failed fetching houses data ${res}`)
        return {
            data: houses,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load houses", data: null }
    }
}