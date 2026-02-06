import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [hideContent, setHideContent] = useState(false);

  useEffect(() => {
    const totalDuration = 4000; // 4 detik total loading

    // Timeline animasi
    // 3.5 detik: Mulai sembunyikan konten (logo)
    const contentFadeTimer = setTimeout(() => {
      setHideContent(true);
    }, 3500);

    // 4 detik: Mulai animasi tirai terbuka
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4000);

    // 5 detik: Selesai total (hapus komponen dari DOM)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
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

      {/* Konten Loading (Hanya Logo) */}
      <div className={`relative z-10 flex flex-col items-center justify-center w-full max-w-xs transition-opacity duration-500 ${hideContent ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Logo & Brand Name */}
        <div className="flex items-center gap-4 animate-pulse">
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
        
        {/* Progress Bar dan Teks telah dihapus sesuai permintaan */}
      </div>
    </div>
  );
};