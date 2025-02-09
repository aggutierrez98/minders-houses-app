import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import { IngredientsList } from "@/components/ingredients/IngredientList";

export default function IngredientsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="ingredient" number={6} />}>
          <IngredientsList />
        </Suspense>
      </div>
    </div>
  );
}
