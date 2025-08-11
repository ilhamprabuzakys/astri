"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function MessagePage() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const router = useRouter();

  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true });

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heartsY = useTransform(scrollY, [0, 500], [0, -100]);

  const handleGoBack = () => {
    router.push("/");
  };

  const mainMessage = `Haloo Acii,

Aku ingin berbagi sesuatu yang saat ini kurasakan di dalam hatiku. Mungkin kata-katanya sederhana, tapi ini benar-benar tulus dari hati yang dalam.

Aku kepadamu itu bukan hanya sekedar main-main, tulus ingin menjadikan kamu yang terakhir untukku.

Ya, kamu yang terakhir. Tidak ada lagi setelahnya. Aku tahu kita masih LDR dan belum bisa bertemu sesering yang kita mau, tapi justru karena itulah aku semakin yakin dengan perasaan ini.

Setiap hari ngobrol sama kamu, setiap malam ke relapse, juga chattan sampe bener-bener ngantuk, setiap moment kecil yang kita bagi meskipun lewat layar juga virtual - semua itu bikin aku nyaman semakin yakin kalau kamu itu orangnya.

Aci, aku nggak mau ini cuma jadi hubungan biasa yang mungkin akan berlalu. Aku tau mungkin ini terkesan buru-buru aku mengatakan ini, tapi jujur aku udah ada arah kepikiran kearah sana. Ingin ini jadi tempat kita saling belajar, mengenai hubungan juga cinta dalam hidup. Cerita yang akan terus berlanjut, bahkan ketika nanti kita sudah bisa bertemu dan insyaallah bersama secara nyata.

Ketika aku bilang "kamu yang terakhir", itu bukan cuma janji kosong. Itu komitmen serius dari aku. Karena aku tahu, perasaan seperti ini nggak akan datang dua kali.

Aku tahu hubungan LDR itu nggak mudah. Pasti akan banyak rintangan, pasti akan ada saat-saat sulit, pasti akan ada momen dimana kita kangen tapi nggak bisa ketemu, ada masalah entah berupa jealousy, trust issue atau apapun itu. Tapi aku siap menghadapi semua itu bersamamu, aku ingin kamu dapat merasa nyaman denganku.

Aku ingin jadi orang yang selalu ada buat kamu, meskipun cuma lewat chat atau mungkin nanti sampai video call. Aku ingin jadi orang yang kamu percaya, membuat moodmu baik setiap harinya. Aku ingin jadi tempat kamu bercerita tentang hari-harimu, keluh kesah dan semuanya.

Aci, aku nggak sempurna. Aku punya kekurangan dan kerap kali membuat banyak kesalahan. Tapi aku berjanji akan terus belajar dan improve terus untuk menjadi lebih baik buat kamu. Aku akan berusaha jadi pasangan yang layak buat mendampingi kamu.

Cintaku sama kamu ini tulus, Ci. Bukan cuma perasaan sesaat yang bakal hilang. Ini perasaan yang sudah mengakar cukup dalam, yang bikin aku yakin kalau kamu itu orangnya.

Aku nggak tahu kapan kita bisa ketemu dan bersama secara nyata. Tapi aku yakin suatu saat nanti kita pasti bisa. Dan ketika hari itu tiba, aku ingin kamu tahu kalau perasaan aku nggak akan berubah.

Setiap hari bersamamu, meskipun cuma virtual, itu udah bikin aku bahagia. Setiap tawa yang kita bagi, setiap cerita yang kita tukar, setiap mimpi yang kita bicarakan, kisah hidup dan - semua itu berharga banget buat aku.

Jarak memang memisahkan kita secara fisik, tapi nggak bisa memisahkan hati kita. Cintaku sama kamu nggak akan berkurang karena jarak. Malah semakin hari semakin kuat.

Jadi Acii, maukah kamu menerima perasaanku ini? meskipun aku tau kedepannya pasti bakal ada rintangan, tapi jika itu bersamamu, kita pasti bisa dan kita hadapi bersama.

Acii, kamu engga perlu jawab itu sekarang. Semua ini aku buat sebagai bentuk komitmen juga dedikasi aku kepadamu.

Iyaaa ci, sebelum-sebelumnya aku memang seperti yang kamu pikirkan, suka friendly terhadap cewe lain. Namun jujur aja itu sebelum ketemu kamu ci, awalnya aku ragu untuk mengungkapkan perasaan ini ke kamu, karena sejak awal aku takut kita jadi canggung dan lain halnya, makanya meski setelah ketemu kamu, terkadang aku menemui cewe lain.

Ingin mencoba, mengubur perasaan ini, namun apalah daya. Kecintaanku terlalu kuat, yang sering kali bahkan terekspos secara tidak sadar. The moment I realize that I can't hold onto this feeling anymore, aku tahu bahwa ini saatnya aku ungkapkan perasaan ini padamu.

Aku cinta kamu dengan tulus dan sepenuh hati. Aku cinta kamu hari ini, besok, dan seterusnyaa.

Bagiku kamu yang terakhir buat aku, Ci. Dan aku berharap aku juga bisa jadi yang terakhir buat kamu.

Dengan cinta yang tulus,
Yang selalu sayang sama kamu tanpa alasan


Ilham`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 overflow-x-hidden">
      {/* Fixed Back Button */}
      <motion.div
        className="fixed top-4 sm:top-8 left-4 sm:left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Button
          onClick={handleGoBack}
          variant="outline"
          className="bg-white/90 backdrop-blur-sm border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300 rounded-full p-2 sm:p-3 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </motion.div>

      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200/25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-3 h-3 sm:w-5 sm:h-5 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-8"
        style={{ y: heroY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 to-pink-300/30" />

        {/* Parallax Hearts */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: heartsY }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${8 + i * 8}%`,
                top: `${15 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <Heart
                className={`text-rose-300/35 fill-current ${
                  i % 3 === 0
                    ? "w-4 h-4 sm:w-6 sm:h-6"
                    : i % 3 === 1
                    ? "w-6 h-6 sm:w-10 sm:h-10"
                    : "w-5 h-5 sm:w-8 sm:h-8"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-rose-800 mb-4 sm:mb-6 font-serif leading-tight">
              For You
              <br />
              My Sweetheart
            </h1>
            <motion.p
              className="text-base sm:text-xl md:text-2xl text-rose-700 font-light leading-relaxed italic px-2"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Pesan terdalam dari hati yang mencintaimu,
              <br />
              tentang komitmenku padamu
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-500 fill-current" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Message Content Section */}
      <section
        ref={contentRef}
        className="py-12 sm:py-20 px-4 relative z-10 bg-white/50 backdrop-blur-sm"
      >
        {/* Heart Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-200/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 12, -12, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12 sm:mb-16"
          >
            <div className="bg-gradient-to-br from-white/90 to-rose-50/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-rose-100">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-800 mb-6 sm:mb-8 text-center font-serif"
              >
                Pesanku untukmu
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-sm sm:text-lg md:text-xl text-rose-700 leading-relaxed whitespace-pre-line text-justify font-light"
              >
                {mainMessage}
              </motion.div>

              {/* Decorative Hearts */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center mt-8 sm:mt-12 gap-2 sm:gap-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  >
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 relative bg-gradient-to-r from-sky-50 to-blue-50">
        {/* Heart Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-sky-200/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sky-800 mb-4 sm:mb-6 font-serif">
              Lihat Beberapa Memory Kita
            </h2>
            <p className="text-base sm:text-xl text-sky-700 font-light leading-relaxed max-w-2xl mx-auto">
              Kumpulan momen indah yang telah kita bagikan bersama,
              <br />
              tersimpan dalam galeri kenangan kita
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <Button
              onClick={() => router.push("/?to=gallery")}
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-base sm:text-lg font-medium flex items-center gap-3"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Lihat Gallery
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 sm:mt-12"
          >
            <div className="flex justify-center gap-2 sm:gap-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-sky-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 px-4 bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 relative z-10">
        {/* Heart Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-300/25"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 fill-current mx-auto mb-4 sm:mb-6 text-rose-500" />
            <p className="text-base sm:text-xl text-rose-600 font-light mb-3 sm:mb-4">
              Dengan komitmen dan cinta yang abadi
            </p>
            <p className="text-sm sm:text-base text-rose-500 italic">
              Selamanya untukmu, Astri tersayang
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
