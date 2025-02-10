import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import IngredientCard from "@/components/ingredients/IngredientCard";
import { getIngredients } from "@/services/ingredients";

export default async function IngredientsPage() {
  const ingredients = await getIngredients();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="ingredient" number={6} />}>
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.id} ingredient={ingredient} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
