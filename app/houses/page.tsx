import { SkeletonsList } from "@/components/SkeletonsList";
import { Suspense } from "react";
import { HousesList } from "@/components/house/HousesList";

export default function HousesPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="house" number={6} />}>
          <HousesList />
        </Suspense>
      </div>
    </div>
  );
}
