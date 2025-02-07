import { AmplitudeContext } from "@/components/context/AmplitudeContext";
import { useContext } from "react";

const useAmplitude = () => {
  const context = useContext(AmplitudeContext);
  if (context === undefined)
    throw new Error(
      "useAmplitude must be used within a AmplitudeContextProvider"
    );
  return context;
};

export default useAmplitude;
