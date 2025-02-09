"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useAmplitude from "@/hooks/useAmplitude";
import { houseColors } from "@/lib/constants/houseColors";
import { House } from "@/lib/types/houses";
import Link from "next/link";
import { Button } from "../ui/button";

interface HouseCardProps {
  house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
  const { trackAmplitudeEvent } = useAmplitude();
  const { bg } = houseColors[house.name] || houseColors.Default;

  return (
    <Card key={house.id} className={`hover:shadow-lg transition ${bg}`}>
      <CardContent className={`shadow-md rounded-lg p-6 text-foreground `}>
        <CardTitle className={`text-4xl font-bold mb-6 text-white`}>
          {house.name}
        </CardTitle>
        <p className="text-secondary mt-2">Founder: {house.founder}</p>
        <Button variant={"link"} className="p-0 mt-4">
          <Link
            onClick={() => {
              trackAmplitudeEvent(
                { event_type: `LinkClick on House: ${house.id}` },
                {}
              );
            }}
            href={`/houses/${house.id}`}
            className="text-blue-500 block p-0"
          >
            View details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
