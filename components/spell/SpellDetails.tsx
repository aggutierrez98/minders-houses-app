"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spell } from "@/lib/types/spells";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface SpellDetailsCardProps {
  spell: Spell;
}

export default function SpellDetails({ spell }: SpellDetailsCardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="link" size="sm" className="text-lg p-0" asChild>
        <Link href="/spells" className="flex items-center">
          <ArrowLeft className="mr-2 h-10 w-10" />
          Back to spells
        </Link>
      </Button>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{spell.name}</span>
            <Badge>{spell.type}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Effect</h3>
              <p>{spell.effect}</p>
            </div>
            {spell.incantation && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Incantation</h3>
                <p className="italic">&quot;{spell.incantation}&quot;</p>
              </div>
            )}
            {spell.creator && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Creator</h3>
                <p className="italic">&quot;{spell.creator}&quot;</p>
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold mb-2">Properties</h3>
              <ul className="list-disc list-inside">
                <li>Can be verbal: {spell.canBeVerbal ? "Yes" : "No"}</li>
                <li>Light: {spell.light}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
