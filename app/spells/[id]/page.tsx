import { Spell } from "@/lib/types/spells";
import SpellDetails from "@/components/spell/SpellDetails";
import { getSpell } from "@/services/spells";

interface SpellPageProps {
  params: Promise<{ id: string }>;
}

export default async function SpellPage({ params }: SpellPageProps) {
  const { id } = await params;
  const { data: spell, message } = await getSpell({ id });

  if (message) return <h2>{message}</h2>;
  if (spell) return <SpellDetails spell={spell} />;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Spells`);
  const spells = await res.json();
  const paths = spells.map((spell: Spell) => ({ id: spell.id }));
  return paths;
}
