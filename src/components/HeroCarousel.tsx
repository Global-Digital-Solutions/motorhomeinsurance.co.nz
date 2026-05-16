'use client';

import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  { url: '/hero-motorhome-1.jpg', alt: 'Motorhome parked in a stunning New Zealand landscape' },
  { url: '/hero-motorhome-2.jpg', alt: 'Motorhome on a scenic New Zealand road trip' },
  { url: '/hero-motorhome-3.jpg', alt: 'Modern motorhome adventure in New Zealand' },
  { url: '/hero-motorhome-4.jpg', alt: 'Motorhome touring the New Zealand countryside' },
  { url: '/hero-motorhome-5.jpg', alt: 'Motorhome parked at a New Zealand freedom camping spot' },
  { url: '/hero-motorhome-6.jpg', alt: 'Motorhome on an open New Zealand highway' },
  { url: '/hero-motorhome-7.jpg', alt: 'Self-contained motorhome in New Zealand' },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, goToSlide]);

  return (
    <>
      {/* Background images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 60%',
            opacity: currentSlide === index ? 1 : 0,
          }}
          aria-hidden={currentSlide !== index}
        />
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/30" />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'w-8 bg-sky-400'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}
