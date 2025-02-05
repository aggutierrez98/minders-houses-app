import { House } from "@/lib/types/houses";
import { useEffect, useState } from "react";

export const useHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getHouses = async () => {
      const res = await fetch(`https://wizard-world-api.herokuapp.com/Houses`);
      const houses: House[] = await res.json();
      return houses;
    };

    getHouses()
      .then((houses) => {
        setHouses(houses);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    return () => {};
  }, []);

  return { houses, error };
};
