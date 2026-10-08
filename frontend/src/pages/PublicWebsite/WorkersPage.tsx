import React from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Camera, 
  History, 
  QrCode, 
  CheckCheck, 
  FileCheck,
  Building2,
  Lock,
  Layers,
  ChevronRight
} from 'lucide-react';

export const WorkersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36">
        
        {/* Workers Hero Section */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FOR SKILLED & TRADESPEOPLE</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                  YOUR EXPERIENCE<br />
                  <span className="text-[#1E3B2B]">BELONGS TO YOU.</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8 max-w-2xl">
                  Change employers. Move cities. Take on new projects. Your professional identity stays with you permanently — independent of any single contractor or company.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/build-passport"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md"
                  >
                    <span>Build Your Passport</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="inline-flex items-center justify-center space-x-1.5 px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-base font-medium transition-colors"
                  >
                    <span>See Verification Rules →</span>
                  </Link>
                </div>
              </div>

              {/* Documentary Worker Photography */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-xl bg-gray-100 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1508873696983-2df5703bc20d?w=1000&auto=format&fit=crop&q=80"
                    alt="Master tradesman at workbench"
                    className="w-full h-full object-cover filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/85 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5E1D8]">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#059669] mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>WORKER-OWNED CREDENTIAL</span>
                    </div>
                    <p className="text-xs text-[#121614]">
                      &quot;When a job finishes, your verified records stay in your passport. No contractor can take away what you built.&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Principles: Why Workers Need Vouch */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                THE 7 ADVANTAGES OF A VOUCH PASSPORT
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                HOW YOUR REPUTATION COMPOUNDS.
              </h2>
              <p className="text-lg text-[#4A524D]">
                Vouch is not a job board. It is your permanent vocational asset ledger that protects your career value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <History className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Record Your Real Work</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Log every residential or industrial job you complete. Keep an unbroken timeline of projects, roles, and technical responsibilities.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Add Physical Evidence</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Snap clear photos of conduit lines, pump assemblies, or test meters. Empirical images replace empty resume claims.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <CheckCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Get Work Confirmed</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Send a one-tap link to site supervisors or clients. Their signed confirmation gives instant third-party credibility to your skill.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Build Skill-Specific Proof</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Earn HIGH CONFIDENCE in distinct trade skills like LT panel installation or CPVC plumbing lines based on verified work volume.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Carry Your Identity With You</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  When you move cities or switch contractors, show your passport QR code on day one to command senior wage tiers immediately.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Independent of Any Boss</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Your past contractors cannot delete your work history or lock your achievements. The passport belongs entirely to you.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Polished Vouch Passport Example */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-2">
                WHAT YOUR PASSPORT LOOKS LIKE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614]">
                A PROFESSIONAL PASSPORT THAT SPEAKS FOR YOU.
              </h2>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-xl p-6 sm:p-10 guilloche-pattern">
              <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-[#E5E1D8] gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1E3B2B]">
                    <img
                      src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=200&auto=format&fit=crop&q=80"
                      alt="Worker portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-[#121614]">
                      Ravi Kumar
                    </h3>
                    <p className="text-xs text-[#737A75]">
                      Lead Electrician · 7 Years Experience · Mangaluru
                    </p>
                  </div>
                </div>
                <div className="text-center sm:text-right font-mono text-xs">
                  <span className="px-3 py-1 rounded bg-[#EBF6EE] text-[#059669] font-bold border border-[#059669]/20 inline-block mb-1">
                    PASSPORT VERIFIED
                  </span>
                  <p className="text-[#737A75]">ID: VOUCH-IN-2026-8842</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#121614]">Electrical Wiring</span>
                    <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded">
                      HIGH CONFIDENCE
                    </span>
                  </div>
                  <p className="text-xs text-[#737A75]">12 work records · 17 site photos · 5 supervisor confirmations</p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-bold text-[#121614]">Panel Installation</span>
                    <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded">
                      HIGH CONFIDENCE
                    </span>
                  </div>
                  <p className="text-xs text-[#737A75]">6 work records · 10 evidence items · 3 supervisor confirmations</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#4A524D]">
                  Ready to turn your trade experience into a verified passport?
                </span>
                <Link
                  to="/build-passport"
                  className="px-6 py-2.5 rounded-lg bg-[#1E3B2B] text-white text-xs font-bold hover:bg-[#14281D] transition-colors"
                >
                  Build Your Passport Now →
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default WorkersPage;
