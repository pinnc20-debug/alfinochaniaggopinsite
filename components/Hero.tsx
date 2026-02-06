import { ChevronDown } from 'lucide-react';
import { MouseEvent } from 'react';

export const Hero = () => {
  const handleScrollDown = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('snapdragon');
    if (element) {
      // Hitung tinggi navbar secara dinamis untuk offset yang akurat
      const nav = document.querySelector('nav');
      const headerOffset = nav ? nav.offsetHeight + 16 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative w-full min-h-[95vh] md:min-h-[90vh] flex flex-col justify-center items-center bg-white overflow-hidden px-4">
      
      {/* Background Elements - Adjusted for mobile to avoid overflow */}
      <div className="absolute top-[-10%] left-[-20%] md:top-[-20%] md:left-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-red-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-20%] md:bottom-[-20%] md:right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-amber-50 rounded-full blur-3xl opacity-60"></div>

      <div className="z-10 text-center max-w-4xl w-full animate-fade-in-up pt-10 md:pt-0">
        <h2 className="text-xs md:text-base font-semibold tracking-widest text-gray-500 uppercase mb-3 md:mb-4">
          Pertarungan Supremasi Seluler
        </h2>
        
        {/* Main Title - Responsive sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tighter flex flex-col md:block">
          <span className="text-snapdragon inline-block hover:scale-105 transition-transform cursor-default">Snapdragon</span>
          <span className="mx-0 my-2 md:my-0 md:mx-4 text-gray-300 font-thin italic text-2xl md:text-6xl">vs</span>
          <span className="text-mediatek inline-block hover:scale-105 transition-transform cursor-default">MediaTek</span>
        </h1>
        
        <p className="text-base md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
          Jelajahi arsitektur, performa, dan inovasi di balik dua raksasa yang mentenagai smartphone dunia.
        </p>
      </div>

      <div className="absolute bottom-8 md:bottom-10 animate-bounce">
        <a 
          href="#snapdragon" 
          onClick={handleScrollDown}
          className="text-gray-400 hover:text-gray-900 transition-colors p-4 block"
        >
          <ChevronDown size={28} className="md:w-8 md:h-8" />
        </a>
      </div>
    </div>
  );
};