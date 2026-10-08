import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, QrCode, FileText, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useApp } from '../../context/AppContext';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, activeRole } = useApp();
  const buildPassportHref = isAuthenticated && activeRole === 'worker' ? '/build-passport' : '/login?redirect=/build-passport';

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle architectural baseline grid lines (not artificial blobs) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#121614_1px,transparent_1px),linear-gradient(to_bottom,#121614_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill / Credibility Tag */}
            <ScrollReveal delay={0} duration={550}>
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E5E1D8] w-fit mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                <span className="text-[12px] font-semibold tracking-wide uppercase text-[#2D523E]">
                  Portable Worker Identity Platform
                </span>
              </div>

              {/* Giant Editorial Headline */}
              <h1 className="font-display font-extrabold text-[44px] sm:text-[62px] lg:text-[72px] leading-[1.02] tracking-[-0.035em] text-[#121614] mb-6">
                YOUR WORK<br />
                <span className="text-[#1E3B2B]">SPEAKS FOR YOU.</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Copy */}
            <ScrollReveal delay={100} duration={600}>
              <p className="text-lg sm:text-xl leading-relaxed text-[#4A524D] max-w-2xl mb-8 sm:mb-10 font-normal">
                Years of experience shouldn&apos;t disappear when a job ends. Vouch turns real-world work into a portable professional identity — backed by evidence and the people you&apos;ve worked with.
              </p>
            </ScrollReveal>

            {/* Real SPA Navigation CTAs */}
            <ScrollReveal delay={180} duration={600}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 mb-10 sm:mb-12">
                <Link
                  to={buildPassportHref}
                  className="vouch-btn inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-[#1E3B2B] text-[#FAF8F5] text-base font-semibold tracking-wide hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(30,59,43,0.18)]"
                >
                  <span>Build Your Passport</span>
                  <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="vouch-btn inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-transparent hover:bg-[#EFECE6] text-[#121614] text-base font-medium border border-[#E5E1D8] transition-colors"
                >
                  <span>See How Vouch Works</span>
                  <span className="text-[#737A75]">→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Restrained Value Anchor Badges */}
            <ScrollReveal delay={240} duration={600}>
              <div className="pt-6 border-t border-[#E5E1D8] grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Ownership</p>
                  <p className="text-sm font-semibold text-[#121614]">Worker-Owned</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Validation</p>
                  <p className="text-sm font-semibold text-[#121614]">Evidence-Backed</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Mobility</p>
                  <p className="text-sm font-semibold text-[#121614]">Cross-Employer</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Documentary Photography + Overlay Passport UI (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Asymmetric Worker Photography Container */}
              <ScrollReveal delay={160} duration={700}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(18,22,20,0.12)] border border-[#E5E1D8] bg-[#EFECE6] aspect-[4/5] sm:aspect-[3/4] reveal-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80"
                    alt="Real electrician working on commercial distribution panel"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] reveal-image-zoom"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient vignette at bottom for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/80 via-transparent to-transparent"></div>
                  
                  {/* Documentary Caption */}
                  <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-[#1E3B2B] border border-[#E5E1D8]">
                    ON-SITE VERIFICATION · MANGALURU
                  </div>
                </div>
              </ScrollReveal>

              {/* Floating Vouch Passport UI Element (Routes to /passport) */}
              <ScrollReveal variant="passport" delay={300} duration={700} className="absolute -bottom-6 -left-4 sm:-left-8 sm:-bottom-8 w-[92%] sm:w-[320px] z-10">
                <div 
                  onClick={() => navigate('/passport')}
                  className="bg-[#FAF8F5] rounded-xl p-4 sm:p-5 border border-[#E5E1D8] shadow-[0_16px_36px_rgba(18,22,20,0.14)] cursor-pointer hover:border-[#1E3B2B] transition-all group"
                >
                  {/* Passport Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#ECE8E0] mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-[#1E3B2B] flex items-center justify-center text-white text-[10px] font-bold">
                        V
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#737A75] block leading-none">
                          Vouch Passport
                        </span>
                        <span className="text-xs font-semibold text-[#121614]">
                          VOUCH-IN-2026-8842
                        </span>
                      </div>
                    </div>
                    <QrCode className="w-5 h-5 text-[#1E3B2B]" />
                  </div>

                  {/* Worker Identity Details */}
                  <div className="flex items-center space-x-3 mb-3.5">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 border border-[#E5E1D8] shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=200&auto=format&fit=crop&q=80" 
                        alt="Ravi Kumar Portrait"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold text-[#121614] leading-tight">
                        Ravi Kumar
                      </h2>
                      <p className="text-xs text-[#4A524D]">
                        Electrician · 7 years experience
                      </p>
                    </div>
                  </div>

                  {/* Demonstrated Skill with Confidence Badge */}
                  <div className="bg-[#F4EFEB] rounded-lg p-2.5 mb-3 border border-[#E5E1D8]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-[#121614]">
                        Electrical Wiring
                      </span>
                      <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20 font-mono">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        <span>HIGH CONFIDENCE</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#737A75]">
                      <span>8 work records</span>
                      <span>•</span>
                      <span>3 confirmations</span>
                    </div>
                  </div>

                  {/* Interactive Action */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#1E3B2B] pt-1 group-hover:text-[#14281D]">
                    <span className="inline-flex items-center space-x-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>View Verified Passport</span>
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
