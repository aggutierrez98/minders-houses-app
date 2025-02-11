"use server"
import { House } from "@/lib/types/houses";

export async function getHouse(params: { id: string }): Promise<House> {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Houses/${params.id}`
    );
    const house: House = await res.json();
    if (!res.ok) throw new Error(`Failed fetching house data ${res}`)
    return house
}

export async function getHouses(): Promise<House[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Houses`
    );

    const houses: House[] = await res.json();

    if (!res.ok) throw new Error(`Failed fetching houses data ${res}`)
    return houses
}