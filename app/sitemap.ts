import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://einsteinexplicacoes.pt/",
      lastModified: new Date(),
    },
  ];
}
