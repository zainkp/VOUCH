import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, History, Camera, CheckCheck, Share2 } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useApp } from '../../context/AppContext';

export const WorkerSection: React.FC = () => {
  const { isAuthenticated, activeRole } = useApp();
  const buildPassportHref = isAuthenticated && activeRole === 'worker' ? '/build-passport' : '/login?redirect=/build-passport';
  return (
    <section id="workers" className="py-20 sm:py-28 lg:py-32 bg-[#F4EFEB] border-t border-b border-[#E5E1D8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Documentary Worker Image (Appears slightly first) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={0} duration={700}>
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-[0_16px_36px_rgba(18,22,20,0.1)] bg-gray-100 aspect-[4/5] reveal-image-container">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2df5703bc20d?w=1000&auto=format&fit=crop&q=80"
                  alt="Skilled tradesman in workshop"
                  className="w-full h-full object-cover object-center filter saturate-[0.95] reveal-image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/85 via-transparent to-transparent"></div>
                
                {/* Overlay Quote Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5E1D8]">
                  <p className="text-xs font-medium text-[#121614] italic">
                    &quot;In 7 years I worked across 30 different sites. With Vouch, I don&apos;t have to plead with former contractors for references. My work speaks for itself.&quot;
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#737A75]">
                    <span className="font-bold text-[#1E3B2B]">Ravi Kumar</span>
                    <span>Lead Electrician, Mangaluru</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Value Pillars & CTA (Follows 100ms later) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            <ScrollReveal delay={100} duration={650}>
              <p className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold mb-3">
                05 / EMPOWERING SKILLED WORKERS
              </p>
              
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
                YOUR EXPERIENCE<br />
                BELONGS TO YOU.
              </h2>

              <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
                Change employers. Move cities. Take on new projects. Your professional identity stays with you.
              </p>

              {/* 4 Supporting Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                
                <div className="p-4 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B]">
                      <History className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-[#121614]">Build your work history</h3>
                  </div>
                  <p className="text-xs text-[#737A75] leading-relaxed">
                    Log every residential or industrial job you complete in your own permanent personal ledger.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B]">
                      <Camera className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-[#121614]">Collect evidence</h3>
                  </div>
                  <p className="text-xs text-[#737A75] leading-relaxed">
                    Snap photos of panel assemblies, flaring joints, or test readings right from the jobsite.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B]">
                      <CheckCheck className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-[#121614]">Get your work confirmed</h3>
                  </div>
                  <p className="text-xs text-[#737A75] leading-relaxed">
                    Request one-tap verification from supervisors and customers while the work is fresh.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E5E1D8]">
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B]">
                      <Share2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm text-[#121614]">Share your passport</h3>
                  </div>
                  <p className="text-xs text-[#737A75] leading-relaxed">
                    Present your QR code to hire contractors instantly with proof of your actual skill tier.
                  </p>
                </div>

              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={buildPassportHref}
                  className="vouch-btn inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-sm"
                >
                  <span>Build My Passport</span>
                  <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                </Link>
                <Link
                  to="/workers"
                  className="vouch-btn inline-flex items-center space-x-1.5 px-6 py-4 rounded-xl bg-white border border-[#E5E1D8] text-[#121614] hover:bg-[#FAF8F5] text-sm font-semibold transition-colors"
                >
                  <span>Read Full Worker Guide →</span>
                </Link>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};
