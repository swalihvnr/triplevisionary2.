import { useEffect } from 'react';
import Contact from '../sections/Contact';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Contact />
    </div>
  );
}
