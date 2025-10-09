import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

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
    '/docs',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Docs routes from Docusaurus sitemap
  const docsSitemapPath = path.join(process.cwd(), 'public', 'docs', 'sitemap.xml');
  let docsRoutes: MetadataRoute.Sitemap = [];

  try {
    if (fs.existsSync(docsSitemapPath)) {
      const sitemapXml = fs.readFileSync(docsSitemapPath, 'utf-8');
      // This regex is a bit naive but works for standard sitemaps.
      // For more complex sitemaps, a dedicated XML parser would be better.
      const urlRegex = /<url>([\s\S]*?)<\/url>/g;
      const locRegex = /<loc>([^<]+)<\/loc>/;
      const lastmodRegex = /<lastmod>([^<]+)<\/lastmod>/;
      const changefreqRegex = /<changefreq>([^<]+)<\/changefreq>/;
      const priorityRegex = /<priority>([^<]+)<\/priority>/;

      let match;
      while ((match = urlRegex.exec(sitemapXml)) !== null) {
        const urlBlock = match[1];
        const loc = urlBlock.match(locRegex)?.[1];
        if (loc) {
          docsRoutes.push({
            url: loc,
            lastModified: urlBlock.match(lastmodRegex)?.[1] ? new Date(urlBlock.match(lastmodRegex)![1]) : new Date(),
            changeFrequency: (urlBlock.match(changefreqRegex)?.[1] as any) ?? 'weekly',
            priority: urlBlock.match(priorityRegex)?.[1] ? parseFloat(urlBlock.match(priorityRegex)![1]) : 0.5,
          });
        }
      }
    }
  } catch (error) {
    console.error('Could not read or parse Docusaurus sitemap:', error);
  }

  return [...routes, ...docsRoutes];
}
