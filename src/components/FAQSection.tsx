import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  MessageCircle, 
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { FAQS_DATA } from '../data/jobData';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(FAQS_DATA[0]?.id || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Available Jobs',
    'Requirements',
    'Work Permits',
    'Recruitment Process',
    'Fees & Transparency',
    'Housing & Support',
  ];

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleWhatsAppFAQ = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.faqInquiry);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-slate-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Answers for Job Seekers
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our Canadian recruitment services, requirements, work permit policies, and ethical hiring standards.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-8">
          
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-400 shadow-2xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-slate-300 shadow-md ring-1 ring-slate-200' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0">
                        {faq.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="p-1 rounded-lg text-slate-400 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-red-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No matching questions found for "{searchQuery}". Try a different keyword or contact our advisors.
            </div>
          )}
        </div>

        {/* Unanswered Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Have a specific question about your employment profile?
            </h4>
            <p className="text-xs text-slate-500">
              Our Canadian recruitment specialists provide transparent answers directly on WhatsApp.
            </p>
          </div>

          <button
            onClick={handleWhatsAppFAQ}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
            <span>Ask a Question on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};
