import { getAllItemSlugs, getItemBySlug } from '../../lib/insurance';
import { getMdxBySlug } from '../../lib/mdx';
import MDXContent from '../../components/MDXContent';
import { contentConfig } from '../../config/content';

type BlogPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllItemSlugs('insurances');
  return slugs.map((slug: string) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const item = getItemBySlug(slug, 'insurances');
  return {
    title: `${item.title}`,
    description: item.metaDescription || item.description,
    keywords: item.keywords?.join(', ')
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params
  const item = getItemBySlug(slug, 'insurances');
  const mdxContent = await getMdxBySlug(slug);
  const fallback = contentConfig.fallback;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{item.title}</h1>
        
        {mdxContent ? (
          <MDXContent source={mdxContent} />
        ) : (
          <div className="prose max-w-none">
            <p className="text-lg mb-4">{item.description}</p>
            
            {/* Fallback content template */}
            <p>{fallback.needInfo.replace('%s', item.title.toLowerCase())}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {fallback.whySection.replace('%s', item.title.toLowerCase())}
            </h2>
            <p>{fallback.whyContent}</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {fallback.featuresSection.replace('%s', item.title.toLowerCase())}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {item.features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-3">
                {fallback.ctaTitle.replace('%s', item.title.toLowerCase())}
              </h3>
              <p>{fallback.ctaDescription}</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                {fallback.ctaButton}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
