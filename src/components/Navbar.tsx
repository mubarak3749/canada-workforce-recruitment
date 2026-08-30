import React, { useState } from 'react';
import { 
  Briefcase, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  Building2, 
  FileCheck, 
  CheckSquare, 
  HelpCircle, 
  Phone
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';

interface NavbarProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenApply: () => void;
  onOpenEmployerModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateTo, 
  onOpenApply, 
  onOpenEmployerModal 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigateTo(id);
    setMobileMenuOpen(false);
  };

  const handleWhatsApp = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.generalInquiry);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Company Brand & Logo */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-700 to-slate-900 flex items-center justify-center text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
              <span className="text-xl" role="img" aria-label="Canadian Maple Leaf">🍁</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                  {SITE_CONFIG.companyName}
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide block pt-0.5">
                {SITE_CONFIG.shortTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('about')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('jobs')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Job Categories
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('match-checker')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <FileCheck className="w-4 h-4 text-red-600" />
              <span>Job Match</span>
            </button>
            <button
              onClick={() => handleNavClick('checklist')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>Documents</span>
            </button>
            <button
              onClick={() => handleNavClick('employers')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
            >
              <Building2 className="w-4 h-4 text-slate-500" />
              <span>Employers</span>
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
              title="Chat with recruitment advisors on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span className="hidden xl:inline">WhatsApp Inquiries</span>
              <span className="xl:hidden">WhatsApp</span>
            </button>

            <button
              onClick={onOpenApply}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-md shadow-red-600/20 hover:shadow-lg transition-all transform active:scale-98 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenApply}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => handleNavClick('about')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <span>About Us</span>
            </button>
            <button
              onClick={() => handleNavClick('jobs')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Briefcase className="w-4 h-4 text-red-600" />
              <span>Job Categories</span>
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <span>How It Works</span>
            </button>
            <button
              onClick={() => handleNavClick('match-checker')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <FileCheck className="w-4 h-4 text-red-600" />
              <span>Job Match</span>
            </button>
            <button
              onClick={() => handleNavClick('checklist')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>Documents</span>
            </button>
            <button
              onClick={() => handleNavClick('employers')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Building2 className="w-4 h-4 text-slate-600" />
              <span>For Employers</span>
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <HelpCircle className="w-4 h-4 text-slate-600" />
              <span>FAQs</span>
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-2 p-2.5 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Contact</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenApply();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 text-white font-bold text-sm shadow-md"
            >
              <Briefcase className="w-4 h-4" />
              <span>Submit Candidate Application</span>
            </button>

            <button
              onClick={() => {
                handleWhatsApp();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat with Recruitment on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
