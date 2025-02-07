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
import { useHouses } from "@/hooks/useHouses";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { useAuth } from "@/hooks/useAuth";
import useAmplitude from "@/hooks/useAmplitude";

export function NavBar() {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const { houses } = useHouses();
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
            Hogwart Houses
          </Link>
          {isLoggedIn && (
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="mr-2">
                  Houses
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
                            Hogwart Houses
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Explore the magical houses of Hogwarts School of
                            Witchcraft and Wizardry.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {houses.map((house) => (
                      <ListItem
                        key={house.id}
                        href={`/house/${house.id}`}
                        title={house.name}
                        onClick={() => {
                          trackAmplitudeEvent({
                            event_type: `LinkClick on House: ${house.id}`,
                          });
                        }}
                      >
                        {house.animal}
                      </ListItem>
                    ))}
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
