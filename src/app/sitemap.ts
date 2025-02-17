import { SITE } from "@/config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.origin}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [SITE.image],
    },
  ];
}
