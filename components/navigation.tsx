"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, User, ShoppingCart, ChevronDown, UserCheck } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";


// Définition des types
type SubMenuItem = {
  title: string;
  href: string;
};

type NavigationItem = {
  title: string;
  href: string;
  submenu?: SubMenuItem[];
};

const navigation: NavigationItem[] = [
  {
    title: "Personnages",
    href: "/personnages",
    submenu: [
      { title: "Fael Bursandra des Hazat", href: "/personnages/fael" },
      { title: "Jerome Sarrac", href: "/personnages/taylor" },
      { title: "Nicole", href: "/personnages/nicole" }
    ]
  },
  {
    title: "Univers",
    href: "/univers",
    submenu: [
      { title: "Tokyo:Otherscape", href: "/univers/otherscape" },
      { title: "Obojima", href: "/univers/obojima" }
    ]
  },
  {
    title: "Créations",
    href: "/creations",
    submenu: [
      { title: "Archipels", href: "/creations/archipels" },
      { title: "NativeSworn", href: "/creations/nativesworn" }
    ]
  },
  {
    title: "Téléchargements",
    href: "/telechargements",
    submenu: [
      { title: "Lectures", href: "/telechargements/lectures" },
      { title: "Sessions 0", href: "/telechargements/sessions0" }
    ]
  }
];

export function Navigation() {
  const { user } = useAuth();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);

  // Composant MobileNav déplacé à l'intérieur de Navigation pour accéder aux états
  const MobileNav = () => {
    return (
      <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
        <div className="flex flex-col space-y-2">
          {navigation.map((item) => (
            <MobileMenuItem 
              key={item.href} 
              item={item} 
            />
          ))}
        </div>
      </ScrollArea>
    );
  };

  // Composant pour le menu mobile
  const MobileMenuItem = ({ item }: { item: NavigationItem }) => {
    return (
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "block px-2 py-1 text-sm text-foreground",
              pathname === item.href && "text-primary"
            )}
          >
            {item.title}
          </span>
        </div>
        {item.submenu && (
          <div className="ml-4 space-y-1">
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className={cn(
                  "block px-2 py-1 text-sm text-foreground",
                  pathname === subItem.href && "text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {subItem.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Composant pour le menu desktop
  const DesktopMenuItem = ({ item }: { item: NavigationItem }) => {
    return (
      <div className="relative group">
        <Link
          href={item.submenu ? item.submenu[0].href : ""}
          className={cn(
            "flex items-center gap-1 px-4 py-2 text-foreground",
            pathname === item.href && "text-primary"
          )}
        >
          {item.title}
          {item.submenu && (
            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
          )}
        </Link>
        {item.submenu && (
          <div className="absolute left-0 top-full hidden group-hover:block">
            <div className="pt-3">
              <div className="rounded-md border bg-background shadow-md min-w-[200px]">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "block px-4 py-2 text-sm text-foreground hover:bg-muted",
                      pathname === subItem.href && "text-primary"
                    )}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto container flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 text-foreground">
          <span className="font-bold">MIST.QUEST</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <DesktopMenuItem key={item.href} item={item} />
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/store" className="text-foreground hover:text-primary">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Panier</span>
          </Link>
          <Link 
            href={user ? "/profile" : "/login"} 
            className="text-foreground hover:text-primary"
          >
            {user ? (
              <UserCheck className="h-5 w-5" />
            ) : (
              <User className="h-5 w-5" />
            )}
            <span className="sr-only">
              {user ? "Mon compte" : "Connexion"}
            </span>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">
                Menu de navigation
              </SheetTitle>
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}