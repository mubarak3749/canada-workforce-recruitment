import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  X,
  Scale
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenApply: () => void;
  onOpenEmployerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateTo, 
  onOpenApply, 
  onOpenEmployerModal 
}) => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleWhatsApp = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.generalInquiry);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Top Disclaimer Banner inside Footer */}
      <div className="bg-slate-900/90 border-b border-slate-800 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-start gap-3 max-w-3xl">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
              <strong className="text-white font-semibold">Important Regulatory Notice:</strong>{' '}
              {SITE_CONFIG.disclaimers.fullNotice}
            </p>
          </div>
          <button
            onClick={() => setModalContent('disclaimer')}
            className="shrink-0 text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4 text-xs cursor-pointer"
          >
            Read Full Policy
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white text-lg shadow-md">
                🍁
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block">
                  {SITE_CONFIG.companyName}
                </span>
                <span className="text-[11px] text-slate-400">
                  {SITE_CONFIG.shortTagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Connecting qualified international and domestic talent with legitimate Canadian employers across agriculture, food processing, warehousing, retail, and manufacturing.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{SITE_CONFIG.office.addressDisplay}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="hover:text-white">
                  {SITE_CONFIG.supportEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Agency
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Job Openings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  5-Step Hiring Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('match-checker')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Job Match Questionnaire
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('checklist')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Document Checklist
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenEmployerModal}
                  className="hover:text-white transition-colors cursor-pointer text-red-400 font-semibold"
                >
                  Canadian Employers Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Job Sectors */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Employment Streams
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fruit Packing & Sorting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Food Processing & Packaging
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Warehouse & Logistics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Supermarket & Store Retail
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  General Factory Assembly
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo('jobs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Seasonal Farm Harvesting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Candidate CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Candidate Support
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Ready to submit your profile for Canadian employer screening?
            </p>
            <button
              onClick={onOpenApply}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all cursor-pointer shadow-md"
            >
              <Briefcase className="w-4 h-4" />
              <span>Submit Application</span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold transition-all cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Official WhatsApp</span>
            </button>
            <a
              href="/canada-workforce-recruitment-dist.zip"
              download="canada-workforce-recruitment-dist.zip"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer"
            >
              <span>Download Netlify ZIP (dist.zip)</span>
            </a>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={() => setModalContent('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Transparency & Ethics Statement
            </button>
          </div>
        </div>

      </div>

      {/* POLICY MODALS */}
      {modalContent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 text-slate-300 rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white">
                {modalContent === 'privacy' && 'Candidate Privacy Policy'}
                {modalContent === 'terms' && 'Terms of Recruitment Service'}
                {modalContent === 'disclaimer' && 'Recruitment Transparency & Regulatory Disclaimer'}
              </h3>
              <button
                onClick={() => setModalContent(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed text-slate-300">
              {modalContent === 'privacy' && (
                <>
                  <p>
                    <strong>Data Collection:</strong> Canada Workforce Recruitment collects applicant identification, contact details, curriculum vitae, and educational records exclusively for candidate screening and presentation to Canadian prospective employers.
                  </p>
                  <p>
                    <strong>Confidentiality:</strong> We do not sell or monetize personal candidate data to third-party marketing companies. Information is shared only with verified hiring managers in Canada.
                  </p>
                  <p>
                    <strong>Retention & Erasure:</strong> Candidates may request deletion of their submitted resumes from our recruitment databases at any time by contacting {SITE_CONFIG.supportEmail}.
                  </p>
                </>
              )}

              {modalContent === 'terms' && (
                <>
                  <p>
                    <strong>Scope of Service:</strong> Canada Workforce Recruitment provides private staffing and candidate introduction services. We connect eligible job seekers with Canadian businesses offering genuine employment vacancies.
                  </p>
                  <p>
                    <strong>No Illegal Fees:</strong> In adherence with Canadian federal and provincial labour legislation, candidates are never charged recruitment, placement, or hiring fees by our company.
                  </p>
                  <p>
                    <strong>Candidate Accuracy:</strong> Applicants certify that all work experience, educational diplomas, and identification documents submitted are true, authentic, and accurate.
                  </p>
                </>
              )}

              {modalContent === 'disclaimer' && (
                <>
                  <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700 text-amber-300 space-y-1">
                    <strong>Statutory Disclaimer:</strong>
                    <p className="text-slate-200">
                      Canada Workforce Recruitment is a private commercial staffing agency. We are not Immigration, Refugees and Citizenship Canada (IRCC), Employment and Social Development Canada (ESDC), or any Canadian governmental department.
                    </p>
                  </div>
                  <p>
                    <strong>No Immigration Outcome Guarantee:</strong> Neither Canada Workforce Recruitment nor any employee can guarantee the issuance of a Canadian Labour Market Impact Assessment (LMIA), work permit, visa, or permanent residence. Official approvals are made strictly and solely by designated officers of the Government of Canada.
                  </p>
                  <p>
                    <strong>Employer Discretion:</strong> All hiring decisions, job offers, wage rates, and employment terms are determined by the prospective Canadian employer based on candidate evaluation and business requirements.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="px-5 py-2 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700"
              >
                I Understand & Agree
              </button>
            </div>

          </div>
        </div>
      )}

    </footer>
  );
};
