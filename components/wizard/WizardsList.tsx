import WizardCard from "./WizardCard";
import { Wizard } from "@/lib/types/wizards";
import { getWizards } from "@/services/wizards";

export const WizardsList = async () => {
  const wizards = await getWizards();

  return (wizards as Wizard[]).map((house) => (
    <WizardCard key={house.id} wizard={house} />
  ));
};
