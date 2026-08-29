import React, { useState } from 'react';
import { FileText, ShieldAlert, RefreshCw, CheckCircle2, Phone, ExternalLink, Download, Printer, AlertTriangle, ArrowRight } from 'lucide-react';
import { Language, PolicyChangeFormData, CertificateRequestData } from '../types';
import { AGENCY_INFO, EMERGENCY_CLAIM_CONTACTS } from '../data/insuranceData';

interface ClientPortalPageProps {
  language: Language;
}

export default function ClientPortalPage({ language }: ClientPortalPageProps) {
  const [activeTab, setActiveTab] = useState<'policy' | 'certificate' | 'claim'>('policy');

  // Policy Form State
  const [policyForm, setPolicyForm] = useState<PolicyChangeFormData>({
    fullName: '',
    policyNumber: '',
    email: '',
    phone: '',
    changeType: 'Address / Contact Change',
    effectiveDate: '',
    description: '',
  });
  const [policySubmitted, setPolicySubmitted] = useState(false);
  const [isSubmittingPolicy, setIsSubmittingPolicy] = useState(false);

  // Certificate Form State
  const [certForm, setCertForm] = useState<CertificateRequestData>({
    businessName: '',
    certificateHolderName: '',
    holderAddress: '',
    holderEmail: '',
    jobDescription: '',
    additionalInsured: true,
  });
  const [certSubmitted, setCertSubmitted] = useState(false);
  const [isSubmittingCert, setIsSubmittingCert] = useState(false);

  const handlePolicySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingPolicy(true);
    setTimeout(() => {
      setIsSubmittingPolicy(false);
      setPolicySubmitted(true);
    }, 600);
  };

  const handleCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCert(true);
    setTimeout(() => {
      setIsSubmittingCert(false);
      setCertSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#F7F7F5] min-h-screen py-16 px-6 text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header (No chips above heading) */}
        <div>
          <div className="font-mono text-xs text-[#73736E] uppercase tracking-widest flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#1A1A1A]"></span>
            <span>SELF-SERVICE PORTAL</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight font-display">
            {language === 'en'
              ? 'Online Client Support & Self-Service Portal'
              : 'Portail de Soutien Client et Libre-Service en Ligne'}
          </h1>
          <p className="text-[#73736E] mt-2 text-base leading-relaxed">
            {language === 'en'
              ? 'Fast-track policy requests, contractor certificates, and claim guidance online.'
              : 'Accélérez vos demandes de modification de police, certificats d’entrepreneur et conseils pour réclamations en ligne.'}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-[#E5E5E1] gap-2 sm:gap-4 overflow-x-auto font-mono text-xs uppercase tracking-wider">
          <button
            id="tab-policy-change"
            type="button"
            onClick={() => setActiveTab('policy')}
            className={`pb-3 font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap focus:outline-none ${
              activeTab === 'policy'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-[#73736E] hover:text-[#1A1A1A]'
            }`}
          >
            <RefreshCw size={14} />
            <span>{language === 'en' ? 'Request Policy Change' : 'Modifier une Police'}</span>
          </button>

          <button
            id="tab-cert-request"
            type="button"
            onClick={() => setActiveTab('certificate')}
            className={`pb-3 font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap focus:outline-none ${
              activeTab === 'certificate'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-[#73736E] hover:text-[#1A1A1A]'
            }`}
          >
            <FileText size={14} />
            <span>{language === 'en' ? 'Commercial Certificate' : 'Certificat Commercial'}</span>
          </button>

          <button
            id="tab-claim-guide"
            type="button"
            onClick={() => setActiveTab('claim')}
            className={`pb-3 font-bold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap focus:outline-none ${
              activeTab === 'claim'
                ? 'border-[#1A1A1A] text-[#1A1A1A]'
                : 'border-transparent text-[#73736E] hover:text-[#1A1A1A]'
            }`}
          >
            <ShieldAlert size={14} />
            <span>{language === 'en' ? 'Claim Guidance' : 'Conseils Sinistres'}</span>
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[#E5E5E1] p-6 md:p-8 shadow-xs">
          {/* TAB 1: Policy Change */}
          {activeTab === 'policy' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-[#1A1A1A] font-display uppercase tracking-wide">
                  {language === 'en' ? 'Policy Update Request' : 'Demande de Modification de Police'}
                </h3>
                <p className="text-xs text-[#73736E] mt-1 font-mono">
                  {language === 'en'
                    ? 'Submit changes for your existing MPI Autopac, residential, or commercial policies. A broker will review and confirm.'
                    : 'Transmettez les modifications pour vos polices existantes. Un courtier confirmera le traitement.'}
                </p>
              </div>

              {policySubmitted ? (
                <div className="p-6 bg-[#1A1A1A] text-[#F7F7F5] border border-[#1A1A1A] space-y-3">
                  <div className="flex items-center gap-2 font-bold text-base font-display">
                    <CheckCircle2 size={18} className="text-[#F7F7F5]" />
                    <span>{language === 'en' ? 'Policy Request Successfully Submitted' : 'Demande Transmise avec Succès'}</span>
                  </div>
                  <p className="text-xs text-[#A3A39E] font-mono leading-relaxed">
                    {language === 'en'
                      ? `Thank you, ${policyForm.fullName}. Request reference #POL-${Math.floor(100000 + Math.random() * 900000)} has been logged. An A & J Fiola broker will process this change and email confirmation to ${policyForm.email}.`
                      : `Merci, ${policyForm.fullName}. Votre demande a été enregistrée. Un courtier d’A & J Fiola traitera la modification sous peu.`}
                  </p>
                  <div className="pt-2 flex gap-3 font-mono">
                    <button
                      onClick={() => {
                        setPolicySubmitted(false);
                        setPolicyForm({
                          fullName: '',
                          policyNumber: '',
                          email: '',
                          phone: '',
                          changeType: 'Address / Contact Change',
                          effectiveDate: '',
                          description: '',
                        });
                      }}
                      className="text-xs font-bold text-[#F7F7F5] underline hover:text-white uppercase tracking-wider"
                    >
                      {language === 'en' ? 'Submit another request' : 'Soumettre une autre demande'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handlePolicySubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Full Name *' : 'Nom Complet *'}
                      </label>
                      <input
                        id="policy-fullname"
                        type="text"
                        required
                        placeholder={language === 'en' ? 'e.g. John Fiola' : 'ex. Jean Fiola'}
                        value={policyForm.fullName}
                        onChange={(e) => setPolicyForm({ ...policyForm, fullName: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Policy or Customer #' : 'Numéro de Police ou Client'}
                      </label>
                      <input
                        id="policy-number"
                        type="text"
                        placeholder="e.g. MPI-99824 or RRM-4421"
                        value={policyForm.policyNumber}
                        onChange={(e) => setPolicyForm({ ...policyForm, policyNumber: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Email Address *' : 'Adresse Courriel *'}
                      </label>
                      <input
                        id="policy-email"
                        type="email"
                        required
                        placeholder="email@domain.com"
                        value={policyForm.email}
                        onChange={(e) => setPolicyForm({ ...policyForm, email: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Phone Number *' : 'Numéro de Téléphone *'}
                      </label>
                      <input
                        id="policy-phone"
                        type="tel"
                        required
                        placeholder="(204) 555-0199"
                        value={policyForm.phone}
                        onChange={(e) => setPolicyForm({ ...policyForm, phone: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Type of Change' : 'Type de Changement'}
                      </label>
                      <select
                        id="policy-changetype"
                        value={policyForm.changeType}
                        onChange={(e) => setPolicyForm({ ...policyForm, changeType: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      >
                        <option value="Address / Contact Change">Address / Contact Info Change</option>
                        <option value="Vehicle Replacement / Addition">Vehicle Replacement / Addition</option>
                        <option value="Driver Addition / Removal">Driver Addition / Removal</option>
                        <option value="Mortgagee / Lienholder Update">Mortgagee / Lienholder Update</option>
                        <option value="Coverage Limit Increase">Coverage Limit Increase</option>
                        <option value="Other Policy Adjustment">Other Policy Adjustment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Requested Effective Date' : 'Date d’Effet Souhaitée'}
                      </label>
                      <input
                        id="policy-effectivedate"
                        type="date"
                        value={policyForm.effectiveDate}
                        onChange={(e) => setPolicyForm({ ...policyForm, effectiveDate: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Describe Requested Change *' : 'Description du Changement *'}
                    </label>
                    <textarea
                      id="policy-description"
                      required
                      placeholder={
                        language === 'en'
                          ? 'Describe requested change (e.g., new residential address, updated vehicle VIN and purchase date, new contractor equipment serial)...'
                          : 'Décrivez la modification demandée (ex. nouvelle adresse, nouveau NIV de véhicule, nouvel équipement)...'
                      }
                      value={policyForm.description}
                      onChange={(e) => setPolicyForm({ ...policyForm, description: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-3 text-xs bg-white h-32 focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-2">
                    <span className="text-xs text-[#73736E]">
                      {language === 'en' ? 'Note: Changes take effect once confirmed by broker.' : 'Note : Les modifications prennent effet après confirmation.'}
                    </span>
                    <button
                      id="policy-submit-btn"
                      type="submit"
                      disabled={isSubmittingPolicy}
                      className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors disabled:opacity-50 border border-[#1A1A1A]"
                    >
                      {isSubmittingPolicy ? 'Submitting...' : 'Submit Request'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: Commercial Certificate */}
          {activeTab === 'certificate' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-[#1A1A1A] font-display uppercase tracking-wide">
                  {language === 'en' ? 'Commercial Contractor Insurance Certificate' : 'Certificat d’Assurance Commercial pour Entrepreneurs'}
                </h3>
                <p className="text-xs text-[#73736E] mt-1 font-mono">
                  {language === 'en'
                    ? 'Generate and request official Certificates of Insurance (COI) for general contractors, municipalities, and job sites.'
                    : 'Générez et demandez des certificats d’assurance officiels pour chantiers, municipalités et entrepreneurs généraux.'}
                </p>
              </div>

              {certSubmitted ? (
                <div className="space-y-4">
                  <div className="p-6 bg-[#1A1A1A] text-[#F7F7F5] border border-[#1A1A1A] space-y-2">
                    <div className="flex items-center gap-2 font-bold text-base font-display">
                      <CheckCircle2 size={18} className="text-[#F7F7F5]" />
                      <span>{language === 'en' ? 'Certificate Issued & Dispatched' : 'Certificat Émis et Transmis'}</span>
                    </div>
                    <p className="text-xs text-[#A3A39E] font-mono leading-relaxed">
                      {language === 'en'
                        ? `Official Certificate of Liability has been generated for ${certForm.businessName} naming "${certForm.certificateHolderName}" as certificate holder. A copy has been routed to our brokerage desk.`
                        : `Le certificat de responsabilité civile a été généré pour ${certForm.businessName}.`}
                    </p>
                  </div>

                  {/* Certificate Visual */}
                  <div className="p-5 bg-[#F7F7F5] border border-[#E5E5E1] space-y-3 font-mono text-xs text-[#1A1A1A]">
                    <div className="flex justify-between border-b border-[#E5E5E1] pb-2 font-bold uppercase tracking-wider">
                      <span>CERTIFICATE OF INSURANCE (COI)</span>
                      <span>REF #{Math.floor(100000 + Math.random() * 900000)}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[#73736E] block text-[10px] uppercase">PRODUCER / BROKER:</span>
                        <strong className="text-[#1A1A1A]">A & J Fiola Insurance Agency Ltd.</strong><br />
                        30B Dawson Rd, Ste Anne MB
                      </div>
                      <div>
                        <span className="text-[#73736E] block text-[10px] uppercase">NAMED INSURED:</span>
                        <strong className="text-[#1A1A1A]">{certForm.businessName || 'Contractor Services Ltd.'}</strong>
                      </div>
                    </div>
                    <div className="border-t border-[#E5E5E1] pt-2">
                      <span className="text-[#73736E] block text-[10px] uppercase">CERTIFICATE HOLDER:</span>
                      <strong className="text-[#1A1A1A]">{certForm.certificateHolderName || 'City of Winnipeg / Municipality'}</strong>
                    </div>
                    <div className="border-t border-[#E5E5E1] pt-2 flex justify-between text-[11px]">
                      <span>Commercial General Liability: <strong>$2,000,000 / $5,000,000</strong></span>
                      <span>Carrier: <strong>Red River Mutual / Milnco</strong></span>
                    </div>
                  </div>

                  <div className="flex gap-3 font-mono">
                    <button
                      onClick={() => setCertSubmitted(false)}
                      className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-4 py-2 text-xs uppercase tracking-wider border border-[#1A1A1A]"
                    >
                      {language === 'en' ? 'Create another certificate' : 'Créer un autre certificat'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCertSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Business / Contractor Name *' : 'Nom de l’Entreprise *'}
                      </label>
                      <input
                        id="cert-bizname"
                        type="text"
                        required
                        placeholder="e.g. Dawson Trail Electric Ltd."
                        value={certForm.businessName}
                        onChange={(e) => setCertForm({ ...certForm, businessName: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Certificate Holder Name (Client / General Contractor) *' : 'Nom du Titulaire du Certificat *'}
                      </label>
                      <input
                        id="cert-holdername"
                        type="text"
                        required
                        placeholder="e.g. Town of Ste. Anne or ABC Builders"
                        value={certForm.certificateHolderName}
                        onChange={(e) => setCertForm({ ...certForm, certificateHolderName: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Holder Mailing Address' : 'Adresse du Titulaire'}
                      </label>
                      <input
                        id="cert-holderaddr"
                        type="text"
                        placeholder="e.g. 123 Main St, Winnipeg MB"
                        value={certForm.holderAddress}
                        onChange={(e) => setCertForm({ ...certForm, holderAddress: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                        {language === 'en' ? 'Send Copy to Email' : 'Courriel pour Copie'}
                      </label>
                      <input
                        id="cert-holderemail"
                        type="email"
                        placeholder="projectmanager@client.com"
                        value={certForm.holderEmail}
                        onChange={(e) => setCertForm({ ...certForm, holderEmail: e.target.value })}
                        className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Job / Project Description' : 'Description du Projet / Contrat'}
                    </label>
                    <input
                      id="cert-jobdesc"
                      type="text"
                      placeholder="e.g. Commercial HVAC installation at Ste. Anne Medical Centre"
                      value={certForm.jobDescription}
                      onChange={(e) => setCertForm({ ...certForm, jobDescription: e.target.value })}
                      className="w-full border border-[#E5E5E1] p-3 text-xs bg-white focus:border-[#1A1A1A] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      id="cert-additionalinsured"
                      type="checkbox"
                      checked={certForm.additionalInsured}
                      onChange={(e) => setCertForm({ ...certForm, additionalInsured: e.target.checked })}
                      className="w-4 h-4 accent-[#1A1A1A]"
                    />
                    <label htmlFor="cert-additionalinsured" className="text-xs text-[#52524E] cursor-pointer">
                      {language === 'en'
                        ? 'Include Certificate Holder as Additional Insured (Standard requirement for municipal tenders & commercial GC contracts)'
                        : 'Inclure le titulaire comme assuré additionnel (exigence standard)'}
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      id="cert-submit-btn"
                      type="submit"
                      disabled={isSubmittingCert}
                      className="bg-[#1A1A1A] hover:bg-[#242422] text-[#F7F7F5] font-bold px-6 py-3 text-xs uppercase tracking-wider transition-colors disabled:opacity-50 border border-[#1A1A1A]"
                    >
                      {isSubmittingCert ? 'Processing...' : 'Request Certificate'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: Claim Guidance */}
          {activeTab === 'claim' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#1A1A1A] font-display uppercase tracking-wide">
                  {language === 'en' ? 'Need to File a Claim?' : 'Besoin de Déclarer un Sinistre ?'}
                </h3>
                <p className="text-[#73736E] text-xs font-mono leading-relaxed">
                  {language === 'en'
                    ? 'For immediate emergency claims, contact our partner providers directly or call our office at (204) 422-5985.'
                    : 'Pour les réclamations d’urgence immédiates, contactez nos fournisseurs partenaires directement ou appelez notre bureau au (204) 422-5985.'}
                </p>
              </div>

              {/* Emergency Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EMERGENCY_CLAIM_CONTACTS.map((contact, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-[#F7F7F5] border border-[#E5E5E1] space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <h4 className="font-bold text-[#1A1A1A] text-xs font-display uppercase tracking-wide">{contact.provider}</h4>
                      <ShieldAlert size={16} className="text-[#1A1A1A] shrink-0" />
                    </div>
                    <p className="text-xs text-[#73736E]">{contact.service}</p>
                    <div className="pt-1 space-y-1 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <Phone size={12} className="text-[#1A1A1A]" />
                        <span className="font-bold text-[#1A1A1A]">{contact.phone}</span>
                      </div>
                      <div className="text-[#8C8C88] text-[11px]">{contact.hours}</div>
                    </div>
                    {contact.website.startsWith('http') && (
                      <a
                        href={contact.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#1A1A1A] font-bold hover:underline pt-1 uppercase tracking-wider"
                      >
                        <span>Online Claims Center</span>
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* Claim Steps Advice */}
              <div className="bg-[#1A1A1A] text-[#F7F7F5] border border-[#2E2E2C] p-6 space-y-3 font-mono text-xs">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">3 Essential Steps in Case of a Loss:</h4>
                <ol className="list-decimal pl-4 space-y-1.5 leading-relaxed text-[#A3A39E]">
                  <li><strong className="text-white">Ensure Safety:</strong> If there are injuries or serious fire hazards, call 911 immediately.</li>
                  <li><strong className="text-white">Mitigate Further Damage:</strong> Take reasonable steps to prevent further loss (e.g. shut off main water valve, board broken window). Keep receipts for emergency mitigation expenses.</li>
                  <li><strong className="text-white">Document & Photo:</strong> Take photos/videos of damaged property or vehicle positions before moving them. Do not discard damaged items until the adjuster has inspected them.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
