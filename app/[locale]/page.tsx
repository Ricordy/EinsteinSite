import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ResolvingMetadata } from "next";
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
import { JsonLd } from "@/components/JsonLd";

type Props = {
  params: { locale: string };
};

export async function generateMetadata(
  { params: { locale } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://www.einsteinexplicacoes.pt/${locale}`,
      siteName: t("siteName"),
      locale: locale,
      type: "website",
      images: [
        {
          url: t("ogImage"),
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      site: "@EinsteinExplicacoes",
      creator: "@EinsteinExplicacoes",
      images: [t("twitterImage")],
    },
    alternates: {
      canonical: `https://www.einsteinexplicacoes.pt/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        fr: "/fr",
        es: "/es",
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Home({ params: { locale } }: Props) {
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <>
      <JsonLd
        type="Organization"
        name={t("siteName")}
        url={`https://www.einsteinexplicacoes.pt/${locale}`}
        logo="https://www.einsteinexplicacoes.pt/logo.png"
        sameAs={[
          "https://www.facebook.com/EinsteinExplicacoes",
          "https://www.instagram.com/einsteinexplicacoes",
          "https://www.linkedin.com/company/einstein-explicacoes",
        ]}
      />
      <Header />
      <main>
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
      </main>
    </>
  );
}

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "pt" },
    { locale: "fr" },
    { locale: "es" },
  ];
}
