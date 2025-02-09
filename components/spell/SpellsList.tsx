import SpellCard from "./SpellCard";
import { Spell } from "@/lib/types/spells";
import { getSpells } from "@/services/spells";

export const SpellsList = async () => {
  const { data, message } = await getSpells();

  return (
    <>
      {message ? (
        <h3 className="text-lg text-red-500">
          Error loading spells: {message}
        </h3>
      ) : (
        (data as Spell[]).map((spell) => (
          <SpellCard key={spell.id} spell={spell} />
        ))
      )}
    </>
  );
};
