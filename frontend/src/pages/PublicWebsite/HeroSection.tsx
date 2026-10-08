import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useApp } from '../../context/AppContext';

export const HeroSection: React.FC = () => {
  const { isAuthenticated, activeRole } = useApp();
  const buildPassportHref = isAuthenticated && activeRole === 'worker' ? '/build-passport' : '/login?redirect=/build-passport';

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#F4F0E6]">
      {/* Subtle architectural baseline grid lines (not artificial blobs) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#202322_1px,transparent_1px),linear-gradient(to_bottom,#202322_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status Pill / Credibility Tag */}
            <ScrollReveal delay={0} duration={550}>
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-[#EBE7DC] border border-[#E2DDD2] w-fit mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#3E6B52]"></span>
                <span className="text-[12px] font-semibold tracking-wide uppercase text-[#173F4F]">
                  Portable Worker Identity Platform
                </span>
              </div>

              {/* Giant Editorial Headline */}
              <h1 className="font-display font-extrabold text-[44px] sm:text-[62px] lg:text-[72px] leading-[1.02] tracking-[-0.035em] text-[#202322] mb-6">
                YOUR WORK<br />
                <span className="text-[#173F4F]">SPEAKS FOR YOU.</span>
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
                  className="vouch-btn inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-[#173F4F] text-[#F4F0E6] text-base font-semibold tracking-wide hover:bg-[#0E2934] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(23, 63, 79,0.18)]"
                >
                  <span>Build Your Passport</span>
                  <ArrowRight className="w-4 h-4 text-[#C45B3C]" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="vouch-btn inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-transparent hover:bg-[#EBE7DC] text-[#202322] text-base font-medium border border-[#E2DDD2] transition-colors"
                >
                  <span>See How Vouch Works</span>
                  <span className="text-[#737A75]">→</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Restrained Value Anchor Badges */}
            <ScrollReveal delay={240} duration={600}>
              <div className="pt-6 border-t border-[#E2DDD2] grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Ownership</p>
                  <p className="text-sm font-semibold text-[#202322]">Worker-Owned</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Validation</p>
                  <p className="text-sm font-semibold text-[#202322]">Evidence-Backed</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-mono text-[#737A75] tracking-wider mb-1">Mobility</p>
                  <p className="text-sm font-semibold text-[#202322]">Cross-Employer</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Documentary Photography + Overlay Passport UI (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Asymmetric Worker Photography Container */}
              <ScrollReveal delay={160} duration={700}>
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(18,22,20,0.12)] border border-[#E2DDD2] bg-[#EBE7DC] aspect-[4/5] sm:aspect-[3/4] reveal-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80"
                    alt="Real electrician working on commercial distribution panel"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.03] reveal-image-zoom"
                    loading="eager"
                  />
                  
                  {/* Subtle gradient vignette at bottom for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202322]/80 via-transparent to-transparent"></div>
                  
                  {/* Documentary Caption */}
                  <div className="absolute top-4 left-4 bg-[#F4F0E6]/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-[#173F4F] border border-[#E2DDD2]">
                    ON-SITE VERIFICATION · MANGALURU
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
