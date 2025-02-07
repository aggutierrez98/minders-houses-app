import { HouseCardSkeleton } from "./HouseCardSkeleton";

interface SkeletonsProps {
  number: number;
}

export function SkeletonsList({ number = 4 }: SkeletonsProps) {
  return (
    <>
      {Array(number)
        .fill(0)
        .map((_, index) => (
          <HouseCardSkeleton key={index} />
        ))}
    </>
  );
}
