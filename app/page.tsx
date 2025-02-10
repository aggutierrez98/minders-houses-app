import { CategoryCard } from "@/components/CategoryCard";
import { WizardHat } from "@/components/WizardHat";
import { texts } from "@/lib/texts";

import {
  Home,
  FlaskRoundIcon as Flask,
  Wand2,
  User,
  Apple,
  MessageCircleHeart,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <WizardHat className="mb-6 justify-self-center" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Magical World of Harry Potter
        </h1>
        <p className="text-xl text-muted-foreground">
          Explore the wonders of Hogwarts and beyond
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <CategoryCard
          title="Houses"
          description={texts.houses}
          icon={Home}
          href="/houses"
        />
        <CategoryCard
          title="Elixirs"
          description={texts.elixirs}
          icon={Flask}
          href="/elixirs"
        />
        <CategoryCard
          title="Spells"
          description={texts.spells}
          icon={Wand2}
          href="/spells"
        />
        <CategoryCard
          title="Wizards"
          description={texts.wizards}
          icon={User}
          href="/wizards"
        />
        <CategoryCard
          title="Ingredients"
          description={texts.ingredients}
          icon={Apple}
          href="/ingredients"
        />
        <CategoryCard
          title="Feedback"
          description={texts.feedback}
          icon={MessageCircleHeart}
          href="/feedback"
        />
      </div>
    </div>
  );
}
