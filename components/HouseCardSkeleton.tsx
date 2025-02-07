import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HouseCardSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <Skeleton className="h-8 w-3/4 mb-4" />
        <Skeleton className="h-6 my-8" />
        <Skeleton className="h-4 w-2/3 mt-6" />
      </CardContent>
    </Card>
  );
}

// 403*188
