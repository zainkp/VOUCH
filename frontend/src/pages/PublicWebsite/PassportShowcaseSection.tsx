import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  QrCode, 
  Share2, 
  ExternalLink, 
  FileCheck, 
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export const PassportShowcaseSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<'wiring' | 'panel' | 'ac'>('wiring');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + '/passport/VOUCH-IN-2026-8842');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="passport-showcase" className="py-20 sm:py-28 lg:py-32 bg-[#F4F0E6] border-t border-b border-[#E2DDD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal delay={0} duration={600}>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold mb-3">
              03 / THE PRODUCT ARTIFACT
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#202322] tracking-tight leading-[1.08] mb-6">
              A PROFESSIONAL<br />
              PASSPORT BUILT<br />
              FROM PROOF.
            </h2>
            <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
              Your Vouch Passport belongs to you. Keep building it as your career moves from one employer to the next.
            </p>
          </div>
        </ScrollReveal>

        {/* Hero Product Artifact: Full Passport UI Box */}
        <ScrollReveal variant="passport" delay={150} duration={750} className="max-w-5xl mx-auto">
          <div className="bg-[#FFDFF7] rounded-3xl border-2 border-[#173F4F] shadow-[0_24px_60px_rgba(18,22,20,0.12)] overflow-hidden relative">
          
          {/* Top Passport Security Ribbon */}
          <div className="bg-[#173F4F] text-[#F4F0E6] px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-[#C45B3C]" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                REPUBLIC OF INDIA · VOCATIONAL WORKER PASSPORT
              </span>
            </div>
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="text-[#F4F0E6]/80">ID: VOUCH-IN-2026-8842</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
          </div>

          {/* Main Passport Content Body */}
          <div className="p-6 sm:p-10 guilloche-pattern">
            
            {/* Top Identity Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-[#E2DDD2] items-center">
              
              {/* Photo & Stamp */}
              <div className="md:col-span-3 flex flex-col items-center sm:items-start">
                <div className="relative w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-[#173F4F] shadow-md bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=500&auto=format&fit=crop&q=80"
                    alt="Ravi Kumar verified portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Security watermark badge */}
                  <div className="absolute bottom-1 right-1 bg-white/90 backdrop-blur-xs px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-[#173F4F]">
                    VERIFIED
                  </div>
                </div>
                
                {/* Tactile Stamp */}
                <div className="tactile-stamp mt-3 px-2 py-1 rounded bg-white/80 text-[10px] font-mono font-bold text-[#3E6B52]">
                  ★ CONFIRMED ON-SITE
                </div>
              </div>

              {/* Bio & Core Identifiers */}
              <div className="md:col-span-6 flex flex-col justify-center">
                <div className="mb-1">
                  <span className="text-xs font-mono text-[#737A75] uppercase tracking-wider">
                    NAME / FULL LEGAL IDENTITY
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#202322] tracking-tight">
                    RAVI KUMAR
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 my-3 text-xs">
                  <div>
                    <span className="text-[11px] font-mono text-[#737A75] uppercase block">Primary Trade</span>
                    <span className="font-bold text-sm text-[#173F4F]">Lead Electrician</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#737A75] uppercase block">Experience</span>
                    <span className="font-bold text-sm text-[#202322]">7 Years Documented</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#737A75] uppercase block">Primary Location</span>
                    <span className="font-medium text-[#202322]">Mangaluru, Karnataka</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#737A75] uppercase block">Verified Language</span>
                    <span className="font-medium text-[#202322]">Hindi · Kannada · English</span>
                  </div>
                </div>

                <p className="text-xs text-[#4A524D] leading-relaxed italic bg-white/70 p-2.5 rounded-lg border border-[#E2DDD2]">
                  &quot;Skilled electrical technician specializing in residential conduit routing, LT distribution panels, and 3-phase commercial switchgear.&quot;
                </p>
              </div>

              {/* QR Code & Direct Share Box */}
              <div className="md:col-span-3 flex flex-col items-center justify-center p-4 bg-[#F4F0E6] rounded-2xl border border-[#E2DDD2] text-center">
                <div className="w-24 h-24 bg-white p-2 rounded-xl border border-[#E2DDD2] shadow-2xs mb-2 flex items-center justify-center">
                  <QrCode className="w-20 h-20 text-[#173F4F]" strokeWidth={1.8} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#737A75] mb-2">
                  Scan to Inspect Evidence
                </span>
                <div className="flex items-center space-x-2 w-full">
                  <button
                    onClick={handleShare}
                    className="flex-1 py-1.5 px-2 bg-white hover:bg-gray-50 border border-[#E2DDD2] rounded-md text-[11px] font-semibold text-[#202322] flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Share2 className="w-3 h-3 text-[#173F4F]" />
                    <span>{copied ? 'Copied Link!' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => navigate('/passport')}
                    className="py-1.5 px-2 bg-[#173F4F] hover:bg-[#0E2934] text-white rounded-md text-[11px] font-semibold flex items-center justify-center cursor-pointer"
                    title="Open Full Passport View"
                  >
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

            {/* Middle Section: Skills Confidence Breakdown */}
            <div className="py-8 border-b border-[#E2DDD2]">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h4 className="font-display font-bold text-lg text-[#202322]">
                    DEMONSTRATED SKILLS
                  </h4>
                  <p className="text-xs text-[#737A75]">
                    Empirically computed from uploaded job records, site evidence items, and supervisor confirmations.
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-[#3E6B52] bg-[#EDF4F0] px-2.5 py-1 rounded-md">
                  CONFIDENCE CALIBRATED
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Skill 1: Electrical Wiring */}
                <div
                  onClick={() => setSelectedSkill('wiring')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedSkill === 'wiring'
                      ? 'border-[#173F4F] bg-[#EDF4F0]/40 shadow-xs'
                      : 'border-[#E2DDD2] bg-white hover:border-[#737A75]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-sm text-[#202322]">Electrical Wiring</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20">
                      HIGH CONFIDENCE
                    </span>
                  </div>
                  <p className="text-xs text-[#4A524D] mb-3">
                    Conduit piping, earthing pits, RCCB trip protection, and sub-meter distribution.
                  </p>
                  <div className="text-[11px] font-mono text-[#737A75] flex items-center justify-between pt-2 border-t border-[#E2DDD2]/60">
                    <span>12 records</span>
                    <span>17 items</span>
                    <span className="font-bold text-[#3E6B52]">5 verified</span>
                  </div>
                </div>

                {/* Skill 2: Panel Installation */}
                <div
                  onClick={() => setSelectedSkill('panel')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedSkill === 'panel'
                      ? 'border-[#173F4F] bg-[#EDF4F0]/40 shadow-xs'
                      : 'border-[#E2DDD2] bg-white hover:border-[#737A75]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-sm text-[#202322]">Panel Installation</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20">
                      HIGH CONFIDENCE
                    </span>
                  </div>
                  <p className="text-xs text-[#4A524D] mb-3">
                    Three-phase main LT distribution boards, automatic changeover switches, and busbars.
                  </p>
                  <div className="text-[11px] font-mono text-[#737A75] flex items-center justify-between pt-2 border-t border-[#E2DDD2]/60">
                    <span>6 records</span>
                    <span>10 items</span>
                    <span className="font-bold text-[#3E6B52]">3 verified</span>
                  </div>
                </div>

                {/* Skill 3: AC Feeds */}
                <div
                  onClick={() => setSelectedSkill('ac')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedSkill === 'ac'
                      ? 'border-[#173F4F] bg-[#EDF4F0]/40 shadow-xs'
                      : 'border-[#E2DDD2] bg-white hover:border-[#737A75]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-bold text-sm text-[#202322]">AC Feeds & Troubleshooting</h5>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF3C7] text-[#B45309] border border-[#B45309]/20">
                      MEDIUM CONFIDENCE
                    </span>
                  </div>
                  <p className="text-xs text-[#4A524D] mb-3">
                    Dedicated isolators, copper pipe grounding, and 3-phase motor rotor balancing.
                  </p>
                  <div className="text-[11px] font-mono text-[#737A75] flex items-center justify-between pt-2 border-t border-[#E2DDD2]/60">
                    <span>4 records</span>
                    <span>5 items</span>
                    <span className="font-bold text-[#B45309]">2 verified</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Section: Evidence Ledger Summary */}
            <div className="pt-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                  <span className="text-xs font-mono text-[#737A75] uppercase block">Work Records</span>
                  <span className="text-2xl font-display font-extrabold text-[#202322]">12</span>
                  <span className="text-[11px] text-[#3E6B52] block mt-0.5">100% On-Site Logged</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                  <span className="text-xs font-mono text-[#737A75] uppercase block">Evidence Items</span>
                  <span className="text-2xl font-display font-extrabold text-[#202322]">18</span>
                  <span className="text-[11px] text-[#737A75] block mt-0.5">Photos & Signoffs</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                  <span className="text-xs font-mono text-[#737A75] uppercase block">Confirmations</span>
                  <span className="text-2xl font-display font-extrabold text-[#173F4F]">5</span>
                  <span className="text-[11px] text-[#3E6B52] block mt-0.5">Independent Verifiers</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                  <span className="text-xs font-mono text-[#737A75] uppercase block">Completeness</span>
                  <span className="text-2xl font-display font-extrabold text-[#C45B3C]">72%</span>
                  <span className="text-[11px] text-[#737A75] block mt-0.5">Audit Ready</span>
                </div>
              </div>

              {/* Interactive CTA to test passport */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-[#173F4F] text-white rounded-xl gap-4">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FileCheck className="w-4 h-4 text-[#C45B3C]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Ready to inspect the live interactive passport?</p>
                    <p className="text-xs text-[#F4F0E6]/80">Explore full work history, verifier comments, and test reports.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2.5 w-full sm:w-auto">
                  <Link
                    to="/passport"
                    className="vouch-btn flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#F4F0E6] text-[#173F4F] hover:bg-white text-xs font-bold flex items-center justify-center space-x-1.5 shrink-0 transition-colors"
                  >
                    <span>Passport Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/build-passport"
                    className="vouch-btn flex-1 sm:flex-none px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center border border-white/20 transition-colors"
                  >
                    <span>Build Yours</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
