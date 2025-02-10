import { Wizard } from "@/lib/types/wizards";
import WizardDetails from "@/components/wizard/WizardDetails";
import { getWizard } from "@/services/wizards";

interface WizardPageProps {
  params: Promise<{ id: string }>;
}

export default async function WizardPage({ params }: WizardPageProps) {
  const { id } = await params;
  const wizard = await getWizard({ id });
  return <WizardDetails wizard={wizard} />;
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WIZARD_API_URL}/Wizards`);
  const wizards = await res.json();
  const paths = wizards.map((wizard: Wizard) => ({ id: wizard.id }));
  return paths;
}
