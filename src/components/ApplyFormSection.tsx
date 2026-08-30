import React, { useState, useRef } from 'react';
import { 
  Send, 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  RotateCcw,
  X,
  Lock,
  Building2
} from 'lucide-react';
import { CandidateApplicationForm, JobListing } from '../types';
import { JOB_LISTINGS } from '../data/jobData';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

interface ApplyFormSectionProps {
  initialJobCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const ApplyFormSection: React.FC<ApplyFormSectionProps> = ({ 
  initialJobCategory 
}) => {
  const [formData, setFormData] = useState<CandidateApplicationForm>({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    countryOfResidence: '',
    preferredJobCategory: initialJobCategory || 'fruit-packing-worker',
    workExperienceYears: '1-2 years',
    highestEducation: 'Secondary / High School',
    englishLevel: 'Basic Conversational',
    frenchLevel: 'None / Basic',
    resumeFileName: '',
    coverMessage: '',
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceCode: string;
    submittedAt: string;
  } | null>(null);

  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync prop changes if passed from other components
  React.useEffect(() => {
    if (initialJobCategory) {
      setFormData((prev) => ({ ...prev, preferredJobCategory: initialJobCategory }));
    }
  }, [initialJobCategory]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, resumeFileName: file.name }));
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, resumeFileName: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) {
      alert('Please accept the recruitment compliance and transparency terms.');
      return;
    }

    setIsSubmitting(true);

    /**
     * BACKEND INTEGRATION NOTE:
     * When connecting to your production server/email gateway:
     * fetch('/api/applications', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * })
     */
    setTimeout(() => {
      const randomCode = `CWR-${Math.floor(100000 + Math.random() * 900000)}`;
      const dateStr = new Date().toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      setSubmissionReceipt({
        referenceCode: randomCode,
        submittedAt: dateStr,
      });
      setIsSubmitting(false);
    }, 900);
  };

  const handleSendWhatsAppCopy = () => {
    if (!submissionReceipt) return;
    const text = 
      `Hello Canada Workforce Recruitment! I have submitted my Candidate Application.\n\n` +
      `• Reference Code: ${submissionReceipt.referenceCode}\n` +
      `• Name: ${formData.fullName}\n` +
      `• Country: ${formData.countryOfResidence}\n` +
      `• Position Stream: ${formData.preferredJobCategory}\n` +
      `• Work Experience: ${formData.workExperienceYears}\n` +
      `• CV Uploaded: ${formData.resumeFileName || 'Prepared'}\n\n` +
      `Could you please confirm receipt and outline the next candidate review steps?`;
    openWhatsApp(text);
  };

  const handleResetForm = () => {
    setSubmissionReceipt(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      whatsapp: '',
      countryOfResidence: '',
      preferredJobCategory: 'fruit-packing-worker',
      workExperienceYears: '1-2 years',
      highestEducation: 'Secondary / High School',
      englishLevel: 'Basic Conversational',
      frenchLevel: 'None / Basic',
      resumeFileName: '',
      coverMessage: '',
      agreedToTerms: false,
    });
  };

  return (
    <section id="apply" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-xs font-bold text-red-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Candidate Application Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Submit Your Candidate Profile
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Fill out the official screening form below. Your credentials will be reviewed by our recruitment team and matched with verified Canadian employer vacancies.
          </p>
        </div>

        {/* Application Card */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-10">
          
          {/* SUCCESS CONFIRMATION RECEIPT */}
          {submissionReceipt ? (
            <div className="space-y-6 text-center animate-in zoom-in-95 duration-300 py-4">
              
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Application Logged Successfully
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto">
                  Your candidate profile has been registered in our recruitment system for employer review.
                </p>
              </div>

              {/* Receipt Summary Box */}
              <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-700 text-left max-w-lg mx-auto space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Application Reference Code:</span>
                  <span className="font-mono font-bold text-amber-300 text-sm">{submissionReceipt.referenceCode}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Preferred Category:</span>
                  <span className="font-semibold text-white">{formData.preferredJobCategory}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Contact Email:</span>
                  <span className="font-semibold text-white">{formData.email}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <span className="text-slate-400">Country of Residence:</span>
                  <span className="font-semibold text-white">{formData.countryOfResidence}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Submission Date:</span>
                  <span className="text-slate-300">{submissionReceipt.submittedAt}</span>
                </div>
              </div>

              {/* What Happens Next Steps */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700 text-left max-w-lg mx-auto space-y-2 text-xs text-slate-300">
                <strong className="text-white block font-semibold">Next Steps in Recruitment:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-300">
                  <li>Our recruitment team will review your qualifications within 2 to 3 business days.</li>
                  <li>Matching employer vacancies will be shared with you via email or WhatsApp.</li>
                  <li>Have your documents ready in accordance with our Applicant Document Checklist.</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-lg mx-auto">
                <button
                  onClick={handleSendWhatsAppCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Copy to WhatsApp for Faster Follow-up</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Profile</span>
                </button>
              </div>

            </div>
          ) : (
            /* CANDIDATE APPLICATION FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Full Legal Name (as in Passport) *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Maria Gonzalez"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. maria.candidate@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Row 2: Phone & WhatsApp & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Phone Number (with Country Code) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. +52 55 1234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="e.g. +52 55 1234 5678"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Country of Current Residence *
                  </label>
                  <input
                    type="text"
                    name="countryOfResidence"
                    required
                    placeholder="e.g. Mexico, Philippines, Jamaica"
                    value={formData.countryOfResidence}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Row 3: Preferred Job Category & Experience Years */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Preferred Employment Category *
                  </label>
                  <select
                    name="preferredJobCategory"
                    value={formData.preferredJobCategory}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    {JOB_LISTINGS.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                    <option value="General Operational Pool">Any Suitable Essential Sector Position</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Total Work Experience *
                  </label>
                  <select
                    name="workExperienceYears"
                    value={formData.workExperienceYears}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="0-1 years">Less than 1 year / Entry level</option>
                    <option value="1-2 years">1 – 2 years</option>
                    <option value="3-5 years">3 – 5 years</option>
                    <option value="5+ years">More than 5 years</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Education & Languages */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Highest Education *
                  </label>
                  <select
                    name="highestEducation"
                    value={formData.highestEducation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Secondary / High School">High School / Secondary Diploma</option>
                    <option value="Vocational / Technical">Vocational / Trade Certificate</option>
                    <option value="College Diploma">College Diploma</option>
                    <option value="University Degree">Bachelor's Degree or Higher</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    English Proficiency *
                  </label>
                  <select
                    name="englishLevel"
                    value={formData.englishLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="Basic Conversational">Basic Conversational</option>
                    <option value="Intermediate">Intermediate (Functional)</option>
                    <option value="Fluent / Advanced">Fluent / Advanced</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    French Proficiency
                  </label>
                  <select
                    name="frenchLevel"
                    value={formData.frenchLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                  >
                    <option value="None / Basic">None / Basic</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Fluent">Fluent</option>
                  </select>
                </div>
              </div>

              {/* CV / Resume Upload Box (Drag & Drop + Click) */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Attach CV / Resume (PDF, DOCX, DOC - Max 10MB)
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />

                {formData.resumeFileName ? (
                  <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">{formData.resumeFileName}</span>
                        <span className="text-[11px] text-emerald-400">File attached successfully</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`p-6 rounded-xl border-2 border-dashed text-center cursor-pointer transition-all ${
                      dragActive
                        ? 'border-red-500 bg-red-500/10'
                        : 'border-slate-700 hover:border-slate-500 bg-slate-900/60'
                    }`}
                  >
                    <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <span className="text-xs font-bold text-white block">
                      Click to upload or drag & drop your CV / Resume
                    </span>
                    <span className="text-[11px] text-slate-500 block pt-1">
                      Supported formats: PDF, DOC, DOCX
                    </span>
                  </div>
                )}
              </div>

              {/* Cover Message / Additional Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Additional Notes / Past Relevant Experience (Optional)
                </label>
                <textarea
                  name="coverMessage"
                  rows={3}
                  placeholder="Describe any relevant skills, physical readiness, or specific machinery/tools you have used..."
                  value={formData.coverMessage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-600 bg-slate-900/90 text-white text-sm focus:ring-2 focus:ring-red-500 focus:outline-none placeholder:text-slate-500"
                />
              </div>

              {/* Mandatory Transparency & Regulatory Agreement Checkbox */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    required
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 rounded border-slate-600 text-red-600 focus:ring-red-500 cursor-pointer"
                  />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    <strong className="text-white">Compliance & Transparency Agreement:</strong> I acknowledge that Canada Workforce Recruitment is a private employment agency and not affiliated with the Government of Canada or IRCC. I understand that all employment selection, work permits, and visas are subject to employer criteria and official Canadian government regulations, and no job or visa is guaranteed.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:opacity-50 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application for Screening</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
