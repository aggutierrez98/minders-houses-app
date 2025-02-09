"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wizard } from "@/lib/types/wizards";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface WizardDetailsCardProps {
  wizard: Wizard;
}

export default function WizardDetails({ wizard }: WizardDetailsCardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="link" size="sm" className="text-lg p-0" asChild>
        <Link href="/wizards" className="flex items-center">
          <ArrowLeft className="mr-2 h-10 w-10" />
          Back to wizards
        </Link>
      </Button>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>{`${wizard.firstName} ${wizard.lastName}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">Known Elixirs</h3>
          {wizard.elixirs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wizard.elixirs.map((elixir) => (
                <Card key={elixir.id}>
                  <CardHeader>
                    <CardTitle className="text-base flex justify-between items-center">
                      <Link
                        href={`/elixirs/${elixir.id}`}
                        className="hover:underline"
                      >
                        {elixir.name}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <p>This wizard has no known elixirs.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
