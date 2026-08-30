import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Candidate Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppContact = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.generalInquiry);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Canada Workforce Recruitment
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Reach out to our candidate advisory or employer staffing desks for assistance with job applications, documentation, or Canadian workforce planning.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-6 shadow-xl border border-slate-800">
              
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                  Head Office & Advisory
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {SITE_CONFIG.companyName}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Corporate Office Address:</strong>
                    <span className="text-slate-300 block">{SITE_CONFIG.office.streetAddress}</span>
                    <span className="text-slate-400 text-xs">{SITE_CONFIG.office.addressDisplay}</span>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Candidate Inquiries:</strong>
                    <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-slate-300 hover:text-white underline">
                      {SITE_CONFIG.supportEmail}
                    </a>
                  </div>
                </div>

                {/* Employer Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Canadian Employers Desk:</strong>
                    <a href={`mailto:${SITE_CONFIG.employerEmail}`} className="text-slate-300 hover:text-white underline">
                      {SITE_CONFIG.employerEmail}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Business Hours (EST):</strong>
                    <span className="text-slate-300 block">{SITE_CONFIG.operatingHours.weekdays}</span>
                    <span className="text-slate-400 text-xs">{SITE_CONFIG.operatingHours.saturday}</span>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Action */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  onClick={handleWhatsAppContact}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Consultation</span>
                </button>
              </div>

            </div>

            {/* Fair Recruitment Reminder */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Fair Recruitment Guarantee</span>
              </div>
              <p className="text-slate-600 leading-snug">
                Canada Workforce Recruitment never asks candidates for illegal placement fees. Official application correspondence occurs strictly through verified channels.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              
              <div className="space-y-1 mb-6">
                <h3 className="text-lg font-bold text-slate-900">Send an Inquiry Message</h3>
                <p className="text-xs text-slate-500">
                  Our candidate support coordinators review messages and reply within 24 to 48 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Received</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {formData.name}. Your inquiry has been routed to our recruitment advisory desk. A representative will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Candidate Inquiry',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-bold text-slate-700 uppercase">Your Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. David Miller"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-slate-700 uppercase">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="e.g. david@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block font-bold text-slate-700 uppercase">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="e.g. +1 416 555 0100"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block font-bold text-slate-700 uppercase">Inquiry Category *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                      >
                        <option value="General Candidate Inquiry">General Candidate Inquiry</option>
                        <option value="Fruit Packing & Agriculture">Fruit Packing & Agriculture Opportunities</option>
                        <option value="Food Processing Jobs">Food Processing & Packaging Positions</option>
                        <option value="Warehouse & Logistics Jobs">Warehouse & Logistics Vacancies</option>
                        <option value="Retail & Store Openings">Retail & Supermarket Openings</option>
                        <option value="Canadian Employer Hiring">Canadian Employer Hiring Inquiries</option>
                        <option value="Application Status Follow-up">Application Status Follow-up</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-slate-700 uppercase">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Please specify your questions regarding positions, requirements, or documentation..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-red-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-colors shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Inquiries Directly</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
