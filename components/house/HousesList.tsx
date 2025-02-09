import { getHouses } from "@/services/houses";
import HouseCard from "./HouseCard";
import { House } from "@/lib/types/houses";

export const HousesList = async () => {
  const { data, message } = await getHouses();

  return (
    <>
      {message ? (
        <h3 className="text-lg text-red-500">
          Error loading houses: {message}
        </h3>
      ) : (
        (data as House[]).map((house) => (
          <HouseCard key={house.id} house={house} />
        ))
      )}
    </>
  );
};
