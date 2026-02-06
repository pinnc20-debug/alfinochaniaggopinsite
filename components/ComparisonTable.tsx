import React from 'react';
import { SNAPDRAGON_DATA, MEDIATEK_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Head to Head</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Membandingkan raksasa flagship saat ini: {SNAPDRAGON_DATA.flagshipChip.name} vs {MEDIATEK_DATA.flagshipChip.name}.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-3 bg-gray-900 text-white text-sm font-semibold uppercase tracking-wider text-center">
            <div className="py-6 flex flex-col items-center justify-center border-r border-gray-800">
              <span className="text-gray-400 text-xs mb-1">Fitur</span>
            </div>
            <div className="py-6 flex flex-col items-center justify-center bg-snapdragon border-r border-red-700">
              <span className="mb-1">Snapdragon</span>
              <span className="text-xs opacity-75">{SNAPDRAGON_DATA.flagshipChip.name}</span>
            </div>
            <div className="py-6 flex flex-col items-center justify-center bg-mediatek">
              <span className="mb-1">MediaTek</span>
              <span className="text-xs opacity-75">{MEDIATEK_DATA.flagshipChip.name}</span>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {[
              { label: 'Arsitektur CPU', snap: '1+5+2 (Classic)', med: '4+4 (All Big Core)' },
              { label: 'Kecepatan Clock', snap: 'Hingga 3.3 GHz', med: 'Hingga 3.25 GHz' },
              { label: 'GPU', snap: 'Adreno 750', med: 'Immortalis-G720' },
              { label: 'Proses Fabrikasi', snap: 'TSMC 4nm', med: 'TSMC 4nm' },
              { label: 'Ray Tracing', snap: 'Akselerasi Hardware', med: 'Akselerasi Hardware' },
              { label: 'Prosesor AI', snap: 'Hexagon NPU', med: 'APU 790' },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                <div className="p-6 text-gray-500 font-medium text-sm flex items-center justify-center text-center">
                  {row.label}
                </div>
                <div className="p-6 text-gray-900 font-semibold text-sm flex items-center justify-center text-center border-x border-gray-100">
                  {row.snap}
                </div>
                <div className="p-6 text-gray-900 font-semibold text-sm flex items-center justify-center text-center">
                  {row.med}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-gray-50 border-t border-gray-100">
             <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-snapdragon" />
                    <span>Snapdragon unggul pada Modem & Driver GPU</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-mediatek" />
                    <span>MediaTek unggul pada Efisiensi Multi-core</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};