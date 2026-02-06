import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  const loadingTexts = [
    "mengautentifikasi...",
    "memuat elemen...",
    "mengoptimalkan web...",
    "bot verification...",
    "allowed"
  ];

  useEffect(() => {
    const totalDuration = 8000; // 8 detik total loading
    const textIntervalTime = 1600; // 8000ms / 5 texts = 1600ms per teks
    const progressIntervalTime = 50; // Update bar setiap 50ms
    
    // Timer untuk mengganti teks
    const textTimer = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < loadingTexts.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, textIntervalTime);

    // Timer untuk progress bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (totalDuration / progressIntervalTime);
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, progressIntervalTime);

    // Timeline animasi
    // 7.5 detik: Mulai sembunyikan konten (logo, bar, teks)
    const contentFadeTimer = setTimeout(() => {
      setHideContent(true);
    }, 7500);

    // 8 detik: Mulai animasi tirai terbuka
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 8000);

    // 9 detik: Selesai total (hapus komponen dari DOM)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 9000);

    return () => {
      clearInterval(textTimer);
      clearInterval(progressTimer);
      clearTimeout(contentFadeTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      
      {/* Tirai Kiri */}
      <div 
        className={`absolute left-0 top-0 h-full w-1/2 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExiting ? '-translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Tirai Kanan */}
      <div 
        className={`absolute right-0 top-0 h-full w-1/2 bg-black transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isExiting ? 'translate-x-full' : 'translate-x-0'
        }`}
      ></div>

      {/* Konten Loading (Logo, Bar, Teks) */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full max-w-xs transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Logo & Brand Name */}
        <div className="mb-8 flex items-center gap-4 animate-pulse">
            <div className="p-1 bg-white/10 rounded-full">
                <img 
                  src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-vector-star-icon-png-image_5169247.jpg" 
                  alt="Pinsite Logo" 
                  className="w-16 h-16 rounded-full object-cover shadow-2xl"
                />
            </div>
            <span className="text-4xl font-bold text-white tracking-tight">
              Pin<span className="text-gray-400 font-light">site</span>
            </span>
        </div>

        {/* Loading Bar Container */}
        <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-4">
          {/* Loading Bar Fill */}
          <div 
            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Dynamic Text */}
        <div className="h-6 overflow-hidden">
             <p className="text-gray-400 text-xs font-mono tracking-widest uppercase text-center animate-fade-in-up key={textIndex}">
               {loadingTexts[textIndex]}
             </p>
        </div>
      </div>
    </div>
  );
};