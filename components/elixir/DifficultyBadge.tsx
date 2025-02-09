import { Badge } from "@/components/ui/badge";

type DifficultyLevel =
  | "Unknown"
  | "Advanced"
  | "Moderate"
  | "Beginner"
  | "OrdinaryWizardingLevel"
  | "OneOfAKind";

const difficultyColors: Record<DifficultyLevel, string> = {
  Unknown: "bg-gray-500",
  Advanced: "bg-red-500",
  Moderate: "bg-yellow-500",
  Beginner: "bg-green-500",
  OrdinaryWizardingLevel: "bg-blue-500",
  OneOfAKind: "bg-purple-500",
};

export function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const level = difficulty as DifficultyLevel;
  const colorClass = difficultyColors[level] || "bg-gray-500";

  return <Badge className={`${colorClass} text-white`}>{difficulty}</Badge>;
}
