import React from 'react';
import { Car, Home, Globe, ArrowRight, Phone, Clock, MapPin, CheckCircle, Shield } from 'lucide-react';
import { PageRoute, Language } from '../types';
import { AGENCY_INFO, OFFICE_HOURS } from '../data/insuranceData';

interface HomePageProps {
  setCurrentPage: (page: PageRoute) => void;
  language: Language;
  onOpenQuoteModal: () => void;
}

export default function HomePage({ setCurrentPage, language, onOpenQuoteModal }: HomePageProps) {
  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="bg-[#1A1A1A] text-[#F7F7F5] py-16 lg:py-20 px-6 border-b border-[#2E2E2C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="font-mono text-xs text-[#A3A39E] tracking-widest uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#F7F7F5]"></span>
              <span>STE. ANNE, MB • EST. 1972</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white font-display">
              {language === 'en'
                ? 'Serving Ste. Anne & Surrounding Areas Since 1972'
                : 'Au Service de Sainte-Anne et des Environs Depuis 1972'}
            </h1>
            <p className="text-[#A3A39E] text-base md:text-lg leading-relaxed max-w-2xl">
              {language === 'en'
                ? 'Located on the historical Dawson Trail in the heart of Ste. Anne, Manitoba. We are a 3rd generation family business founded by Arthur & Jeanette Fiola, committed to providing professional, bilingual insurance service.'
                : 'Situé sur la route historique Dawson au cœur de Sainte-Anne, Manitoba. Entreprise familiale de 3e génération fondée par Arthur et Jeanette Fiola, engagée à offrir un service d’assurance professionnel et bilingue.'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-services-btn"
                onClick={() => navigateTo('services')}
                className="bg-[#F7F7F5] hover:bg-white text-[#1A1A1A] font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 flex items-center gap-2 transition-all border border-white focus:outline-none"
              >
                <span>{language === 'en' ? 'Insurance Services' : 'Nos Services'}</span>
                <ArrowRight size={16} />
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
                className="bg-[#242422] hover:bg-[#2E2E2C] border border-[#383835] text-[#F7F7F5] font-mono text-xs font-bold uppercase tracking-wider px-6 py-3.5 flex items-center gap-2 transition-all focus:outline-none"
              >
                <Phone size={14} className="text-[#F7F7F5]" />
                <span>{language === 'en' ? `Call ${AGENCY_INFO.contact.phone}` : `Appelez le ${AGENCY_INFO.contact.phone}`}</span>
              </a>

              <button
                id="hero-quote-btn"
                onClick={onOpenQuoteModal}
                className="text-[#A3A39E] hover:text-white font-mono text-xs font-semibold uppercase tracking-wider underline underline-offset-4 py-2 px-2"
              >
                {language === 'en' ? 'Get a quick quote online' : 'Demander une soumission'}
              </button>
            </div>

            {/* Quick Benefits Grid List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#2E2E2C] font-mono text-xs text-[#A3A39E]">
              <div className="flex items-center gap-2">
                <span className="text-[#F7F7F5] font-bold">■</span>
                <span>Official MPI Autopac Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F7F7F5] font-bold">■</span>
                <span>3rd Generation Family Team</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#F7F7F5] font-bold">■</span>
                <span>Bilingual English & French</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Overview Cards */}
          <div className="lg:col-span-5 bg-[#111110] border border-[#2E2E2C] p-7 md:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#2E2E2C] pb-3">
              <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                {language === 'en' ? 'Complete Protection' : 'Protection Complète'}
              </h3>
              <Shield size={18} className="text-[#F7F7F5]" />
            </div>

            {/* Auto Card */}
            <div
              id="hero-card-auto"
              onClick={() => navigateTo('services')}
              className="flex gap-4 items-start p-3.5 border border-[#242422] hover:border-[#383835] hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
            >
              <div className="p-2.5 bg-[#1A1A1A] border border-[#383835] text-[#F7F7F5] shrink-0 group-hover:bg-[#F7F7F5] group-hover:text-[#1A1A1A] transition-colors">
                <Car size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white group-hover:text-white transition-colors uppercase tracking-wide font-display">
                  {language === 'en' ? 'Auto & Vehicle Coverage' : 'Assurance Auto & Véhicules'}
                </h4>
                <p className="text-xs text-[#8C8C88] mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Autopac (MPI), Cars, Trucks, RVs, Off-road / ATV, and Boat Insurance.'
                    : 'Autopac (SAPM/MPI), autos, camions, VR, véhicules tout-terrain / VTT et bateaux.'}
                </p>
              </div>
            </div>

            {/* Residential Card */}
            <div
              id="hero-card-residential"
              onClick={() => navigateTo('services')}
              className="flex gap-4 items-start p-3.5 border border-[#242422] hover:border-[#383835] hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
            >
              <div className="p-2.5 bg-[#1A1A1A] border border-[#383835] text-[#F7F7F5] shrink-0 group-hover:bg-[#F7F7F5] group-hover:text-[#1A1A1A] transition-colors">
                <Home size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white group-hover:text-white transition-colors uppercase tracking-wide font-display">
                  {language === 'en' ? 'Residential & Property' : 'Résidentiel & Propriété'}
                </h4>
                <p className="text-xs text-[#8C8C88] mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Homeowners, Builders Risk, Tenants, Condo, and Commercial Contractor Packages.'
                    : 'Propriétaires, risques du constructeur, locataires, copropriété et forfaits entrepreneurs.'}
                </p>
              </div>
            </div>

            {/* Travel Health Card */}
            <div
              id="hero-card-travel"
              onClick={() => navigateTo('services')}
              className="flex gap-4 items-start p-3.5 border border-[#242422] hover:border-[#383835] hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
            >
              <div className="p-2.5 bg-[#1A1A1A] border border-[#383835] text-[#F7F7F5] shrink-0 group-hover:bg-[#F7F7F5] group-hover:text-[#1A1A1A] transition-colors">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white group-hover:text-white transition-colors uppercase tracking-wide font-display">
                  {language === 'en' ? 'Travel Health Protection' : 'Assurance Santé Voyage'}
                </h4>
                <p className="text-xs text-[#8C8C88] mt-1 leading-relaxed">
                  {language === 'en'
                    ? 'Medical (Canada/USA/Intl), Annual Travel Plans, Cancellation, & Visitors coverage.'
                    : 'Médical (Canada/É.-U./International), forfaits annuels, annulation et forfaits visiteurs.'}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="hero-portal-shortcut"
                onClick={() => navigateTo('client-portal')}
                className="w-full bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] border border-[#383835] font-mono text-xs font-semibold uppercase tracking-wider py-3 px-4 flex items-center justify-center gap-2 transition-colors"
              >
                <span>{language === 'en' ? 'Client Self-Service Portal' : 'Portail Client en Ligne'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & History Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
              {language === 'en'
                ? 'Over 50 Years of Trusted Local Experience'
                : 'Plus de 50 Ans d’Expérience Locale de Confiance'}
            </h2>
            <p className="text-[#52524E] leading-relaxed text-base">
              {language === 'en'
                ? 'Founded by Arthur & Jeanette Fiola in 1972, A & J Fiola Insurance Agency has grown into a trusted 3rd generation family business. Serving Ste. Anne and the surrounding Manitoba area for over 50 years, our focus remains on delivering accurate, bilingual (English and French), and friendly service tailored to your personal or business insurance needs.'
                : 'Fondée par Arthur et Jeanette Fiola en 1972, l’Agence d’Assurance A & J Fiola est devenue une entreprise familiale de 3e génération respectée. Desservant Sainte-Anne et la région manitobaine environnante depuis plus de 50 ans, notre mission demeure d’offrir un service rigoureux, bilingue (anglais et français) et chaleureux adapté à vos besoins.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-[#E5E5E1] p-5 shadow-xs">
                <div className="text-3xl font-mono font-bold text-[#1A1A1A]">1972</div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mt-1">
                  {language === 'en' ? 'Established in Ste. Anne' : 'Fondée à Sainte-Anne'}
                </div>
                <div className="text-xs text-[#73736E] mt-1">
                  {language === 'en' ? 'Started by Arthur & Jeanette Fiola on Dawson Road.' : 'Créée par Arthur et Jeanette Fiola sur le chemin Dawson.'}
                </div>
              </div>

              <div className="bg-white border border-[#E5E5E1] p-5 shadow-xs">
                <div className="text-3xl font-mono font-bold text-[#1A1A1A]">3rd Gen</div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mt-1">
                  {language === 'en' ? 'Family Owned & Operated' : 'Famille de 3e Génération'}
                </div>
                <div className="text-xs text-[#73736E] mt-1">
                  {language === 'en' ? 'Deep roots in the community and personal broker care.' : 'Ancrage communautaire profond et service personnalisé.'}
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="legacy-location-btn"
                onClick={() => navigateTo('hours-location')}
                className="inline-flex items-center gap-2 text-[#1A1A1A] font-mono text-xs font-bold uppercase tracking-wider hover:underline focus:outline-none"
              >
                <span>{language === 'en' ? 'Visit our Dawson Road office' : 'Visitez notre bureau sur le chemin Dawson'}</span>
                <ArrowRight size={14} />
              </button>
              <span className="text-[#E5E5E1]">•</span>
              <button
                id="legacy-partners-btn"
                onClick={() => navigateTo('links')}
                className="inline-flex items-center gap-1.5 text-[#73736E] font-mono text-xs font-bold uppercase tracking-wider hover:text-[#1A1A1A] focus:outline-none"
              >
                <span>{language === 'en' ? 'View Underwriters & Links' : 'Voir les Souscripteurs & Liens'}</span>
              </button>
            </div>
          </div>

          {/* Office Hours & Accessibility Card */}
          <div className="lg:col-span-5 bg-white border border-[#E5E5E1] p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-[#E5E5E1] pb-3">
              <h3 className="font-bold text-[#1A1A1A] text-base font-display uppercase tracking-wider flex items-center gap-2">
                <Clock className="text-[#1A1A1A]" size={18} />
                <span>{language === 'en' ? 'Office Hours & Access' : 'Horaires du Bureau & Accès'}</span>
              </h3>
            </div>

            <div className="divide-y divide-[#E5E5E1] text-xs font-mono">
              {OFFICE_HOURS.map((oh) => (
                <div key={oh.day} className="py-2.5 flex justify-between items-center">
                  <span className="text-[#73736E] uppercase tracking-wider">
                    {language === 'en' ? oh.day : oh.dayFr}
                  </span>
                  <span className={`font-bold ${oh.isClosed ? 'text-[#A3A39E]' : 'text-[#1A1A1A]'}`}>
                    {language === 'en' ? oh.hours : oh.hoursFr}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#73736E] border-t border-[#E5E5E1] space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#1A1A1A] shrink-0 mt-0.5" />
                <span className="font-medium text-[#1A1A1A]">{AGENCY_INFO.address.full}</span>
              </div>
              <div className="text-[#73736E] pl-5 text-[11px]">
                {language === 'en'
                  ? 'Wheelchair accessible entrance with dedicated client parking on Dawson Rd.'
                  : 'Entrée accessible en fauteuil roulant avec stationnement client sur le chemin Dawson.'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="bg-[#EFEFEA] py-16 px-6 border-t border-[#E5E5E1]">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] font-display">
              {language === 'en' ? 'Trusted Insurance Partners & Providers' : 'Partenaires & Fournisseurs d’Assurance Reconnus'}
            </h2>
            <p className="text-sm text-[#73736E] mt-2">
              {language === 'en'
                ? 'We partner with premier Canadian carriers and Manitoba Public Insurance to find you the best rates and coverage.'
                : 'Nous collaborons avec les principaux assureurs canadiens et la SAPM pour vous garantir les meilleurs tarifs.'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs font-bold text-[#1A1A1A]">
            <button
              onClick={() => navigateTo('links')}
              className="bg-white hover:bg-[#F7F7F5] px-5 py-4 border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all text-left"
            >
              <div className="text-[10px] font-mono text-[#8C8C88] font-normal uppercase tracking-widest">Autopac & Drivers</div>
              <div className="font-bold text-[#1A1A1A] text-sm mt-0.5">Manitoba Public Insurance (MPI)</div>
            </button>

            <button
              onClick={() => navigateTo('links')}
              className="bg-white hover:bg-[#F7F7F5] px-5 py-4 border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all text-left"
            >
              <div className="text-[10px] font-mono text-[#8C8C88] font-normal uppercase tracking-widest">Home & Property</div>
              <div className="font-bold text-[#1A1A1A] text-sm mt-0.5">Red River Mutual</div>
            </button>

            <button
              onClick={() => navigateTo('links')}
              className="bg-white hover:bg-[#F7F7F5] px-5 py-4 border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all text-left"
            >
              <div className="text-[10px] font-mono text-[#8C8C88] font-normal uppercase tracking-widest">Travel & Health</div>
              <div className="font-bold text-[#1A1A1A] text-sm mt-0.5">Blue Cross Manitoba</div>
            </button>

            <button
              onClick={() => navigateTo('links')}
              className="bg-white hover:bg-[#F7F7F5] px-5 py-4 border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all text-left"
            >
              <div className="text-[10px] font-mono text-[#8C8C88] font-normal uppercase tracking-widest">Worldwide Medical</div>
              <div className="font-bold text-[#1A1A1A] text-sm mt-0.5">TuGo Travel Insurance</div>
            </button>

            <button
              onClick={() => navigateTo('links')}
              className="bg-white hover:bg-[#F7F7F5] px-5 py-4 border border-[#E5E5E1] hover:border-[#1A1A1A] transition-all text-left"
            >
              <div className="text-[10px] font-mono text-[#8C8C88] font-normal uppercase tracking-widest">Contractor & Commercial</div>
              <div className="font-bold text-[#1A1A1A] text-sm mt-0.5">Milnco Insurance</div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

