import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandSection } from './components/BrandSection';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { SNAPDRAGON_DATA, MEDIATEK_DATA } from './constants';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Logika scroll untuk HashRouter
    // Jika path adalah /snapdragon, akan scroll ke elemen dengan id 'snapdragon'
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Hapus slash di depan untuk mendapatkan id (contoh: "/snapdragon" -> "snapdragon")
      const id = pathname.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <Header />
      
      <main>
        <Hero />
        
        {/* Snapdragon Section */}
        <BrandSection data={SNAPDRAGON_DATA} align="left" />
        
        {/* MediaTek Section */}
        <BrandSection data={MEDIATEK_DATA} align="right" />
        
        {/* Comparison Table */}
        <ComparisonTable />
      </main>

      <Footer />
    </div>
  );
};

export default App;