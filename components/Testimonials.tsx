import { ScrollReveal } from './ScrollReveal';
import { Quote, GraduationCap, PenTool } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="min-h-screen bg-gray-50 pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
                    {/* Foto Profil Dihapus Sesuai Permintaan */}
                    
                    <div className="text-center md:text-left pt-2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Alfino Chaniaggo</h3>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-1">
                            <GraduationCap size={18} />
                            <span className="text-sm md:text-base font-medium">MTsN 8 Jakarta</span>
                        </div>
                        {/* Tagline Dihapus Sesuai Permintaan */}
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
                        Masih teringat jelas di ingatan saya saat pertama kali melangkah masuk ke gerbang MTsN 8 Jakarta. Jujur, saat itu perasaan saya didominasi oleh rasa takut. Saya khawatir tidak bisa beradaptasi dengan lingkungan baru, takut merasa asing, dan cemas tidak bisa mengikuti ritme di sini.
                    </p>

                    <p className="mb-6">
                        Namun, semua kekhawatiran itu perlahan sirna ketika saya bertemu dengan Favian, teman pertama saya. Momen perkenalan itu menjadi hal yang paling membekas, karena dari situlah saya mulai merasa punya tempat dan keberanian untuk menjalani hari-hari di madrasah ini.
                    </p>

                    <h4 className="text-xl font-bold text-gray-900 mt-8 mb-4 border-l-4 border-mediatek pl-4">
                        Perjuangan dan Dukungan
                    </h4>

                    <p className="mb-6">
                        Perjalanan saya tidak selalu mulus. Di masa-masa awal, saya sempat merasa kesulitan, terutama dalam beradaptasi dengan pelajaran-pelajaran agama yang menuntut pemahaman lebih. Namun, saya bersyukur dikelilingi oleh orang-orang baik. Semua guru di MTsN 8 Jakarta sangat berjasa bagi saya; kesabaran mereka membimbing saya yang awalnya 'tidak bisa' menjadi 'bisa' adalah hal yang tak ternilai harganya.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 my-8 italic text-gray-600 text-center md:text-left">
                        "Pesan untuk adik-adik kelas: Selesaikan tugas secepat mungkin. Jangan biasakan menunda-nunda pekerjaan. Ketika kita disiplin menyelesaikan kewajiban, masa-masa sekolah akan terasa jauh lebih ringan dan menyenangkan."
                    </div>

                    <p className="mb-6">
                         Terima kasih MTsN 8 Jakarta, telah mengubah rasa takut saya menjadi sebuah cerita keberanian.
                    </p>
                </article>

                {/* Footer / Signature */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <PenTool size={16} />
                        <span>Ditulis pada: 10 Maret 2024</span>
                    </div>
                    
                    <div className="font-handwriting text-2xl text-gray-600 font-bold rotate-[-2deg]">
                        Salam Hangat, Alfino Chaniaggo
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