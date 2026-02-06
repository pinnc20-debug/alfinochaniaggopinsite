import React from 'react';
import { BrandData } from '../types';
import { Cpu, Smartphone, Activity } from 'lucide-react';

interface BrandSectionProps {
  data: BrandData;
  align: 'left' | 'right';
}

export const BrandSection: React.FC<BrandSectionProps> = ({ data, align }) => {
  const isLeft = align === 'left';
  
  return (
    <section id={data.id} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row items-center gap-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Visual Side */}
          <div className="w-full md:w-1/2">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl group border-4 ${isLeft ? 'border-red-50' : 'border-amber-50'}`}>
              <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity ${data.color}`}></div>
              <img 
                src={isLeft ? "https://picsum.photos/800/800?random=1" : "https://picsum.photos/800/800?random=2"} 
                alt={`${data.name} Chipset visualization`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-3xl font-bold">{data.flagshipChip.name}</h3>
                <p className="opacity-90">{data.flagshipChip.process} Process</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <div>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${isLeft ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>
                {data.philosophy}
              </div>
              <h2 className={`text-5xl font-bold mb-6 ${data.accentColor}`}>{data.name}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {data.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <Cpu className={`w-8 h-8 mb-3 ${data.accentColor}`} />
                <h4 className="font-semibold text-gray-900 mb-1">Arsitektur</h4>
                <p className="text-sm text-gray-500">{data.flagshipChip.cpu}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                <Smartphone className={`w-8 h-8 mb-3 ${data.accentColor}`} />
                <h4 className="font-semibold text-gray-900 mb-1">Grafis</h4>
                <p className="text-sm text-gray-500">{data.flagshipChip.gpu}</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2">
                <Activity className={`w-8 h-8 mb-3 ${data.accentColor}`} />
                <h4 className="font-semibold text-gray-900 mb-1">Skor Performa</h4>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${data.color}`} 
                      style={{ width: '95%' }}
                    ></div>
                  </div>
                  <span className="font-mono text-gray-700 font-bold">{data.flagshipChip.antutuScore}</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 italic border-l-2 border-gray-200 pl-4">
              "{data.history}"
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};