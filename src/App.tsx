import React, { useState, useEffect } from 'react';
import { PageRoute, Language } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ClientPortalPage from './pages/ClientPortalPage';
import LinksPage from './pages/LinksPage';
import HoursLocationPage from './pages/HoursLocationPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Sync hash routing for direct link navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = ['home', 'services', 'client-portal', 'links', 'hours-location', 'contact'];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] font-sans text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#F7F7F5]">
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        language={language}
        setLanguage={setLanguage}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={handlePageChange}
            language={language}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={handlePageChange}
            language={language}
            onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          />
        )}
        {currentPage === 'client-portal' && (
          <ClientPortalPage language={language} />
        )}
        {currentPage === 'links' && (
          <LinksPage language={language} />
        )}
        {currentPage === 'hours-location' && (
          <HoursLocationPage language={language} />
        )}
        {currentPage === 'contact' && (
          <ContactPage language={language} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        language={language}
      />

      {/* Quick Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        language={language}
      />
    </div>
  );
}
