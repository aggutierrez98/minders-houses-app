import type { House } from "@/lib/types/houses";
import { Card, CardContent, CardTitle } from "./ui/card";
import { houseColors } from "@/lib/constants/houseColors";

interface HouseDetailsCardProps {
  house: House;
}

export default function HouseDetailsCard({ house }: HouseDetailsCardProps) {
  const { bg, text } = houseColors[house.name] || {
    bg: "bg-[hsl(var(--magic-blue))]",
    text: "text-foreground",
  };

  return (
    <Card className="mt-6">
      <CardContent className={`${bg} shadow-md rounded-lg p-6 text-foreground`}>
        <CardTitle className={`text-4xl font-bold mb-6 ${text}`}>
          {house.name}
        </CardTitle>
        <p className="text-gray-600 mt-2">Fundador: {house.founder}</p>
        <p className="text-gray-600 mt-2">Colores: {house.houseColours}</p>
        <p className="text-gray-600 mt-2">Animal: {house.animal}</p>
        <p className="text-gray-600 mt-2">Elementos: {house.element}</p>
        <p className="text-gray-600 mt-2">Fantasma: {house.ghost}</p>
      </CardContent>
    </Card>
  );
}
