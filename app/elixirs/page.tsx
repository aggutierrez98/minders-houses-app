import { Suspense } from "react";
import { SkeletonsList } from "@/components/SkeletonsList";
import ElixirCard from "@/components/elixir/ElixirCard";
import { getElixirs } from "@/services/elixirs";

export default async function ElixirsPage() {
  const elixirs = await getElixirs();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <Suspense fallback={<SkeletonsList type="elixir" number={6} />}>
          {elixirs.map((elixir) => (
            <ElixirCard key={elixir.id} elixir={elixir} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
