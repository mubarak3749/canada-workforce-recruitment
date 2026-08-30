import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Package, 
  Apple, 
  Boxes, 
  Sparkles, 
  ShoppingBag, 
  FileCheck2, 
  MessageCircle,
  Factory,
  Tractor,
  Phone
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';
import heroOfficeBg from '../assets/images/canadian_recruitment_office_1787988294640.jpg';

interface HeroSectionProps {
  onExploreJobs: () => void;
  onApplyNow: () => void;
  onCheckMatch: () => void;
  onOpenEmployerModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreJobs,
  onApplyNow,
  onCheckMatch,
  onOpenEmployerModal,
}) => {
  const handleHeroWhatsApp = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.heroInquiry);
  };

  const industries = [
    { title: 'Fruit & Produce Packing', icon: Apple, count: 'Seasonal & Regular' },
    { title: 'Food & Beverage Processing', icon: Package, count: 'Year-Round Lines' },
    { title: 'Warehouse & Logistics', icon: Boxes, count: 'Distribution Hubs' },
    { title: 'Supermarket & Retail', icon: ShoppingBag, count: 'Store Operations' },
    { title: 'Factory & Assembly', icon: Factory, count: 'Manufacturing Plants' },
    { title: 'Seasonal Agriculture', icon: Tractor, count: 'Field & Greenhouses' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      
      {/* Realistic Canadian Recruitment Office Background with Optical Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroOfficeBg} 
          alt="Professional Canadian Corporate Recruitment & Staffing Office" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Notices & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Canadian Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/90 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="text-base" role="img" aria-label="Canadian Flag">🇨🇦</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Independent Canadian Private Recruitment & Staffing Service</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Explore Legitimate <br />
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-amber-300 bg-clip-text text-transparent">
                  Canadian Employment
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Connecting qualified domestic and international job seekers with authentic Canadian employer vacancies across agriculture, food processing, fruit packing, warehousing, retail, and manufacturing.
              </p>
            </div>

            {/* Regulatory & Compliance Notice Box */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5 text-left max-w-2xl backdrop-blur-md">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white uppercase tracking-wider text-[11px] block">
                    Important Compliance Notice
                  </span>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Canada Workforce Recruitment is a private employment agency and is not affiliated with the Government of Canada, IRCC, or ESDC. All work permits and visas are issued solely by official Canadian government authorities.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onExploreJobs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <Briefcase className="w-4 h-4" />
                <span>View 6 Job Categories</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleHeroWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Desk ({SITE_CONFIG.whatsAppDisplay})</span>
              </button>

              <button
                onClick={onApplyNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-white hover:bg-slate-100 shadow-md transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-red-600" />
                <span>Apply Online</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Legitimate Employers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Zero Illegal Placement Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Transparent 5-Step Process</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Overview Card with 6 Streams */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative rounded-2xl bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 border border-slate-800 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block flex items-center gap-1">
                    <span>🍁</span> Canadian Operational Sectors
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white">Active Workforce Categories</h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                  Open for Profiles
                </div>
              </div>

              {/* 6 Sector Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {industries.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      onClick={onExploreJobs}
                      className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-red-500/50 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-600/20 group-hover:bg-red-600/30 text-red-400 flex items-center justify-center transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-red-300 transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <span className="text-[11px] text-slate-400">{item.count}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                    </div>
                  );
                })}
              </div>

              {/* Canadian Employer Direct Portal Action */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span className="text-xs text-slate-300">Canadian Business Hiring?</span>
                </div>
                <button
                  onClick={onOpenEmployerModal}
                  className="text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4 cursor-pointer"
                >
                  Staffing Desk →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
