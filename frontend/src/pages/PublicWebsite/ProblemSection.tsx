import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, MessageSquareWarning, PhoneCall, Building2, ArrowRight, ShieldCheck, CheckCircle2, Camera, UserCheck, Layers } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 lg:py-32 bg-[#F4EFEB] border-t border-b border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-widest text-[#C27A38] font-bold mb-3">
            01 / THE STRUCTURAL BREAKDOWN
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
            EXPERIENCE<br />
            SHOULDN&apos;T DISAPPEAR<br />
            WHEN THE JOB ENDS.
          </h2>
          <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
            A worker can spend ten years mastering a trade and still have little portable proof of what they can do. Every new job starts from zero.
          </p>
        </div>

        {/* Contrast Grid: Traditional vs Vouch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Traditional Worker Identity (Friction & Lost Value) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] flex flex-col justify-between relative overflow-hidden shadow-xs">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#C27A38]"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
                  TRADITIONAL IDENTITY
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F8EFE6] text-[#C27A38]">
                  FRAGILE & LOCKED
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#121614] mb-3">
                Scattered, Unverifiable & Lost
              </h3>
              <p className="text-sm text-[#4A524D] mb-8 leading-relaxed">
                When a worker leaves an employer, their reputation remains behind in the contractor&apos;s phone, while hard-won trade experience disappears.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="w-8 h-8 rounded-lg bg-[#F8EFE6] flex items-center justify-center shrink-0 text-[#C27A38]">
                    <FileQuestion className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Paper records</h4>
                    <p className="text-xs text-[#737A75] mt-0.5">Physical challans get lost, water-damaged, or discarded after site handovers.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="w-8 h-8 rounded-lg bg-[#F8EFE6] flex items-center justify-center shrink-0 text-[#C27A38]">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Verbal references</h4>
                    <p className="text-xs text-[#737A75] mt-0.5">Subjective phone calls to past bosses who may be busy, hostile, or unreachable.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="w-8 h-8 rounded-lg bg-[#F8EFE6] flex items-center justify-center shrink-0 text-[#C27A38]">
                    <MessageSquareWarning className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Scattered WhatsApp messages</h4>
                    <p className="text-xs text-[#737A75] mt-0.5">Site photos buried in chats with zero technical metadata or verifier signatures.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="w-8 h-8 rounded-lg bg-[#F8EFE6] flex items-center justify-center shrink-0 text-[#C27A38]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Employer-dependent reputation</h4>
                    <p className="text-xs text-[#737A75] mt-0.5">The contractor owns the reputation, not the skilled technician who did the work.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#ECE8E0] text-xs font-mono text-[#C27A38] flex items-center space-x-1.5">
              <span>RESULT:</span>
              <span className="font-sans font-medium text-[#4A524D]">Underpaid wages, repeated trial jobs, zero career compounding.</span>
            </div>
          </div>

          {/* CENTER: Visual Bridge / Transition Indicator (2 Cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:flex flex-col items-center space-y-3">
              <div className="w-px h-16 bg-[#E5E1D8]"></div>
              <div className="w-10 h-10 rounded-full bg-[#1E3B2B] text-white flex items-center justify-center shadow-sm">
                <ArrowRight className="w-5 h-5 text-[#FAF8F5]" />
              </div>
              <div className="w-px h-16 bg-[#E5E1D8]"></div>
            </div>
            <div className="lg:hidden flex items-center justify-center space-x-3 my-2">
              <div className="h-px w-16 bg-[#E5E1D8]"></div>
              <span className="text-xs font-mono font-bold text-[#1E3B2B] bg-[#EFECE6] px-3 py-1 rounded-full border border-[#E5E1D8]">
                TRANSFORMS INTO
              </span>
              <div className="h-px w-16 bg-[#E5E1D8]"></div>
            </div>
          </div>

          {/* RIGHT: VOUCH Portable Evidence Identity (7 Cols or 5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 border-2 border-[#1E3B2B] flex flex-col justify-between relative overflow-hidden shadow-[0_12px_32px_rgba(30,59,43,0.08)]">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#1E3B2B]"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#1E3B2B] font-bold">
                  VOUCH IDENTITY
                </span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20">
                  WORKER-OWNED & PORTABLE
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#121614] mb-3">
                Independent, Confirmed & Permanent
              </h3>
              <p className="text-sm text-[#4A524D] mb-8 leading-relaxed">
                Every project turns into permanent professional equity. You carry your verified passport anywhere — across contractors, cities, and states.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Work history</h4>
                    <p className="text-xs text-[#4A524D] mt-0.5">Chronological, immutable ledger of real jobs completed with exact trade roles.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669]">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Evidence</h4>
                    <p className="text-xs text-[#4A524D] mt-0.5">High-resolution site photos, signed work orders, load testing sheets, and schematics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669]">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Confirmations</h4>
                    <p className="text-xs text-[#4A524D] mt-0.5">Signed off independently by verified supervisors, site engineers, and direct clients.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#121614]">Portable passport</h4>
                    <p className="text-xs text-[#4A524D] mt-0.5">Instant QR or link share that gives instant proof to any hiring contractor on day one.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#ECE8E0] text-xs font-mono text-[#059669] flex items-center space-x-1.5">
              <span>RESULT:</span>
              <span className="font-sans font-medium text-[#121614]">Higher wages, instant trust on new sites, zero reliance on gatekeepers.</span>
            </div>
          </div>

        </div>

        {/* Link to dedicated About Page */}
        <div className="mt-12 text-center">
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono font-bold text-[#1E3B2B] hover:bg-[#FAF8F5] transition-colors shadow-2xs"
          >
            <span>LEARN ABOUT THE TRADE CREDENTIAL GAP</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C27A38]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
