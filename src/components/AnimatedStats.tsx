'use client';

import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '38,000+', label: 'Motorhomes on the Road' },
  { value: 'Save', label: 'Time & Money' },
  { value: 'No Fee', label: 'Fast Impartial Quotes' },
  { value: '✓', label: 'NZ Owned & Operated' },
];

function AnimatedCounter({ value, label, isVisible }: { value: string; label: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    const numericPart = value.replace(/[^0-9]/g, '');
    if (!numericPart) {
      setDisplayValue(value);
      return;
    }

    const numericValue = parseInt(numericPart, 10);
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? '';
    const suffix = value.match(/[^0-9]+$/)?.[0] ?? '';

    let current = 0;
    const increment = Math.max(Math.ceil(numericValue / 50), 1);

    const interval = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(prefix + numericValue.toLocaleString() + suffix);
        clearInterval(interval);
      } else {
        setDisplayValue(prefix + current.toLocaleString() + suffix);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div className="text-center px-4 py-2">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        {displayValue}
      </div>
      <p className="text-slate-500 font-medium mt-1.5 text-xs sm:text-sm">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    /* Negative margin pulls the card up to overlap the hero bottom edge */
    <div className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div
        ref={containerRef}
        className="bg-white rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100 divide-y lg:divide-y-0"
      >
        {stats.map((stat, idx) => (
          <AnimatedCounter key={idx} value={stat.value} label={stat.label} isVisible={isVisible} />
        ))}
      </div>
    </div>
  );
}
