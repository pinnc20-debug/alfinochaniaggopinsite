import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { SNAPDRAGON_DATA, MEDIATEK_DATA } from './constants';

export type ViewState = 'home' | 'gallery' | 'testimonials' | 'about';

const App = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  useEffect(() => {
    // Logika scroll hash hanya aktif di home
    if (currentView !== 'home') {
       window.scrollTo(0, 0);
       return;
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (!hash || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Hapus tanda # di depan untuk mendapatkan id (contoh: "#snapdragon" -> "snapdragon")
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Jalankan saat mount untuk menangani initial hash
    handleHashChange();

    // Listen untuk perubahan hash
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
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
          /* Halaman kosong sesuai permintaan user */
          <div className="min-h-screen bg-white w-full"></div>
        )}
      </main>

      {/* Footer hanya tampil di home */}
      {currentView === 'home' && <Footer />}
    </div>
  );
};

export default App;