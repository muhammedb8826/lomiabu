"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ReservationModal } from "@/components/ReservationModal";

export function HeaderNav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-zinc-900";
  const borderColor = isDark ? "border-white/10" : "border-zinc-200";

  return (
    <div className={`flex w-full items-center justify-between border-b ${borderColor} bg-transparent px-4 py-4 md:px-6 lg:px-10`}>
      <div className="flex items-center gap-3 md:gap-4">
        <Link href="/" className={`text-lg font-bold tracking-wide ${textColor} md:text-xl hover:opacity-80`}>
          Loomii
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-6 md:flex">
        <NavigationMenu className="w-auto">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle} bg-transparent px-0 text-base font-medium ${textColor} opacity-80 hover:opacity-100`}
                >
                  <Link href={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button size="lg" onClick={() => setIsReservationOpen(true)}>
          Book a table
        </Button>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <button
            className={`inline-flex items-center gap-2 ${textColor} transition hover:opacity-80 md:hidden`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wide">MENU</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-lg px-4 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <Button size="lg" className="w-full" onClick={() => setIsReservationOpen(true)}>
                Book a table
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Reservation Modal */}
      <ReservationModal open={isReservationOpen} onOpenChange={setIsReservationOpen} />
    </div>
  );
}

