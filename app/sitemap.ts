import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://einsteinexplicacoes.pt/",
      lastModified: new Date(),
    },
    {
      url: "https://einsteinexplicacoes.pt/pt",
      lastModified: new Date(),
    },
    {
      url: "https://einsteinexplicacoes.pt/en",
      lastModified: new Date(),
    },
    {
      url: "https://einsteinexplicacoes.pt/es",
      lastModified: new Date(),
    },
    {
      url: "https://einsteinexplicacoes.pt/fr",
      lastModified: new Date(),
    },
  ];
}
