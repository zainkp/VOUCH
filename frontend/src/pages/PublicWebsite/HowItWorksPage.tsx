import React from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { HowItWorksSection } from './HowItWorksSection';
import { ScrollReveal } from '../../components/ScrollReveal';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col selection:bg-[#1E3B2B] selection:text-white">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 animate-page-enter">
        
        {/* How It Works Hero */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE VERIFICATION ENGINE</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                  FROM WORK<br />
                  <span className="text-[#1E3B2B]">TO PROOF.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
                  How Vouch turns raw physical labor into a tamper-evident, portable professional identity through a transparent four-stage pipeline.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/build-passport"
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md vouch-btn"
                  >
                    <span>Start Your Passport</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </Link>
                  <Link
                    to="/passport"
                    className="px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-sm font-semibold transition-colors vouch-btn"
                  >
                    <span>View Passport Structure →</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CANONICAL VERTICAL SCROLL STORYTELLING PIPELINE */}
        <HowItWorksSection />

        {/* Tamper-Resistant Proof Callout Banner */}
        <section className="py-16 bg-[#F4EFEB] border-t border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal delay={0}>
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E1D8] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="max-w-2xl space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#059669]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WORKER-OWNED VERIFICATION PROTOCOL</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614]">
                    No past employer owns your identity.
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed">
                    Confirmations are cryptographically anchored to verified verifier phone numbers and organization credentials. Your work records and confidence ratings belong to you permanently, carried from project to project.
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                  <Link
                    to="/build-passport"
                    className="px-6 py-3.5 rounded-xl bg-[#1E3B2B] text-white text-xs font-mono font-bold text-center hover:bg-[#14281D] transition-colors shadow-xs"
                  >
                    BUILD YOUR PASSPORT →
                  </Link>
                  <Link
                    to="/employers"
                    className="px-6 py-3.5 rounded-xl bg-white border border-[#E5E1D8] text-[#121614] text-xs font-mono font-bold text-center hover:bg-[#FAF8F5] transition-colors"
                  >
                    FOR HIRERS & CONTRACTORS
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default HowItWorksPage;
