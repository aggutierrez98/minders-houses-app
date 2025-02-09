import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import { SpellsList } from "@/components/spell/SpellsList";

export default function SpellsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="spell" number={6} />}>
          <SpellsList />
        </Suspense>
      </div>
    </div>
  );
}
