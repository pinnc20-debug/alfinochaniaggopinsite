import { useRef } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Image as ImageIcon, PlayCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/foto_1_1_vklf3z',
    caption: 'Momen di MTSN 8 Jakarta Barat',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_2_g5pclu',
    caption: 'Kebersamaan Kelas',
  },
  {
    id: 3,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_3_m59fax',
    caption: 'Kegiatan Sekolah',
  },
  {
    id: 4,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_4_mjvbyx',
    caption: 'Kenangan Tak Terlupakan',
  },
  {
    id: 5,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_5_urbszx',
    caption: 'Teman Seperjuangan',
  },
  {
    id: 6,
    type: 'image',
    src: 'https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_6_fiwoey',
    caption: 'Cerita Kami',
  },
  {
    id: 7,
    type: 'video',
    src: 'https://files.catbox.moe/0ansra.mp4',
    caption: 'Video Kenangan 1',
  },
  {
    id: 8,
    type: 'video',
    src: 'https://files.catbox.moe/05khsn.mp4',
    caption: 'Video Kenangan 2',
  }
];

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll amount: item width (500px) + gap (24px for md) roughly
      const scrollAmount = 524;
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
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

        {/* Horizontal Slider Section */}
        <ScrollReveal delay="0.2s">
          <div className="relative group">
            {/* Hint Text for Mobile */}
            <div className="flex justify-end mb-4 md:hidden">
                <div className="flex items-center gap-1 text-xs font-medium text-gray-400 animate-pulse">
                    <span>Geser</span>
                    <ArrowRight size={12} />
                </div>
            </div>

            {/* Navigation Buttons (Desktop Only) - Muncul saat hover */}
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

            {/* Slider Container - Menggunakan flex dan overflow-x-auto */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 md:gap-6 pb-8 snap-x snap-mandatory scroll-hidden -mx-4 px-4 md:mx-0 md:px-0"
            >
              {GALLERY_ITEMS.map((item) => (
                <div 
                    key={item.id} 
                    className="flex-none w-[85vw] md:w-[500px] snap-center first:pl-0 last:pr-4"
                >
                  <div className="group/item relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 shadow-sm transition-all duration-300 border border-gray-200 flex items-center justify-center">
                    
                    {/* Media Content */}
                    {item.type === 'video' ? (
                       <video 
                         src={item.src} 
                         className="w-full h-full object-contain"
                         controls
                         preload="metadata"
                         playsInline
                       />
                    ) : (
                       <img 
                         src={item.src} 
                         alt={item.caption} 
                         className="w-full h-full object-contain transform group-hover/item:scale-105 transition-transform duration-700 ease-in-out"
                         loading="lazy"
                         draggable="false"
                       />
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-100 pointer-events-none" />

                    {/* Badge Foto/Video */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none">
                      <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
                        {item.type === 'image' ? <ImageIcon size={16} /> : <PlayCircle size={16} />}
                        <span className="uppercase tracking-wider text-[10px] font-bold bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                            {item.type === 'image' ? 'Foto' : 'Video'}
                        </span>
                      </div>
                    </div>
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