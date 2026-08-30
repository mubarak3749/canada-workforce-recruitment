import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Sparkles, 
  Share2, 
  RotateCcw,
  MessageCircle,
  ShieldCheck,
  Info
} from 'lucide-react';
import { DOCUMENT_CHECKLIST_DATA } from '../data/jobData';
import { openWhatsApp, SITE_CONFIG } from '../config/siteConfig';

export const DocumentChecklistSection: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Calculate total items and completed items
  const allItems = DOCUMENT_CHECKLIST_DATA.flatMap((cat) => cat.items);
  const totalCount = allItems.length;
  const completedCount = allItems.filter((item) => checkedItems[item.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleResetChecklist = () => {
    setCheckedItems({});
  };

  const handleWhatsAppChecklist = () => {
    const text = `Hello Canada Workforce Recruitment! I have reviewed your Candidate Document Checklist:\n` +
      `• Readiness Status: ${completedCount} of ${totalCount} documents prepared (${progressPercent}%)\n` +
      `Could you provide advice on document formatting or next application steps?`;
    openWhatsApp(text);
  };

  return (
    <section id="checklist" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-700" />
            <span>Candidate Preparation Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Applicant Document Readiness Checklist
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ensure you have the required personal identification, work history, and educational records ready for employer review and statutory filing.
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div className="max-w-4xl mx-auto mb-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Preparation Progress
              </span>
              <h3 className="text-xl font-bold text-white">
                {completedCount} of {totalCount} Essential Documents Prepared
              </h3>
            </div>
            <div className="text-left sm:text-right">
              <span className="text-2xl font-black text-emerald-400">
                {progressPercent}%
              </span>
              <span className="block text-xs text-slate-400">Readiness Score</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden border border-slate-700">
            <div 
              className="bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>Tick items below as you assemble your paperwork.</span>
            </span>
            <div className="flex items-center gap-3">
              {completedCount > 0 && (
                <button
                  onClick={handleResetChecklist}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
              <button
                onClick={handleWhatsAppChecklist}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Share Status on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categorized Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DOCUMENT_CHECKLIST_DATA.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-xs"
            >
              <div className="space-y-1 border-b border-slate-200/80 pb-3">
                <h3 className="text-base font-bold text-slate-900">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600">
                  {cat.description}
                </p>
              </div>

              <div className="space-y-3">
                {cat.items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isChecked 
                          ? 'bg-emerald-50/80 border-emerald-300 text-slate-900 shadow-2xs' 
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0 text-emerald-600">
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 fill-emerald-600 text-white" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className={`text-sm font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                              {item.label}
                            </span>
                            {item.required ? (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-800">
                                Required
                              </span>
                            ) : (
                              <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                                Optional
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 leading-snug">
                            {item.description}
                          </p>
                          {item.tips && (
                            <p className="text-[11px] text-amber-800 bg-amber-50/80 p-1.5 rounded border border-amber-200/60 mt-1">
                              💡 <strong>Tip:</strong> {item.tips}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Document Variations */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 max-w-4xl mx-auto space-y-1">
          <p className="leading-relaxed">
            <strong className="text-slate-800">Note:</strong> Exact documentation requirements may vary based on your nationality, country of residence, the specific Canadian employer’s requirements, and current IRCC visa office instructions.
          </p>
        </div>

      </div>
    </section>
  );
};
