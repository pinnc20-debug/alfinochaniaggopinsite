import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children?: ReactNode;
  animation?: 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: string; // e.g. "0.2s"
  className?: string;
  threshold?: number; // 0 to 1
}

export const ScrollReveal = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = '0s', 
  className = '',
  threshold = 0.1 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to prevent re-animating
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  // Mapping nama animasi ke kelas Tailwind yang kita definisikan di index.html
  const animationClass = isVisible 
    ? `animate-${animation}` 
    : 'opacity-0'; // Mulai dengan invisible

  return (
    <div
      ref={domRef}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};