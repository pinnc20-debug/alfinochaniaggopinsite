import { SNAPDRAGON_DATA, MEDIATEK_DATA } from '../constants';
import { CheckCircle2, ArrowRightLeft } from 'lucide-react';

export const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-12 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">Head to Head</h2>
          <p className="text-xs md:text-base text-gray-500 max-w-2xl mx-auto px-4">
            Membandingkan raksasa flagship saat ini: {SNAPDRAGON_DATA.flagshipChip.name} vs {MEDIATEK_DATA.flagshipChip.name}.
          </p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-gray-100">
          
          {/* Mobile Scroll Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 p-2 bg-yellow-50 text-xs text-yellow-700 border-b border-yellow-100">
             <ArrowRightLeft size={14} />
             <span>Geser tabel ke samping untuk melihat detail</span>
          </div>

          {/* Table Container - Scrollable on Mobile */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px] md:min-w-full">
              <div className="grid grid-cols-3 bg-gray-900 text-white text-xs md:text-sm font-semibold uppercase tracking-wider text-center sticky top-0">
                <div className="py-3 md:py-6 flex flex-col items-center justify-center border-r border-gray-800">
                  <span className="text-gray-400 text-[10px] md:text-xs mb-1">Fitur</span>
                </div>
                <div className="py-3 md:py-6 flex flex-col items-center justify-center bg-snapdragon border-r border-red-700">
                  <span className="mb-1">Snapdragon</span>
                  <span className="text-[10px] md:text-xs opacity-75 hidden sm:block">{SNAPDRAGON_DATA.flagshipChip.name}</span>
                </div>
                <div className="py-3 md:py-6 flex flex-col items-center justify-center bg-mediatek">
                  <span className="mb-1">MediaTek</span>
                  <span className="text-[10px] md:text-xs opacity-75 hidden sm:block">{MEDIATEK_DATA.flagshipChip.name}</span>
                </div>
              </div>

              <div className="divide-y divide-gray-100">
                {[
                  { label: 'Arsitektur CPU', snap: '1+5+2 (Classic)', med: '4+4 (All Big Core)' },
                  { label: 'Kecepatan Clock', snap: 'Hingga 3.3 GHz', med: 'Hingga 3.25 GHz' },
                  { label: 'GPU', snap: 'Adreno 750', med: 'Immortalis-G720' },
                  { label: 'Proses Fabrikasi', snap: 'TSMC 4nm', med: 'TSMC 4nm' },
                  { label: 'Ray Tracing', snap: 'HW Acceleration', med: 'HW Acceleration' },
                  { label: 'Prosesor AI', snap: 'Hexagon NPU', med: 'APU 790' },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
                    <div className="p-3 md:p-6 text-gray-500 font-medium text-xs md:text-sm flex items-center justify-center text-center bg-gray-50/50">
                      {row.label}
                    </div>
                    <div className="p-3 md:p-6 text-gray-900 font-semibold text-xs md:text-sm flex items-center justify-center text-center border-x border-gray-100">
                      {row.snap}
                    </div>
                    <div className="p-3 md:p-6 text-gray-900 font-semibold text-xs md:text-sm flex items-center justify-center text-center">
                      {row.med}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 md:p-8 bg-gray-50 border-t border-gray-100">
             <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-start md:items-center text-xs md:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-snapdragon flex-shrink-0" />
                    <span>Snapdragon: Stabil</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-mediatek flex-shrink-0" />
                    <span>MediaTek: Efisien</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};