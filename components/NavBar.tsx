"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToogle";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import useAmplitude from "@/hooks/useAmplitude";

export function NavBar() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const { trackAmplitudeEvent } = useAmplitude();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-magic-blue">
      <div className="container flex mx-auto p-4 justify-between items-center">
        <NavigationMenu>
          <Link
            href="/"
            className="text-white text-xl font-bold hover:text-hufflepuff-primary transition-colors mr-5"
          >
            Wizard World App
          </Link>
          {isLoggedIn && (
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="mr-2">
                  Explore
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Wizard World
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore the magical World of Witchcraft and Wizardry
                            in Harry potter.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <NavigationMenuLink asChild>
                      <Link
                        href={"/houses"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on houses`,
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none">
                          Houses
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore the Hogwarts houses and learn about their
                          history.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href={"/elixirs"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on elixirs`,
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none">
                          Elixirs
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn about the elixirs and how to prepare them.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href={"/wizards"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on wizards`,
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none">
                          Wizards
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Know the most famous wizards of the magic world.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href={"/spells"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on spells`,
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none">
                          Spells
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn powerful and rare spells.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href={"/ingredients"}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on ingredients`,
                          });
                        }}
                      >
                        <div className="text-sm font-medium leading-none">
                          Ingredients
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          The commonest and rarest ingredients.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          {isLoggedIn ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={() => router.push("/login")}>Login</Button>
          )}
        </div>
      </div>
    </nav>
  );
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={props.href ?? "/"}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
