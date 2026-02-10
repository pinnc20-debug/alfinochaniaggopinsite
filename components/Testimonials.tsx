import { ScrollReveal } from './ScrollReveal';
import { Quote, GraduationCap, PenTool } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Suara Alumni
            </h2>
            <div className="w-20 h-1.5 bg-snapdragon rounded-full mx-auto mb-6"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
              Sebuah catatan perjalanan, kenangan, dan pesan untuk masa depan dari mereka yang pernah menimba ilmu di MTsN 8 Jakarta.
            </p>
          </div>
        </ScrollReveal>

        {/* Story Card */}
        <ScrollReveal delay="0.2s">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            
            {/* Author Header */}
            <div className="bg-gray-900 p-8 md:p-10 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Quote size={120} />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-lg overflow-hidden flex-shrink-0">
                        <img 
                            src="https://res.cloudinary.com/do8tesayx/image/upload/q_auto:best/foto_2_g5pclu" 
                            alt="Foto Profil Alumni" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left pt-2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Nama Alumni / Penulis</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-1">
                            <GraduationCap size={18} />
                            <span className="text-sm md:text-base font-medium">Alumni Angkatan 20XX - MTsN 8 Jakarta</span>
                        </div>
                        <p className="text-gray-400 text-sm italic">"Tagline atau kutipan singkat favorit penulis."</p>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-12">
                
                {/* Opening decorative elements */}
                <div className="flex justify-center md:justify-start mb-8 text-snapdragon">
                    <Quote size={40} className="transform rotate-180 opacity-20" />
                </div>

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans">
                    <p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <p className="mb-6">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-mediatek pl-4">
                        Sebuah Momen yang Tak Terlupakan
                    </h4>

                    <p className="mb-6">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>

                    <p className="mb-6">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8 italic text-gray-600 text-center md:text-left">
                        "Pesan untuk adik-adik kelas: Jangan takut bermimpi. MTsN 8 Jakarta bukan hanya tempat belajar, tapi tempat kita merakit sayap untuk terbang tinggi."
                    </div>

                    <p className="mb-6">
                         At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                    </p>
                </article>

                {/* Footer / Signature */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <PenTool size={16} />
                        <span>Ditulis pada: 10 Maret 2024</span>
                    </div>
                    
                    <div className="font-handwriting text-2xl text-gray-600 font-bold rotate-[-2deg]">
                        Salam Hangat, Penulis
                    </div>
                </div>

            </div>
          </div>
        </ScrollReveal>
        
        {/* Call to Action (Optional) */}
        <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Punya cerita inspiratif selama di MTsN 8?</p>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:bg-gray-900 hover:text-white hover:border-transparent transition-all duration-300">
                Hubungi Admin untuk Berbagi
            </button>
        </div>

      </div>
    </section>
  );
};