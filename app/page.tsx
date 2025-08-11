"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Play,
  Sparkles,
  Camera,
  MessageCircle,
  Star,
  Flower2,
  Sunset,
  Coffee,
  Umbrella,
  Gift,
  TreePine,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function AstriLanding() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [galleryMode, setGalleryMode] = useState<"masonry" | "carousel">(
    "carousel"
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const router = useRouter();

  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const poeticRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const poeticInView = useInView(poeticRef, { once: true });

  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heartsY = useTransform(scrollY, [0, 500], [0, -100]);

  // Gallery images from /gallery/foto-{i}.png
  const galleryImages = Array.from(
    { length: 31 },
    (_, i) => `/gallery/foto-${i + 1}.png`
  );

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY < lastScrollY) {
          setShowNavbar(true); // Scrolling up
        } else {
          setShowNavbar(false); // Scrolling down
        }
      } else {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const handleNavigateToMessage = () => {
    router.push("/message");
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscKey);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset"; // Restore scroll
    };
  }, [selectedImage]);

  // Handle URL parameter for auto-scroll to gallery
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get("to");

    if (toParam === "gallery") {
      setGalleryMode("masonry");
      // Small delay to ensure the page is fully loaded
      setTimeout(() => {
        const galleryElement = document.getElementById("gallery");
        if (galleryElement) {
          galleryElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 overflow-x-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sky-200/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 py-8"
        style={{ y: heroY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-sky-200/50 to-blue-300/30" />

        {/* Parallax Hearts */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: heartsY }}
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 8, -8, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <Heart
                className={`text-sky-300/40 fill-current ${
                  i % 2 === 0
                    ? "w-4 h-4 sm:w-8 sm:h-8"
                    : "w-6 h-6 sm:w-12 sm:h-12"
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-sky-800 mb-4 sm:mb-6 font-serif flex items-center justify-center gap-4">
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-sky-600" />
              Untuk Astri
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-sky-600" />
            </h1>

            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-sky-600 mb-4 sm:mb-6 font-serif flex items-center justify-center gap-3">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
              acii - sotacii
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-sky-500" />
            </h1>

            <motion.p
              className="text-base sm:text-xl md:text-2xl text-sky-700 font-regular italic leading-relaxed px-2"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            >
              I love you just the way you are,
              <br />
              because you are you, and that’s enough for me.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 sm:mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-400 fill-current animate-pulse" />
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section
        className="py-12 sm:py-20 px-4 relative z-10 bg-white"
        id="gallery"
      >
        {/* Heart Decorations for Gallery */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
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
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 fill-current" />
            </motion.div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-sky-800 mb-4 sm:mb-6 font-serif flex items-center justify-center gap-3">
              Memories
              <Camera className="w-12 h-12 sm:w-10 sm:h-10 ps-3 text-sky-600" />
            </h2>
            <div className="flex justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                onClick={() => setGalleryMode("carousel")}
                variant="outline"
                className={`p-2 sm:p-3 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                  galleryMode === "carousel"
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-white text-sky-600 border-sky-300 hover:bg-sky-100 hover:border-sky-400"
                }`}
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                onClick={() => setGalleryMode("masonry")}
                variant="outline"
                className={`p-2 sm:p-3 rounded-full border-2 transition-all duration-200 cursor-pointer ${
                  galleryMode === "masonry"
                    ? "bg-sky-500 text-white border-sky-500"
                    : "bg-white text-sky-600 border-sky-300 hover:bg-sky-100 hover:border-sky-400"
                }`}
              >
                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </motion.div>

          {/* Masonry Layout */}
          {galleryMode === "masonry" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-4 space-y-2 sm:space-y-4"
            >
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="break-inside-avoid mb-2 sm:mb-4"
                >
                  <div
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Click indicator */}
                    <div className="absolute top-2 right-2 bg-white/80 text-sky-600 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Carousel Layout */}
          {galleryMode === "carousel" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="relative flex items-center">
                {/* Left Arrow - Mobile: Inside, Desktop: Outside */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-sky-50 text-sky-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl mx-0 sm:mx-8">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {galleryImages.map((src, index) => (
                      <div key={index} className="w-full flex-shrink-0">
                        <div
                          className="relative cursor-pointer group"
                          onClick={() => setSelectedImage(src)}
                        >
                          <Image
                            src={src || "/placeholder.svg"}
                            alt={`Slide ${index + 1}`}
                            width={800}
                            height={600}
                            className="w-full h-48 sm:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* Click indicator */}
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 text-sky-600 p-2 rounded-full">
                              <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow - Mobile: Inside, Desktop: Outside */}
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-sky-50 text-sky-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 sm:mt-6 gap-1 sm:gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? "bg-sky-500" : "bg-sky-200"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Poetic Love Section */}
      <section
        ref={poeticRef}
        className="py-16 sm:py-32 px-4 relative bg-gradient-to-r from-sky-100 to-blue-50"
      >
        {/* Parallax Love Icons */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ y: useTransform(scrollY, [0, 1000], [0, -200]) }}
        >
          {[...Array(6)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-sky-200/20 fill-current w-8 h-8 sm:w-16 sm:h-16"
              style={{
                left: `${15 + i * 15}%`,
                top: `${10 + (i % 2) * 60}%`,
              }}
            />
          ))}
        </motion.div>

        {/* Additional Heart Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-sky-300/15"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -25, 0],
                rotate: [0, 15, -15, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={poeticInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-sky-800 leading-tight font-serif px-2"
          >
            <div className="flex items-center justify-center gap-4">
              <div>
                "Only you,
                <br />
                and no one else."
              </div>
            </div>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={poeticInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 sm:mt-12"
          >
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-400 fill-current mx-auto animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={poeticInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 2 }}
            className="mt-6 sm:mt-8 flex justify-center"
          >
            <Button
              onClick={handleNavigateToMessage}
              className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              Message for you
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={poeticInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-sky-700 font-light px-2"
          >
            Disetiap waktu berjalan yang terlintas itu selalu
            <br />
            kamu seorang.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-rose-100 text-rose-800 relative z-10">
        {/* Heart Decorations for Footer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-rose-200/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 12, -12, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3.5 + Math.random() * 1.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            </motion.div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current mx-auto mb-3 sm:mb-4 text-rose-400" />
          <p className="text-rose-600 font-regular text-sm sm:text-base">
            Made with love for you
          </p>
          <p className="text-rose-500 text-xs sm:text-sm mt-1 sm:mt-2">
            © 2025 - end
          </p>
        </div>
      </footer>

      {/* Floating Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: showNavbar ? 0 : 100,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg border border-sky-200">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sky-600 hover:text-sky-800 transition-colors font-medium text-xs sm:text-sm flex items-center gap-1"
            >
              <Star className="w-3 h-3" />
              Home
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sky-600 hover:text-sky-800 transition-colors font-medium text-xs sm:text-sm flex items-center gap-1"
            >
              <Camera className="w-3 h-3" />
              Gallery
            </button>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400 fill-current" />
            <button
              onClick={handleNavigateToMessage}
              className="text-sky-600 hover:text-sky-800 transition-colors font-medium text-xs sm:text-sm flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              Message
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#poetic")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-sky-600 hover:text-sky-800 transition-colors font-medium text-xs sm:text-sm flex items-center gap-1"
            >
              <Flower2 className="w-3 h-3" />
              Love
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Gallery preview"
                width={800}
                height={600}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 border-t border-sky-100">
              <p className="text-center text-sky-700 font-medium">
                Click outside or press ESC to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
