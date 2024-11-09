"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/EinsteinLogoGreen.svg"
              alt={t("logo")}
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#oferecemos"
              className="text-sm font-medium hover:text-primary"
            >
              {t("offerings")}
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium hover:text-primary"
            >
              {t("about")}
            </Link>
            <Link
              href="#contactos"
              className="text-sm font-medium hover:text-primary"
            >
              {t("contacts")}
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="#oferecemos"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("offerings")}
                  </Link>
                  <Link
                    href="#sobre"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("about")}
                  </Link>
                  <Link
                    href="#contactos"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {t("contacts")}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hidden md:flex">
            {t("contactUs")}
          </Button>
        </div>
      </div>
    </header>
  );
}
