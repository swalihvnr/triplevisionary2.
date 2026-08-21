import { useState, useEffect } from 'react';

// Layout components
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';

// Pages
import PortfolioPage from './pages/PortfolioPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Addon from './pages/Addon';
import Asset from './pages/Asset';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handlePageChange = (targetPath) => {
    const destinationPath = targetPath === '/' ? '/show' : targetPath;
    const currentStdPath = currentPath === '/' ? '/show' : currentPath;

    if (currentStdPath === destinationPath) return;

    window.history.pushState({}, '', destinationPath);
    setCurrentPath(destinationPath);
    window.scrollTo(0, 0);
  };

  const getPageFromPath = (path) => {
    const normalizedPath = path === '/' ? '/show' : path;
    
    switch (normalizedPath) {
      case '/show':
        return <PortfolioPage onPageChange={handlePageChange} />;
      case '/addon':
        return <Addon onPageChange={handlePageChange} />;
      case '/assets':
        return <Asset onPageChange={handlePageChange} />;
      case '/services':
        return <ServicesPage onPageChange={handlePageChange} />;
      case '/testimonials':
        return <TestimonialsPage onPageChange={handlePageChange} />;
      case '/contact':
        return <ContactPage />;
      default:
        return <PortfolioPage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="relative min-h-screen select-none overflow-hidden">
      <BackgroundEffects />
      <Navbar currentPath={currentPath} onPageChange={handlePageChange} />

      <div className="relative z-10">
        <main>
          {getPageFromPath(currentPath)}
        </main>
        <Footer />
      </div>
    </div>
  );
}
