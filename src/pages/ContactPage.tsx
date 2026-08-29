import React, { useState } from 'react';
import { Mail, Phone, MapPin, Printer, CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';
import { Language, ContactFormData } from '../types';
import { AGENCY_INFO, OFFICE_HOURS } from '../data/insuranceData';

interface ContactPageProps {
  language: Language;
}

export default function ContactPage({ language }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Autopac & Vehicle Coverage',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'Autopac & Vehicle Coverage',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen py-16 px-6 text-[#1A1A1A]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Page Title (No chips above heading) */}
        <div>
          <div className="font-mono text-xs text-[#73736E] uppercase tracking-widest flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
            {language === 'en' ? 'Contact Us' : 'Contactez-Nous'}
          </h1>
          <p className="text-[#73736E] mt-2 text-base leading-relaxed">
            {language === 'en'
              ? 'Reach out to our local brokers for any insurance inquiries or coverage assistance.'
              : 'Communiquez avec nos courtiers locaux pour toute question d’assurance ou assistance.'}
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Card */}
          <div className="md:col-span-5 bg-[#1A1A1A] text-[#F7F7F5] p-8 space-y-6 border border-[#1A1A1A]">
            <div>
              <h2 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                {language === 'en' ? 'Get In Touch' : 'Nous Joindre'}
              </h2>
              <p className="text-xs text-[#A3A39E] mt-1 font-mono">
                {language === 'en'
                  ? 'A & J Fiola Insurance Agency Ltd. — 3rd Generation Family Brokerage'
                  : 'Agence d’Assurance A & J Fiola Ltée — Courtiers de Famille'}
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono text-[#A3A39E]">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#F7F7F5] shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider">Office Address:</span>
                  <span className="text-[#D4D4D0]">{AGENCY_INFO.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="text-[#F7F7F5] shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider">Direct Phone:</span>
                  <a
                    id="contact-phone-direct"
                    href={`tel:${AGENCY_INFO.contact.phoneRaw}`}
                    className="text-[#F7F7F5] hover:underline transition-colors font-bold text-sm"
                  >
                    {AGENCY_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Printer className="text-[#F7F7F5] shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider">Fax Number:</span>
                  <span className="text-[#D4D4D0]">{AGENCY_INFO.contact.fax}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#F7F7F5] shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-white block uppercase tracking-wider">Email Address:</span>
                  <a
                    id="contact-email-direct"
                    href={`mailto:${AGENCY_INFO.contact.email}`}
                    className="text-[#F7F7F5] hover:underline"
                  >
                    {AGENCY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2E2E2C] text-xs font-mono text-[#A3A39E] space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider">
                <Clock size={14} className="text-[#F7F7F5]" />
                <span>Business Hours:</span>
              </div>
              <p>Mon – Fri: 10:00 am – 6:00 pm</p>
              <p>Saturday: 10:00 am – 2:00 pm</p>
              <p className="text-[#73736E]">Sunday: Closed</p>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="md:col-span-7 bg-white border border-[#E5E5E1] p-8 shadow-xs">
            {isSubmitted ? (
              <div className="p-6 text-center space-y-4 font-mono">
                <div className="w-12 h-12 bg-[#1A1A1A] text-[#F7F7F5] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] font-display uppercase tracking-wide">
                  {language === 'en' ? 'Message Sent Successfully!' : 'Message Envoyé avec Succès !'}
                </h3>
                <p className="text-xs text-[#73736E] max-w-md mx-auto leading-relaxed">
                  {language === 'en'
                    ? `Thank you, ${formData.fullName}. Your inquiry has been routed to our Ste. Anne broker team. We will review your message and reply to ${formData.email} promptly.`
                    : `Merci, ${formData.fullName}. Votre message a été transmis à notre équipe de Sainte-Anne.`}
                </p>
                <div className="pt-2">
                  <button
                    id="contact-reset-btn"
                    onClick={handleReset}
                    className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-6 py-2.5 text-xs uppercase tracking-wider transition-colors border border-[#1A1A1A]"
                  >
                    {language === 'en' ? 'Send Another Message' : 'Envoyer un Autre Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    {language === 'en' ? 'Your Name *' : 'Votre Nom *'}
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    placeholder={language === 'en' ? 'Full Name' : 'Nom Complet'}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Your Email *' : 'Votre Courriel *'}
                    </label>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Your Phone (Optional)' : 'Votre Téléphone (Optionnel)'}
                    </label>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      placeholder="(204) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    {language === 'en' ? 'Subject' : 'Objet du Message'}
                  </label>
                  <input
                    id="contact-subject-input"
                    type="text"
                    placeholder={language === 'en' ? 'Inquiry subject (e.g., Autopac Renewal, New Home Insurance Quote)' : 'Objet de la demande'}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                    {language === 'en' ? 'Your Message (Optional)' : 'Votre Message (Optionnel)'}
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    placeholder={language === 'en' ? 'How can we help you?' : 'Comment pouvons-nous vous aider ?'}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-[#E5E5E1] p-3 text-xs bg-white h-32 focus:border-[#1A1A1A] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#73736E]">
                    <ShieldCheck size={14} className="text-[#1A1A1A]" />
                    <span>{language === 'en' ? 'Protected by broker privacy' : 'Confidentialité garantie'}</span>
                  </div>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors flex items-center gap-2 border border-[#1A1A1A] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{language === 'en' ? 'Sending...' : 'Envoi en cours...'}</span>
                    ) : (
                      <>
                        <span>{language === 'en' ? 'Send Message' : 'Envoyer le Message'}</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
