import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative bg-sky-500 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">{t("title")}</h1>
            <p className="text-xl md:text-2xl">{t("description")}</p>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              {t("contactUs")}
            </Button>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/placeholder.svg"
              alt={t("heroImage")}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
