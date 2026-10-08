import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Image as ImageIcon, 
  FileText, 
  UserCheck, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  AlertTriangle,
  ExternalLink
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export const EvidenceSection: React.FC = () => {
  const [activeEvidenceTab, setActiveEvidenceTab] = useState<'photo' | 'test' | 'signoff'>('photo');

  return (
    <section id="evidence" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0} duration={600}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#059669] font-bold mb-3">
              04 / THE CORE DIFFERENTIATOR
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
              DON&apos;T JUST SAY<br />
              YOU CAN DO IT.<br />
              <span className="text-[#1E3B2B]">SHOW IT.</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
              Vouch builds confidence around individual skills from documented work and independent confirmations — not arbitrary star ratings.
            </p>
          </div>
        </ScrollReveal>

        {/* Contrast Callout: Why Star Ratings Fail vs Evidence */}
        <ScrollReveal delay={100} duration={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 sm:mb-16">
            
            {/* Why Star Ratings Fail (Do Not Use) */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] relative">
              <div className="flex items-center space-x-2 text-[#C27A38] text-xs font-mono font-bold uppercase mb-3">
                <XCircle className="w-4 h-4" />
                <span>THE FLAW IN CONSUMER APP RATINGS</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl tracking-widest line-through text-gray-400">★★★★★</span>
                <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded font-bold">
                  BIASED & MEANINGLESS
                </span>
              </div>
              <p className="text-sm text-[#4A524D] leading-relaxed">
                Star ratings tell a contractor nothing about technical competence. A plumber could get 5 stars for being polite, or 1 star because traffic made them late. Consumer ratings lack trade context, verifiable proof, and accountability.
              </p>
            </div>

            {/* How Vouch Solves It */}
            <div className="bg-[#EBF6EE] rounded-2xl p-6 sm:p-7 border border-[#059669]/30 relative">
              <div className="flex items-center space-x-2 text-[#059669] text-xs font-mono font-bold uppercase mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>THE VOUCH CONFIDENCE MODEL</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-[#1E3B2B] font-mono bg-white px-3 py-1 rounded-md border border-[#059669]/20">
                  EMPIRICAL SKILL CONFIDENCE
                </span>
                <span className="text-xs font-mono bg-[#059669] text-white px-2 py-0.5 rounded font-bold">
                  AUDITABLE
                </span>
              </div>
              <p className="text-sm text-[#1E3B2B] leading-relaxed">
                Confidence is mathematically calibrated per skill: volume of verified work orders, photographic evidence of code compliance, and signed confirmations from licensed site engineers and supervisors.
              </p>
            </div>

          </div>
        </ScrollReveal>

        {/* Visual Deep Dive: Interactive Evidence Audit Box */}
        <ScrollReveal delay={150} duration={650}>
          <div className="bg-white rounded-3xl border border-[#E5E1D8] shadow-[0_16px_40px_rgba(18,22,20,0.06)] overflow-hidden">
          
          {/* Skill Title Banner */}
          <div className="p-6 sm:p-8 bg-[#F4EFEB] border-b border-[#E5E1D8] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="font-display font-extrabold text-2xl text-[#121614]">
                  ELECTRICAL WIRING
                </h3>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>HIGH CONFIDENCE</span>
                </span>
              </div>
              <p className="text-xs text-[#737A75]">
                Category: Residential Conduit, Distribution Boards & 415V LT Switchgear
              </p>
            </div>

            {/* Evidence Stat Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5E1D8] text-[#121614] font-semibold">
                8 work records
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-[#E5E1D8] text-[#121614] font-semibold">
                12 evidence items
              </span>
              <span className="bg-[#EBF6EE] px-3 py-1.5 rounded-lg border border-[#059669]/20 text-[#059669] font-bold">
                3 supervisor confirmations
              </span>
              <span className="bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E5E1D8] text-[#4A524D]">
                1 customer confirmation
              </span>
            </div>
          </div>

          {/* Interactive Evidence Inspection Body */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
                ATTACHED EVIDENCE AUDIT TRAIL (CLICK TO INSPECT):
              </span>
              <span className="text-xs text-[#1E3B2B] font-medium hidden sm:inline">
                Independent verifier timestamps intact
              </span>
            </div>

            {/* Evidence Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              
              <button
                onClick={() => setActiveEvidenceTab('photo')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeEvidenceTab === 'photo'
                    ? 'border-[#1E3B2B] bg-[#FAF8F5] ring-1 ring-[#1E3B2B]'
                    : 'border-[#E5E1D8] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#1E3B2B] mb-1">
                  <ImageIcon className="w-4 h-4" />
                  <span>ITEM #1: SITE PHOTO</span>
                </div>
                <h4 className="text-sm font-bold text-[#121614]">Distribution Board Wiring</h4>
                <p className="text-xs text-[#737A75] mt-1">Conduit piping and labelled MCBs</p>
              </button>

              <button
                onClick={() => setActiveEvidenceTab('test')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeEvidenceTab === 'test'
                    ? 'border-[#1E3B2B] bg-[#FAF8F5] ring-1 ring-[#1E3B2B]'
                    : 'border-[#E5E1D8] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#059669] mb-1">
                  <FileText className="w-4 h-4" />
                  <span>ITEM #2: TEST READOUT</span>
                </div>
                <h4 className="text-sm font-bold text-[#121614]">Earth Resistance Readout</h4>
                <p className="text-xs text-[#737A75] mt-1">Megger reading &lt; 2.0 ohms</p>
              </button>

              <button
                onClick={() => setActiveEvidenceTab('signoff')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeEvidenceTab === 'signoff'
                    ? 'border-[#1E3B2B] bg-[#FAF8F5] ring-1 ring-[#1E3B2B]'
                    : 'border-[#E5E1D8] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#C27A38] mb-1">
                  <UserCheck className="w-4 h-4" />
                  <span>ITEM #3: SUPERVISOR SIGN-OFF</span>
                </div>
                <h4 className="text-sm font-bold text-[#121614]">Site Engineer Confirmation</h4>
                <p className="text-xs text-[#737A75] mt-1">Mahesh Shetty, ABC Electricals</p>
              </button>

            </div>

            {/* Active Evidence Item Display View */}
            <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E5E1D8]">
              {activeEvidenceTab === 'photo' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#E5E1D8] shadow-xs aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80"
                      alt="Distribution board conduit layout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                      VERIFIED ON-SITE PHOTOGRAPH
                    </span>
                    <h4 className="text-lg font-bold text-[#121614] mb-2">
                      Main Distribution Board & Conduit Routing
                    </h4>
                    <p className="text-sm text-[#4A524D] leading-relaxed mb-4">
                      Documented at Kadri Hills residential construction site. Showing 3BHK high-amperage AC feed separation, neutral copper busbar connections, and individual 16A/32A MCB labelling.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-white p-3 rounded-lg border border-[#E5E1D8]">
                      <div>
                        <span className="text-[#737A75] block">Timestamp:</span>
                        <span className="font-semibold text-[#121614]">12 Sep 2026, 14:22 IST</span>
                      </div>
                      <div>
                        <span className="text-[#737A75] block">Geo-Location:</span>
                        <span className="font-semibold text-[#121614]">Mangaluru (12.8797° N, 74.8560° E)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeEvidenceTab === 'test' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#E5E1D8] shadow-xs aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
                      alt="Digital insulation multimeter readout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                      CALIBRATED SAFETY READOUT
                    </span>
                    <h4 className="text-lg font-bold text-[#121614] mb-2">
                      Earth Pit Resistance & RCCB Trip Test
                    </h4>
                    <p className="text-sm text-[#4A524D] leading-relaxed mb-4">
                      Digital 4-terminal soil earth resistance test confirming earthing impedance of 1.84 ohms (strictly under the 2.0 ohm national code limit). 30mA residual current circuit breaker trip response verified within 24 milliseconds.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-white p-3 rounded-lg border border-[#E5E1D8]">
                      <div>
                        <span className="text-[#737A75] block">Instrument:</span>
                        <span className="font-semibold text-[#121614]">Megger DET4TC2 Earth Tester</span>
                      </div>
                      <div>
                        <span className="text-[#737A75] block">Result:</span>
                        <span className="font-bold text-[#059669]">PASS (1.84 Ω / 24ms Trip)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeEvidenceTab === 'signoff' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#E5E1D8] shadow-xs aspect-[4/3] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80"
                      alt="Signed handover document voucher"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-7">
                    <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                      VERIFIED SUPERVISOR SIGN-OFF
                    </span>
                    <h4 className="text-lg font-bold text-[#121614] mb-2">
                      ABC Electricals — Site Handover
                    </h4>
                    <blockquote className="text-sm text-[#1E3B2B] font-medium italic bg-white p-4 rounded-xl border border-[#E5E1D8] mb-4">
                      &quot;Clean cabling adhering strictly to safety code. All breakers verified under live load with zero heating issues. Ravi handled the full 3BHK installation independently.&quot;
                    </blockquote>
                    <div className="flex items-center space-x-3 text-xs font-mono text-[#4A524D]">
                      <span className="font-bold text-[#121614]">Mahesh Shetty</span>
                      <span>·</span>
                      <span>Site Supervisor</span>
                      <span>·</span>
                      <span className="text-[#059669] font-bold">Confirmed 13 Sep 2026</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
