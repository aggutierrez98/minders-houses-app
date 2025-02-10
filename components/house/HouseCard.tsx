"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import useAmplitude from "@/hooks/useAmplitude";
import { houseColors } from "@/lib/constants/houseColors";
import { House } from "@/lib/types/houses";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

interface HouseCardProps {
  house: House;
}

export default function HouseCard({ house }: HouseCardProps) {
  const { trackAmplitudeEvent } = useAmplitude();
  const { bg } = houseColors[house.name] || houseColors.Default;
  const imageUrl = `/images/${house.name.toLowerCase()}.png`;

  return (
    <Card
      key={house.id}
      className={`overflow-hidden hover:shadow-lg transition ${bg}`}
    >
      <div className="flex flex-col xsm:flex-row shadow-md">
        <div className="relative w-full sm:w-1/3 h-48 sm:h-auto my-2">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`${house.name} crest`}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <CardContent className={` rounded-lg p-6 text-foreground `}>
          <CardTitle
            className={`text-2xl font-bold mb-2 lg:text-4xl text-white xsm:mb-6`}
          >
            {house.name}
          </CardTitle>
          <p className="text-secondary mt-2">Founder: {house.founder}</p>

          <Button variant={"link"} className="p-0 mt-1 xsm:mt-4">
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
      </div>
    </Card>
  );
}
