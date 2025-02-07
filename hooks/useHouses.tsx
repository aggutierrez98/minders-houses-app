import { getHouses } from "@/app/services/houses";
import { House } from "@/lib/types/houses";
import { useEffect, useState } from "react";

export const useHouses = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHouses()
      .then(({ data, message }) => {
        if (message) setError(message);
        setHouses(data || []);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {};
  }, []);

  return { houses, error, loading };
};
