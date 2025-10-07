import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pipeguru.ai';

  // Main app routes
  const routes = [
    '',
    '/book-call',
    '/solutions/marketing-teams',
    '/solutions/product-teams',
    '/legal/privacy',
    '/legal/terms',
    '/legal/imprint',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

