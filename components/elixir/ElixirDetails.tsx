"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Elixir } from "@/lib/types/elixirs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DifficultyBadge } from "./DifficultyBadge";

interface ElixirDetailsCardProps {
  elixir: Elixir;
}

export default function ElixirDetails({ elixir }: ElixirDetailsCardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="link" size="sm" className="text-lg p-0" asChild>
        <Link href="/elixir" className="flex items-center">
          <ArrowLeft className="mr-2 h-10 w-10" />
          Back to elixirs
        </Link>
      </Button>
      <h3 className={`text-4xl font-bold mb-6 mt-5 `}>{elixir.name}</h3>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{elixir.name}</span>
            <div>
              <span>Diffulty: </span>
              <DifficultyBadge difficulty={elixir.difficulty} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                General Information
              </h3>
              <p className="mb-2">
                <strong>Effect:</strong> {elixir.effect}
              </p>
              <p className="mb-2">
                <strong>Side Effects:</strong>{" "}
                {elixir.sideEffects || "None known"}
              </p>
              <p className="mb-2">
                <strong>Characteristics:</strong>{" "}
                {elixir.characteristics || "None"}
              </p>
              <p className="mb-2">
                <strong>Time:</strong> {elixir.time || "Unknown"}
              </p>
              <p className="mb-2">
                <strong>Difficulty:</strong> {elixir.difficulty}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside mb-4">
                {elixir.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold mb-2">Inventors</h3>
              <ul className="list-disc list-inside mb-4">
                {elixir.inventors.length
                  ? elixir.inventors.map((inventor) => (
                      <li
                        key={inventor.id}
                      >{`${inventor.firstName} ${inventor.lastName}`}</li>
                    ))
                  : "Unknown"}
              </ul>
              <p>
                <strong>Manufacturer:</strong>{" "}
                {elixir.manufacturer || "Unknown"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
