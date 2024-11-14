import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["einsteinexplicacoes.pt"],
  },
};

export default withNextIntl(nextConfig);
