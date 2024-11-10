"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OfferingsButton from "../utilities/OfferingsButton";
import AboutUsButton from "../utilities/AboutUsButton";
import ContactUsButtons from "../utilities/ContactUsButtons";

export function Header() {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto relative">
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/EinsteinLogoGregb.svg"
              alt={t("logo")}
              width={60}
              height={60}
              className="h-15 w-15"
            />
            <span className="hidden md:inline-block ml-2 text-xl font-semibold text-black">
              Einstein Explicações
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
            <OfferingsButton>
              <div className="text-sm font-medium hover:text-primary">
                {t("offerings")}
              </div>
            </OfferingsButton>
            <AboutUsButton>
              <div className="text-sm font-medium hover:text-primary">
                {t("about")}
              </div>
            </AboutUsButton>
            <ContactUsButtons>
              <div className="text-sm font-medium hover:text-primary">
                {t("contacts")}
              </div>
            </ContactUsButtons>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{t("openMenu")}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <OfferingsButton>
                    <div
                      className="text-sm font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("offerings")}
                    </div>
                  </OfferingsButton>
                  <AboutUsButton>
                    <div
                      className="text-sm font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("about")}
                    </div>
                  </AboutUsButton>
                  <ContactUsButtons>
                    <div
                      className="text-sm font-medium hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {t("contacts")}
                    </div>
                  </ContactUsButtons>
                  <Select onValueChange={handleLanguageChange} value={locale}>
                    <SelectTrigger className="w-fit">
                      <SelectValue>
                        <div className="flex items-center">
                          <Image
                            src={`/flags/${locale}.svg`}
                            alt={locale}
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          {locale.toUpperCase()}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">
                        <div className="flex items-center">
                          <Image
                            src="/flags/gb.svg"
                            alt="English"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          EN
                        </div>
                      </SelectItem>
                      <SelectItem value="pt">
                        <div className="flex items-center">
                          <Image
                            src="/flags/pt.svg"
                            alt="Portuguese"
                            width={16}
                            height={16}
                            className="mr-2"
                          />
                          PT
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="md:flex gap-8 items-center hidden">
            <ContactUsButtons>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white hidden md:flex">
                {t("contactUs")}
              </Button>
            </ContactUsButtons>
            <Select onValueChange={handleLanguageChange} value={locale}>
              <SelectTrigger className="w-[90px]">
                <SelectValue>
                  <div className="flex items-center">
                    <Image
                      src={`/flags/${locale === "en" ? "gb" : locale}.svg`}
                      alt={locale}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    {locale.toUpperCase()}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">
                  <div className="flex items-center">
                    <Image
                      src="/flags/gb.svg"
                      alt="English"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    EN
                  </div>
                </SelectItem>
                <SelectItem value="pt">
                  <div className="flex items-center">
                    <Image
                      src="/flags/pt.svg"
                      alt="Portuguese"
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    PT
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}
