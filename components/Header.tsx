import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 z-10 hover:opacity-90 transition-opacity">
            <img 
              src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-vector-star-icon-png-image_5169247.jpg" 
              alt="Pinsite Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <span className="font-bold text-xl tracking-tight text-gray-900 hidden sm:block">
              Pin<span className="text-gray-400 font-light">site</span>
            </span>
          </Link>
          
          {/* Centered Capsule Navigation */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center p-1.5 bg-gray-100/80 rounded-full border border-gray-200/50 shadow-sm backdrop-blur-sm">
               <Link 
                 to="/snapdragon" 
                 className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-white hover:text-snapdragon hover:shadow-md transition-all duration-300"
               >
                 Snapdragon
               </Link>
               <Link 
                 to="/mediatek" 
                 className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-white hover:text-mediatek hover:shadow-md transition-all duration-300"
               >
                 MediaTek
               </Link>
               <Link 
                 to="/comparison" 
                 className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-md transition-all duration-300"
               >
                 Perbandingan
               </Link>
            </div>
          </div>

          {/* Right Side / Mobile Menu Placeholder */}
          <div className="flex items-center space-x-4 z-10">
             <div className="md:hidden p-2 rounded-full bg-gray-50 text-gray-600">
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
             </div>
             <a href="https://github.com" target="_blank" rel="noreferrer" className="hidden md:flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-900 hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 7.56 9.75.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.75c0 .27.18.57.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"></path></svg>
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};