import React from 'react';
import { 
  Search, 
  Send, 
  UserCheck, 
  FileCheck2, 
  PlaneTakeoff, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { APPLICATION_STEPS } from '../data/jobData';

interface ApplicationProcessSectionProps {
  onStartApplication: () => void;
  onExploreJobs: () => void;
}

export const ApplicationProcessSection: React.FC<ApplicationProcessSectionProps> = ({
  onStartApplication,
  onExploreJobs
}) => {
  const stepIcons = [
    Search,
    Send,
    UserCheck,
    FileCheck2,
    PlaneTakeoff
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold">
            <span>Structured 5-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How The Recruitment & Hiring Process Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A transparent, legal, and step-by-step roadmap from initial job exploration to Canadian employer placement and statutory work authorization.
          </p>
        </div>

        {/* 5-Step Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {APPLICATION_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <div 
                key={item.step} 
                className="relative bg-slate-50 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-red-300 hover:shadow-lg transition-all duration-200"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-red-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    0{item.step}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-red-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                  <span>Step {item.step} of 5</span>
                  {idx < 4 && <span className="text-slate-400">Next →</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Official Authority Transparency Notice */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-6 sm:p-8 border border-slate-700 shadow-xl max-w-4xl mx-auto space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">
                Official Authority Determination Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Canadian immigration and labor market authorities (Immigration, Refugees and Citizenship Canada - IRCC, and Employment and Social Development Canada - ESDC) make the sole and final decisions regarding work permits, visa approvals, and entry to Canada. No recruitment consultant, agency, or representative possesses the authority to guarantee a visa or work permit.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-medium">
              Ready to submit your profile for employer review?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onExploreJobs}
                className="w-1/2 sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
              >
                Browse Jobs First
              </button>
              <button
                onClick={onStartApplication}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start Application</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
