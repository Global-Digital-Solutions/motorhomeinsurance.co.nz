'use client';

import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '38,000+', label: 'Motorhomes in NZ' },
  { value: 'Save', label: 'Time & Money' },
  { value: 'Free', label: 'Fast Impartial Quotes' },
  { value: '✓', label: 'NZ Owned & Operated' },
];

function AnimatedCounter({ value, label, isVisible }: { value: string; label: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    // Non-numeric values (e.g. '✓', 'Free') — display immediately, no animation
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
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
        {displayValue}
      </div>
      <p className="text-slate-600 font-medium mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.unobserve(entry.target); } },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {stats.map((stat, idx) => (
        <AnimatedCounter key={idx} value={stat.value} label={stat.label} isVisible={isVisible} />
      ))}
    </div>
  );
}
