import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.einsteinexplicacoes.pt";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
    },
  ];
}
