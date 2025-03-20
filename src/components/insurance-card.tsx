import Link from 'next/link';

export default function InsuranceCard({ title, description, icon, slug }: { title: string, description: string, icon: string, slug: string }) {
  return (
    <Link href={`/${slug}`}>
      <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          {icon ? (
            <span dangerouslySetInnerHTML={{ __html: icon }} />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
