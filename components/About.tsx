import { ScrollReveal } from './ScrollReveal';
import { User, Calendar, Ruler, Heart, Coffee, MapPin, GraduationCap, Palette } from 'lucide-react';

export const About = () => {
  return (
    <section className="min-h-screen bg-white pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Tentang Saya
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-snapdragon to-mediatek rounded-full mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Photo & Quick Stats */}
          <div className="lg:col-span-4 space-y-8">
            <ScrollReveal delay="0.2s">
              <div className="relative group max-w-xs mx-auto lg:max-w-full lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-snapdragon to-mediatek rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4]">
                  <img 
                    src="https://i.pinimg.com/736x/79/e2/d9/79e2d9ec91cbf880ec4b216edc26a21c.jpg" 
                    alt="Alfino Chaniaggo" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <h3 className="text-2xl font-bold">Alfino Chaniaggo</h3>
                    <p className="text-gray-300 text-sm">@ MTsN 8 Jakarta</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Personal Data Card */}
            <ScrollReveal delay="0.3s">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm max-w-xs mx-auto lg:max-w-full">
                <h4 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Data Diri</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <Calendar size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Lahir</p>
                        <p className="text-gray-800 font-medium">Jakarta, 20 Desember 2010</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <Ruler size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Tinggi Badan</p>
                        <p className="text-gray-800 font-medium">170+ cm</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                        <MapPin size={18} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">SD Asal</p>
                        <p className="text-gray-800 font-medium">Cipondoh Makmur 01</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio & Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Bio Card */}
            <ScrollReveal delay="0.4s">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                <QuoteIcon className="absolute top-4 right-6 text-gray-100 w-24 h-24 rotate-12" />
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Halo, Aku Pino! 👋</h3>
                
                <div className="prose prose-lg text-gray-600 relative z-10 leading-relaxed font-light">
                  <p>
                    Halo aku <strong>Alfino Chaniaggo</strong> sebutannya biasanya <strong>Pino</strong> atau ada juga orang special yang manggil <strong>Botak</strong> juga seneng aja gitu kalo dipanggil botak ama dia.
                  </p>
                  <p className="mt-4">
                    Oke pertama tama di kelas 7 saya di kelas <strong>76</strong>, di kelas 8 di <strong>84</strong>, kalo sekarang ya di <strong>91</strong> si.
                  </p>
                  <p className="mt-4">
                    Sering Bahagia si dimana aja bukan berarti ga pernah sedih juga ya kayak <em>fifty fifty</em> gitu laa. Duluu tu SD nyaa di Cipondoh Makmur 01 sekolah nya ga kelaitan soal nya dalem gang. Dah itu aja si tengku.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Favorites Grid */}
            <ScrollReveal delay="0.5s">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Favorites Box */}
                    <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                        <div className="flex items-center gap-2 mb-4 text-orange-700">
                            <Heart size={20} />
                            <h4 className="font-bold">Makanan Favorit</h4>
                        </div>
                        <ul className="space-y-2">
                            {['Kentang Mustofa', 'Rendang', 'Udang Rebon Cabe'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-gray-700 bg-white/60 p-2 rounded-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Drinks & Colors Box */}
                    <div className="space-y-6">
                         <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                            <div className="flex items-center gap-2 mb-3 text-blue-700">
                                <Coffee size={20} />
                                <h4 className="font-bold">Minuman</h4>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200">Susu Kacang</span>
                                <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium border border-blue-200">Air Kelapa</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                            <div className="flex items-center gap-2 mb-3 text-gray-700">
                                <Palette size={20} />
                                <h4 className="font-bold">Warna Kesukaan</h4>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-lg text-sm border border-yellow-200">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    Kuning Sunset
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-sm border border-gray-300">
                                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                    Gray Mist
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </ScrollReveal>

            {/* School Journey Line */}
             <ScrollReveal delay="0.6s">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                    <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                        <GraduationCap className="text-snapdragon" />
                        Perjalanan Kelas
                    </h4>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full"></div>
                        <div className="relative z-10 flex justify-between px-4">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200 border-4 border-white shadow-md flex items-center justify-center font-bold text-gray-500">7</div>
                                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-sm">7-6</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-300 border-4 border-white shadow-md flex items-center justify-center font-bold text-gray-600">8</div>
                                <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full text-sm">8-4</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-snapdragon to-mediatek border-4 border-white shadow-lg flex items-center justify-center font-bold text-white text-lg">9</div>
                                <span className="font-bold text-white bg-gray-900 px-3 py-1 rounded-full text-sm">9-1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
};

// Helper SVG component
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
  </svg>
);