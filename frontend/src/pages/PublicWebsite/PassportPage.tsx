import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { 
  ShieldCheck, 
  ArrowRight, 
  QrCode, 
  Share2, 
  FileCheck, 
  CheckCircle2, 
  Lock, 
  ExternalLink,
  Award,
  Layers,
  Clock,
  Printer
} from 'lucide-react';

export const PassportPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/passport/VOUCH-IN-2026-8842');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36">
        
        {/* Passport Explainer Hero */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>THE PRODUCT ARTIFACT</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                THE PROFESSIONAL<br />
                <span className="text-[#1E3B2B]">PASSPORT.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
                A worker-owned, portable, evidence-backed professional identity. Not a static PDF resume. Not a social profile. An auditable record of genuine craftsmanship.
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
                  to="/passport/VOUCH-IN-2026-8842"
                  className="inline-flex items-center justify-center space-x-1.5 px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-base font-medium transition-colors"
                >
                  <span>Open Live Public View →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Key Principles of the Passport */}
        <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              
              <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">01 / OWNERSHIP</span>
                <h3 className="font-bold text-base text-[#121614] mb-1">Worker-Owned</h3>
                <p className="text-xs text-[#737A75]">You hold the private record. Employers cannot delete or lock it.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">02 / MOBILITY</span>
                <h3 className="font-bold text-base text-[#121614] mb-1">Portable</h3>
                <p className="text-xs text-[#737A75]">Cross employers, cities, states, and projects without losing reputation.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">03 / VERACITY</span>
                <h3 className="font-bold text-base text-[#121614] mb-1">Evidence-Backed</h3>
                <p className="text-xs text-[#737A75]">Every skill is anchored by photos, test certificates, and orders.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">04 / ACCESS</span>
                <h3 className="font-bold text-base text-[#121614] mb-1">Shareable</h3>
                <p className="text-xs text-[#737A75]">Instant QR code scan or link for instant on-site contractor verification.</p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E5E1D8]">
                <span className="text-xs font-mono font-bold text-[#059669] uppercase block mb-1">05 / INDEPENDENCE</span>
                <h3 className="font-bold text-base text-[#121614] mb-1">Single-Boss Free</h3>
                <p className="text-xs text-[#737A75]">Your career equity accumulates across your entire lifetime of trade work.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Full Passport UI Showcase (No Stars / No Fake 92% Numbers) */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-2">
                VERIFIABLE PRODUCT ARTIFACT
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614]">
                THE VOUCH PROFESSIONAL PASSPORT
              </h2>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-2xl overflow-hidden">
              
              {/* Header Ribbon */}
              <div className="bg-[#1E3B2B] text-white px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#C27A38]" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    VOCATIONAL IDENTITY PASSPORT · REPUBLIC OF INDIA
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono">
                  <span>ID: VOUCH-IN-2026-8842</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    ACTIVE CREDENTIAL
                  </span>
                </div>
              </div>

              {/* Identity Header */}
              <div className="p-6 sm:p-10 border-b border-[#E5E1D8] guilloche-pattern">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  <div className="sm:col-span-3 flex justify-center sm:justify-start">
                    <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-[#1E3B2B] shadow-md bg-gray-100 relative">
                      <img
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&auto=format&fit=crop&q=80"
                        alt="Ravi Kumar"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-white/95 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold text-[#1E3B2B]">
                        VERIFIED ID
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <span className="text-xs font-mono text-[#737A75] uppercase block">HOLDER</span>
                    <h3 className="font-display font-extrabold text-3xl text-[#121614] mb-2">
                      RAVI KUMAR
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[#737A75] uppercase block">Trade</span>
                        <span className="font-bold text-[#1E3B2B]">Electrician (Lead)</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#737A75] uppercase block">Experience</span>
                        <span className="font-bold text-[#121614]">7 Years Documented</span>
                      </div>
                    </div>
                    <p className="text-xs text-[#4A524D] bg-[#FAF8F5] p-3 rounded-lg border border-[#E5E1D8]">
                      Residential Wiring & Commercial Distribution Specialist · Government ITI Wireman Certified.
                    </p>
                  </div>

                  <div className="sm:col-span-3 flex flex-col items-center justify-center p-3 bg-[#FAF8F5] rounded-xl border border-[#E5E1D8] text-center">
                    <div className="w-20 h-20 bg-white p-1 rounded-lg border border-[#E5E1D8] flex items-center justify-center mb-1">
                      <QrCode className="w-16 h-16 text-[#1E3B2B]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[#737A75] mb-2">
                      Scan On-Site
                    </span>
                    <button
                      onClick={handleCopyLink}
                      className="text-xs font-semibold text-[#1E3B2B] hover:underline flex items-center space-x-1 cursor-pointer"
                    >
                      <Share2 className="w-3 h-3" />
                      <span>{copied ? 'Copied!' : 'Share Passport'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Skills with Evidence-Backed Language (No stars, no fake numerical ratings) */}
              <div className="p-6 sm:p-10 border-b border-[#E5E1D8]">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display font-bold text-lg text-[#121614]">
                    DEMONSTRATED SKILLS CONFIDENCE
                  </h4>
                  <span className="text-xs font-mono text-[#059669] font-bold bg-[#EBF6EE] px-2.5 py-1 rounded">
                    EVIDENCE CALIBRATED
                  </span>
                </div>

                <div className="space-y-3">
                  
                  {/* Skill 1 */}
                  <div className="p-4 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h5 className="font-bold text-sm text-[#121614]">Electrical Wiring</h5>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20 w-fit">
                        HIGH CONFIDENCE
                      </span>
                    </div>
                    <p className="text-xs text-[#737A75] mb-2">
                      Code-compliant conduit wiring, earthing pits, RCCB trip protection, and sub-meter distribution.
                    </p>
                    <div className="text-xs font-mono text-[#1E3B2B] font-semibold pt-2 border-t border-[#E5E1D8]">
                      8 work records · 12 evidence items · 3 confirmations
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="p-4 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h5 className="font-bold text-sm text-[#121614]">Commercial Panel Installation</h5>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20 w-fit">
                        HIGH CONFIDENCE
                      </span>
                    </div>
                    <p className="text-xs text-[#737A75] mb-2">
                      Three-phase main LT distribution boards, automatic changeover switches, and busbar trunking.
                    </p>
                    <div className="text-xs font-mono text-[#1E3B2B] font-semibold pt-2 border-t border-[#E5E1D8]">
                      5 work records · 7 evidence items · 2 confirmations
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div className="p-4 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h5 className="font-bold text-sm text-[#121614]">AC Electrical Feeds & Motor Repair</h5>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-[#FEF3C7] text-[#B45309] border border-[#B45309]/20 w-fit">
                        MEDIUM CONFIDENCE
                      </span>
                    </div>
                    <p className="text-xs text-[#737A75] mb-2">
                      Dedicated 20A isolators, copper pipe grounding, and 3-phase induction motor stator rewinding.
                    </p>
                    <div className="text-xs font-mono text-[#B45309] font-semibold pt-2 border-t border-[#E5E1D8]">
                      3 work records · 4 evidence items · 1 confirmation
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 sm:p-8 bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-[#4A524D]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>Permanent worker-owned credential with verified cryptographic proof hash.</span>
                </div>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    to="/build-passport"
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#1E3B2B] text-white hover:bg-[#14281D] text-xs font-bold text-center transition-colors"
                  >
                    Build Your Passport Now
                  </Link>
                  <Link
                    to="/passport/VOUCH-IN-2026-8842"
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-[#E5E1D8] bg-white hover:bg-gray-50 text-xs font-bold text-center transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Full Live View</span>
                    <ExternalLink className="w-3 h-3 text-[#1E3B2B]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default PassportPage;
