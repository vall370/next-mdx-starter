import { contentConfig } from '@/config/content';
import { siteConfig } from '@/config/site';

type SitemapItem = {
    url: string;
    lastModified: Date;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
};

/**
 * Get all routes for the sitemap from all content types
 */
export function getSitemapRoutes(): SitemapItem[] {
    const baseUrl = siteConfig.url;
    const routes: SitemapItem[] = [];

    // Add static routes
    routes.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
    });

    // Add content routes from configuration
    Object.values(contentConfig.items).forEach((items) => {
        items.forEach((item) => {
            routes.push({
                url: `${baseUrl}/${item.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
            });
        });
    });

    // Add special routes that might not be in content config
    const specialRoutes = [
        '/om-billiga-forsakringar',
        '/kontakta-oss',
        '/anvandarvillkor',
        '/sakerhetspolicy',
    ];

    specialRoutes.forEach(route => {
        routes.push({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        });
    });

    return routes;
} 