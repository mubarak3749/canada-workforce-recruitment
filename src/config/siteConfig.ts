/**
 * ============================================================================
 * CANADA WORKFORCE RECRUITMENT - CENTRAL CONFIGURATION
 * ============================================================================
 * Update company name, phone, WhatsApp number, email, address placeholders,
 * and business hours in this SINGLE file. All components, job cards, modals,
 * forms, and footer links automatically reflect these settings across the
 * entire application.
 */

export const SITE_CONFIG = {
  // Company Branding & Identity
  companyName: 'Canada Workforce Recruitment',
  shortName: 'Canada Workforce',
  tagline: 'Connecting Qualified Workers with Canadian Employers',
  shortTagline: 'Legitimate Employment & Workforce Solutions',
  subHeading: 'Explore genuine employment opportunities in Canadian agriculture, food processing, fruit packing, warehousing, retail, and manufacturing with transparent recruitment support.',
  
  // Contact & Support (Easily replace with real numbers when ready)
  // Format: International format with country code (e.g. '+16728952555' or '16728952555')
  whatsAppNumber: '+16728952555',
  whatsAppDisplay: '+1 (672) 895-2555',
  phoneDisplay: '+1 (672) 895-2555',
  whatsAppLink: 'https://wa.me/16728952555',
  supportEmail: 'recruitment@canadaworkforce.example.ca',
  employerEmail: 'employers@canadaworkforce.example.ca',

  // Office & Location Details (Placeholders)
  office: {
    streetAddress: '100 University Avenue, Suite 700',
    city: 'Toronto',
    province: 'Ontario',
    postalCode: 'M5J 1V6',
    country: 'Canada',
    addressDisplay: 'Toronto, ON, Canada (Head Office)',
    serviceCoverage: 'Serving Canadian employers and international job seekers across Canada',
  },

  // Operating Hours (Eastern Standard Time - EST)
  operatingHours: {
    weekdays: 'Monday – Friday: 8:30 AM – 6:00 PM EST',
    saturday: 'Saturday: 9:30 AM – 3:30 PM EST',
    sunday: 'Sunday: Closed (Inquiries reviewed next business day)',
    responseCommitment: 'Candidate inquiries typically answered within 24–48 business hours',
  },

  // Key Corporate Values
  values: [
    {
      title: 'Zero Illegal Recruitment Fees',
      description: 'We follow ethical Canadian recruitment standards. Candidates are never charged unlawful fees for job offers or placements.',
    },
    {
      title: 'Legitimate Canadian Employers',
      description: 'We connect job seekers with legitimate Canadian businesses offering genuine employment vacancies with fair labour conditions.',
    },
    {
      title: 'Transparent Process',
      description: 'Clear expectations from profile review to interview, documentation, and employer onboarding.',
    },
    {
      title: 'Statutory Compliance',
      description: 'All employment and recruitment procedures adhere strictly to federal and provincial Canadian employment standards.',
    },
  ],

  // Disclaimers & Regulatory Compliance Notice (Crucial Non-Government Transparency)
  disclaimers: {
    isPrivateAgency: true,
    governmentAffiliation: false,
    guaranteesApproval: false,
    shortNotice: 'Canada Workforce Recruitment is an independent private employment agency. We are not affiliated with the Government of Canada, IRCC, or ESDC. Employment and work permit eligibility are subject to employer selection and official Canadian government approval.',
    fullNotice: 'Canada Workforce Recruitment is a private employment and staffing agency connecting job seekers with Canadian employers. We are not affiliated with Immigration, Refugees and Citizenship Canada (IRCC) or the Government of Canada. We do not issue work permits, visas, or immigration documents. Official work authorizations and visas are evaluated and approved solely by authorized Canadian government officials.',
    noGuaranteePolicy: 'We strictly adhere to fair recruitment principles: no representative can guarantee a job offer, Labour Market Impact Assessment (LMIA) approval, work permit, or immigration outcome.',
  },

  // Default WhatsApp Message Templates for Various Triggers
  defaultMessages: {
    generalInquiry: 'Hello Canada Workforce Recruitment! I would like to inquire about current job opportunities and the candidate application process.',
    heroInquiry: 'Hello Canada Workforce Recruitment! I am interested in exploring employment opportunities in Canada. Please guide me on available positions.',
    jobInquiry: (jobTitle: string) => `Hello Canada Workforce Recruitment! I would like to inquire about the "${jobTitle}" position and required qualifications.`,
    applicationFollowUp: (appCode: string, name: string) => `Hello Canada Workforce Recruitment! My name is ${name}. I submitted my application (Ref: ${appCode}) and would like to confirm my documents.`,
    employerInquiry: 'Hello Canada Workforce Recruitment Team! I represent a Canadian business and would like to discuss workforce staffing and candidate recruitment.',
    eligibilityInquiry: (category: string) => `Hello Canada Workforce Recruitment! I completed the Job Match assessment and would like guidance regarding "${category}" opportunities.`,
    faqInquiry: 'Hello Canada Workforce Recruitment! I have a question regarding your recruitment process that was not covered in the FAQ.',
  },
};

/**
 * Strips non-digit characters from the configured WhatsApp number.
 */
export const getCleanWhatsAppNumber = (): string => {
  return SITE_CONFIG.whatsAppNumber.replace(/[^0-9]/g, '');
};

/**
 * Builds a direct WhatsApp chat URL with an optional encoded prefilled message.
 */
export const buildWhatsAppUrl = (message?: string): string => {
  const cleanNumber = getCleanWhatsAppNumber();
  const textToSend = message || SITE_CONFIG.defaultMessages.generalInquiry;
  const encodedText = encodeURIComponent(textToSend);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

/**
 * Safely launches the WhatsApp chat in a new tab with security attributes.
 */
export const openWhatsApp = (message?: string): void => {
  const url = buildWhatsAppUrl(message);
  if (typeof window !== 'undefined') {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// Re-exports for convenience
export const WHATSAPP_NUMBER = SITE_CONFIG.whatsAppNumber;
export const WHATSAPP_DISPLAY = SITE_CONFIG.whatsAppDisplay;
export const SUPPORT_EMAIL = SITE_CONFIG.supportEmail;
export const EMPLOYER_EMAIL = SITE_CONFIG.employerEmail;
export const COMPANY_NAME = SITE_CONFIG.companyName;
