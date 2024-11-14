"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

export default function StructuredData() {
  const t = useTranslations("StructuredData");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: t("name"),
    description: t("description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: t("address.streetAddress"),
      addressLocality: t("address.addressLocality"),
      postalCode: t("address.postalCode"),
      addressCountry: t("address.addressCountry"),
    },
    telephone: t("telephone"),
    url: t("url"),
  };

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}
