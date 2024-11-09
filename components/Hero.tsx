import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactUsButtons from "./utilities/ContactUsButtons";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="relative bg-sky-500 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
            <p className="text-xl md:text-2xl">{t("description")}</p>
            <ContactUsButtons>
              <Button
                size="xl"
                className="bg-emerald-600 hover:bg-emerald-700 text-white mt-5"
              >
                {t("contactUs")}
              </Button>
            </ContactUsButtons>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/test2.png"
              alt={t("heroImage")}
              fill
              className="object-contain md:scale-[1.35] "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
