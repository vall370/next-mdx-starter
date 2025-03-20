import { siteConfig } from '@/config/site';
import { getThemeClass } from '@/styles/theme';

export default function HeroSection() {
    const bgClass = getThemeClass('primary', '100');
    const textClass = getThemeClass('primary', '900');
    const buttonClass = getThemeClass('primary', '600');
    
    return (
      <div className={`${bgClass} rounded-lg overflow-hidden mt-8`}>
        <div className="py-12 px-6 md:px-12 lg:flex lg:items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className={`text-3xl md:text-4xl font-bold ${textClass} mb-4`}>
              Hitta en billig försäkring och får rätt skydd vid skada
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Vi tipsar dig om billiga försäkringar och vad du kan göra för att hitta en bra försäkring utifrån dina behov till ett bra pris.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800 mb-3">Jämför försäkringar</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {siteConfig.mainNav.map((nav, index) => (
                  <button key={index} className={`${bgClass} py-3 px-4 rounded ${textClass}`}>
                    {nav.title}
                  </button>
                ))}
              </div>
              <button className={`w-full ${buttonClass} text-white font-bold py-3 px-4 rounded`}>
                Jämför alla försäkringar
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-center">
                <div className="rounded-full bg-blue-600 text-white font-bold text-lg w-12 h-12 flex items-center justify-center">
                  Z
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-xl">ZMARTA</h3>
                  <p className="text-gray-600">Jämför försäkringar</p>
                </div>
              </div>
              <p className="my-4 text-gray-700">
                Gör som hundratusentals andra svenskar, jämför och byt bilförsäkring hos Zmarta.se. Helt kostnadsfritt kan du jämföra försäkringar och få erbjudanden från välkända försäkringsbolag.
              </p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded">
                Till Zmarta.se
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }