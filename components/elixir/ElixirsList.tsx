import ElixirCard from "./ElixirCard";
import { Elixir } from "@/lib/types/elixirs";
import { getElixirs } from "@/services/elixirs";

export const ElixirsList = async () => {
  const { data, message } = await getElixirs();

  return (
    <>
      {message ? (
        <h3 className="text-lg text-red-500">
          Error loading elixirs: {message}
        </h3>
      ) : (
        (data as Elixir[]).map((elixir) => (
          <ElixirCard key={elixir.id} elixir={elixir} />
        ))
      )}
    </>
  );
};
