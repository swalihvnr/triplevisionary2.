import React, { useEffect } from 'react';
import Contact from '../sections/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto px-6 max-w-6xl text-center mb-16 relative z-10" />
      <Contact />
    </div>
  );
}
