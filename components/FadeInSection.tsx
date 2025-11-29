
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: string;
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = '0s', className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) {
         observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      } ${className}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
