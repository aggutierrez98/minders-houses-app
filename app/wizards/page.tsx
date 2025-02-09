import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import { WizardsList } from "@/components/wizard/WizardsList";

export default function WizardsPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="wizard" number={6} />}>
          <WizardsList />
        </Suspense>
      </div>
    </div>
  );
}
