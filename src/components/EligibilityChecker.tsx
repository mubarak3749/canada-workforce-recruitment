import React, { useState } from 'react';
import { 
  FileCheck2, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  MessageCircle, 
  Apple, 
  Boxes, 
  Package, 
  ShoppingBag, 
  Factory, 
  Tractor,
  HelpCircle
} from 'lucide-react';
import { JobCategory } from '../types';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

interface EligibilityCheckerProps {
  onApplyCategory: (category: string) => void;
}

export const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onApplyCategory }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Form State
  const [answers, setAnswers] = useState({
    ageRange: '',
    workExperienceYears: '',
    experienceSector: '',
    highestEducation: '',
    englishProficiency: '',
    frenchProficiency: 'Basic / None',
    preferredJobCategory: '',
    previousCanadaExperience: 'No',
    physicalReadiness: 'Yes - Capable of standing/lifting',
    shiftFlexibility: 'Flexible for Day/Afternoon shifts',
  });

  const handleInputChange = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({
      ageRange: '',
      workExperienceYears: '',
      experienceSector: '',
      highestEducation: '',
      englishProficiency: '',
      frenchProficiency: 'Basic / None',
      preferredJobCategory: '',
      previousCanadaExperience: 'No',
      physicalReadiness: 'Yes - Capable of standing/lifting',
      shiftFlexibility: 'Flexible for Day/Afternoon shifts',
    });
    setCurrentStep(1);
    setIsCompleted(false);
  };

  // Determine Match recommendation based on user selections
  const calculateMatch = () => {
    let targetStream = answers.preferredJobCategory || 'Fruit & Agricultural Packing';
    let matchTier: 'Strong Potential Match' | 'General Potential Match' | 'Entry Level Opportunity' = 'Strong Potential Match';
    
    if (answers.workExperienceYears === '0-1 years' || answers.englishProficiency === 'Basic Conversational') {
      matchTier = 'Entry Level Opportunity';
    } else if (answers.workExperienceYears === '3+ years') {
      matchTier = 'Strong Potential Match';
    } else {
      matchTier = 'General Potential Match';
    }

    let sectorHighlight = 'Well-suited for packaging and physical operations with standard orientation.';
    if (targetStream.includes('Warehouse')) {
      sectorHighlight = 'Good alignment for material handling, RF scanning, and distribution staging.';
    } else if (targetStream.includes('Food')) {
      sectorHighlight = 'Good profile for hygienic food production lines and processing equipment operations.';
    } else if (targetStream.includes('Retail')) {
      sectorHighlight = 'Suitable for grocery restocking, point-of-sale customer service, and shelf management.';
    }

    return {
      streamTitle: targetStream,
      matchTier,
      sectorHighlight,
      educationNote: answers.highestEducation || 'Secondary / Vocational',
      languageNote: answers.englishProficiency || 'Basic Conversational',
    };
  };

  const matchData = calculateMatch();

  const handleWhatsAppMatch = () => {
    const text = `Hello Canada Workforce Recruitment! I completed your Job Match Assessment:\n` +
      `• Preferred Stream: ${matchData.streamTitle}\n` +
      `• Experience: ${answers.workExperienceYears || 'N/A'} in ${answers.experienceSector || 'General labour'}\n` +
      `• Education: ${answers.highestEducation || 'High School / Vocational'}\n` +
      `• Language: English (${answers.englishProficiency || 'Conversational'})\n` +
      `Could you guide me on available vacancies matching this profile?`;
    openWhatsApp(text);
  };

  return (
    <section id="match-checker" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Interactive Self-Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Potential Job Match Questionnaire
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Answer a few quick questions to evaluate which Canadian employment sectors align with your practical background, language comfort, and work preferences.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Progress Bar Header */}
          {!isCompleted && (
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">
                  {currentStep}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {currentStep === 1 && 'Step 1: Background & Education'}
                  {currentStep === 2 && 'Step 2: Practical Experience'}
                  {currentStep === 3 && 'Step 3: Language & Preferences'}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Step {currentStep} of 3
              </span>
            </div>
          )}

          <div className="p-6 sm:p-8">
            
            {/* STEP 1: Background & Education */}
            {!isCompleted && currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Personal Background & Education</h3>
                  <p className="text-xs text-slate-500">Provide basic demographic and educational history.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Age Range */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Age Range *
                    </label>
                    <select
                      value={answers.ageRange}
                      onChange={(e) => handleInputChange('ageRange', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select your age range</option>
                      <option value="18-24">18 – 24 years old</option>
                      <option value="25-34">25 – 34 years old</option>
                      <option value="35-44">35 – 44 years old</option>
                      <option value="45-55">45 – 55 years old</option>
                      <option value="56+">56+ years old</option>
                    </select>
                  </div>

                  {/* Highest Education */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Highest Level of Education *
                    </label>
                    <select
                      value={answers.highestEducation}
                      onChange={(e) => handleInputChange('highestEducation', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select education level</option>
                      <option value="Secondary / High School">Secondary / High School Diploma</option>
                      <option value="Vocational / Trade Certificate">Vocational / Technical Certificate</option>
                      <option value="College Diploma">College Diploma (2-3 Years)</option>
                      <option value="Bachelor Degree or Higher">Bachelor's Degree or Higher</option>
                      <option value="Primary School Completed">Primary Education</option>
                    </select>
                  </div>

                </div>

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    disabled={!answers.ageRange || !answers.highestEducation}
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
                  >
                    <span>Next: Work Experience</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Work Experience */}
            {!isCompleted && currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Work Experience & Practical Skills</h3>
                  <p className="text-xs text-slate-500">Tell us about your hands-on work history.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Years of Experience */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Total Years of Work Experience *
                    </label>
                    <select
                      value={answers.workExperienceYears}
                      onChange={(e) => handleInputChange('workExperienceYears', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select total years</option>
                      <option value="0-1 years">Less than 1 year (Entry level)</option>
                      <option value="1-2 years">1 – 2 years</option>
                      <option value="3-5 years">3 – 5 years</option>
                      <option value="5+ years">More than 5 years</option>
                    </select>
                  </div>

                  {/* Sector of Experience */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Primary Work Sector Experience *
                    </label>
                    <select
                      value={answers.experienceSector}
                      onChange={(e) => handleInputChange('experienceSector', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select primary sector</option>
                      <option value="Agriculture & Farming">Agriculture, Farming & Greenhouses</option>
                      <option value="Packing & Warehouse">Packaging, Warehouse & Logistics</option>
                      <option value="Food Preparation & Processing">Food Processing, Culinary & Bakery</option>
                      <option value="Retail & Customer Service">Retail, Supermarket & Sales</option>
                      <option value="Manufacturing & General Labour">Manufacturing, Factory & Construction</option>
                      <option value="Other Industry">Other Professional / Service Industry</option>
                    </select>
                  </div>

                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                  >
                    ← Back
                  </button>
                  <button
                    disabled={!answers.workExperienceYears || !answers.experienceSector}
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
                  >
                    <span>Next: Preferences</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Language & Category Preference */}
            {!isCompleted && currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900">Language & Preferred Work Stream</h3>
                  <p className="text-xs text-slate-500">Specify your language level and sector interest.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* English Level */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      English Language Level *
                    </label>
                    <select
                      value={answers.englishProficiency}
                      onChange={(e) => handleInputChange('englishProficiency', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select English level</option>
                      <option value="Basic Conversational">Basic Conversational (Understands safety instructions)</option>
                      <option value="Intermediate">Intermediate (Comfortable communicating at work)</option>
                      <option value="Fluent / Advanced">Fluent / Advanced</option>
                    </select>
                  </div>

                  {/* Preferred Job Stream */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Preferred Canadian Employment Stream *
                    </label>
                    <select
                      value={answers.preferredJobCategory}
                      onChange={(e) => handleInputChange('preferredJobCategory', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:ring-2 focus:ring-red-500 focus:outline-none"
                    >
                      <option value="">Select preferred stream</option>
                      <option value="Fruit & Agricultural Packing">Fruit & Produce Packing</option>
                      <option value="Food Processing & Packaging">Food Processing & Packaging</option>
                      <option value="Warehouse & Logistics">Warehouse & Logistics Associate</option>
                      <option value="Supermarket & Retail Operations">Supermarket & Retail Store Assistant</option>
                      <option value="General Factory & Assembly">General Factory & Assembly Worker</option>
                      <option value="Seasonal Agricultural Farming">Seasonal Agricultural Field & Greenhouse</option>
                    </select>
                  </div>

                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
                  >
                    ← Back
                  </button>
                  <button
                    disabled={!answers.englishProficiency || !answers.preferredJobCategory}
                    onClick={handleNextStep}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
                  >
                    <span>View Potential Match</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* RESULTS SCREEN */}
            {isCompleted && (
              <div className="space-y-6 animate-in fade-in duration-300">
                
                {/* Result Header */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Assessment Completed
                    </span>
                    <span className="text-xs text-slate-400">Potential Job Match Result</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {matchData.streamTitle}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Match Rating: <strong className="text-amber-300">{matchData.matchTier}</strong>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-800/80 p-3.5 rounded-xl border border-slate-700">
                    {matchData.sectorHighlight}
                  </p>
                </div>

                {/* Profile Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block">Experience Indication:</strong>
                    <span className="text-slate-600">{answers.workExperienceYears || '1-2 years'} in {answers.experienceSector || 'General work'}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <strong className="text-slate-900 block">Language & Education:</strong>
                    <span className="text-slate-600">English: {answers.englishProficiency} • {answers.highestEducation}</span>
                  </div>
                </div>

                {/* Mandatory Non-Guarantee Compliance Statement */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-amber-900">
                    <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Important Disclaimer & Result Transparency</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    Your answers may indicate suitable employment categories. Final eligibility depends on the employer, job requirements, and Canadian immigration authorities (IRCC). No job offer or work permit is guaranteed.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Assessment</span>
                  </button>

                  <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={handleWhatsAppMatch}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
                      <span>Discuss on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => onApplyCategory(matchData.streamTitle)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow-md transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Apply for This Category</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
