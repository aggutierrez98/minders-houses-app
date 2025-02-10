import { House } from "@/lib/types/houses";
import HouseDetails from "@/components/house/HouseDetails";
import { getHouse } from "@/services/houses";

interface HousePageProps {
  params: Promise<{ id: string }>;
}

export default async function HousePage({ params }: HousePageProps) {
  const { id } = await params;
  const house = await getHouse({ id });
  return <HouseDetails key={house.id} house={house} />;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Houses`);
  const houses = await res.json();
  const paths = houses.map((house: House) => ({ id: house.id }));
  return paths;
}
