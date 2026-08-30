import React from 'react';
import { AlertCircle, ShieldAlert } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const DisclaimerBanner: React.FC = () => {
  return (
    <aside aria-label="Regulatory Notice" className="bg-slate-900 border-b border-slate-800 text-slate-200 py-2.5 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="leading-snug text-slate-300">
            <strong className="text-white font-semibold">Important Notice:</strong>{' '}
            {SITE_CONFIG.disclaimers.shortNotice}
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-amber-300 border border-slate-700">
            Private Employment Agency
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
            No Guarantees
          </span>
        </div>
      </div>
    </aside>
  );
};
