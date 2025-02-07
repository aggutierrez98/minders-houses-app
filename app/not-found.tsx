"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WizardHat } from "@/components/WizardHat";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center  min-h-screen bg-background text-foreground mt-12 p-4">
      <WizardHat className="mb-6" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! Looks like this page vanished like a Demiguise.
      </p>
      <div className="max-w-md text-center mb-8">
        <p className="mb-4">
          &quot;I solemnly swear that I am up to no good.&quot;
        </p>
        <p>
          Unfortunately, even the Marauder&apos;s Map couldn&apos;t locate this
          page.
        </p>
      </div>
      <Button asChild className="p-6">
        <Link className="text-[15px]" href="/">
          Return to Hogwarts (Home)
        </Link>
      </Button>
    </div>
  );
}
