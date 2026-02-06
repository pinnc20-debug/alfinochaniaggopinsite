import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-60"></div>

      <div className="z-10 text-center max-w-4xl px-4 animate-fade-in-up">
        <h2 className="text-sm md:text-base font-semibold tracking-widest text-gray-500 uppercase mb-4">
          Pertarungan Supremasi Seluler
        </h2>
        <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
          <span className="text-snapdragon inline-block hover:scale-105 transition-transform cursor-default">Snapdragon</span>
          <span className="mx-4 text-gray-300 font-thin italic">vs</span>
          <span className="text-mediatek inline-block hover:scale-105 transition-transform cursor-default">MediaTek</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
          Jelajahi arsitektur, performa, dan inovasi di balik dua raksasa yang mentenagai smartphone dunia.
        </p>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <Link to="/snapdragon" className="text-gray-400 hover:text-gray-900 transition-colors">
          <ChevronDown size={32} />
        </Link>
      </div>
    </div>
  );
};