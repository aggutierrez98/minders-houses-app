import { Ingredient } from "@/lib/types/ingredients";
import { getIngredients } from "@/services/ingredients";
import IngredientCard from "./IngredientCard";

export const IngredientsList = async () => {
  const { data, message } = await getIngredients();

  return (
    <>
      {message ? (
        <h3 className="text-lg text-red-500">
          Error loading ingredients: {message}
        </h3>
      ) : (
        (data as Ingredient[]).map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
        ))
      )}
    </>
  );
};
