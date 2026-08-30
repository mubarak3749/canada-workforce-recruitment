import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Phone, 
  MessageCircle,
  FileCheck2,
  X,
  Send,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG, openWhatsApp } from '../config/siteConfig';
import { EmployerInquiryForm } from '../types';

interface EmployerSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const EmployerSection: React.FC<EmployerSectionProps> = ({
  isOpenModal = false,
  onCloseModal
}) => {
  const [modalOpen, setModalOpen] = useState(isOpenModal);
  const [formData, setFormData] = useState<EmployerInquiryForm>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industrySector: 'Agriculture & Packing',
    positionsNeeded: '',
    workersCount: '5-10 workers',
    locationProvince: 'Ontario',
    timeline: 'Within 1-2 months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync external prop if modal trigger passed
  React.useEffect(() => {
    setModalOpen(isOpenModal);
  }, [isOpenModal]);

  const handleClose = () => {
    setModalOpen(false);
    if (onCloseModal) onCloseModal();
  };

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

  const handleWhatsAppEmployer = () => {
    openWhatsApp(SITE_CONFIG.defaultMessages.employerInquiry);
  };

  return (
    <section id="employers" className="py-20 bg-slate-900 text-white border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold text-red-400">
                <Building2 className="w-3.5 h-3.5" />
                <span>Canadian Employer Staffing Solutions</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Are you an employer looking for qualified, dependable workers?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-xl">
                We partner with Canadian commercial farms, packaging sheds, food manufacturing plants, distribution warehouses, and retail supermarkets to provide tailored candidate screening and transparent recruitment.
              </p>

              {/* Employer Value Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pre-screened candidates with verified work experience</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent compliance with Canadian labor standards</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Seasonal & full-time workforce pipeline management</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Dedicated corporate recruitment account manager</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>Contact Recruitment Team</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppEmployer}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-800 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  <span>Employer WhatsApp Desk</span>
                </button>
              </div>

            </div>

            {/* Right Contact Quick Box */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-700/80 space-y-4 text-xs">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Employer Recruitment Inquiries
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Canadian corporate hiring managers can submit their workforce requirements directly or schedule an exploratory staffing consultation.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-4 h-4 text-red-400 shrink-0" />
                    <span>
                      <strong className="text-white">Email:</strong> {SITE_CONFIG.employerEmail}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>
                      <strong className="text-white">Direct Line:</strong> {SITE_CONFIG.phoneDisplay}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>
                      <strong className="text-white">Coverage:</strong> Across Canadian Provinces
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                  Strictly ethical sourcing adhering to the Canadian Temporary Foreign Worker and Provincial Employment Standards framework.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* EMPLOYER INQUIRY MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700 overflow-hidden p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Canadian Employer Consultation
                </span>
                <h3 className="text-xl font-bold text-white">
                  Request Workforce Staffing Assistance
                </h3>
              </div>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.contactPerson || 'valued employer'}. An enterprise recruitment specialist will contact {formData.email || 'your business'} within 1 business day.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-700"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      placeholder="e.g. Ontario Agri-Logistics Inc."
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      placeholder="e.g. Robert Smith (Operations Manager)"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Business Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="hr@company.ca"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (416) 555-0199"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Industry Sector</label>
                    <select
                      name="industrySector"
                      value={formData.industrySector}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="Agriculture & Packing">Agriculture & Packing</option>
                      <option value="Food Processing">Food Processing</option>
                      <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                      <option value="Retail Operations">Retail Operations</option>
                      <option value="Manufacturing">Manufacturing & Assembly</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Workers Needed</label>
                    <select
                      name="workersCount"
                      value={formData.workersCount}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="1-5 workers">1 – 5 workers</option>
                      <option value="5-10 workers">5 – 10 workers</option>
                      <option value="10-25 workers">10 – 25 workers</option>
                      <option value="25+ workers">25+ workers</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-bold text-slate-300 uppercase">Province</label>
                    <select
                      name="locationProvince"
                      value={formData.locationProvince}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="Ontario">Ontario</option>
                      <option value="British Columbia">British Columbia</option>
                      <option value="Alberta">Alberta</option>
                      <option value="Quebec">Quebec</option>
                      <option value="Nova Scotia / Atlantic">Nova Scotia / Atlantic</option>
                      <option value="Manitoba / Saskatchewan">Manitoba / Saskatchewan</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-bold text-slate-300 uppercase">Position Description / Requirements</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Provide details regarding shift requirements, experience expectations, and onboarding timelines..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-red-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 rounded-xl text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-colors cursor-pointer"
                  >
                    Submit Staffing Request
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
