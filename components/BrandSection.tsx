import { BrandData } from '../types';
import { Cpu, Smartphone, Activity } from 'lucide-react';

interface BrandSectionProps {
  data: BrandData;
  align: 'left' | 'right';
}

export const BrandSection = ({ data, align }: BrandSectionProps) => {
  const isLeft = align === 'left';
  
  const imageUrl = isLeft 
    ? "https://www.planetgadget.store/media/wysiwyg/blog/post/s/n/snapdragon_elite_8_hp_apa_saja.jpg" 
    : "https://statik.tempo.co/data/2023/11/07/id_1252310/1252310_720.jpg";
  
  // Tentukan warna border saat hover berdasarkan sisi (brand)
  const hoverBorderColor = isLeft ? 'hover:border-red-200' : 'hover:border-orange-200';

  return (
    <section id={data.id} className="py-10 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Visual Side */}
          <div className="w-full md:w-1/2">
            <div className={`relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl group border-4 ${isLeft ? 'border-red-50' : 'border-amber-50'}`}>
              <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${data.color}`}></div>
              <img 
                src={imageUrl} 
                alt={`${data.name} Chipset visualization`} 
                className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/90 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl md:text-3xl font-bold">{data.flagshipChip.name}</h3>
                <p className="opacity-90 text-xs md:text-base">{data.flagshipChip.process} Process</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-5 md:space-y-8">
            <div>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-4 ${isLeft ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>
                {data.philosophy}
              </div>
              <h2 className={`text-3xl md:text-5xl font-bold mb-3 md:mb-6 ${data.accentColor}`}>{data.name}</h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed text-justify md:text-left">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              <div className={`p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:bg-white ${hoverBorderColor} transition-all duration-300 group`}>
                <div className="flex items-center gap-3 mb-1">
                    <Cpu className={`w-5 h-5 md:w-8 md:h-8 ${data.accentColor} transition-transform duration-300 group-hover:scale-110`} />
                    <h4 className="font-semibold text-gray-900 md:hidden">Arsitektur</h4>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 hidden md:block">Arsitektur</h4>
                <p className="text-sm text-gray-500">{data.flagshipChip.cpu}</p>
              </div>

              <div className={`p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:bg-white ${hoverBorderColor} transition-all duration-300 group`}>
                <div className="flex items-center gap-3 mb-1">
                    <Smartphone className={`w-5 h-5 md:w-8 md:h-8 ${data.accentColor} transition-transform duration-300 group-hover:scale-110`} />
                    <h4 className="font-semibold text-gray-900 md:hidden">Grafis</h4>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 hidden md:block">Grafis</h4>
                <p className="text-sm text-gray-500">{data.flagshipChip.gpu}</p>
              </div>

              <div className={`p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:bg-white ${hoverBorderColor} transition-all duration-300 sm:col-span-2 group`}>
                <div className="flex items-center gap-3 mb-2">
                    <Activity className={`w-5 h-5 md:w-8 md:h-8 ${data.accentColor} transition-transform duration-300 group-hover:scale-110`} />
                    <h4 className="font-semibold text-gray-900">Skor Performa</h4>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${data.color} transition-all duration-1000 ease-out`} 
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                  <span className="font-mono text-gray-700 font-bold text-xs md:text-base">{data.flagshipChip.antutuScore}</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs md:text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
              "{data.history}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};