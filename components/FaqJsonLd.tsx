"use client";

import Script from "next/script";
import { useTranslations } from "next-intl";

export default function FaqJsonLd() {
  const t = useTranslations("Faq");

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("a1"),
        },
      },
      {
        "@type": "Question",
        name: t("q2"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("a2"),
        },
      },
      {
        "@type": "Question",
        name: t("q3"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("a3"),
        },
      },
      {
        "@type": "Question",
        name: t("q4"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("a4"),
        },
      },
      {
        "@type": "Question",
        name: t("q5"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("a5"),
        },
      },
    ],
  };

  return (
    <Script id="faq-schema" type="application/ld+json">
      {JSON.stringify(faqData)}
    </Script>
  );
}
