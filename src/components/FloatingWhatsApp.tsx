import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [inquiryType, setInquiryType] = useState('general');

  const handleLaunch = () => {
    let message = SITE_CONFIG.defaultMessages.generalInquiry;
    if (inquiryType === 'fruit') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Fruit & Produce Packing');
    } else if (inquiryType === 'food') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Food & Beverage Processing');
    } else if (inquiryType === 'warehouse') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Warehouse & Logistics');
    } else if (inquiryType === 'retail') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Supermarket & Retail');
    } else if (inquiryType === 'factory') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Factory & Assembly');
    } else if (inquiryType === 'agriculture') {
      message = SITE_CONFIG.defaultMessages.jobInquiry('Seasonal Agriculture');
    } else if (inquiryType === 'employer') {
      message = SITE_CONFIG.defaultMessages.employerInquiry;
    }

    if (applicantName.trim()) {
      message = `Hello Canada Workforce Recruitment! My name is ${applicantName.trim()}.\n${message}`;
    }

    openWhatsApp(message);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-slate-800">
          
          {/* Card Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Recruitment WhatsApp Desk</h4>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Advisors Available
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 space-y-3.5 text-xs">
            <p className="text-slate-600 leading-snug">
              Chat directly with our Canadian candidate support coordinators. Inquire about open positions, document requirements, or employer staffing.
            </p>

            <div className="space-y-1">
              <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Maria / Alex"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-bold text-slate-700 uppercase tracking-wider text-[10px]">
                What would you like to inquire about?
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none bg-white"
              >
                <option value="general">General Candidate Inquiries</option>
                <option value="fruit">Fruit & Produce Packing</option>
                <option value="food">Food & Beverage Processing</option>
                <option value="warehouse">Warehouse & Logistics</option>
                <option value="retail">Supermarket & Retail</option>
                <option value="factory">Factory & Assembly</option>
                <option value="agriculture">Seasonal Agriculture</option>
                <option value="employer">Canadian Employer Staffing Desk</option>
              </select>
            </div>

            <button
              onClick={handleLaunch}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open WhatsApp Chat</span>
            </button>

            <p className="text-[10px] text-slate-400 text-center leading-tight">
              Canada Workforce Recruitment is a private employment agency.
            </p>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide pr-1">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
