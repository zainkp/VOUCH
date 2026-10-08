import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, MessageSquareWarning, PhoneCall, Building2, ArrowRight, ShieldCheck, CheckCircle2, Camera, UserCheck, Layers } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 sm:py-28 lg:py-32 bg-[#F4F0E6] border-t border-b border-[#E2DDD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0} duration={600}>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C45B3C] font-bold mb-3">
              01 / THE STRUCTURAL BREAKDOWN
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202322] tracking-tight leading-[1.08] mb-6">
              EXPERIENCE<br />
              SHOULDN&apos;T DISAPPEAR<br />
              WHEN THE JOB ENDS.
            </h2>
            <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
              A worker can spend ten years mastering a trade and still have little portable proof of what they can do. Every new job starts from zero.
            </p>
          </div>
        </ScrollReveal>

        {/* Contrast Grid: Traditional vs Vouch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Traditional Worker Identity (Friction & Lost Value) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal delay={100} duration={650} className="h-full flex flex-col">
              <div className="h-full bg-[#F4F0E6] rounded-2xl p-6 sm:p-8 border border-[#E2DDD2] flex flex-col justify-between relative overflow-hidden shadow-xs">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C45B3C]"></div>
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
                      TRADITIONAL IDENTITY
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#F8ECE7] text-[#C45B3C]">
                      FRAGILE & LOCKED
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#202322] mb-3">
                    Scattered, Unverifiable & Lost
                  </h3>
                  <p className="text-sm text-[#4A524D] mb-8 leading-relaxed">
                    When a worker leaves an employer, their reputation remains behind in the contractor&apos;s phone, while hard-won trade experience disappears.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="w-8 h-8 rounded-lg bg-[#F8ECE7] flex items-center justify-center shrink-0 text-[#C45B3C]">
                        <FileQuestion className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Paper records</h4>
                        <p className="text-xs text-[#737A75] mt-0.5">Physical challans get lost, water-damaged, or discarded after site handovers.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="w-8 h-8 rounded-lg bg-[#F8ECE7] flex items-center justify-center shrink-0 text-[#C45B3C]">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Verbal references</h4>
                        <p className="text-xs text-[#737A75] mt-0.5">Subjective phone calls to past bosses who may be busy, hostile, or unreachable.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="w-8 h-8 rounded-lg bg-[#F8ECE7] flex items-center justify-center shrink-0 text-[#C45B3C]">
                        <MessageSquareWarning className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Scattered WhatsApp messages</h4>
                        <p className="text-xs text-[#737A75] mt-0.5">Site photos buried in chats with zero technical metadata or verifier signatures.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="w-8 h-8 rounded-lg bg-[#F8ECE7] flex items-center justify-center shrink-0 text-[#C45B3C]">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Employer-dependent reputation</h4>
                        <p className="text-xs text-[#737A75] mt-0.5">The contractor owns the reputation, not the skilled technician who did the work.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EBE7DC] text-xs font-mono text-[#C45B3C] flex items-center space-x-1.5">
                  <span>RESULT:</span>
                  <span className="font-sans font-medium text-[#4A524D]">Underpaid wages, repeated trial jobs, zero career compounding.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CENTER: Visual Bridge / Transition Indicator (2 Cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <ScrollReveal delay={150} duration={600}>
              <div className="hidden lg:flex flex-col items-center space-y-3">
                <div className="w-px h-16 bg-[#E2DDD2]"></div>
                <div className="w-10 h-10 rounded-full bg-[#173F4F] text-white flex items-center justify-center shadow-sm">
                  <ArrowRight className="w-5 h-5 text-[#F4F0E6]" />
                </div>
                <div className="w-px h-16 bg-[#E2DDD2]"></div>
              </div>
              <div className="lg:hidden flex items-center justify-center space-x-3 my-2">
                <div className="h-px w-16 bg-[#E2DDD2]"></div>
                <span className="text-xs font-mono font-bold text-[#173F4F] bg-[#EBE7DC] px-3 py-1 rounded-full border border-[#E2DDD2]">
                  TRANSFORMS INTO
                </span>
                <div className="h-px w-16 bg-[#E2DDD2]"></div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: VOUCH Portable Evidence Identity (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal delay={200} duration={650} className="h-full flex flex-col">
              <div className="h-full bg-[#F4F0E6] rounded-2xl p-6 sm:p-8 border-2 border-[#173F4F] flex flex-col justify-between relative overflow-hidden shadow-[0_12px_32px_rgba(23, 63, 79,0.08)]">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#173F4F]"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#173F4F] font-bold">
                      VOUCH IDENTITY
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20">
                      WORKER-OWNED & PORTABLE
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#202322] mb-3">
                    Independent, Confirmed & Permanent
                  </h3>
                  <p className="text-sm text-[#4A524D] mb-8 leading-relaxed">
                    Every project turns into permanent professional equity. You carry your verified passport anywhere — across contractors, cities, and states.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2] shadow-2xs">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] flex items-center justify-center shrink-0 text-[#3E6B52]">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Work history</h4>
                        <p className="text-xs text-[#4A524D] mt-0.5">Chronological, immutable ledger of real jobs completed with exact trade roles.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2] shadow-2xs">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] flex items-center justify-center shrink-0 text-[#3E6B52]">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Evidence</h4>
                        <p className="text-xs text-[#4A524D] mt-0.5">High-resolution site photos, signed work orders, load testing sheets, and schematics.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2] shadow-2xs">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] flex items-center justify-center shrink-0 text-[#3E6B52]">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Confirmations</h4>
                        <p className="text-xs text-[#4A524D] mt-0.5">Signed off independently by verified supervisors, site engineers, and direct clients.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2] shadow-2xs">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] flex items-center justify-center shrink-0 text-[#3E6B52]">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#202322]">Portable passport</h4>
                        <p className="text-xs text-[#4A524D] mt-0.5">Instant QR or link share that gives instant proof to any hiring contractor on day one.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#EBE7DC] text-xs font-mono text-[#3E6B52] flex items-center space-x-1.5">
                  <span>RESULT:</span>
                  <span className="font-sans font-medium text-[#202322]">Higher wages, instant trust on new sites, zero reliance on gatekeepers.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Link to dedicated About Page */}
        <ScrollReveal delay={120} duration={600}>
          <div className="mt-12 text-center">
            <Link
              to="/about"
              className="vouch-btn inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-[#E2DDD2] text-xs font-mono font-bold text-[#173F4F] hover:bg-[#F4F0E6] transition-colors shadow-2xs"
            >
              <span>LEARN ABOUT THE TRADE CREDENTIAL GAP</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C45B3C]" />
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
