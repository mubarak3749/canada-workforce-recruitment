import React, { useState } from 'react';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TrustSection } from './components/TrustSection';
import { JobsSection } from './components/JobsSection';
import { JobDetailModal } from './components/JobDetailModal';
import { ApplicationProcessSection } from './components/ApplicationProcessSection';
import { EligibilityChecker } from './components/EligibilityChecker';
import { DocumentChecklistSection } from './components/DocumentChecklistSection';
import { ApplyFormSection } from './components/ApplyFormSection';
import { EmployerSection } from './components/EmployerSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { JobListing } from './types';
import { JOB_LISTINGS } from './data/jobData';

export default function App() {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<string>('fruit-packing-worker');
  const [employerModalOpen, setEmployerModalOpen] = useState<boolean>(false);

  const handleNavigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForJob = (job: JobListing) => {
    setSelectedJobForApply(job.title);
    handleNavigateTo('apply');
  };

  const handleApplyForCategoryFromMatch = (categoryName: string) => {
    setSelectedJobForApply(categoryName);
    handleNavigateTo('apply');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-600 selection:text-white font-sans">
      
      {/* Top Regulatory Notice Banner */}
      <DisclaimerBanner />

      {/* Main Sticky Navigation */}
      <Navbar
        onNavigateTo={handleNavigateTo}
        onOpenApply={() => handleNavigateTo('apply')}
        onOpenEmployerModal={() => setEmployerModalOpen(true)}
      />

      <main className="flex-grow">
        
        {/* 1. Hero Section */}
        <HeroSection
          onExploreJobs={() => handleNavigateTo('jobs')}
          onApplyNow={() => handleNavigateTo('apply')}
          onCheckMatch={() => handleNavigateTo('match-checker')}
          onOpenEmployerModal={() => setEmployerModalOpen(true)}
        />

        {/* 2. About the Company Section */}
        <AboutSection
          onExploreJobs={() => handleNavigateTo('jobs')}
          onOpenEmployerModal={() => setEmployerModalOpen(true)}
        />

        {/* 3. Job Categories & Listings */}
        <JobsSection
          onViewJob={(job) => setSelectedJob(job)}
          onApplyForJob={handleApplyForJob}
        />

        {/* 4. Why Candidates & Employers Choose Us (Trust & Compliance) */}
        <TrustSection
          onExploreJobs={() => handleNavigateTo('jobs')}
          onOpenApply={() => handleNavigateTo('apply')}
        />

        {/* 5. Structured 5-Step Application Process */}
        <ApplicationProcessSection
          onStartApplication={() => handleNavigateTo('apply')}
          onExploreJobs={() => handleNavigateTo('jobs')}
        />

        {/* 5. Interactive Job Match / Eligibility Questionnaire */}
        <EligibilityChecker
          onApplyCategory={handleApplyForCategoryFromMatch}
        />

        {/* 6. Applicant Document Readiness Checklist */}
        <DocumentChecklistSection />

        {/* 7. Candidate Application Submission Portal */}
        <ApplyFormSection
          initialJobCategory={selectedJobForApply}
        />

        {/* 8. Canadian Employers & Staffing Section */}
        <EmployerSection
          isOpenModal={employerModalOpen}
          onCloseModal={() => setEmployerModalOpen(false)}
        />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Contact & Direct Inquiries */}
        <ContactSection />

      </main>

      {/* Footer with Links, Disclaimers, & Modals */}
      <Footer
        onNavigateTo={handleNavigateTo}
        onOpenApply={() => handleNavigateTo('apply')}
        onOpenEmployerModal={() => setEmployerModalOpen(true)}
      />

      {/* Floating WhatsApp Action Trigger */}
      <FloatingWhatsApp />

      {/* Full Job Details Modal */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onApplyForJob={handleApplyForJob}
        />
      )}

    </div>
  );
}
