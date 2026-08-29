import React from 'react';
import { MapPin, Phone, Printer, Mail, Clock, Navigation, Compass, CheckCircle2, Car } from 'lucide-react';
import { Language } from '../types';
import { AGENCY_INFO, OFFICE_HOURS } from '../data/insuranceData';

interface HoursLocationPageProps {
  language: Language;
}

export default function HoursLocationPage({ language }: HoursLocationPageProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('A & J Fiola Insurance Agency, 30B Dawson Rd, Ste Anne, MB R5H 1B3')}`;

  return (
    <div className="bg-[#F7F7F5] min-h-screen py-16 px-6 text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Title (No chips above heading) */}
        <div>
          <div className="font-mono text-xs text-[#73736E] uppercase tracking-widest flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
            <span>FIND OUR BROKERAGE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
            {language === 'en' ? 'Office Location & Hours' : 'Emplacement du Bureau & Horaires'}
          </h1>
          <p className="text-[#73736E] mt-2 text-base leading-relaxed">
            {language === 'en'
              ? 'Visit us at our office on Dawson Road in Ste. Anne, Manitoba.'
              : 'Venez nous rencontrer à notre bureau sur le chemin Dawson à Sainte-Anne, Manitoba.'}
          </p>
        </div>

        {/* Contact & Hours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Contact & Address */}
          <div className="bg-white border border-[#E5E5E1] p-8 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[#1A1A1A] font-display uppercase tracking-wide border-b border-[#E5E5E1] pb-3">
                {language === 'en' ? 'Contact & Address' : 'Coordonnées & Adresse'}
              </h2>

              <div className="space-y-4 text-xs font-mono text-[#52524E]">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#1A1A1A] shrink-0 mt-0.5" size={16} />
                  <div>
                    <strong className="block text-[#1A1A1A] text-sm uppercase tracking-wider">{AGENCY_INFO.fullName}</strong>
                    <span>{AGENCY_INFO.address.street}</span>
                    <span className="block text-[#73736E]">{AGENCY_INFO.address.city}, {AGENCY_INFO.address.province} {AGENCY_INFO.address.postalCode}</span>
                    <span className="block text-[11px] text-[#8C8C88] mt-1">{AGENCY_INFO.address.directionsNote}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="text-[#1A1A1A] shrink-0" size={16} />
                  <div>
                    <span className="text-[10px] text-[#8C8C88] uppercase block">Telephone:</span>
                    <a
                      id="hours-page-phone"
                      href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
                      className="font-bold text-[#1A1A1A] hover:underline transition-colors text-sm"
                    >
                      {AGENCY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Printer className="text-[#1A1A1A] shrink-0" size={16} />
                  <div>
                    <span className="text-[10px] text-[#8C8C88] uppercase block">Fax:</span>
                    <span className="font-semibold text-[#1A1A1A]">{AGENCY_INFO.contact.fax}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="text-[#1A1A1A] shrink-0" size={16} />
                  <div>
                    <span className="text-[10px] text-[#8C8C88] uppercase block">Email:</span>
                    <a
                      id="hours-page-email"
                      href={`mailto:${AGENCY_INFO.contact.email}`}
                      className="font-semibold text-[#1A1A1A] hover:underline"
                    >
                      {AGENCY_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E5E1]">
              <a
                id="hours-page-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold text-xs uppercase tracking-wider py-3 px-4 flex items-center justify-center gap-2 transition-colors border border-[#1A1A1A] font-mono"
              >
                <Navigation size={14} />
                <span>{language === 'en' ? 'Get Driving Directions on Google Maps' : 'Obtenir l’Itinéraire sur Google Maps'}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Business Hours */}
          <div className="bg-white border border-[#E5E5E1] p-8 shadow-xs space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E5E5E1] pb-3">
                <h2 className="text-xl font-bold text-[#1A1A1A] font-display uppercase tracking-wide flex items-center gap-2">
                  <Clock className="text-[#1A1A1A]" size={18} />
                  <span>{language === 'en' ? 'Business Hours' : 'Heures d’Ouverture'}</span>
                </h2>
                <div className="font-mono text-xs uppercase tracking-widest text-[#1A1A1A] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
                  <span>{language === 'en' ? 'Open Mon–Sat' : 'Ouvert Lun–Sam'}</span>
                </div>
              </div>

              <div className="divide-y divide-[#E5E5E1] text-xs font-mono">
                {OFFICE_HOURS.map((oh) => (
                  <div key={oh.day} className="py-2.5 flex justify-between items-center">
                    <span className="text-[#73736E] uppercase">
                      {language === 'en' ? oh.day : oh.dayFr}
                    </span>
                    <span className={`font-bold ${oh.isClosed ? 'text-[#8C8C88]' : 'text-[#1A1A1A]'}`}>
                      {language === 'en' ? oh.hours : oh.hoursFr}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F7F7F5] border border-[#E5E5E1] p-4 text-xs font-mono text-[#52524E] space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] uppercase tracking-wider">
                <CheckCircle2 size={14} className="text-[#1A1A1A]" />
                <span>{language === 'en' ? 'Service in French & English' : 'Service en Français et Anglais'}</span>
              </div>
              <p>
                {language === 'en'
                  ? 'Our licensed team is fully bilingual. Appointments and walk-ins are both welcome during normal business hours.'
                  : 'Notre équipe est entièrement bilingue. Rendez-vous et visites sans rendez-vous sont bienvenus.'}
              </p>
            </div>
          </div>
        </div>

        {/* Directions & Surrounding Communities Guide */}
        <div className="bg-white border border-[#E5E5E1] p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-[#1A1A1A]">
            <Compass className="text-[#1A1A1A]" size={20} />
            <h3 className="text-xl font-bold font-display uppercase tracking-wide">
              {language === 'en' ? 'Reaching Our Ste. Anne Brokerage' : 'Comment se Rendre à Sainte-Anne'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#52524E]">
            <div className="p-5 bg-[#F7F7F5] space-y-2 border border-[#E5E5E1]">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] font-display uppercase tracking-wider text-xs">
                <Car size={15} className="text-[#1A1A1A]" />
                <span>From Winnipeg</span>
              </div>
              <p className="leading-relaxed">
                Take Trans-Canada Hwy 1 East to MB-12 S / Dawson Rd (approx. 35 mins from perimeter). Turn right onto Dawson Rd into Ste. Anne centre.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F5] space-y-2 border border-[#E5E5E1]">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] font-display uppercase tracking-wider text-xs">
                <Car size={15} className="text-[#1A1A1A]" />
                <span>From Steinbach & La Broquerie</span>
              </div>
              <p className="leading-relaxed">
                Travel North via Provincial Rd 210 N or Hwy 12 N directly into Sainte-Anne. Our office is located at 30B Dawson Rd near the municipal centre.
              </p>
            </div>

            <div className="p-5 bg-[#F7F7F5] space-y-2 border border-[#E5E5E1]">
              <div className="flex items-center gap-1.5 font-bold text-[#1A1A1A] font-display uppercase tracking-wider text-xs">
                <Car size={15} className="text-[#1A1A1A]" />
                <span>From Richer & East MB</span>
              </div>
              <p className="leading-relaxed">
                Head West along Dawson Trail (MB-501 / PR 207) straight into Ste. Anne. Dedicated free client parking is available directly in front of the building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
