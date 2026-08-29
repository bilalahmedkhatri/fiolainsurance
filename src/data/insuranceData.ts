import { OfficeHourDay, PartnerLink, ServiceCategory } from '../types';

export const AGENCY_INFO = {
  name: 'A & J FIOLA',
  fullName: 'A & J Fiola Insurance Agency Ltd.',
  tagline: 'Insurance Agency Ltd.',
  foundedYear: 1972,
  founders: 'Arthur & Jeanette Fiola',
  generation: '3rd Generation Family Business',
  address: {
    street: '30B Dawson Rd',
    city: 'Ste. Anne',
    province: 'MB',
    postalCode: 'R5H 1B3',
    country: 'Canada',
    full: '30B Dawson Rd, Ste Anne, MB R5H 1B3',
    directionsNote: 'Located along the historic Dawson Trail in downtown Ste. Anne, Manitoba.',
    coordinates: {
      lat: 49.6738,
      lng: -96.6542,
    },
  },
  contact: {
    phone: '(204) 422-5985',
    phoneRaw: '2044225985',
    fax: '(204) 422-5325',
    email: 'ajfiola@mymts.net',
  },
  languages: ['English', 'Français'],
};

export const OFFICE_HOURS: OfficeHourDay[] = [
  { day: 'Monday', dayFr: 'Lundi', hours: '10:00 am – 6:00 pm', hoursFr: '10h00 – 18h00' },
  { day: 'Tuesday', dayFr: 'Mardi', hours: '10:00 am – 6:00 pm', hoursFr: '10h00 – 18h00' },
  { day: 'Wednesday', dayFr: 'Mercredi', hours: '10:00 am – 6:00 pm', hoursFr: '10h00 – 18h00' },
  { day: 'Thursday', dayFr: 'Jeudi', hours: '10:00 am – 6:00 pm', hoursFr: '10h00 – 18h00' },
  { day: 'Friday', dayFr: 'Vendredi', hours: '10:00 am – 6:00 pm', hoursFr: '10h00 – 18h00' },
  { day: 'Saturday', dayFr: 'Samedi', hours: '10:00 am – 2:00 pm', hoursFr: '10h00 – 14h00' },
  { day: 'Sunday', dayFr: 'Dimanche', hours: 'Closed', hoursFr: 'Fermé', isClosed: true },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'auto',
    title: 'Auto & Vehicle Insurance',
    titleFr: 'Assurance Automobile et Véhicules',
    description: 'Official Manitoba Public Insurance (MPI) Autopac agent offering full registration, driver licensing services, and vehicle protection.',
    descriptionFr: 'Agent officiel Autopac de la Société d’assurance publique du Manitoba (SAPM / MPI) offrant immatriculation, permis de conduire et protection.',
    iconName: 'car',
    items: [
      {
        name: 'Autopac (MPI)',
        nameFr: 'Autopac (SAPM / MPI)',
        details: 'Official Manitoba Public Insurance agent providing basic and optional extended coverage, renewals, transfers, and license documentation.',
        detailsFr: 'Agent officiel offrant la couverture de base et complémentaire facultative, renouvellements, transferts et dossiers de permis.',
      },
      {
        name: 'Cars, Trucks, & Passenger Vehicles',
        nameFr: 'Voitures, Camions et Véhicules Légers',
        details: 'Comprehensive collision, comprehensive liability, deductible reductions ($500 down to $200), and increased third-party liability limits.',
        detailsFr: 'Collision, tous risques, franchises réduites (de 500$ à 200$) et augmentation des montants de responsabilité civile.',
      },
      {
        name: 'RVs & Motorhomes',
        nameFr: 'Véhicules Récréatifs et Autocaravanes',
        details: 'Specialized season-round and storage coverage for travel trailers, fifth-wheels, campervans, and luxury motorhomes.',
        detailsFr: 'Couverture saisonnière et de remisage pour roulottes, caravanes à sellette et autocaravanes.',
      },
      {
        name: 'Off-Road & ATV Coverage',
        nameFr: 'Véhicules Tout-Terrain (VTT) et Motoneiges',
        details: 'Dedicated coverage for all-terrain vehicles, snowmobiles, dirt bikes, and utility quads with year-round peace of mind.',
        detailsFr: 'Protection pour VTT, motoneiges, motocross et quads utilitaires partout au Manitoba et au Canada.',
      },
      {
        name: 'Boat & Marine Insurance',
        nameFr: 'Bateaux et Embarcations Nautiques',
        details: 'Protection for pleasure crafts, speedboats, fishing boats, pontoon boats, outboard motors, and boat trailers.',
        detailsFr: 'Assurance pour embarcations de plaisance, chaloupes de pêche, pontons, moteurs hors-bord et remorques.',
      },
    ],
  },
  {
    id: 'residential',
    title: 'Residential & Property Insurance',
    titleFr: 'Assurance Résidentielle et Propriété',
    description: 'Customized homeowner and property policies crafted with trusted underwriters like Red River Mutual and specialized contractor packages.',
    descriptionFr: 'Polices habitation sur mesure créées avec des souscripteurs de confiance comme Red River Mutual et forfaits entrepreneurs.',
    iconName: 'home',
    items: [
      {
        name: 'Residential Homeowner Insurance',
        nameFr: 'Assurance Propriétaire Habitation',
        details: 'Guaranteed replacement cost for your dwelling, personal belongings, detached garage/outbuildings, and personal liability protection.',
        detailsFr: 'Coût de remplacement garanti pour votre résidence, biens meubles, bâtiments secondaires et responsabilité civile personnelle.',
      },
      {
        name: 'New Construction / Builders Risk',
        nameFr: 'Nouvelle Construction / Risques du Constructeur',
        details: 'Protection against structural collapse, theft of building materials on-site, fire, and storm damage during residential build projects.',
        detailsFr: 'Protection contre l’effondrement, vol de matériaux sur chantier, incendie et tempêtes pendant la construction.',
      },
      {
        name: 'Tenants & Condo Insurance',
        nameFr: 'Assurance Locataires et Copropriété (Condo)',
        details: 'Cost-effective coverage tailored for renters (contents & liability) and unit owners (betterments, assessment liability, unit upgrades).',
        detailsFr: 'Protection pour locataires (biens et responsabilité) et copropriétaires (améliorations, répartition de sinistre, biens).',
      },
      {
        name: 'Commercial Contractor Packages',
        nameFr: 'Forfaits Commerciaux pour Entrepreneurs',
        details: 'Commercial general liability (CGL), equipment floaters, installation floaters, and commercial auto fleets tailored for trade contractors.',
        detailsFr: 'Responsabilité civile générale commerciale (RCG), assurance des outils et équipements, et flottes de véhicules commerciaux.',
      },
    ],
  },
  {
    id: 'travel',
    title: 'Travel Health Protection',
    titleFr: 'Assurance Santé Voyage',
    description: 'Cross-border and international medical peace of mind powered by Blue Cross Manitoba and TuGo Travel Insurance.',
    descriptionFr: 'Sérénité médicale transfrontalière et internationale propulsée par Croix Bleue Manitoba et TuGo Assurance Voyage.',
    iconName: 'globe',
    items: [
      {
        name: 'Medical Insurance (Canada / USA / International)',
        nameFr: 'Assurance Médicale (Canada / É.-U. / International)',
        details: 'Emergency medical hospitalization, physician fees, emergency return home, ambulance, and prescription medications abroad.',
        detailsFr: 'Hospitalisation d’urgence, honoraires médicaux, rapatriement d’urgence, ambulance et médicaments à l’étranger.',
      },
      {
        name: 'Annual Multi-Trip Travel Plans',
        nameFr: 'Régimes Annuels Voyages Multiples',
        details: 'Convenient 365-day annual policies for frequent snowbirds and weekend cross-border shoppers into North Dakota and Minnesota.',
        detailsFr: 'Polices annuelles économiques idéales pour les snowbirds et les voyages réguliers aux États-Unis.',
      },
      {
        name: 'Trip Cancellation & Interruption',
        nameFr: 'Annulation et Interruption de Voyage',
        details: 'Reimbursement for non-refundable flights, tour deposits, and unexpected delays due to covered medical or family emergencies.',
        detailsFr: 'Remboursement des vols non remboursables et hébergements en cas d’urgence médicale ou familiale imprévue.',
      },
      {
        name: 'Visitors to Canada Health Plans',
        nameFr: 'Visiteurs au Canada (Super Visa)',
        details: 'Comprehensive emergency medical coverage compliant with Super Visa requirements for visiting parents, grandparents, and foreign tourists.',
        detailsFr: 'Assurance médicale d’urgence conforme aux exigences du Super Visa pour parents, grands-parents et visiteurs.',
      },
    ],
  },
];

export const PARTNER_LINKS: PartnerLink[] = [
  {
    title: 'Manitoba Public Insurance (MPI)',
    desc: 'Official Manitoba crown corporation for Autopac vehicle registration, driver licensing, driver testing appointments, and collision claims.',
    descFr: 'Société d’État officielle pour l’immatriculation Autopac, permis de conduire, rendez-vous d’examen et réclamations collision.',
    url: 'https://www.mpi.mb.ca',
    category: 'public',
    badge: 'Autopac Crown Corporation',
  },
  {
    title: 'Blue Cross Manitoba',
    desc: 'Trusted personal, group, and worldwide travel health insurance solutions with direct hospital billing agreements and 24/7 travel assistance.',
    descFr: 'Solutions d’assurance santé voyage individuelle et collective avec facturation directe hospitalière et assistance 24/7.',
    url: 'https://www.mb.bluecross.ca',
    category: 'health',
    badge: 'Travel Health Provider',
  },
  {
    title: 'TuGo Travel Insurance',
    desc: 'Flexible emergency medical and multi-trip plans featuring comprehensive coverage for pre-existing medical conditions and adventure sports.',
    descFr: 'Régimes médicaux d’urgence flexibles avec couverture des conditions médicales préexistantes et sports d’aventure.',
    url: 'https://www.tugo.com',
    category: 'health',
    badge: 'Canadian Travel Specialist',
  },
  {
    title: 'Red River Mutual',
    desc: 'Local Manitoba mutual insurer protecting homes, farms, and businesses since 1875 with dedicated community focus and competitive rates.',
    descFr: 'Assureur mutuel manitobain protégeant résidences, fermes et commerces depuis 1875 avec un service de proximité dévoué.',
    url: 'https://www.redrivermutual.com',
    category: 'property',
    badge: 'Property & Farm Underwriter',
  },
  {
    title: 'Milnco Insurance',
    desc: 'Premier Canadian managing general agent providing specialized commercial contractor packages, errors & omissions, and niche liability policies.',
    descFr: 'Souscripteur général canadien réputé offrant des forfaits sur mesure pour entrepreneurs en construction et responsabilités spécialisées.',
    url: 'https://www.milnco.ca',
    category: 'commercial',
    badge: 'Commercial MGA',
  },
];

export const EMERGENCY_CLAIM_CONTACTS = [
  {
    provider: 'Manitoba Public Insurance (Autopac)',
    service: 'Vehicle Collision, Hail, Vandalism & Glass Claims',
    phone: '(204) 985-7000',
    tollFree: '1-800-665-2410',
    website: 'https://www.mpi.mb.ca/Pages/claim-process.aspx',
    hours: 'Monday to Friday: 7:30 am – 7:00 pm, Saturday: 8:30 am – 4:30 pm',
  },
  {
    provider: 'Red River Mutual',
    service: '24/7 Residential, Property & Farm Emergency Claims',
    phone: '1-800-452-6888',
    tollFree: '1-800-452-6888',
    website: 'https://www.redrivermutual.com/claims/',
    hours: 'Available 24 Hours / 7 Days a Week',
  },
  {
    provider: 'TuGo / Blue Cross Emergency Travel Assistance',
    service: 'Worldwide 24/7 Emergency Medical Evacuation & Hospitalization',
    phone: '1-800-663-0399',
    tollFree: '1-800-663-0399 (North America)',
    website: 'https://www.tugo.com/en/claims/',
    hours: '24/7 Worldwide Emergency Assistance',
  },
  {
    provider: 'A & J Fiola Local Broker Office',
    service: 'Local Claims Guidance, Proof of Loss Filing & Advocacy',
    phone: '(204) 422-5985',
    tollFree: '(204) 422-5985',
    website: 'mailto:ajfiola@mymts.net',
    hours: 'Monday – Friday: 10:00 am – 6:00 pm, Saturday: 10:00 am – 2:00 pm',
  },
];
