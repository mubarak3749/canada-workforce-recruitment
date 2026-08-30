import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  AlertCircle, 
  FileText, 
  Briefcase, 
  ShieldCheck, 
  DollarSign, 
  Calendar,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { JobListing } from '../types';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

interface JobDetailModalProps {
  job: JobListing | null;
  onClose: () => void;
  onApplyForJob: (job: JobListing) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  onClose,
  onApplyForJob,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (job) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  const handleWhatsAppJob = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.jobInquiry(job.title));
  };

  const handleApplyClick = () => {
    onApplyForJob(job);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800">
          {job.imageUrl && (
            <div className="absolute inset-0 z-0">
              <img 
                src={job.imageUrl} 
                alt={job.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-20 filter blur-[0.5px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
            </div>
          )}
          
          <div className="relative z-10 px-6 py-5 flex items-start justify-between">
            <div className="space-y-1.5 pr-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-600 text-white shadow-xs">
                  {job.badge}
                </span>
                <span className="text-xs text-red-300 font-semibold uppercase tracking-wider">
                  {job.industry}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {job.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors shrink-0 cursor-pointer backdrop-blur-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          
          {/* Key Facts Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Location:</strong>
                <span className="text-slate-600">{job.locationPlaceholder}</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">Employment Type & Hours:</strong>
                <span className="text-slate-600">{job.employmentType}</span>
              </div>
            </div>
          </div>

          {/* Section: Overview & Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-red-600" />
              <span>Job Overview</span>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {job.fullDescription}
            </p>
          </div>

          {/* Section: Key Duties & Responsibilities */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Key Duties & Responsibilities</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {job.duties.map((duty, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{duty}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Requirements & Qualifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Candidate Requirements</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                  <span className="leading-snug">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Working Conditions & Safety */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Working Conditions & Environment
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              {job.workingConditions.map((cond, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                  {cond}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Documents Required */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Documents Normally Required for Candidates
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {job.documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-snug text-emerald-950 font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mandatory Transparency & Work Permit Disclaimer */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Important Work Authorization & Regulatory Notice</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              This job opening is offered by Canadian employers seeking qualified personnel. Canada Workforce Recruitment provides recruitment screening and employer presentation services. Official work authorizations, Labour Market Impact Assessments (LMIA), and entry visas are governed strictly by Employment and Social Development Canada (ESDC) and Immigration, Refugees and Citizenship Canada (IRCC). No recruitment agency can guarantee government approval or issuance.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 z-10 bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <button
            onClick={handleWhatsAppJob}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-700 text-emerald-700" />
            <span>Inquire About Job on WhatsApp</span>
          </button>

          <div className="w-full sm:w-auto flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleApplyClick}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for This Role</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
