"use client";
import HouseCard from "@/components/HouseCard";
import { useHouses } from "@/hooks/useHouses";

export default function Home() {
  const { houses, error } = useHouses();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Casas de Magos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {error && <h3>Error al obtener casas: {error}</h3>}
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}
