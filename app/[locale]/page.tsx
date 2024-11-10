import AboutSection from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/navbar/Navbar";
import { OfferingCards } from "@/components/OfferingCards";
import { Stats } from "@/components/Stat";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import ContactUsButtons from "@/components/utilities/ContactUsButtons";
import { WhyUs } from "@/components/WhyUs";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = (await import(`../../messages/${locale}.json`)).default;

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <OfferingCards />
      <div className="bg-green-50 flex justify-center pb-20">
        <ContactUsButtons>
          <Button
            size="xl"
            className="bg-emerald-700 hover:bg-emerald-800 text-white"
          >
            {tc("contactUs")}
          </Button>
        </ContactUsButtons>
      </div>
      <AboutSection />
      <WhyUs />
      <Team />
      <Testimonials />
      <ContactSection />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}
