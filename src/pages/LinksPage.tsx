import React from 'react';
import { ExternalLink, ShieldCheck, ArrowUpRight, HelpCircle, Phone } from 'lucide-react';
import { Language } from '../types';
import { PARTNER_LINKS, AGENCY_INFO } from '../data/insuranceData';

interface LinksPageProps {
  language: Language;
}

export default function LinksPage({ language }: LinksPageProps) {
  return (
    <div className="bg-[#F7F7F5] min-h-screen py-16 px-6 text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Page Title (No chips above heading) */}
        <div>
          <div className="font-mono text-xs text-[#73736E] uppercase tracking-widest flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
            <span>OFFICIAL PARTNERS</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
            {language === 'en' ? 'Partner & Resource Links' : 'Partenaires & Liens Utiles'}
          </h1>
          <p className="text-[#73736E] mt-2 text-base leading-relaxed">
            {language === 'en'
              ? 'Official links to our trusted insurance carriers and public service providers.'
              : 'Liens officiels vers nos assureurs partenaires et fournisseurs de services publics.'}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNER_LINKS.map((item, idx) => (
            <a
              key={idx}
              id={`partner-link-${idx}`}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-[#E5E5E1] p-6 shadow-xs hover:border-[#1A1A1A] transition-all space-y-3 group block"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-bold text-base text-[#1A1A1A] group-hover:text-[#1A1A1A] transition-colors flex items-center gap-2 font-display uppercase tracking-wide">
                  <span>{item.title}</span>
                </h2>
                <div className="w-8 h-8 bg-[#F7F7F5] text-[#1A1A1A] border border-[#E5E5E1] flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors shrink-0">
                  <ExternalLink size={14} />
                </div>
              </div>

              <p className="text-xs text-[#52524E] leading-relaxed">
                {language === 'en' ? item.desc : item.descFr}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs text-[#73736E] border-t border-[#E5E5E1] font-mono">
                <span className="truncate text-[11px] text-[#8C8C88]">{item.url.replace('https://', '')}</span>
                <span className="text-[#1A1A1A] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1 uppercase tracking-wider text-[11px]">
                  Visit Provider <ArrowUpRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Support Help Note */}
        <div className="bg-[#1A1A1A] text-[#F7F7F5] p-8 border border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display uppercase tracking-wide">
              <HelpCircle className="text-[#F7F7F5]" size={18} />
              <span>{language === 'en' ? 'Need Assistance Navigating Partner Portals?' : 'Besoin d’Aide pour Naviguer sur les Portails ?'}</span>
            </h3>
            <p className="text-xs font-mono text-[#A3A39E] leading-relaxed">
              {language === 'en'
                ? 'Our local brokers in Ste. Anne can assist you with your Manitoba Public Insurance renewals, policy endorsements, or travel claims documentation.'
                : 'Nos courtiers locaux à Sainte-Anne peuvent vous guider pour vos renouvellements Autopac, avenants de police ou documents de réclamation voyage.'}
            </p>
          </div>

          <a
            id="partner-help-call-btn"
            href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
            className="bg-[#F7F7F5] hover:bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 border border-white font-mono"
          >
            <Phone size={14} />
            <span>{AGENCY_INFO.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
