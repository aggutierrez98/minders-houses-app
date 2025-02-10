import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import { getWizards } from "@/services/wizards";
import WizardCard from "@/components/wizard/WizardCard";

export default async function WizardsPage() {
  const wizards = await getWizards();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="wizard" number={6} />}>
          {wizards.map((house) => (
            <WizardCard key={house.id} wizard={house} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
