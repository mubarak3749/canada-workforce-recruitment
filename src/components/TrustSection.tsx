import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  MessageCircle, 
  FileCheck, 
  Users, 
  HelpCircle, 
  Lock, 
  Sparkles,
  ArrowRight,
  Headphones,
  Check
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';

interface TrustSectionProps {
  onExploreJobs: () => void;
  onOpenApply: () => void;
}

export const TrustSection: React.FC<TrustSectionProps> = ({
  onExploreJobs,
  onOpenApply
}) => {
  const trustPillars = [
    {
      icon: Building2,
      title: 'Legitimate Canadian Employers',
      description: 'We connect candidates with genuine Canadian companies possessing authentic workforce needs and supportive operational environments.',
      accent: 'border-red-200 bg-red-50/50 text-red-700',
      iconBg: 'bg-red-600 text-white'
    },
    {
      icon: FileCheck,
      title: 'Clear 5-Step Recruitment Process',
      description: 'No hidden stages. Every step—from screening to interview, job offer, documentation, and arrival preparation—is outlined upfront.',
      accent: 'border-blue-200 bg-blue-50/50 text-blue-700',
      iconBg: 'bg-slate-900 text-white'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Communication',
      description: 'Zero confusing jargon or misleading promises. We maintain straightforward, open dialogues throughout your entire application cycle.',
      accent: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
      iconBg: 'bg-emerald-600 text-white'
    },
    {
      icon: Users,
      title: 'Dedicated Candidate Support',
      description: 'Our bilingual recruitment coordinators assist applicants with resume structuring, interview preparation, and pre-departure readiness.',
      accent: 'border-amber-200 bg-amber-50/50 text-amber-700',
      iconBg: 'bg-amber-600 text-white'
    },
    {
      icon: Lock,
      title: 'Strictly No False Guarantees',
      description: 'We uphold full integrity: work permit issuances and entry rights are determined solely by Canadian government authorities (IRCC).',
      accent: 'border-purple-200 bg-purple-50/50 text-purple-700',
      iconBg: 'bg-slate-800 text-white'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Consultation',
      description: 'Connect quickly with our desk at +1 672 895 2555 to verify application questions, job category specifics, or scheduling requirements.',
      accent: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
      iconBg: 'bg-emerald-500 text-white'
    }
  ];

  return (
    <section id="trust" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Subtle Canada Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-red-400">
            <span>🍁 Built on Integrity & Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Candidates & Employers Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In an industry often clouded by misinformation, Canada Workforce Recruitment stands apart by adhering to strict Canadian employment recruitment standards and honest communication.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 flex flex-col justify-between group hover:translate-y-[-2px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${pillar.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Standard 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Private Agency Operational Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with WhatsApp Quick Action */}
        <div className="bg-gradient-to-r from-red-950/80 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-8 border border-red-900/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-600/30 text-red-300 text-xs font-bold">
              <span>🇨🇦 Direct Candidate Desk</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Have Questions About Canadian Workforce Roles?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Our team provides candid answers regarding job duties, physical prerequisites, required documents, and application timelines.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              onClick={() => openWhatsApp(SITE_CONFIG.defaultMessages.heroInquiry)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Consultation ({SITE_CONFIG.whatsAppDisplay})</span>
            </button>

            <button
              onClick={onOpenApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 transition-all cursor-pointer"
            >
              <span>Submit Profile</span>
              <ArrowRight className="w-4 h-4 text-red-600" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
