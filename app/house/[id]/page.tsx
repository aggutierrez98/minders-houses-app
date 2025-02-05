// "use client";
import { House } from "@/lib/types/houses";
import HouseDetailsCard from "@/components/HouseDetailsCard";

export default async function HouseDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const house = await getHouse({ id });

  return <HouseDetailsCard key={house.id} house={house} />;
}

export async function getHouse(params: { id: string }) {
  const res = await fetch(
    `https://wizard-world-api.herokuapp.com/Houses/${params.id}`
  );
  const house: House = await res.json();
  return house;
}

export async function generateStaticParams() {
  const res = await fetch(`https://wizard-world-api.herokuapp.com/Houses`);
  const houses = await res.json();
  const paths = houses.map((house: House) => ({ id: house.id }));
  return paths;
}
