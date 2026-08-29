import React, { useState } from 'react';
import { Car, Home, Globe, ShieldCheck, ArrowRight, Phone, CheckCircle2, ChevronRight, Calculator, FileText } from 'lucide-react';
import { PageRoute, Language } from '../types';
import { AGENCY_INFO, SERVICE_CATEGORIES } from '../data/insuranceData';

interface ServicesPageProps {
  setCurrentPage: (page: PageRoute) => void;
  language: Language;
  onOpenQuoteModal: () => void;
}

export default function ServicesPage({ setCurrentPage, language, onOpenQuoteModal }: ServicesPageProps) {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredCategories = activeCategoryFilter === 'all'
    ? SERVICE_CATEGORIES
    : SERVICE_CATEGORIES.filter((c) => c.id === activeCategoryFilter);

  return (
    <div className="bg-[#F7F7F5] min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Page Title Header (No chips above heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E5E5E1]">
          <div className="space-y-2 max-w-3xl">
            <div className="font-mono text-xs text-[#73736E] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
              <span>COVERAGE CATALOGUE</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
              {language === 'en' ? 'Our Insurance Services' : 'Nos Services d’Assurance'}
            </h1>
            <p className="text-[#73736E] text-base leading-relaxed">
              {language === 'en'
                ? 'Comprehensive coverage tailored for individuals, families, and businesses in Ste. Anne and Manitoba.'
                : 'Une couverture complète adaptée aux particuliers, aux familles et aux entreprises de Sainte-Anne et du Manitoba.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-4 py-2.5 font-bold transition-colors border ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#1A1A1A] text-[#F7F7F5] border-[#1A1A1A]'
                  : 'bg-white border-[#E5E5E1] text-[#73736E] hover:text-[#1A1A1A] hover:bg-[#F7F7F5]'
              }`}
            >
              {language === 'en' ? 'All Services' : 'Tous'}
            </button>
            <button
              onClick={() => setActiveCategoryFilter('auto')}
              className={`px-4 py-2.5 font-bold transition-colors border ${
                activeCategoryFilter === 'auto'
                  ? 'bg-[#1A1A1A] text-[#F7F7F5] border-[#1A1A1A]'
                  : 'bg-white border-[#E5E5E1] text-[#73736E] hover:text-[#1A1A1A] hover:bg-[#F7F7F5]'
              }`}
            >
              Autopac / Auto
            </button>
            <button
              onClick={() => setActiveCategoryFilter('residential')}
              className={`px-4 py-2.5 font-bold transition-colors border ${
                activeCategoryFilter === 'residential'
                  ? 'bg-[#1A1A1A] text-[#F7F7F5] border-[#1A1A1A]'
                  : 'bg-white border-[#E5E5E1] text-[#73736E] hover:text-[#1A1A1A] hover:bg-[#F7F7F5]'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveCategoryFilter('travel')}
              className={`px-4 py-2.5 font-bold transition-colors border ${
                activeCategoryFilter === 'travel'
                  ? 'bg-[#1A1A1A] text-[#F7F7F5] border-[#1A1A1A]'
                  : 'bg-white border-[#E5E5E1] text-[#73736E] hover:text-[#1A1A1A] hover:bg-[#F7F7F5]'
              }`}
            >
              Travel Health
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.iconName === 'car' ? Car : category.iconName === 'home' ? Home : Globe;
            return (
              <div
                key={category.id}
                id={`service-card-${category.id}`}
                className="bg-white border border-[#E5E5E1] p-8 shadow-xs flex flex-col justify-between hover:border-[#1A1A1A] transition-all"
              >
                <div className="space-y-5">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-[#F7F7F5] flex items-center justify-center border border-[#1A1A1A]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#1A1A1A] font-display uppercase tracking-wide">
                      {language === 'en' ? category.title : category.titleFr}
                    </h2>
                    <p className="text-xs text-[#73736E] mt-1.5 leading-relaxed">
                      {language === 'en' ? category.description : category.descriptionFr}
                    </p>
                  </div>

                  <ul className="space-y-3.5 text-[#52524E] text-sm pt-2 border-t border-[#E5E5E1]">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="space-y-1">
                        <div className="flex items-start gap-2 text-[#1A1A1A] font-bold text-xs uppercase tracking-wider font-mono">
                          <ShieldCheck size={14} className="text-[#1A1A1A] shrink-0 mt-0.5" />
                          <span>{language === 'en' ? item.name : item.nameFr}</span>
                        </div>
                        <p className="text-xs text-[#73736E] pl-5 leading-relaxed">
                          {language === 'en' ? item.details : item.detailsFr}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E5E1] flex flex-col sm:flex-row gap-2 font-mono text-xs uppercase tracking-wider">
                  <button
                    id={`service-quote-${category.id}`}
                    onClick={onOpenQuoteModal}
                    className="w-full bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold py-3 px-4 flex items-center justify-center gap-1.5 transition-colors border border-[#1A1A1A]"
                  >
                    <Calculator size={13} />
                    <span>{language === 'en' ? 'Get Quote' : 'Soumission'}</span>
                  </button>
                  <button
                    id={`service-inquire-${category.id}`}
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-[#F7F7F5] hover:bg-[#EFEFEA] text-[#1A1A1A] font-bold py-3 px-4 flex items-center justify-center gap-1 border border-[#E5E5E1] transition-colors"
                  >
                    <span>{language === 'en' ? 'Inquire' : 'Consulter'}</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Autopac & Claims Advisory Banner */}
        <div className="bg-[#1A1A1A] text-[#F7F7F5] p-8 md:p-10 border border-[#2E2E2C] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="font-mono text-xs text-[#A3A39E] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#F7F7F5]"></span>
              <span>MPI ACCREDITED</span>
            </div>
            <h3 className="text-2xl font-bold text-white font-display tracking-tight">
              {language === 'en'
                ? 'Need Help with Manitoba Public Insurance (Autopac)?'
                : 'Besoin d’Aide avec la Société d’Assurance Publique du Manitoba (Autopac) ?'}
            </h3>
            <p className="text-[#A3A39E] text-sm leading-relaxed max-w-2xl">
              {language === 'en'
                ? 'As an authorized MPI agent, we handle vehicle registrations, license renewals, enhanced driver licenses, out-of-province transfers, and deductible buy-downs. Stop by our Dawson Road office or give our team a call.'
                : 'En tant qu’agent agréé de la SAPM / MPI, nous traitons les immatriculations, les renouvellements de permis, les transferts hors province et les réductions de franchise. Rendez-vous à notre bureau de Sainte-Anne.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-4 font-mono text-xs text-[#A3A39E]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#F7F7F5]">■</span> Walk-ins Welcome
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#F7F7F5]">■</span> English & French Service
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#F7F7F5]">■</span> Instant Processing
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 font-mono text-xs uppercase tracking-wider">
            <a
              id="services-call-direct"
              href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
              className="bg-[#F7F7F5] hover:bg-white text-[#1A1A1A] text-center font-bold py-3.5 px-5 flex items-center justify-center gap-2 transition-colors border border-white"
            >
              <Phone size={14} />
              <span>{AGENCY_INFO.contact.phone}</span>
            </a>
            <button
              id="services-open-portal"
              onClick={() => {
                setCurrentPage('client-portal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#242422] hover:bg-[#2E2E2C] border border-[#383835] text-[#F7F7F5] text-center font-bold py-3.5 px-5 flex items-center justify-center gap-2 transition-colors"
            >
              <FileText size={14} className="text-[#F7F7F5]" />
              <span>{language === 'en' ? 'Client Portal' : 'Portail Client'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

