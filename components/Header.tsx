import { useState, useEffect, MouseEvent } from 'react';
import { Info } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

export const Header = ({ currentView, onNavigate }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sinkronisasi state menu jika view berubah dari luar
  useEffect(() => {
      if (currentView !== 'home') {
          setShowMainMenu(true);
      }
  }, [currentView]);

  // Fungsi khusus untuk scroll manual
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const nav = document.querySelector('nav');
      const headerOffset = nav ? nav.offsetHeight + 20 : 140; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleHomeClick = () => {
      onNavigate('home');
      setShowMainMenu(false);
      if (currentView === 'home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  const handleInfoToggle = () => {
    if (showMainMenu) {
      // Jika menu sedang terbuka dan user menutupnya
      // Cek apakah sedang di halaman selain home
      if (currentView !== 'home') {
        // Kembali ke home
        onNavigate('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setShowMainMenu(false);
    } else {
      setShowMainMenu(true);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-white/90 backdrop-blur-sm border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-1 md:py-0 md:h-20 relative">
          
          {/* Top Row on Mobile: Logo */}
          <div className="w-full md:w-auto flex justify-center md:justify-start items-center mb-1 md:mb-0">
             <a 
               href="#" 
               onClick={(e) => { e.preventDefault(); handleHomeClick(); }} 
               className="flex items-center space-x-2 z-50 hover:opacity-90 transition-all duration-300 hover:scale-105 py-1"
             >
                <img 
                  src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-vector-star-icon-png-image_5169247.jpg" 
                  alt="Pinsite Logo" 
                  className="w-8 h-8 rounded-full object-cover shadow-sm transition-transform duration-300 hover:rotate-12"
                />
                <span className="font-bold text-xl tracking-tight text-gray-900">
                  Pin<span className="text-gray-400 font-light">site</span>
                </span>
             </a>
          </div>
          
          {/* Centered Capsule Navigation */}
          <div className="w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 pb-0.5 md:pb-0">
            <div className="mx-auto w-fit max-w-full flex items-center justify-center p-1 md:p-1.5 bg-gray-100 rounded-full border border-gray-200 shadow-md md:shadow-sm transition-all duration-300 hover:shadow-md">
               
               {/* Persistent Info Toggle Button with simplified state */}
               <button 
                 onClick={handleInfoToggle}
                 className={`group relative p-2 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out z-10 ${showMainMenu ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm'}`}
                 aria-label={showMainMenu ? "Tutup Menu" : "Buka Menu"}
               >
                 <Info 
                    size={16} 
                    strokeWidth={2.5} 
                    className={`transition-transform duration-300 ${showMainMenu ? 'rotate-180 scale-110' : 'group-hover:rotate-12'}`} 
                 />
                 {/* Text is only shown when active or desktop, no hover expansion animation */}
                 <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 text-xs font-bold ${
                    showMainMenu 
                      ? 'max-w-0 opacity-0 ml-0' // Hide when menu is open
                      : 'max-w-0 ml-0 opacity-0 lg:max-w-[60px] lg:ml-1 lg:opacity-100' // Show only on desktop default
                 }`}>
                   Lainnya
                 </span>
               </button>

               {/* Navigation Links Area - Animations Removed */}
               <div className="flex items-center">
                   {showMainMenu ? (
                       // MENU UTAMA (Expanded)
                       <div className="flex items-center space-x-0 md:space-x-2 pl-1">
                           <button 
                             onClick={handleHomeClick}
                             className="px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                           >
                             Beranda
                           </button>
                           <button 
                             onClick={() => onNavigate('gallery')}
                             className={`px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-md ${currentView === 'gallery' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                           >
                             Galeri
                           </button>
                           <button 
                             onClick={() => onNavigate('testimonials')}
                             className={`px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-md ${currentView === 'testimonials' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                           >
                             Testimoni
                           </button>
                           <button 
                             onClick={() => onNavigate('about')}
                             className={`px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 hover:shadow-md ${currentView === 'about' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-white hover:text-gray-900'}`}
                           >
                             Tentang
                           </button>
                       </div>
                   ) : (
                       // NAVIGASI ANCHOR (Default) - Animations Removed
                       <div className="flex items-center space-x-0 pl-1">
                           <a 
                             href="#snapdragon" 
                             onClick={(e) => handleNavClick(e, 'snapdragon')}
                             className="px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold text-gray-600 hover:bg-white hover:text-snapdragon hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95 whitespace-nowrap"
                           >
                             Snapdragon
                           </a>
                           <a 
                             href="#mediatek" 
                             onClick={(e) => handleNavClick(e, 'mediatek')}
                             className="px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold text-gray-600 hover:bg-white hover:text-mediatek hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95 whitespace-nowrap"
                           >
                             MediaTek
                           </a>
                           <a 
                             href="#comparison" 
                             onClick={(e) => handleNavClick(e, 'comparison')}
                             className="px-2.5 py-2 md:px-5 rounded-full text-xs md:text-sm font-bold text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95 whitespace-nowrap"
                           >
                             VS
                           </a>
                       </div>
                   )}
               </div>
            </div>
          </div>

          {/* Right Side Desktop (Github) */}
          <div className="hidden md:flex items-center space-x-4 z-50">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 7.56 9.75.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.75c0 .27.18.57.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"></path></svg>
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};