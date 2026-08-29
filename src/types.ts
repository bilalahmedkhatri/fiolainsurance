export type PageRoute = 'home' | 'services' | 'client-portal' | 'links' | 'hours-location' | 'contact';

export type Language = 'en' | 'fr';

export interface ServiceCategory {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  iconName: 'car' | 'home' | 'globe';
  items: {
    name: string;
    nameFr: string;
    details: string;
    detailsFr: string;
  }[];
}

export interface PartnerLink {
  title: string;
  desc: string;
  descFr: string;
  url: string;
  category: 'public' | 'health' | 'property' | 'commercial';
  badge: string;
}

export interface OfficeHourDay {
  day: string;
  dayFr: string;
  hours: string;
  hoursFr: string;
  isClosed?: boolean;
}

export interface PolicyChangeFormData {
  fullName: string;
  policyNumber: string;
  email: string;
  phone: string;
  changeType: string;
  effectiveDate: string;
  description: string;
}

export interface CertificateRequestData {
  businessName: string;
  certificateHolderName: string;
  holderAddress: string;
  holderEmail: string;
  jobDescription: string;
  additionalInsured: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  subject: string;
  message: string;
}
