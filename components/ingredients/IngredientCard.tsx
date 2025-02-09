"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Ingredient } from "@/lib/types/ingredients";

interface IngredientCardProps {
  ingredient: Ingredient;
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{ingredient.name}</CardTitle>
      </CardHeader>
    </Card>
  );
}
