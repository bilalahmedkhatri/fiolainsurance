import React from 'react';
import { Shield, Phone, Printer, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PageRoute, Language } from '../types';
import { AGENCY_INFO, OFFICE_HOURS } from '../data/insuranceData';

interface FooterProps {
  setCurrentPage: (page: PageRoute) => void;
  language: Language;
}

export default function Footer({ setCurrentPage, language }: FooterProps) {
  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#A3A39E] text-xs border-t border-[#2E2E2C] pt-16 pb-12 font-mono">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Agency Brand & Story */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white text-[#1A1A1A] flex items-center justify-center font-bold font-mono text-sm shrink-0 border border-white">
              <Shield size={16} className="text-[#1A1A1A]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm leading-tight font-display uppercase tracking-wider">
                {AGENCY_INFO.fullName}
              </h3>
              <p className="text-[10px] text-[#73736E] uppercase tracking-widest mt-0.5">
                {language === 'en' ? 'Ste. Anne, Manitoba • Est. 1972' : 'Sainte-Anne, Manitoba • Fondée en 1972'}
              </p>
            </div>
          </div>
          <p className="text-xs text-[#A3A39E] leading-relaxed">
            {language === 'en'
              ? 'Serving our bilingual community and surrounding areas with accurate, professional service since 1972. A 3rd generation family business founded by Arthur & Jeanette Fiola.'
              : 'Au service de notre communauté bilingue et des environs avec un service précis et professionnel depuis 1972. Entreprise familiale de 3e génération fondée par Arthur et Jeanette Fiola.'}
          </p>
          <div className="pt-2">
            <button
              id="footer-client-portal-link"
              onClick={() => navigateTo('client-portal')}
              className="inline-flex items-center gap-1.5 text-xs text-white font-bold hover:underline transition-colors uppercase tracking-wider"
            >
              <span>{language === 'en' ? 'Access Client Portal' : 'Accéder au Portail Client'}</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Column 2: Insurance Products */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest font-display border-b border-[#2E2E2C] pb-2">
            {language === 'en' ? 'Insurance Products' : 'Produits d’Assurance'}
          </h4>
          <ul className="space-y-2 text-xs text-[#A3A39E]">
            <li>
              <button
                id="footer-prod-autopac"
                onClick={() => navigateTo('services')}
                className="hover:text-white transition-colors text-left"
              >
                {language === 'en' ? 'Autopac & Vehicle Coverage (MPI)' : 'Couverture Autopac & Véhicules (SAPM)'}
              </button>
            </li>
            <li>
              <button
                id="footer-prod-residential"
                onClick={() => navigateTo('services')}
                className="hover:text-white transition-colors text-left"
              >
                {language === 'en' ? 'Residential & Homeowner Insurance' : 'Assurance Habitation & Propriétaires'}
              </button>
            </li>
            <li>
              <button
                id="footer-prod-commercial"
                onClick={() => navigateTo('services')}
                className="hover:text-white transition-colors text-left"
              >
                {language === 'en' ? 'Commercial & Contractor Packages' : 'Forfaits Commerciaux pour Entrepreneurs'}
              </button>
            </li>
            <li>
              <button
                id="footer-prod-travel"
                onClick={() => navigateTo('services')}
                className="hover:text-white transition-colors text-left"
              >
                {language === 'en' ? 'Travel Health & Super Visa Insurance' : 'Assurance Santé Voyage & Super Visa'}
              </button>
            </li>
            <li>
              <button
                id="footer-prod-recreation"
                onClick={() => navigateTo('services')}
                className="hover:text-white transition-colors text-left"
              >
                {language === 'en' ? 'RV, ATV, Snowmobile & Boat Marine' : 'VR, VTT, Motoneige & Bateaux'}
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Office Hours */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest font-display flex items-center gap-2 border-b border-[#2E2E2C] pb-2">
            <Clock size={14} className="text-white" />
            <span>{language === 'en' ? 'Office Hours' : 'Horaires d’Ouverture'}</span>
          </h4>
          <ul className="space-y-1.5 text-xs text-[#A3A39E]">
            {OFFICE_HOURS.map((oh) => (
              <li key={oh.day} className="flex justify-between items-center py-0.5 border-b border-[#2E2E2C]">
                <span className="text-[#8C8C88]">{language === 'en' ? oh.day : oh.dayFr}:</span>
                <span className={`font-medium ${oh.isClosed ? 'text-[#73736E]' : 'text-white'}`}>
                  {language === 'en' ? oh.hours : oh.hoursFr}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Details */}
        <div>
          <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest font-display border-b border-[#2E2E2C] pb-2">
            {language === 'en' ? 'Contact Details' : 'Coordonnées'}
          </h4>
          <div className="space-y-2.5 text-xs text-[#A3A39E]">
            <div className="flex items-start gap-2 text-[#D4D4D0]">
              <MapPin size={14} className="text-white shrink-0 mt-0.5" />
              <span>{AGENCY_INFO.address.full}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-white shrink-0" />
              <a
                id="footer-phone-link"
                href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
                className="text-[#D4D4D0] hover:text-white transition-colors font-medium"
              >
                Phone: {AGENCY_INFO.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#D4D4D0]">
              <Printer size={14} className="text-white shrink-0" />
              <span>Fax: {AGENCY_INFO.contact.fax}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-white shrink-0" />
              <a
                id="footer-email-link"
                href={`mailto:${AGENCY_INFO.contact.email}`}
                className="text-white hover:underline font-medium"
              >
                {AGENCY_INFO.contact.email}
              </a>
            </div>
            <div className="pt-2 text-[10px] text-[#73736E] uppercase leading-relaxed">
              {language === 'en'
                ? 'Serving Ste. Anne, Richer, Lorette, Steinbach, La Broquerie and southeastern Manitoba.'
                : 'Desservant Sainte-Anne, Richer, Lorette, Steinbach, La Broquerie et le sud-est du Manitoba.'}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-[#2E2E2C] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#73736E]">
        <div>
          © {new Date().getFullYear()} {AGENCY_INFO.fullName}. Ste. Anne, Manitoba.
        </div>
        <div className="flex items-center gap-3 text-[#A3A39E] text-[11px] uppercase tracking-wider">
          <span>MPI Autopac Agent</span>
          <span>•</span>
          <span>Red River Mutual Partner</span>
          <span>•</span>
          <span>Bilingual EN/FR</span>
        </div>
      </div>
    </footer>
  );
}
