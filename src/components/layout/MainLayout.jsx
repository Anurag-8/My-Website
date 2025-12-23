import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      
      <button
        className={`scroll-to-top ${showScroll ? 'show' : ''}`}
        onClick={scrollTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default MainLayout;
