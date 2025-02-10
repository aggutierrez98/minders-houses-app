import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HouseCardSkeleton() {
  return (
    <Card className="w-full overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
          <Skeleton className="absolute inset-0" />
        </div>
        <CardContent className="flex-1 p-6">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </CardContent>
      </div>
    </Card>
  );
}

// 403*188
