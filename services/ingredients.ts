"use server"

import { Ingredient } from "@/lib/types/ingredients";


interface GetIngredientsResponse {
    data: Ingredient[] | null,
    message: string | null
}

interface GetIngredientResponse {
    data: Ingredient | null,
    message: string | null
}

export async function getIngredient(params: { id: string }): Promise<GetIngredientResponse> {

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Ingredients/${params.id}`
        );
        const ingredient: Ingredient = await res.json();
        if (!res.ok) throw new Error(`Failed fetching ingredient data ${res}`)
        return {
            data: ingredient,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load ingredients", data: null }
    }
}

export async function getIngredients(): Promise<GetIngredientsResponse> {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Ingredients`
        );
        const ingredients: Ingredient[] = await res.json();

        if (!res.ok) throw new Error(`Failed fetching ingredients data ${res}`)
        return {
            data: ingredients,
            message: null
        };
    } catch (error) {
        console.error(error);
        return { message: "Failed to load ingredients", data: null }
    }
}