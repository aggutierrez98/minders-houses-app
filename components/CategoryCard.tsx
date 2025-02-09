import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export function CategoryCard({
  title,
  description,
  icon: Icon,
  href,
}: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <Icon className="w-8 h-8 mb-2" />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
