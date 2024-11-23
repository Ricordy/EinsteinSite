import React from "react";

interface JsonLdProps {
  type: string;
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
}

export const JsonLd: React.FC<JsonLdProps> = ({
  type,
  name,
  url,
  logo,
  sameAs,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url,
    logo,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
