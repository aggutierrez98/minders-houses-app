"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAmplitude from "@/hooks/useAmplitude";
import Link from "next/link";
import { Elixir } from "@/lib/types/elixirs";
import { DifficultyBadge } from "./DifficultyBadge";

interface ElixirCardProps {
  elixir: Elixir;
}

export default function ElixirCard({ elixir }: ElixirCardProps) {
  const { trackAmplitudeEvent } = useAmplitude();

  return (
    <Card className="hover:shadow-lg transition">
      <Link
        href={`/elixirs/${elixir.id}`}
        key={elixir.id}
        onClick={() => {
          trackAmplitudeEvent({
            event_type: `LinkClick on Elixir: ${elixir.id}`,
          });
        }}
      >
        <CardHeader>
          <CardTitle>{elixir.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {elixir.effect || "Unknown effect"}
          </p>
          <DifficultyBadge difficulty={elixir.difficulty} />
        </CardContent>
      </Link>
    </Card>
  );
}
