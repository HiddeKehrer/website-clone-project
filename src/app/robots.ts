import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://pipeguru.ai';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/docs/sitemap.xml`,
    ],
  };
}

