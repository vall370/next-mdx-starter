import { MetadataRoute } from 'next';
import { getSitemapRoutes } from '@/lib/sitemap';
import { listBlogPosts } from '@/lib/mdx';
import { siteConfig } from '@/config/site';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = siteConfig.url;
    const routes = getSitemapRoutes();

    // Add blog posts
    try {
        const blogPosts = await listBlogPosts();
        const blogUrls = blogPosts.map(post => ({
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: new Date(post.metadata.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

        routes.push(...blogUrls);
    } catch (error) {
        console.warn('Could not generate blog URLs for sitemap:', error);
    }

    return routes;
} 