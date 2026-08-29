import React, { useState } from 'react';
import { Phone, MapPin, Menu, X, Globe, Shield, Clock, ChevronRight } from 'lucide-react';
import { PageRoute, Language } from '../types';
import { AGENCY_INFO } from '../data/insuranceData';

interface NavbarProps {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
  onOpenQuoteModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageRoute; labelEn: string; labelFr: string; isHighlight?: boolean }[] = [
    { id: 'home', labelEn: 'Home', labelFr: 'Accueil' },
    { id: 'services', labelEn: 'Services', labelFr: 'Services' },
    { id: 'client-portal', labelEn: 'Client Portal (New)', labelFr: 'Portail Client (Nouveau)', isHighlight: true },
    { id: 'links', labelEn: 'Partners & Links', labelFr: 'Partenaires & Liens' },
    { id: 'hours-location', labelEn: 'Map & Hours', labelFr: 'Carte & Horaires' },
    { id: 'contact', labelEn: 'Contact', labelFr: 'Contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#1A1A1A] text-[#F7F7F5] border-b border-[#2E2E2C]">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#111110] px-4 sm:px-6 py-2 text-xs border-b border-[#242422]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 font-mono text-[11px] tracking-wide">
            <span className="flex items-center gap-1.5 text-[#A3A39E]">
              <MapPin size={12} className="text-[#F7F7F5] shrink-0" />
              <span>{AGENCY_INFO.address.full}</span>
            </span>
            <a
              id="topbar-phone-link"
              href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
              className="flex items-center gap-1.5 text-[#F7F7F5] hover:text-white transition-colors"
            >
              <Phone size={12} className="text-[#F7F7F5] shrink-0" />
              <span className="font-bold">{AGENCY_INFO.contact.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-[#A3A39E]">
              <Globe size={12} className="text-[#F7F7F5]" />
              <span>{language === 'en' ? 'Bilingual: EN / FR' : 'Bilingue : EN / FR'}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center bg-[#1A1A1A] border border-[#383835] text-[11px]">
              <button
                id="lang-toggle-en"
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 font-bold transition-colors uppercase tracking-wider ${
                  language === 'en' ? 'bg-[#F7F7F5] text-[#1A1A1A]' : 'text-[#8C8C88] hover:text-[#F7F7F5]'
                }`}
              >
                EN
              </button>
              <button
                id="lang-toggle-fr"
                type="button"
                onClick={() => setLanguage('fr')}
                className={`px-2 py-0.5 font-bold transition-colors uppercase tracking-wider ${
                  language === 'fr' ? 'bg-[#F7F7F5] text-[#1A1A1A]' : 'text-[#8C8C88] hover:text-[#F7F7F5]'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          id="navbar-brand-logo"
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#F7F7F5] text-[#1A1A1A] flex items-center justify-center border border-[#E5E5E1] shrink-0 group-hover:bg-white transition-colors">
            <Shield size={20} className="text-[#1A1A1A]" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-[#F7F7F5] font-display">
              {AGENCY_INFO.name}
            </span>
            <span className="text-[10px] font-mono font-medium text-[#A3A39E] tracking-widest uppercase">
              {AGENCY_INFO.tagline}
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#A3A39E]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => navigateTo(link.id)}
                className={`transition-colors relative py-1.5 focus:outline-none ${
                  isActive
                    ? 'text-[#F7F7F5] font-bold'
                    : link.isHighlight
                    ? 'text-[#F7F7F5] hover:text-white'
                    : 'text-[#A3A39E] hover:text-[#F7F7F5]'
                }`}
              >
                {language === 'en' ? link.labelEn : link.labelFr}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F7F7F5]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-quick-quote-btn"
            onClick={onOpenQuoteModal}
            className="bg-[#242422] hover:bg-[#2E2E2C] text-[#F7F7F5] border border-[#383835] text-xs font-mono font-semibold uppercase tracking-wider px-3.5 py-2.5 transition-all"
          >
            {language === 'en' ? 'Quick Quote' : 'Soumission'}
          </button>
          <button
            id="nav-contact-btn"
            onClick={() => navigateTo('contact')}
            className="bg-[#F7F7F5] hover:bg-white text-[#1A1A1A] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 transition-all flex items-center gap-1.5"
          >
            <span>{language === 'en' ? 'Contact' : 'Nous Joindre'}</span>
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-quick-quote-btn"
            onClick={onOpenQuoteModal}
            className="bg-[#F7F7F5] text-[#1A1A1A] text-xs font-mono font-bold uppercase px-2.5 py-1.5"
          >
            Quote
          </button>
          <button
            id="mobile-menu-toggle-btn"
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#F7F7F5] hover:bg-[#2E2E2C] border border-[#383835] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111110] border-b border-[#2E2E2C] px-6 py-4 space-y-2 text-xs font-mono uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => navigateTo(link.id)}
                className={`block w-full text-left py-2.5 px-3 transition-colors border-l-2 ${
                  isActive
                    ? 'border-[#F7F7F5] bg-[#1A1A1A] text-[#F7F7F5] font-bold'
                    : 'border-transparent text-[#A3A39E] hover:bg-[#1A1A1A] hover:text-[#F7F7F5]'
                }`}
              >
                {language === 'en' ? link.labelEn : link.labelFr}
              </button>
            );
          })}

          <div className="pt-3 border-t border-[#2E2E2C] flex flex-col gap-2">
            <button
              id="drawer-quote-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#242422] hover:bg-[#2E2E2C] text-[#F7F7F5] border border-[#383835] text-center py-2.5 font-bold uppercase tracking-wider"
            >
              {language === 'en' ? 'Get a Free Quote' : 'Obtenir une Soumission'}
            </button>
            <a
              id="drawer-phone-btn"
              href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
              className="w-full bg-[#F7F7F5] hover:bg-white text-[#1A1A1A] text-center py-2.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              <span>{AGENCY_INFO.contact.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
