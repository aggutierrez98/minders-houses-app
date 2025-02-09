"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAmplitude from "@/hooks/useAmplitude";
import { Spell } from "@/lib/types/spells";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface SpellCardProps {
  spell: Spell;
}

export default function SpellCard({ spell }: SpellCardProps) {
  const { trackAmplitudeEvent } = useAmplitude();

  return (
    <Card className="hover:shadow-lg transition">
      <Link
        href={`/spells/${spell.id}`}
        key={spell.id}
        onClick={() => {
          trackAmplitudeEvent({
            event_type: `LinkClick on Spell: ${spell.id}`,
          });
        }}
      >
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{spell.name}</span>
            <Badge>{spell.type}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{spell.effect}</p>
          {spell.incantation && (
            <p className="text-sm italic">
              Incantation: &quot;{spell.incantation}&quot;
            </p>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
