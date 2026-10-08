import React from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { ScrollReveal } from '../../components/ScrollReveal';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Award, 
  FileCheck,
  Building2,
  Users
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 animate-page-enter">
        
        {/* About Hero Section */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>MISSION & PURPOSE</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                  BRIDGING THE<br />
                  <span className="text-[#1E3B2B]">CREDENTIAL GAP.</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
                  Millions of skilled workers build years of experience through real, indispensable work — but when a project ends, that experience remains informal, fragmented, and difficult to prove.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/build-passport"
                    className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md vouch-btn"
                  >
                    <span>Build Your Passport</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-sm font-semibold transition-colors vouch-btn"
                  >
                    <span>How Verification Works →</span>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Fundamental Asymmetry: White-Collar vs Skilled Trades */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  THE STRUCTURAL REALITY
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                  WHY FORMALIZATION MATTERS.
                </h2>
                <p className="text-lg text-[#4A524D]">
                  Every industry relies on proof. For decades, skilled vocations have suffered from an absence of portable proof infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              
              {/* White Collar Side */}
              <ScrollReveal delay={100}>
                <div className="p-8 rounded-2xl bg-white border border-[#E5E1D8] flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold block mb-2">
                      WHITE-COLLAR PROFESSIONALS HAVE:
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#121614] mb-4">
                      Cumulative Institutional Proof
                    </h3>
                    <div className="space-y-3 text-sm text-[#4A524D]">
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Standardized CVs & Portfolios</span>
                        <p className="text-xs text-[#737A75] mt-0.5">Formal documents detailing project contributions recognized globally.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Public Professional Networks</span>
                        <p className="text-xs text-[#737A75] mt-0.5">LinkedIn profiles and endorsements that travel seamlessly across career moves.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Automated HR Reference Checks</span>
                        <p className="text-xs text-[#737A75] mt-0.5">Documented corporate title changes and verified employment dates.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#ECE8E0] text-xs font-mono text-[#059669]">
                    OUTCOME: Experience directly increases market compensation.
                  </div>
                </div>
              </ScrollReveal>

              {/* Skilled Trades Side */}
              <ScrollReveal delay={200}>
                <div className="p-8 rounded-2xl bg-[#F4EFEB] border-2 border-[#1E3B2B] flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#1E3B2B] font-bold block mb-2">
                      SKILLED TRADES STILL RELY ON:
                    </span>
                    <h3 className="font-display font-bold text-2xl text-[#121614] mb-4">
                      Informal & Fragile Memory
                    </h3>
                    <div className="space-y-3 text-sm text-[#4A524D]">
                      <div className="p-3 rounded-xl bg-white border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Scattered WhatsApp Photos</span>
                        <p className="text-xs text-[#737A75] mt-0.5">Unorganized photos of installations without technical specs or verification stamps.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Subjective Verbal References</span>
                        <p className="text-xs text-[#737A75] mt-0.5">Phone calls to past contractors who may be unreachable or hostile to a worker leaving.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-[#E5E1D8]">
                        <span className="font-semibold text-[#121614]">Lost Paper Vouchers</span>
                        <p className="text-xs text-[#737A75] mt-0.5">Challans and sign-offs that get damaged or thrown away after site completion.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#ECE8E0] text-xs font-mono text-[#C27A38]">
                    PROBLEM: 10 years of mastery repeatedly resets back to entry-level pay.
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>

        {/* The Vouch Equation Section */}
        <section className="py-20 sm:py-28 bg-[#1E3B2B] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <ScrollReveal delay={0}>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-bold block mb-4">
                THE CORE FORMULA
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-10">
                HOW VOUCH SOLVES THE PROBLEM
              </h2>
            </ScrollReveal>

            {/* Formula Banner */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-3 items-center bg-white/10 p-6 sm:p-8 rounded-3xl border border-white/20 mb-10 text-center font-mono">
                <div className="sm:col-span-1 bg-white/15 p-4 rounded-2xl">
                  <span className="text-xs text-emerald-300 block mb-1">01</span>
                  <span className="font-bold text-lg text-white">WORK</span>
                </div>
                <div className="sm:col-span-1 text-2xl font-bold text-[#C27A38]">+</div>
                <div className="sm:col-span-1 bg-white/15 p-4 rounded-2xl">
                  <span className="text-xs text-emerald-300 block mb-1">02</span>
                  <span className="font-bold text-lg text-white">EVIDENCE</span>
                </div>
                <div className="sm:col-span-1 text-2xl font-bold text-[#C27A38]">+</div>
                <div className="sm:col-span-1 bg-white/15 p-4 rounded-2xl">
                  <span className="text-xs text-emerald-300 block mb-1">03</span>
                  <span className="font-bold text-lg text-white">CONFIRMATION</span>
                </div>
                <div className="sm:col-span-1 text-2xl font-bold text-[#C27A38]">=</div>
                <div className="sm:col-span-1 bg-[#C27A38] p-4 rounded-2xl text-white">
                  <span className="text-xs text-white/80 block mb-1">RESULT</span>
                  <span className="font-bold text-sm text-white">PROFESSIONAL PROOF</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                When experience is anchored by physical proof and independent verification, workers earn dignity, market leverage, and fair compensation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <Link
                to="/build-passport"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-white text-[#1E3B2B] font-bold text-base hover:bg-gray-100 transition-colors shadow-lg vouch-btn"
              >
                <span>Build Your Passport Today</span>
                <ArrowRight className="w-4 h-4 text-[#C27A38]" />
              </Link>
            </ScrollReveal>

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default AboutPage;
