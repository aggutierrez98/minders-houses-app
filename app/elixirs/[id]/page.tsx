import { Elixir } from "@/lib/types/elixirs";
import ElixirDetails from "@/components/elixir/ElixirDetails";
import { getElixirById } from "@/services/elixirs";

interface ElixirPageProps {
  params: Promise<{ id: string }>;
}

export default async function ElixirPage({ params }: ElixirPageProps) {
  const { id } = await params;
  const { data: elixir, message } = await getElixirById(id);

  if (message) return <h2>{message}</h2>;
  if (elixir) return <ElixirDetails elixir={elixir} />;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Elixirs`);
  const elixirs = await res.json();
  const paths = elixirs.map((elixir: Elixir) => ({ id: elixir.id }));
  return paths;
}
