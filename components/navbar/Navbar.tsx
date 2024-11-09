import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/EinsteinLogoGreen.svg"
              alt={t("logo")}
              width={40}
              height={40}
              className="h-10 w-10"
            />
          </Link>
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
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            {t("contactUs")}
          </Button>
        </div>
      </div>
    </header>
  );
}
