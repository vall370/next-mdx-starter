// components/Footer.tsx
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300">{siteConfig.description}</p>
          </div>
          
          {siteConfig.footerNav.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-300 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-300">E-post: {siteConfig.contact.email}</p>
            <div className="flex space-x-4 mt-4">
              {Object.entries(siteConfig.contact.social).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url.startsWith('/') ? undefined : url} 
                  className="text-gray-300 hover:text-white" 
                  aria-label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                >
                  {/* Social icon SVGs remain the same */}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
