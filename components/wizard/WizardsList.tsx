import WizardCard from "./WizardCard";
import { Wizard } from "@/lib/types/wizards";
import { getWizards } from "@/services/wizards";

export const WizardsList = async () => {
  const { data, message } = await getWizards();

  return (
    <>
      {message ? (
        <h3 className="text-lg text-red-500">
          Error loading wizards: {message}
        </h3>
      ) : (
        (data as Wizard[]).map((wizard) => (
          <WizardCard key={wizard.id} wizard={wizard} />
        ))
      )}
    </>
  );
};
