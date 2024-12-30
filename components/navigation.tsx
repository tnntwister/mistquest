"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, ShoppingCart } from "lucide-react";

const navigation = [
  {
    title: "Fael Bursandra des Hazat",
    href: "/fael",
  },
  {
    title: "Otherscape",
    href: "/otherscape",
  },
  {
    title: "Mage",
    href: "/mage",
  },
  {
    title: "LNS",
    href: "/nouveau-soleil",
  },
  {
    title: "Ironsworn",
    href: "/ironsworn",
  },
  {
    title: "LitM",
    href: "/legends",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/20 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/20 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-b after:from-background/5 after:via-background/20 after:to-background/30 after:backdrop-blur-[2px]">
      <div className="container flex h-14 items-center justify-between relative z-10">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2 ml-4">
            <span className="font-bold">MIST.QUEST</span>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-2 py-1 text-lg font-semibold hover:text-primary",
                        pathname === item.href && "text-primary"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/store" className="text-muted-foreground hover:text-primary">
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}