import { useRef, useState, memo, useEffect, useCallback } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Play, ArrowRight, ArrowLeft } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Video ditempatkan di paling awal
  {
    id: 1,
    type: 'video',
    src: 'https://files.catbox.moe/mtfhef.mp4',
    thumbnail: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:eco/logo_thumbnail_zzhhnv',
    caption: 'Video Kenangan Baru',
  },
  {
    id: 2,
    type: 'video',
    src: 'https://files.catbox.moe/0ansra.mp4',
    thumbnail: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:eco/logo_thumbnail_zzhhnv',
    caption: 'Video Kenangan 1',
  },
  {
    id: 3,
    type: 'video',
    src: 'https://files.catbox.moe/05khsn.mp4',
    thumbnail: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:eco/logo_thumbnail_zzhhnv',
    caption: 'Video Kenangan 2',
  },
  // Dilanjutkan dengan foto-foto
  {
    id: 4,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/foto_1_1_vklf3z',
    caption: 'Momen di MTSN 8 Jakarta Barat',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_2_g5pclu',
    caption: 'Kebersamaan Kelas',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_3_m59fax',
    caption: 'Kegiatan Sekolah',
  },
  {
    id: 7,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_4_mjvbyx',
    caption: 'Kenangan Tak Terlupakan',
  },
  {
    id: 8,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_5_urbszx',
    caption: 'Teman Seperjuangan',
  },
  {
    id: 9,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_6_fiwoey',
    caption: 'Cerita Kami',
  },
];

// Sub-komponen VideoPlayer dengan dukungan callback state ke parent
const VideoPlayer = memo(({ src, thumbnail, onPlayStateChange }: { src: string, thumbnail?: string, onPlayStateChange?: (isPlaying: boolean) => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    if (onPlayStateChange) onPlayStateChange(true);
  };

  const handleVideoPauseOrEnd = () => {
    // Jangan ubah isPlaying ke false agar UI player tetap muncul, 
    // tapi beritahu parent bahwa playback berhenti agar autoscroll bisa jalan lagi (opsional)
    // Atau jika ingin strict:
    if (onPlayStateChange) onPlayStateChange(false);
  };

  if (!isPlaying) {
    return (
      <button 
        onClick={handlePlayClick}
        className="group relative w-full h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer overflow-hidden"
        aria-label="Putar Video"
      >
        {/* Thumbnail Image */}
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt="Video thumbnail" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 opacity-50" />
        )}
        
        {/* Play Button Overlay */}
        <div className="z-10 w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/40">
           <Play size={32} className="text-white ml-1 drop-shadow-md" fill="currentColor" />
        </div>
      </button>
    );
  }

  return (
    <video 
      src={src} 
      className="w-full h-full object-contain bg-black"
      controls
      autoPlay
      playsInline
      onPause={handleVideoPauseOrEnd}
      onEnded={handleVideoPauseOrEnd}
      onPlay={() => onPlayStateChange && onPlayStateChange(true)}
    />
  );
});

// Sub-komponen untuk Gambar
const ImageItem = memo(({ src, caption }: { src: string, caption: string }) => (
    <img 
        src={src} 
        alt={caption} 
        className="w-full h-full object-contain transform group-hover/item:scale-105 transition-transform duration-700 ease-in-out"
        loading="lazy"
        decoding="async"
        draggable="false"
    />
));

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false); // Pause karena interaksi (hover/touch)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Pause karena video sedang diputar

  // Efek Auto Scroll
  useEffect(() => {
    // Jangan scroll jika sedang dipause (user interaksi) ATAU video sedang diputar
    if (isPaused || isVideoPlaying) return;

    const autoScrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const scrollAmount = 524; // Samakan dengan tombol manual

        // Cek jika sudah mentok di ujung kanan (dengan toleransi 10px)
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Reset ke awal
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll ke item berikutnya
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3000); // Scroll setiap 3 detik

    return () => clearInterval(autoScrollInterval);
  }, [isPaused, isVideoPlaying]);

  // Fungsi Scroll Manual
  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 524;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Galeri Kenangan
            </h2>
            <div className="w-24 h-1.5 bg-gray-100 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Jejak langkah dan momen berharga selama menempuh pendidikan di <span className="font-medium text-gray-800">MTSN 8 Jakarta Barat</span>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay="0.2s">
          <div className="relative group">
            {/* Hint Mobile */}
            <div className="flex justify-end mb-4 md:hidden">
                <div className="flex items-center gap-1 text-xs font-medium text-gray-400 animate-pulse">
                    <span>Geser</span>
                    <ArrowRight size={12} />
                </div>
            </div>

            {/* Tombol Navigasi Desktop */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 text-gray-700 hover:scale-110 hover:bg-white transition-all duration-300 focus:outline-none group-hover:opacity-100 opacity-0 transition-opacity"
                aria-label="Geser Kiri"
            >
                <ArrowLeft size={24} />
            </button>

            <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100 text-gray-700 hover:scale-110 hover:bg-white transition-all duration-300 focus:outline-none group-hover:opacity-100 opacity-0 transition-opacity"
                aria-label="Geser Kanan"
            >
                <ArrowRight size={24} />
            </button>

            {/* Slider Container dengan Event Listeners untuk Pause Auto Scroll */}
            <div 
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scroll-hidden -mx-4 px-4 md:mx-0 md:px-0"
            >
              {GALLERY_ITEMS.map((item) => (
                <div 
                    key={item.id} 
                    className="flex-none w-[85vw] md:w-[500px] snap-center first:pl-0 last:pr-4"
                >
                  <div className="group/item relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 shadow-sm transition-all duration-300 border border-gray-200 flex items-center justify-center">
                    
                    {/* Media Content - Tanpa Teks Overlay */}
                    {item.type === 'video' ? (
                       <VideoPlayer 
                          src={item.src} 
                          thumbnail={item.thumbnail}
                          onPlayStateChange={setIsVideoPlaying} // Pass handler state
                       />
                    ) : (
                       <ImageItem src={item.src} caption={item.caption} />
                    )}

                    {/* Gradient Halus Saja (Tanpa Teks) */}
                    {item.type === 'image' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-100 pointer-events-none" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        
        {GALLERY_ITEMS.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                <p>Belum ada foto yang ditampilkan.</p>
            </div>
        )}

      </div>
    </div>
  );
};