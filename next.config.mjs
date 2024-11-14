import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["einsteinexplicacoes.pt"],
  },
  i18n: {
    locales: ["en", "pt", "es", "fr"],
    defaultLocale: "pt",
  },
};

export default withNextIntl(nextConfig);
