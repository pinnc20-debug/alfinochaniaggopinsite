export const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6 hover:scale-105 transition-transform duration-300 cursor-default">
          Pin<span className="text-gray-400 font-light">site</span>
        </h3>
        <div className="flex gap-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-snapdragon hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-mediatek hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg">
                <span className="sr-only">GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 7.56 9.75.5.09.68-.22.68-.48v-1.71c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85v2.75c0 .27.18.57.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" clipRule="evenodd"></path></svg>
            </a>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pinsite. Situs penggemar tidak resmi.
        </p>
        <p className="text-gray-300 text-xs mt-2">
            Merek dagang adalah milik Qualcomm Incorporated dan MediaTek Inc.
        </p>
      </div>
    </footer>
  );
};