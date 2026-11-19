'use client';

import React, { useEffect, useRef, useState } from 'react';

export type ScrollAnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'scale-up'
  | 'blur-in';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  animation?: ScrollAnimationType;
  threshold?: number;
  rootMargin?: string;
}

export function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  animation = 'fade-up',
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback if browser doesn't support IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              const timer = setTimeout(() => {
                setRevealed(true);
              }, delayMs);
              observer.unobserve(entry.target);
              return () => clearTimeout(timer);
            } else {
              setRevealed(true);
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delayMs, threshold, rootMargin]);

  const animationClass = `reveal-${animation}`;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delayMs > 0 ? `${delayMs}ms` : undefined,
      }}
      className={`reveal-base ${animationClass} ${revealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
