import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Camera, 
  FileText, 
  QrCode, 
  CheckCheck, 
  Building2, 
  Lock, 
  ArrowUpRight,
  Briefcase,
  MapPin,
  Sparkles,
  Award,
  Layers,
  Share2,
  Check,
  ChevronRight,
  XCircle,
  FileCheck
} from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useApp } from '../../context/AppContext';

export const WorkersPage: React.FC = () => {
  const { isAuthenticated, activeRole } = useApp();
  const buildPassportHref = isAuthenticated && activeRole === 'worker' ? '/build-passport' : '/login?redirect=/build-passport';

  // Interactive Confirmation Simulator State
  const [confirmedState, setConfirmedState] = useState<'pending' | 'confirmed'>('pending');
  const [activeEvidenceTab, setActiveEvidenceTab] = useState<'photo' | 'document' | 'confirmation'>('photo');

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#202322] flex flex-col selection:bg-[#EDF4F0] selection:text-[#173F4F]">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 animate-page-enter">
        
        {/* ==================================================
            SECTION 1: WORKER HERO
            ================================================== */}
        <section className="py-12 sm:py-20 lg:py-24 border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <ScrollReveal delay={0}>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EDF4F0] text-[#3E6B52] text-xs font-mono font-bold uppercase mb-6 border border-[#3E6B52]/20">
                    <ShieldCheck className="w-4 h-4 text-[#3E6B52]" />
                    <span>FOR SKILLED ELECTRICIANS, PLUMBERS, CARPENTERS & TECHNICIANS</span>
                  </div>

                  <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#202322] tracking-tight leading-[1.04] mb-6">
                    THE SKILLED WORKER&apos;S<br />
                    <span className="text-[#173F4F]">PORTABLE PASSPORT.</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8 max-w-2xl">
                    You spent years mastering your trade on job sites. Why should your reputation stay trapped in someone else&apos;s phone? Vouch gives skilled tradespeople a portable, tamper-proof passport you own for life.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={180}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                    <Link
                      to={buildPassportHref}
                      className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#173F4F] text-white font-semibold text-base hover:bg-[#0E2934] active:scale-[0.98] transition-all shadow-sm group vouch-btn"
                    >
                      <span>BUILD YOUR WORKER PASSPORT</span>
                      <ArrowRight className="w-4 h-4 text-[#C45B3C] group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-[#E2DDD2] bg-white text-[#202322] hover:bg-[#F4F0E6] text-base font-medium transition-colors vouch-btn"
                    >
                      <span>SEE HOW WORKERS USE VOUCH</span>
                      <ChevronRight className="w-4 h-4 text-[#737A75]" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Documentary Worker Photography */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={160} variant="image">
                  <div className="relative rounded-2xl overflow-hidden border border-[#E2DDD2] shadow-lg bg-gray-100 aspect-[4/5] reveal-image-container">
                    <img
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&auto=format&fit=crop&q=80"
                      alt="Skilled electrical technician working on main switchboard installation"
                      className="w-full h-full object-cover filter saturate-[0.95] reveal-image-zoom"
                    />
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>


        {/* ==================================================
            SECTION 2: WHY SKILLED WORKERS NEED VOUCH
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                  WHY SKILLED WORKERS NEED VOUCH
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-6">
                  STOP STARTING FROM ZERO<br />
                  <span className="text-[#173F4F]">ON EVERY NEW JOBSITE.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  When you switch contractors or move to a new city, your hard work shouldn&apos;t get erased. Compare how tradespeople struggle under contractor-locked verbal references versus having a permanent, worker-owned professional passport.
                </p>
              </div>
            </ScrollReveal>

            {/* Editorial Contrast — Without vs With Vouch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Without Vouch */}
              <ScrollReveal delay={100}>
                <div className="bg-[#F4F0E6] p-8 sm:p-10 rounded-2xl border border-[#E2DDD2] relative overflow-hidden h-full">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2DDD2]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E4545] flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-[#9E4545]" />
                      <span>THE OLD WAY · DEPENDENT ON CONTRACTORS</span>
                    </span>
                    <span className="text-xs text-[#737A75]">Fragile & Lost Over Time</span>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Paper Records</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Physical receipts, handwritten job notes, and yellowed work orders that get lost, torn, or misplaced between moves.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Verbal References</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Saying &quot;I worked 4 years on industrial switchgear&quot; with no proof when the hiring contractor doesn&apos;t know you.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Scattered Messages</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Photos trapped in old phone galleries, WhatsApp chats, and deleted group threads that can never be audited.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Employer-Dependent Reputation</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          When you leave a company or a contractor shuts down, your standing resets to zero in every new city or firm.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* With Vouch */}
              <ScrollReveal delay={200}>
                <div className="bg-[#FFDFF7] p-8 sm:p-10 rounded-2xl border-2 border-[#173F4F] shadow-lg relative overflow-hidden h-full">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2DDD2]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3E6B52] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B52]" />
                      <span>THE VOUCH WAY · WORKER-OWNED</span>
                    </span>
                    <span className="text-xs font-bold text-[#173F4F]">Permanent & Worker-Owned</span>
                  </div>

                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] text-[#3E6B52] flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Structured Work History</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          Every project, location, and technical responsibility logged into an audit-ready, chronological record.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] text-[#3E6B52] flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Photographic & Test Evidence</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          Real jobsite photos, calibrated test readouts, and handover certificates linked directly to specific trades.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] text-[#3E6B52] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Third-Party Confirmations</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          Direct digital confirmations from site engineers, licensed contractors, and customers who watched you work.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EDF4F0] text-[#3E6B52] flex items-center justify-center shrink-0 mt-0.5">
                        <QrCode className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#202322] text-base mb-1">Portable Professional Passport</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          One clean URL and instant QR code that you own forever, proving your seniority from day one on any site.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 3: HOW WORKERS RECORD THEIR EXPERIENCE
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5">
                <ScrollReveal delay={0}>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                    HOW WORKERS RECORD EXPERIENCE · STEP 01
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-6">
                    RECORD YOUR WORK<br />
                    <span className="text-[#173F4F]">IN UNDER 2 MINUTES.</span>
                  </h2>
                  <p className="text-lg text-[#4A524D] leading-relaxed mb-6">
                    Log the real projects you&apos;ve completed. Whether it was a commercial panel retrofit, plumbing run, or site installation, every job builds permanent equity in your personal passport.
                  </p>
                  <div className="space-y-3 font-medium text-sm text-[#202322]">
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B52]" />
                      <span>Takes less than 2 minutes directly from your phone</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B52]" />
                      <span>Works with past projects or today&apos;s active site</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#3E6B52]" />
                      <span>Structures rough site details into audit-ready credentials</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Large Visual Work-Record Composition */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={120}>
                  <div className="bg-[#FFDFF7] rounded-2xl border-2 border-[#173F4F] shadow-xl p-6 sm:p-8 relative">
                    
                    {/* Record Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E2DDD2] gap-3">
                      <div>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#173F4F] bg-[#EDF4F0] px-2.5 py-1 rounded">
                          LOGGED WORK RECORD
                        </span>
                        <h3 className="font-display font-extrabold text-2xl text-[#202322] mt-2">
                          COMMERCIAL PANEL INSTALLATION
                        </h3>
                        <div className="flex items-center space-x-3 text-xs text-[#737A75] mt-1 font-mono">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Mangaluru</span>
                          </span>
                          <span>·</span>
                          <span>September 2026</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EDF4F0] text-[#3E6B52] text-xs font-mono font-bold border border-[#3E6B52]/20">
                        <Check className="w-3.5 h-3.5" />
                        <span>CONFIRMED RECORD</span>
                      </div>
                    </div>

                    {/* Scope & Quantity */}
                    <div className="py-5 border-b border-[#E2DDD2]">
                      <span className="text-xs font-mono uppercase text-[#737A75] block mb-1">SCOPE OF WORK</span>
                      <p className="text-base text-[#202322] font-medium">
                        6 electrical panels installed with 415V three-phase busbars, surge protection devices, and load balancing across 3 commercial floors.
                      </p>
                    </div>

                    {/* Associated Skills */}
                    <div className="py-5 border-b border-[#E2DDD2]">
                      <span className="text-xs font-mono uppercase text-[#737A75] block mb-2">DEMONSTRATED SKILLS</span>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-lg bg-[#F4F0E6] border border-[#E2DDD2] text-xs font-bold text-[#202322] flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#3E6B52]" />
                          <span>Panel Installation</span>
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#F4F0E6] border border-[#E2DDD2] text-xs font-bold text-[#202322] flex items-center space-x-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#3E6B52]" />
                          <span>Electrical Wiring</span>
                        </span>
                        <span className="px-3 py-1.5 rounded-lg bg-[#F4F0E6] border border-[#E2DDD2] text-xs font-bold text-[#202322]">
                          Load Balancing
                        </span>
                      </div>
                    </div>

                    {/* Attached Evidence & Confirmation Footprint */}
                    <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-3.5 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2]">
                        <div className="flex items-center space-x-2 text-xs font-bold text-[#202322] mb-1">
                          <Camera className="w-4 h-4 text-[#173F4F]" />
                          <span>ATTACHED EVIDENCE</span>
                        </div>
                        <p className="text-xs text-[#737A75] font-mono">
                          4 photos · 1 work document (Megger Test)
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#EDF4F0] border border-[#3E6B52]/20">
                        <div className="flex items-center space-x-2 text-xs font-bold text-[#3E6B52] mb-1">
                          <CheckCircle2 className="w-4 h-4 text-[#3E6B52]" />
                          <span>CONFIRMED BY</span>
                        </div>
                        <p className="text-xs text-[#173F4F] font-medium">
                          ABC Electricals · Site Supervisor ✓
                        </p>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 4: HOW WORKERS COLLECT EVIDENCE
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                  HOW WORKERS COLLECT EVIDENCE · STEP 02
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-6">
                  COLLECT REAL ON-SITE EVIDENCE.<br />
                  <span className="text-[#173F4F]">SHOW WHAT YOU CAN DO.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  Contractors don&apos;t hire on empty claims — they hire on verified proof. Attach jobsite photos, Megger test readouts, and commissioning certificates directly to your skills. Your craftsmanship speaks for itself.
                </p>
              </div>
            </ScrollReveal>

            {/* Visual Evidence Composition */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Evidence Media & Artifacts Showcase */}
              <div className="lg:col-span-7">
                <ScrollReveal delay={100}>
                  <div className="bg-[#FFDFF7] p-6 sm:p-8 rounded-2xl border border-[#E2DDD2] shadow-sm">
                    
                    {/* Evidence Category Selector */}
                    <div className="flex items-center space-x-2 pb-5 border-b border-[#E2DDD2] mb-6 overflow-x-auto">
                      <button
                        onClick={() => setActiveEvidenceTab('photo')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
                          activeEvidenceTab === 'photo'
                            ? 'bg-[#173F4F] text-white'
                            : 'bg-[#F4F0E6] text-[#4A524D] hover:text-[#202322]'
                        }`}
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Jobsite Photo</span>
                      </button>
                      <button
                        onClick={() => setActiveEvidenceTab('document')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
                          activeEvidenceTab === 'document'
                            ? 'bg-[#173F4F] text-white'
                            : 'bg-[#F4F0E6] text-[#4A524D] hover:text-[#202322]'
                        }`}
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Megger Test Certificate</span>
                      </button>
                      <button
                        onClick={() => setActiveEvidenceTab('confirmation')}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
                          activeEvidenceTab === 'confirmation'
                            ? 'bg-[#173F4F] text-white'
                            : 'bg-[#F4F0E6] text-[#4A524D] hover:text-[#202322]'
                        }`}
                      >
                        <CheckCheck className="w-3.5 h-3.5" />
                        <span>Supervisor Sign-Off</span>
                      </button>
                    </div>

                    {/* Active Evidence Display */}
                    {activeEvidenceTab === 'photo' && (
                      <div className="space-y-4">
                        <div className="rounded-xl overflow-hidden border border-[#E2DDD2] aspect-video relative bg-black/5">
                          <img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                            alt="Clean conduit routing and panel busbars"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-3 left-3 bg-[#202322]/85 text-white text-[11px] font-mono px-3 py-1 rounded backdrop-blur-xs">
                            Item #01 · Main 415V LT Distribution Assembly
                          </div>
                        </div>
                        <p className="text-xs text-[#4A524D]">
                          High-resolution visual proof of neat conduit layout, color-coded phase wiring, and torque-sealed lugs.
                        </p>
                      </div>
                    )}

                    {activeEvidenceTab === 'document' && (
                      <div className="space-y-4">
                        <div className="p-6 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2] font-mono text-xs">
                          <div className="flex items-center justify-between border-b border-[#E2DDD2] pb-3 mb-3">
                            <span className="font-bold text-[#202322]">INSULATION RESISTANCE TEST REPORT</span>
                            <span className="text-[#3E6B52] font-bold">PASSED (&lt; 0.85 MΩ)</span>
                          </div>
                          <div className="space-y-2 text-[#4A524D]">
                            <p>Project: Mangaluru Commercial Hub · Floor 2 & 3</p>
                            <p>Instrument: Fluke 1507 Calibrated Megohmmeter</p>
                            <p>Phase R-Y-B to Earth: 1.2 GΩ · Insulation Integrity 100%</p>
                          </div>
                        </div>
                        <p className="text-xs text-[#4A524D]">
                          Technical documents and test certificates replace subjective claims with verifiable engineering proof.
                        </p>
                      </div>
                    )}

                    {activeEvidenceTab === 'confirmation' && (
                      <div className="space-y-4">
                        <div className="p-6 rounded-xl bg-[#EDF4F0] border border-[#3E6B52]/20">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-[#173F4F] text-white flex items-center justify-center font-bold text-xs">
                              AE
                            </div>
                            <div>
                              <h4 className="font-bold text-[#202322] text-sm">ABC Electricals Pvt Ltd</h4>
                              <p className="text-xs text-[#3E6B52] font-mono">Site Supervisor Confirmation ✓</p>
                            </div>
                          </div>
                          <p className="text-xs text-[#173F4F] italic">
                            &quot;Ravi Kumar executed the complete commercial panel assembly and passed full load commissioning on schedule.&quot;
                          </p>
                        </div>
                        <p className="text-xs text-[#4A524D]">
                          Independent confirmation logged with supervisor name, contact identity, and timestamp.
                        </p>
                      </div>
                    )}

                  </div>
                </ScrollReveal>
              </div>

              {/* Explainable Skill Confidence Card (No Generic %) */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={200}>
                  <div className="bg-[#FFDFF7] p-6 sm:p-8 rounded-2xl border-2 border-[#173F4F] shadow-lg">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#737A75] block mb-2">
                      SKILL ASSOCIATION & CONFIDENCE
                    </span>

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-extrabold text-2xl text-[#202322]">
                        Electrical Wiring
                      </h3>
                      <span className="px-3 py-1 rounded bg-[#EDF4F0] text-[#3E6B52] font-mono text-xs font-bold border border-[#3E6B52]/20">
                        HIGH CONFIDENCE
                      </span>
                    </div>

                    <p className="text-xs text-[#737A75] leading-relaxed mb-6">
                      Confidence on Vouch is strictly calculated from verified work volume and third-party confirmations — never arbitrary star ratings.
                    </p>

                    <div className="space-y-3 font-mono text-xs bg-[#F4F0E6] p-4 rounded-xl border border-[#E2DDD2]">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD2]">
                        <span className="text-[#4A524D]">Work Records:</span>
                        <span className="font-bold text-[#202322]">8 logged records</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#E2DDD2]">
                        <span className="text-[#4A524D]">Evidence Items:</span>
                        <span className="font-bold text-[#202322]">12 photos & documents</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A524D]">Confirmations:</span>
                        <span className="font-bold text-[#3E6B52]">3 supervisor sign-offs</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E2DDD2] text-xs text-[#4A524D] flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4 text-[#3E6B52] shrink-0" />
                      <span>Evidence confidence is fully explainable and auditable by hirers.</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 5: HOW CONFIRMATIONS WORK
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6">
                <ScrollReveal delay={0}>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                    HOW CONFIRMATIONS WORK · STEP 03
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-6">
                    ONE-TAP SUPERVISOR CONFIRMATIONS.<br />
                    <span className="text-[#173F4F]">ZERO HASSLE FOR YOUR BOSS.</span>
                  </h2>
                  <p className="text-lg text-[#4A524D] leading-relaxed mb-6">
                    Ask a supervisor, site engineer, or contractor to confirm the work you completed. They don&apos;t need to download an app, register, or fill out paperwork — a single tap via WhatsApp or SMS verifies your record permanently.
                  </p>
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2] text-xs text-[#4A524D] flex items-start space-x-3">
                    <Lock className="w-4 h-4 text-[#173F4F] shrink-0 mt-0.5" />
                    <span>
                      Confirmations are cryptographically signed, tamper-proof, and linked permanently to your Vouch passport.
                    </span>
                  </div>
                </ScrollReveal>
              </div>

              {/* Interactive Simple Confirmation Flow Simulator */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={120}>
                  <div className="bg-[#FFDFF7] rounded-2xl border-2 border-[#173F4F] shadow-xl p-6 sm:p-8">
                    <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD2] mb-6">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#173F4F]">
                        VERIFIER CONFIRMATION REQUEST
                      </span>
                      <span className="text-xs text-[#737A75] font-mono">VOUCH VERIFY</span>
                    </div>

                    {confirmedState === 'pending' ? (
                      <div className="space-y-6">
                        <div className="space-y-3 bg-[#F4F0E6] p-5 rounded-xl border border-[#E2DDD2]">
                          <p className="text-sm font-medium text-[#202322]">
                            <span className="font-bold text-[#173F4F]">Ravi Kumar</span> performed:
                          </p>
                          <h4 className="font-display font-extrabold text-xl text-[#202322]">
                            Commercial electrical installation
                          </h4>
                          <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#737A75] pt-2 border-t border-[#E2DDD2]">
                            <div>
                              <span className="text-[#4A524D] block">Role:</span>
                              <span className="font-bold text-[#202322]">Electrician</span>
                            </div>
                            <div>
                              <span className="text-[#4A524D] block">Location:</span>
                              <span className="font-bold text-[#202322]">Mangaluru</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setConfirmedState('confirmed')}
                          className="w-full py-4 rounded-xl bg-[#173F4F] text-white font-bold text-base hover:bg-[#0E2934] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-sm vouch-btn"
                        >
                          <Check className="w-5 h-5 text-[#C45B3C]" />
                          <span>[ CONFIRM WORK ]</span>
                        </button>
                        <p className="text-[11px] text-center text-[#737A75]">
                          Tap the button above to simulate how a supervisor confirms your record with one touch.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-6 animate-fade-in-up">
                        <div className="bg-[#EDF4F0] p-6 rounded-xl border-2 border-[#3E6B52]/40 text-center">
                          <div className="w-12 h-12 rounded-full bg-[#3E6B52] text-white flex items-center justify-center mx-auto mb-3">
                            <Check className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3E6B52] block mb-1">
                            ✓ WORK CONFIRMED
                          </span>
                          <h4 className="font-display font-bold text-lg text-[#202322]">
                            Confirmed by ABC Electricals
                          </h4>
                          <p className="text-xs text-[#173F4F] font-mono mt-1">
                            Supervisor · Signed on 14 Sept 2026
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-xs pt-2">
                          <span className="text-[#3E6B52] font-bold">Evidence confidence updated to HIGH.</span>
                          <button
                            onClick={() => setConfirmedState('pending')}
                            className="text-[#737A75] hover:text-[#202322] underline font-mono"
                          >
                            Reset Demo
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 6: HOW YOUR PROFESSIONAL PASSPORT BENEFITS YOU
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                  HOW YOUR PASSPORT BENEFITS YOU · STEP 04
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-4">
                  YOUR LIFELONG PASSPORT.<br />
                  <span className="text-[#173F4F]">UNLOCK HIGHER PAY & RESPECT.</span>
                </h2>
                <p className="text-lg text-[#4A524D] leading-relaxed">
                  Your Vouch Passport unites your verified projects, on-site test evidence, and supervisor sign-offs into one credential. It gives contractors immediate clarity on your seniority so you get the pay you deserve.
                </p>
              </div>
            </ScrollReveal>

            {/* Large Vouch Professional Passport */}
            <ScrollReveal delay={120} variant="passport">
              <div className="bg-[#FFDFF7] rounded-3xl border-2 border-[#173F4F] shadow-2xl p-6 sm:p-10 relative overflow-hidden">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-[#E2DDD2] gap-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#173F4F] shadow-sm shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&auto=format&fit=crop&q=80"
                        alt="Ravi Kumar portrait"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded bg-[#173F4F] text-white text-[10px] font-mono uppercase tracking-wider font-bold">
                          VOUCH PASSPORT
                        </span>
                        <span className="text-xs font-mono text-[#737A75]">ID: VOUCH-IN-8821</span>
                      </div>
                      <h3 className="font-display font-extrabold text-3xl text-[#202322]">
                        RAVI KUMAR
                      </h3>
                      <p className="text-sm text-[#4A524D] font-medium">
                        Electrician · 7 years experience · Mangaluru
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <Link
                      to="/passport/ravi-kumar-8821"
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#173F4F] text-white font-bold text-xs hover:bg-[#0E2934] transition-colors flex items-center justify-center space-x-2 shadow-sm vouch-btn"
                    >
                      <Share2 className="w-4 h-4 text-[#C45B3C]" />
                      <span>SHARE MY PASSPORT</span>
                    </Link>
                  </div>
                </div>

                {/* Passport Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-[#E2DDD2]">
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono uppercase text-[#737A75] block mb-1">WORK HISTORY</span>
                    <div className="font-display font-extrabold text-2xl text-[#202322]">12</div>
                    <span className="text-xs text-[#4A524D]">work records</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono uppercase text-[#737A75] block mb-1">EVIDENCE</span>
                    <div className="font-display font-extrabold text-2xl text-[#202322]">18</div>
                    <span className="text-xs text-[#4A524D]">evidence items</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono uppercase text-[#737A75] block mb-1">CONFIRMATIONS</span>
                    <div className="font-display font-extrabold text-2xl text-[#3E6B52]">8</div>
                    <span className="text-xs text-[#3E6B52] font-medium">confirmations</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono uppercase text-[#737A75] block mb-1">EXPERIENCE</span>
                    <div className="font-display font-extrabold text-2xl text-[#202322]">7 yrs</div>
                    <span className="text-xs text-[#4A524D]">verified trade time</span>
                  </div>
                </div>

                {/* Demonstrated Skills Breakdown */}
                <div className="pt-8 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-bold block">
                    DEMONSTRATED SKILLS & CONFIDENCE
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#202322] text-sm">Electrical Wiring</h4>
                        <span className="text-[10px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] px-2 py-0.5 rounded border border-[#3E6B52]/20">
                          HIGH CONFIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">
                        8 records · 12 photos · 3 confirmations
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#202322] text-sm">Panel Installation</h4>
                        <span className="text-[10px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] px-2 py-0.5 rounded border border-[#3E6B52]/20">
                          HIGH CONFIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">
                        6 records · 10 photos · 3 confirmations
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FFDFF7] border border-[#E2DDD2]">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-[#202322] text-sm">Troubleshooting</h4>
                        <span className="text-[10px] font-mono font-bold bg-[#EBE7DC] text-[#C45B3C] px-2 py-0.5 rounded border border-[#E2DDD2]">
                          BUILDING EVIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">
                        2 records · 3 photos · 1 confirmation
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ==================================================
            SECTION 7: PORTABILITY (One Identity, Every Job)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6] border-b border-[#E2DDD2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-3">
                  PORTABLE BETWEEN EMPLOYERS, PROJECTS & CITIES
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#202322] tracking-tight leading-[1.08] mb-4">
                  ONE IDENTITY.<br />
                  <span className="text-[#173F4F]">EVERY JOB.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  Your professional standing shouldn&apos;t reset to zero whenever a project wraps up, you shift contractors, or move to another city.
                </p>
              </div>
            </ScrollReveal>

            {/* Visual Portability Progression */}
            <ScrollReveal delay={120}>
              <div className="max-w-4xl mx-auto bg-[#FFDFF7] p-8 sm:p-12 rounded-3xl border-2 border-[#173F4F] shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
                  
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono font-bold text-[#737A75] block mb-1">PHASE 01</span>
                    <h4 className="font-bold text-sm text-[#202322]">Employer 01</h4>
                    <p className="text-[11px] text-[#737A75] mt-1">Industrial Wiring</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex justify-center text-[#173F4F] font-bold">
                    <ArrowRight className="w-5 h-5 text-[#C45B3C]" />
                  </div>

                  {/* Center Constant: Vouch Passport */}
                  <div className="p-6 rounded-2xl bg-[#173F4F] text-white shadow-md border-2 border-[#C45B3C]">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#C45B3C] block mb-1 font-bold">
                      PERMANENT ASSET
                    </span>
                    <h3 className="font-display font-extrabold text-base text-white">
                      VOUCH PASSPORT
                    </h3>
                    <p className="text-[11px] text-[#E2DDD2] mt-1">Follows the worker everywhere</p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex justify-center text-[#173F4F] font-bold">
                    <ArrowRight className="w-5 h-5 text-[#C45B3C]" />
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-[#FFDFF7] border border-[#E2DDD2]">
                    <span className="text-[10px] font-mono font-bold text-[#737A75] block mb-1">PHASE 02</span>
                    <h4 className="font-bold text-sm text-[#202322]">New Project / City</h4>
                    <p className="text-[11px] text-[#737A75] mt-1">Employer 02 & 03</p>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-[#E2DDD2] text-center">
                  <p className="text-sm text-[#4A524D] max-w-xl mx-auto">
                    When you walk onto a new jobsite or meet a new hiring contractor, your 7 years of evidence and supervisor confirmations speak for you on day one.
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ==================================================
            SECTION 8: FINAL WORKER CTA
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4F0E6]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <ScrollReveal delay={0}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#173F4F] font-bold block mb-4">
                100% FREE FOR TRADESPEOPLE
              </span>
              
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#202322] tracking-tight leading-[1.06] mb-6">
                YOUR CRAFT HAS REAL VALUE.<br />
                <span className="text-[#173F4F]">START YOUR WORKER PASSPORT.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-10 max-w-2xl mx-auto">
                Join skilled electricians, plumbers, carpenters, and technicians taking ownership of their work history. It takes just 3 minutes to build your permanent passport.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to={buildPassportHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-9 py-4 rounded-xl bg-[#173F4F] text-white font-bold text-base hover:bg-[#0E2934] active:scale-[0.98] transition-all shadow-md group vouch-btn"
                >
                  <span>BUILD YOUR PASSPORT</span>
                  <ArrowRight className="w-4 h-4 text-[#C45B3C] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl border border-[#E2DDD2] bg-white text-[#202322] hover:bg-[#F4F0E6] text-base font-medium transition-colors vouch-btn"
                >
                  <span>HOW VOUCH WORKS</span>
                  <ChevronRight className="w-4 h-4 text-[#737A75]" />
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default WorkersPage;
