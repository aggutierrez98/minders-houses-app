"use server"

import { Ingredient } from "@/lib/types/ingredients";

export async function getIngredient(params: { id: string }): Promise<Ingredient> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Ingredients/${params.id}`
    );
    const ingredient: Ingredient = await res.json();
    if (!res.ok) throw new Error(`Failed fetching ingredient data ${res}`)
    return ingredient

}

export async function getIngredients(): Promise<Ingredient[]> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Ingredients`
    );
    const ingredients: Ingredient[] = await res.json();

    if (!res.ok) throw new Error(`Failed fetching ingredients data ${res}`)
    return ingredients
}