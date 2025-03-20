import { contentConfig, ContentItem } from '../config/content';

// Get all slugs for a content type
export function getAllItemSlugs(contentType: string): string[] {
  const items = contentConfig.items[contentType as keyof typeof contentConfig.items] || [];
  return items.map(item => item.slug);
}

// Get content by slug and type
export function getItemBySlug(slug: string, contentType: string): ContentItem {
  const items = contentConfig.items[contentType as keyof typeof contentConfig.items] || [];
  const item = items.find(item => item.slug === slug);

  if (!item) {
    throw new Error(`Item with slug "${slug}" not found in content type "${contentType}"`);
  }

  return item;
}

// Legacy functions for backward compatibility
export function getAllInsuranceSlugs(): string[] {
  return getAllItemSlugs('insurances');
}

export function getInsuranceBySlug(slug: string): ContentItem {
  return getItemBySlug(slug, 'insurances');
} 