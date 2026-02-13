import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
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
        {currentView === 'home' && (
          <>
            <Hero />
            
            {/* Snapdragon Section */}
            <BrandSection data={SNAPDRAGON_DATA} align="left" />
            
            {/* MediaTek Section */}
            <BrandSection data={MEDIATEK_DATA} align="right" />
            
            {/* Comparison Table */}
            <ComparisonTable />
          </>
        )}

        {currentView === 'gallery' && <Gallery />}

        {currentView === 'testimonials' && <Testimonials />}

        {currentView === 'about' && <About />}
      </main>

      {/* Footer tampil di semua halaman */}
      <Footer />
    </div>
  );
};

export default App;