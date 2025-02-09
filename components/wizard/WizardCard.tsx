"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useAmplitude from "@/hooks/useAmplitude";
import { Wizard } from "@/lib/types/wizards";
import Link from "next/link";

interface WizardCardProps {
  wizard: Wizard;
}

export default function WizardCard({ wizard }: WizardCardProps) {
  const { trackAmplitudeEvent } = useAmplitude();

  return (
    <Card className="hover:shadow-lg transition">
      <Link
        href={`/wizards/${wizard.id}`}
        key={wizard.id}
        onClick={() => {
          trackAmplitudeEvent({
            event_type: `LinkClick on Wizard: ${wizard.id}`,
          });
        }}
      >
        <CardHeader>
          <CardTitle>{`${wizard.firstName || ""} ${
            wizard.lastName
          }`}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Known Elixirs: {wizard.elixirs.length}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
