import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SpellCardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader>
        <Skeleton className="h-6 w-3/4 mb-2" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}
