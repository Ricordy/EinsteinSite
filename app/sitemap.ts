import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://einstein-education.com",
      lastModified: new Date(),
    },
  ];
}
