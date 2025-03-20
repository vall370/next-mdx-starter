"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <p>
            Den här webbplatsen använder sig av cookies för att erbjuda den bästa användarupplevelsen.{' '}
            <Link href="/sakerhetspolicy" className="text-blue-300 hover:underline">
              Läs mer
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          <button onClick={acceptCookies} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded">
            Stäng rutan
          </button>
        </div>
      </div>
    </div>
  );
}
