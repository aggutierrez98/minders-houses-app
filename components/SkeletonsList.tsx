import { ElixirCardSkeleton } from "./elixir/ElixirCardSkeleton";
import { HouseCardSkeleton } from "./house/HouseCardSkeleton";
import { IngredientCardSkeleton } from "./ingredients/IngredientCardSkeleton";
import { SpellCardSkeleton } from "./spell/SpellCardSkeleton";
import { WizardCardSkeleton } from "./wizard/WizardCardSkeleton";
type SkeletonType = "house" | "elixir" | "wizard" | "spell" | "ingredient";
interface SkeletonsProps {
  number?: number;
  type: SkeletonType;
}

export function SkeletonsList({ number = 4, type }: SkeletonsProps) {
  return (
    <>
      {Array(number)
        .fill(0)
        .map((_, index) => {
          switch (type) {
            case "house":
              return <HouseCardSkeleton key={index} />;
            case "elixir":
              return <ElixirCardSkeleton key={index} />;
            case "wizard":
              return <WizardCardSkeleton key={index} />;
            case "spell":
              return <SpellCardSkeleton key={index} />;
            case "ingredient":
              return <IngredientCardSkeleton key={index} />;
            default:
              return <></>;
          }
        })}
    </>
  );
}
