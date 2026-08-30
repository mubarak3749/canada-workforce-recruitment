import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Apple, 
  Package, 
  Boxes, 
  ShoppingBag, 
  Factory, 
  Tractor,
  MessageCircle,
  Eye,
  Filter,
  Sparkles,
  Info
} from 'lucide-react';
import { JOB_LISTINGS } from '../data/jobData';
import { JobListing, JobCategory } from '../types';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

interface JobsSectionProps {
  onViewJob: (job: JobListing) => void;
  onApplyForJob: (job: JobListing) => void;
}

export const JobsSection: React.FC<JobsSectionProps> = ({
  onViewJob,
  onApplyForJob,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Positions (6)' },
    { id: 'fruit_packing', label: 'Fruit Packing' },
    { id: 'food_processing', label: 'Food Processing' },
    { id: 'warehouse_logistics', label: 'Warehouse & Logistics' },
    { id: 'store_retail', label: 'Store & Retail' },
    { id: 'general_factory', label: 'Factory & Assembly' },
    { id: 'seasonal_agriculture', label: 'Seasonal Agriculture' },
  ];

  const getCategoryIcon = (category: JobCategory) => {
    switch (category) {
      case 'fruit_packing':
        return <Apple className="w-5 h-5 text-red-600" />;
      case 'food_processing':
        return <Package className="w-5 h-5 text-amber-600" />;
      case 'warehouse_logistics':
        return <Boxes className="w-5 h-5 text-blue-600" />;
      case 'store_retail':
        return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
      case 'general_factory':
        return <Factory className="w-5 h-5 text-purple-600" />;
      case 'seasonal_agriculture':
        return <Tractor className="w-5 h-5 text-lime-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-600" />;
    }
  };

  const filteredJobs = JOB_LISTINGS.filter((job) => {
    const matchesCategory = selectedFilter === 'all' || job.category === selectedFilter;
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppJob = (job: JobListing, e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsApp(SITE_CONFIG.defaultMessages.jobInquiry(job.title));
  };

  return (
    <section id="jobs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5 text-red-700" />
            <span>Active Employment Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Explore Open Canadian Job Openings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Review detailed job roles, day-to-day responsibilities, basic qualifications, and required candidate documentation across our primary employment sectors.
          </p>
        </div>

        {/* Filter Pills & Search */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by keyword, industry or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 shadow-2xs"
            />
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              onClick={() => onViewJob(job)}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-red-400 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Job Card Image Preview */}
                {job.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={job.imageUrl} 
                      alt={job.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                        {getCategoryIcon(job.category)}
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-950/80 text-white backdrop-blur-xs">
                        {job.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-bold text-red-300 uppercase tracking-wider block">
                        {job.industry}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-tight group-hover:text-red-200 transition-colors drop-shadow-sm">
                        {job.title}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="p-5 space-y-4">
                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {job.summary}
                  </p>

                  {/* Key Information Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span className="leading-tight text-slate-600">
                        <strong className="text-slate-900">Location:</strong> {job.locationPlaceholder}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span className="leading-tight text-slate-600">
                        <strong className="text-slate-900">Schedule:</strong> {job.employmentType}
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights Snippet */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                      Core Duties:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {job.duties.slice(0, 2).map((duty, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-5 pt-0 border-t border-slate-100 space-y-2">
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewJob(job);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApplyForJob(job);
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Apply Now</span>
                  </button>
                </div>

                {/* WhatsApp Quick Link */}
                <button
                  onClick={(e) => handleWhatsAppJob(job, e)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-xl border border-emerald-200/60 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Disclaimer & Regulatory Note */}
        <div className="mt-12 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Placeholder Notice:</strong> Specific employer names, exact civic locations, shift allocations, and precise wage contracts are finalized upon direct employer placement and interview selection. Canada Workforce Recruitment does not collect recruitment fees from applicants.
          </p>
        </div>

      </div>
    </section>
  );
};
