import { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: any) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Beranda' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'testimonials', label: 'Testimoni' },
  { id: 'about', label: 'Tentang Saya' }
];

export const Header = ({ currentView, onNavigate }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background with Performance Optimization (RAF + Passive)
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
      onNavigate(id);
      if (id === 'home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 md:h-20 relative">
          
          {/* Top Row on Mobile: Logo */}
          <div className="w-full md:w-auto flex justify-center md:justify-start items-center mb-3 md:mb-0">
             <a 
               href="#" 
               onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
               className="flex items-center space-x-2 z-50 hover:opacity-90 transition-all duration-300 hover:scale-105"
             >
                <img 
                  src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-vector-star-icon-png-image_5169247.jpg" 
                  alt="Pinsite Logo" 
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover shadow-sm transition-transform duration-300 hover:rotate-12"
                />
                <span className="font-bold text-lg md:text-xl tracking-tight text-gray-900">
                  Pin<span className="text-gray-400 font-light">site</span>
                </span>
             </a>
          </div>
          
          {/* Centered Capsule Navigation */}
          <div className="w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="mx-auto w-fit max-w-[95vw] md:max-w-full flex items-center justify-center p-1 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300">
               
               {/* Navigation Links Area */}
               <div className="flex items-center space-x-0.5 md:space-x-1 overflow-x-auto scroll-hidden px-1 no-scrollbar">
                   {NAV_ITEMS.map((item) => (
                     <button 
                       key={item.id}
                       onClick={() => handleNavClick(item.id)}
                       className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-[11px] md:text-sm font-bold transition-all duration-300 whitespace-nowrap ${currentView === item.id ? 'bg-gray-900 text-white shadow-md scale-[1.02]' : 'text-gray-600 hover:bg-gray-100'}`}
                     >
                       {item.label}
                     </button>
                   ))}
               </div>
            </div>
          </div>

          {/* Right Side Desktop (Github) */}
          <div className="hidden md:flex items-center space-x-4 z-50">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 7.56 9.75.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.75c0 .27.18.57.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"></path></svg>
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};