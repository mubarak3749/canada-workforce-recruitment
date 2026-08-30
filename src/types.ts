export type JobCategory = 
  | 'fruit_packing'
  | 'food_processing'
  | 'warehouse_logistics'
  | 'store_retail'
  | 'general_factory'
  | 'seasonal_agriculture';

export interface JobListing {
  id: string;
  category: JobCategory;
  title: string;
  industry: string;
  badge: string;
  locationPlaceholder: string;
  employmentType: string;
  summary: string;
  fullDescription: string;
  duties: string[];
  requirements: string[];
  workingConditions: string[];
  documentsRequired: string[];
  salaryNote: string;
  shiftSchedule: string;
  isSeasonal?: boolean;
  imageUrl?: string;
}

export interface JobMatchAnswers {
  ageRange: string;
  workExperienceYears: string;
  experienceSector: string;
  highestEducation: string;
  englishProficiency: string;
  frenchProficiency: string;
  preferredJobCategory: string;
  previousCanadaExperience: string;
  physicalReadiness: string;
  shiftFlexibility: string;
}

export interface JobMatchResult {
  matchedCategoryTitle: string;
  matchedCategoryId: JobCategory;
  matchScore: number;
  matchTier: 'Strong Potential Match' | 'General Potential Match' | 'Entry Level Opportunity';
  profileHighlights: string[];
  suggestedAction: string;
  documentRecommendations: string[];
  disclaimer: string;
}

export interface CandidateApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  countryOfResidence: string;
  preferredJobCategory: string;
  workExperienceYears: string;
  highestEducation: string;
  englishLevel: string;
  frenchLevel: string;
  resumeFileName?: string;
  coverMessage: string;
  agreedToTerms: boolean;
}

export interface EmployerInquiryForm {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industrySector: string;
  positionsNeeded: string;
  workersCount: string;
  locationProvince: string;
  timeline: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Available Jobs' | 'Requirements' | 'Work Permits' | 'Recruitment Process' | 'Fees & Transparency' | 'Housing & Support';
}

export interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  items: {
    id: string;
    label: string;
    description: string;
    required: boolean;
    tips?: string;
  }[];
}
