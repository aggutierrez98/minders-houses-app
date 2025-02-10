import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import SpellCard from "@/components/spell/SpellCard";
import { getSpells } from "@/services/spells";

export default async function SpellsPage() {
  const spells = await getSpells();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="spell" number={6} />}>
          {spells.map((spell) => (
            <SpellCard key={spell.id} spell={spell} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
