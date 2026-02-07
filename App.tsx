import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { SNAPDRAGON_DATA, MEDIATEK_DATA } from './constants';

export type ViewState = 'home' | 'gallery' | 'testimonials' | 'about';

const App = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Logika scroll hash hanya aktif di home dan setelah loading selesai
    if (currentView !== 'home' || isLoading) {
       return;
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (!hash || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Hapus tanda # di depan untuk mendapatkan id
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Jalankan saat mount/view change (tunggu render selesai)
    setTimeout(handleHashChange, 100);

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentView, isLoading]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      
      {/* Tampilkan Loading Screen jika status loading masih true */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            
            {/* Snapdragon Section */}
            <BrandSection data={SNAPDRAGON_DATA} align="left" />
            
            {/* MediaTek Section */}
            <BrandSection data={MEDIATEK_DATA} align="right" />
            
            {/* Comparison Table */}
            <ComparisonTable />
          </>
        ) : (
          /* Halaman kosong placeholder dengan animasi sederhana */
          <div className="min-h-screen bg-white w-full flex items-center justify-center animate-fade-in-up">
              <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-300 mb-2">Halaman {currentView}</h2>
                  <p className="text-gray-400">Sedang dalam pengembangan</p>
              </div>
          </div>
        )}
      </main>

      {/* Footer hanya tampil di home */}
      {currentView === 'home' && <Footer />}
    </div>
  );
};

export default App;