import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Users2, 
  FileCheck2, 
  Scale, 
  Sparkles,
  ArrowRight,
  MapPin,
  Check
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';
import officeConsultationImg from '../assets/images/recruitment_consultation_office_1787988907362.jpg';

interface AboutSectionProps {
  onExploreJobs: () => void;
  onOpenEmployerModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onExploreJobs,
  onOpenEmployerModal
}) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-red-700 shadow-2xs">
            <span>🍁 Canadian Employment & Staffing Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About {SITE_CONFIG.companyName}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are a private Canadian recruitment firm bridging verified Canadian businesses and hardworking candidates seeking legitimate employment across essential industrial and agricultural sectors.
          </p>
        </div>

        {/* 2-Column Grid: Corporate Pillars & Visual Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Office Photography & Transparency Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img 
                src={officeConsultationImg} 
                alt="Canadian Recruitment Advisors in Consultation" 
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-400 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{SITE_CONFIG.office.city}, {SITE_CONFIG.office.province}, Canada</span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Dedicated Recruitment Advisors & Candidate Screening
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  Facilitating structured interviews, employer talent matching, and pre-departure document support.
                </p>
              </div>
            </div>

            {/* Quick Badge Matrix */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs shrink-0">
                  🇨🇦
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Private Agency</span>
                  <span className="text-[11px] text-slate-500">Employment Support</span>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Strict Compliance</span>
                  <span className="text-[11px] text-slate-500">No False Claims</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Mission & Commitments */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-600">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Connecting Workforce Talent to Canada's Vital Supply Chains
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Canadian industries—including fruit packing sheds, food processing facilities, logistics hubs, retail supermarkets, manufacturing plants, and commercial greenhouses—rely on dependable workforce talent to keep operations thriving.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Our mission is to provide transparent, structured candidate sourcing for Canadian employers while giving job seekers clear, honest roadmaps to legitimate jobs. We believe in candid communication, verifiable job criteria, and strictly legal recruitment channels.
              </p>
            </div>

            {/* Core Operational Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {SITE_CONFIG.values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 hover:border-slate-300 transition-colors space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onExploreJobs}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-600/25 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer"
              >
                <span>Explore Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenEmployerModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <Building2 className="w-4 h-4 text-slate-500" />
                <span>Information for Employers</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
