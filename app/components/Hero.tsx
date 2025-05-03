'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [images, setImages] = useState<{ id: number; src: string; alt: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/hero-images');
        const data = await response.json();
        setImages(data);
        setNextIndex(1);
      } catch (error) {
        console.error('Error fetching hero images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      if (isAutoSliding) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setNextIndex((prev) => (prev + 1) % images.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length, isAutoSliding]);

  const handleImageClick = () => {
    setIsAutoSliding(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setNextIndex((prev) => (prev + 1) % images.length);
  };

  if (!images.length) {
    return (
      <section className="relative h-[calc(100vh-4rem)] bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="hero-text">Lee Barrowcliff</h1>
          <p className="text-2xl md:text-3xl font-marcellus tracking-wider">
            Photography
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative h-[calc(100vh-4rem)] overflow-hidden cursor-pointer flex items-center justify-center"
      onClick={handleImageClick}
    >
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          key={nextIndex}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="hero-text">Lee Barrowcliff</h1>
        <p className="text-2xl md:text-3xl font-marcellus tracking-wider">
          Photography
        </p>
      </div>
    </section>
  );
} 