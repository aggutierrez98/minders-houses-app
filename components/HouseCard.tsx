import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useAmplitudeContext from "@/hooks/useAmplitudeContext";
import { houseColors } from "@/lib/constants/houseColors";
import { House } from "@/lib/types/houses";
import Link from "next/link";

interface HouseCardProps {
  house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
  const { trackAmplitudeEvent } = useAmplitudeContext();
  const { bg, text } = houseColors[house.name] || houseColors.Default;

  console.log({ HouseName: house.name, colorsObj: houseColors[house.name] });
  return (
    <Card key={house.id} className="hover:shadow-lg transition">
      <CardContent
        // className={`shadow-md rounded-lg p-6 text-foreground ${bg} bg-ravenclaw-primary`}
        className={`shadow-md rounded-lg p-6 text-foreground ${bg}`}
      >
        <CardTitle className={`text-4xl font-bold mb-6 ${text}`}>
          {house.name}
        </CardTitle>
        <p className="text-gray-600 mt-2">Fundador: {house.founder}</p>
        <Link
          onClick={() => {
            trackAmplitudeEvent("click", {
              // event_type: "Link click"
              text: `Click on link in house ${house.id}`,
            });
          }}
          href={`/house/${house.id}`}
          className="text-blue-600 mt-4 block"
        >
          Ver detalles
        </Link>
      </CardContent>
    </Card>
  );
}
