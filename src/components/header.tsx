'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-blue-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            {siteConfig.name}
          </Link>
          
          <div className="hidden md:flex space-x-6">
            {siteConfig.mainNav.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-gray-700 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2" aria-label="Sök">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Meny"
              aria-expanded={isMenuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              {siteConfig.mainNav.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-700 hover:text-blue-600 py-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
