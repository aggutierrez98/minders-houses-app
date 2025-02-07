"use client";
import type { House } from "@/lib/types/houses";
// import { Card, CardContent, CardTitle } from "./ui/card";
import { houseColors } from "@/lib/constants/houseColors";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
interface HouseDetailsCardProps {
  house: House;
}

export default function HouseDetails({ house }: HouseDetailsCardProps) {
  const { bg, text } = houseColors[house.name] || {
    bg: "bg-[hsl(var(--magic-blue))]",
    text: "text-foreground",
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="link" size="sm" className="text-lg p-0" asChild>
        <Link href="/" className="flex items-center">
          <ArrowLeft className="mr-2 h-10 w-10" />
          Back to houses
        </Link>
      </Button>
      <h3 className={`text-4xl font-bold mb-6 mt-5 ${text}`}>{house.name}</h3>
      <div
        className={`${bg} shadow-md rounded-lg p-6 text-foreground text-white`}
      >
        <p className="mb-2">
          <strong>Founder:</strong> {house.founder}
        </p>
        <p className="mb-2">
          <strong>House Colors:</strong> {house.houseColours}
        </p>
        <p className="mb-2">
          <strong>Animal:</strong> {house.animal}
        </p>
        <p className="mb-2">
          <strong>Element:</strong> {house.element}
        </p>
        <p className="mb-2">
          <strong>Ghost:</strong> {house.ghost}
        </p>
        <p className="mb-2">
          <strong>Common Room:</strong> {house.commonRoom}
        </p>

        <h2 className="text-2xl font-bold mt-4 mb-2">Heads of House</h2>
        <ul className="list-disc list-inside mb-4">
          {house.heads.map((head) => (
            <li key={head.id}>
              {head.firstName} {head.lastName}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-4 mb-2">Traits</h2>
        <ul className="list-disc list-inside">
          {house.traits.map((trait) => (
            <li key={trait.id}>{trait.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
