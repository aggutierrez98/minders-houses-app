import { SkeletonsList } from "@/components/SkeletonsList";
import { Suspense } from "react";
import { getHouses } from "@/services/houses";
import HouseCard from "@/components/house/HouseCard";

export default async function HousesPage() {
  const houses = await getHouses();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="house" number={6} />}>
          {houses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
