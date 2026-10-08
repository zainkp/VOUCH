import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Briefcase, Building, Landmark, Repeat, CheckCircle2 } from 'lucide-react';

export const PortabilitySection: React.FC = () => {
  return (
    <section id="portability" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold mb-3">
            08 / CAREER MOBILITY & LIFETIME PORTABILITY
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
            ONE PASSPORT.<br />
            <span className="text-[#1E3B2B]">EVERY JOB.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
            Your reputation shouldn&apos;t reset every time your employer changes.
          </p>
        </div>

        {/* Visual Progression: The Lifelong Portable Career Path */}
        <div className="bg-[#F4EFEB] rounded-3xl p-6 sm:p-10 border border-[#E5E1D8] shadow-[0_16px_40px_rgba(18,22,20,0.06)] relative overflow-hidden">
          
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold block mb-1">
              THE WORKER RETAINS OWNERSHIP ACROSS JOBSITES:
            </span>
            <p className="text-sm text-[#4A524D]">
              Instead of starting from zero at each new site, every completed project compounds into the worker&apos;s portable passport.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Pipeline */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative items-center">
            
            {/* STAGE 1: Employer 01 */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E1D8] shadow-2xs text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-[#EFECE6] flex items-center justify-center text-[#737A75] mb-3">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#737A75] uppercase block mb-1">STAGE 01</span>
              <h3 className="font-bold text-base text-[#121614] mb-1">Employer 01</h3>
              <p className="text-xs text-[#737A75] mb-3">Subcontractor · Residential Site</p>
              <span className="text-[11px] font-mono bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded font-semibold">
                +4 Records Verified
              </span>
            </div>

            {/* Transition Arrow 1 */}
            <div className="flex justify-center items-center py-2 md:py-0">
              <div className="w-8 h-8 rounded-full bg-[#1E3B2B] text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C27A38]" />
                <ArrowDown className="md:hidden w-4 h-4 text-[#C27A38]" />
              </div>
            </div>

            {/* CENTER ARTIFACT: The Vouch Passport (Persistent Anchor) */}
            <div className="bg-[#1E3B2B] text-white rounded-2xl p-6 border-2 border-[#1E3B2B] shadow-xl text-center flex flex-col items-center relative scale-105 z-10">
              <div className="absolute -top-3 px-3 py-0.5 rounded-full bg-[#C27A38] text-white font-mono text-[10px] font-bold tracking-widest uppercase">
                ANCHORED TO WORKER
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-3 mt-1">
                <ShieldCheck className="w-6 h-6 text-[#C27A38]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 block mb-1">
                LIFETIME IDENTITY
              </span>
              <h3 className="font-display font-extrabold text-lg text-white mb-1">
                VOUCH PASSPORT
              </h3>
              <p className="text-xs text-[#FAF8F5]/80 mb-3">
                Ravi Kumar · Lead Electrician
              </p>
              <div className="text-[11px] font-mono bg-white/10 text-white px-2.5 py-1 rounded-md">
                12 Records · High Confidence
              </div>
            </div>

            {/* Transition Arrow 2 */}
            <div className="flex justify-center items-center py-2 md:py-0">
              <div className="w-8 h-8 rounded-full bg-[#1E3B2B] text-white flex items-center justify-center shadow-xs">
                <ArrowRight className="hidden md:block w-4 h-4 text-[#C27A38]" />
                <ArrowDown className="md:hidden w-4 h-4 text-[#C27A38]" />
              </div>
            </div>

            {/* STAGE 3: Employer 02 / New Project */}
            <div className="bg-white rounded-2xl p-5 border border-[#E5E1D8] shadow-2xs text-center flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl bg-[#EFECE6] flex items-center justify-center text-[#737A75] mb-3">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#737A75] uppercase block mb-1">STAGE 02</span>
              <h3 className="font-bold text-base text-[#121614] mb-1">Employer 02</h3>
              <p className="text-xs text-[#737A75] mb-3">Commercial Builder · Metro Line</p>
              <span className="text-[11px] font-mono bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded font-semibold">
                Instant Day-1 Trust
              </span>
            </div>

          </div>

          {/* Bottom Narrative Anchor */}
          <div className="mt-10 pt-6 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A524D] gap-4">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#059669]" />
              <span className="font-medium">
                No recruiter lock-in. No platform commission on your salary. The credentials remain yours permanently.
              </span>
            </div>
            <span className="font-mono text-[#1E3B2B] font-bold shrink-0">
              SELF-SOVEREIGN TRADE IDENTITY
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
