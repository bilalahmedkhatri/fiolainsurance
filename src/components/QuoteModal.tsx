import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Send, Calculator, Car, Home, Globe, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { AGENCY_INFO } from '../data/insuranceData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function QuoteModal({ isOpen, onClose, language }: QuoteModalProps) {
  const [selectedType, setSelectedType] = useState<'auto' | 'home' | 'travel' | 'commercial'>('auto');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    vehicleYear: '2022',
    dwellingValue: '$350,000',
    tripDuration: '14 days',
    tradeType: 'General Contractor',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      details: '',
      vehicleYear: '2022',
      dwellingValue: '$350,000',
      tripDuration: '14 days',
      tradeType: 'General Contractor',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs overflow-y-auto font-mono">
      <div className="relative w-full max-w-2xl bg-white shadow-2xl border border-[#1A1A1A] overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#1A1A1A] px-6 py-4 flex justify-between items-center text-white border-b border-[#2E2E2C]">
          <div className="flex items-center gap-2.5">
            <Calculator className="text-[#F7F7F5]" size={20} />
            <div>
              <h3 className="text-base font-bold text-white font-display uppercase tracking-wider">
                {language === 'en' ? 'Request a Free Insurance Quote' : 'Demander une Soumission Gratuite'}
              </h3>
              <p className="text-[11px] text-[#A3A39E]">
                {language === 'en'
                  ? 'Personalized rates from our licensed Ste. Anne brokers'
                  : 'Tarifs personnalisés par nos courtiers agréés de Sainte-Anne'}
              </p>
            </div>
          </div>
          <button
            id="quote-modal-close-btn"
            onClick={onClose}
            className="text-[#A3A39E] hover:text-white p-1 hover:bg-[#2E2E2C] transition-colors border border-transparent hover:border-[#2E2E2C]"
          >
            <X size={18} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4 font-mono">
            <div className="w-12 h-12 bg-[#1A1A1A] text-[#F7F7F5] flex items-center justify-center mx-auto">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="text-xl font-bold text-[#1A1A1A] font-display uppercase tracking-wide">
              {language === 'en' ? 'Quote Request Received!' : 'Demande de Soumission Reçue !'}
            </h4>
            <p className="text-xs text-[#73736E] max-w-md mx-auto leading-relaxed">
              {language === 'en'
                ? `Thank you, ${formData.name || 'Valued Client'}. Our licensed broker team at A & J Fiola will review your details with our underwriters (MPI, Red River Mutual, TuGo, etc.) and contact you shortly at ${formData.email || formData.phone || 'your provided contact'}.`
                : `Merci, ${formData.name || 'Cher client'}. Notre équipe de courtiers agréés chez A & J Fiola examinera vos détails avec nos souscripteurs et vous contactera sous peu.`}
            </p>
            <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E1] text-xs text-[#52524E] max-w-md mx-auto text-left space-y-1">
              <p><strong>Office Direct:</strong> {AGENCY_INFO.contact.phone}</p>
              <p><strong>Email:</strong> {AGENCY_INFO.contact.email}</p>
              <p><strong>Address:</strong> {AGENCY_INFO.address.full}</p>
            </div>
            <div className="pt-3">
              <button
                id="quote-modal-done-btn"
                onClick={handleReset}
                className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-6 py-2.5 text-xs uppercase tracking-wider transition-colors border border-[#1A1A1A]"
              >
                {language === 'en' ? 'Done' : 'Terminé'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 font-mono text-xs">
            {/* Service Category Selector */}
            <div>
              <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-2">
                {language === 'en' ? 'Select Insurance Category' : 'Sélectionnez la Catégorie d’Assurance'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  id="quote-type-auto"
                  onClick={() => setSelectedType('auto')}
                  className={`p-3 border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all uppercase tracking-wider ${
                    selectedType === 'auto'
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                      : 'bg-white border-[#E5E5E1] text-[#73736E] hover:border-[#1A1A1A]'
                  }`}
                >
                  <Car size={16} />
                  <span className="text-[11px]">Autopac / Auto</span>
                </button>

                <button
                  type="button"
                  id="quote-type-home"
                  onClick={() => setSelectedType('home')}
                  className={`p-3 border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all uppercase tracking-wider ${
                    selectedType === 'home'
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                      : 'bg-white border-[#E5E5E1] text-[#73736E] hover:border-[#1A1A1A]'
                  }`}
                >
                  <Home size={16} />
                  <span className="text-[11px]">Home / Property</span>
                </button>

                <button
                  type="button"
                  id="quote-type-travel"
                  onClick={() => setSelectedType('travel')}
                  className={`p-3 border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all uppercase tracking-wider ${
                    selectedType === 'travel'
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                      : 'bg-white border-[#E5E5E1] text-[#73736E] hover:border-[#1A1A1A]'
                  }`}
                >
                  <Globe size={16} />
                  <span className="text-[11px]">Travel Health</span>
                </button>

                <button
                  type="button"
                  id="quote-type-commercial"
                  onClick={() => setSelectedType('commercial')}
                  className={`p-3 border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all uppercase tracking-wider ${
                    selectedType === 'commercial'
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                      : 'bg-white border-[#E5E5E1] text-[#73736E] hover:border-[#1A1A1A]'
                  }`}
                >
                  <Briefcase size={16} />
                  <span className="text-[11px]">Commercial</span>
                </button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                  {language === 'en' ? 'Full Name *' : 'Nom Complet *'}
                </label>
                <input
                  id="quote-input-name"
                  type="text"
                  required
                  placeholder={language === 'en' ? 'e.g., Marc Dubois' : 'ex. Marc Dubois'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                  {language === 'en' ? 'Phone Number *' : 'Numéro de Téléphone *'}
                </label>
                <input
                  id="quote-input-phone"
                  type="tel"
                  required
                  placeholder="(204) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                  {language === 'en' ? 'Email Address *' : 'Adresse Courriel *'}
                </label>
                <input
                  id="quote-input-email"
                  type="email"
                  required
                  placeholder="client@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                />
              </div>

              {/* Conditional Field based on type */}
              <div>
                {selectedType === 'auto' && (
                  <>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Vehicle Model Year & Make' : 'Année & Marque du Véhicule'}
                    </label>
                    <input
                      id="quote-input-vehicle"
                      type="text"
                      placeholder="e.g. 2021 Ford F-150 / Honda Civic"
                      value={formData.vehicleYear}
                      onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </>
                )}
                {selectedType === 'home' && (
                  <>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Estimated Dwelling Value' : 'Valeur Estimée de la Résidence'}
                    </label>
                    <input
                      id="quote-input-dwelling"
                      type="text"
                      placeholder="e.g. $400,000"
                      value={formData.dwellingValue}
                      onChange={(e) => setFormData({ ...formData, dwellingValue: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </>
                )}
                {selectedType === 'travel' && (
                  <>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Trip Duration & Destination' : 'Durée du Séjour & Destination'}
                    </label>
                    <input
                      id="quote-input-travel"
                      type="text"
                      placeholder="e.g. 21 days USA Snowbird"
                      value={formData.tripDuration}
                      onChange={(e) => setFormData({ ...formData, tripDuration: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </>
                )}
                {selectedType === 'commercial' && (
                  <>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Trade / Contractor Type' : 'Métier / Type d’Entreprise'}
                    </label>
                    <input
                      id="quote-input-trade"
                      type="text"
                      placeholder="e.g. Electrical / Plumbing Contractor"
                      value={formData.tradeType}
                      onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </>
                )}
              </div>
            </div>

            <div>
              <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                {language === 'en' ? 'Additional Notes / Requirements' : 'Notes Complémentaires / Besoins'}
              </label>
              <textarea
                id="quote-input-details"
                rows={3}
                placeholder={
                  language === 'en'
                    ? 'Please share any specific coverage requirements, current policy renewal date, or questions for our broker...'
                    : 'Partagez vos exigences spécifiques, date de renouvellement ou questions...'
                }
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full border border-[#E5E5E1] p-2.5 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
              />
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-3 border-t border-[#E5E5E1]">
              <div className="flex items-center gap-2 text-xs text-[#73736E]">
                <ShieldCheck className="text-[#1A1A1A]" size={14} />
                <span>{language === 'en' ? 'No obligation quote • 100% confidential' : 'Sans obligation • 100% confidentiel'}</span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 border border-[#E5E5E1] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider hover:bg-[#F7F7F5]"
                >
                  {language === 'en' ? 'Cancel' : 'Annuler'}
                </button>
                <button
                  type="submit"
                  id="quote-submit-btn"
                  disabled={isSubmitting}
                  className="w-1/2 sm:w-auto bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] text-xs font-bold uppercase tracking-wider px-6 py-2.5 transition-colors flex items-center justify-center gap-1.5 border border-[#1A1A1A] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === 'en' ? 'Submitting...' : 'Envoi en cours...'}</span>
                  ) : (
                    <>
                      <span>{language === 'en' ? 'Submit Request' : 'Envoyer'}</span>
                      <Send size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
