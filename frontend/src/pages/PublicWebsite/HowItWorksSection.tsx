import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Paperclip, 
  CheckCheck, 
  QrCode, 
  ArrowRight, 
  ShieldCheck, 
  Check, 
  MapPin, 
  FileCheck2, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

interface StepData {
  num: string;
  stage: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  badge: string;
  accentColor: string;
}

export const HowItWorksSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const steps: StepData[] = [
    {
      num: '01',
      stage: 'WORK',
      title: '01 — WORK',
      tagline: "Record the work you've actually done.",
      description: "Log every completed project in minutes. Record your trade role, quantitative deliverables, jobsite location, and technical specifications.",
      icon: <PlusCircle className="w-5 h-5 text-[#1E3B2B]" />,
      badge: "LIVE FIELD LOG",
      accentColor: "#1E3B2B",
    },
    {
      num: '02',
      stage: 'EVIDENCE',
      title: '02 — EVIDENCE',
      tagline: 'Attach proof that supports your experience and skills.',
      description: 'Attach jobsite photos, Megger insulation test readouts, pressure test logs, or delivery challans. Empirical evidence replaces unverifiable claims.',
      icon: <Paperclip className="w-5 h-5 text-[#1E3B2B]" />,
      badge: "TECHNICAL AUDIT TRAIL",
      accentColor: "#1E3B2B",
    },
    {
      num: '03',
      stage: 'CONFIRMATION',
      title: '03 — CONFIRMATION',
      tagline: 'Let supervisors, employers, or customers confirm the work.',
      description: 'Send a lightweight verification link via SMS or WhatsApp. The site engineer or supervisor independently confirms your work with one tap — zero app install required.',
      icon: <CheckCheck className="w-5 h-5 text-[#1E3B2B]" />,
      badge: "INDEPENDENT SIGN-OFF",
      accentColor: "#1E3B2B",
    },
    {
      num: '04',
      stage: 'PASSPORT',
      title: '04 — PASSPORT',
      tagline: 'Build a portable professional identity backed by your work and evidence.',
      description: 'Your verified skills compile into a tamper-evident Professional Passport. Carry your permanent credential with instant QR verification to every jobsite.',
      icon: <QrCode className="w-5 h-5 text-[#1E3B2B]" />,
      badge: "PORTABLE CREDENTIAL",
      accentColor: "#1E3B2B",
    },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Track resize
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Track scroll
    const handleScroll = () => {
      if (!containerRef.current || isReducedMotion || window.innerWidth < 768) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(progress);

      // Determine active step based on progress thresholds
      if (progress < 0.22) {
        setActiveStep(0);
      } else if (progress < 0.48) {
        setActiveStep(1);
      } else if (progress < 0.74) {
        setActiveStep(2);
      } else {
        setActiveStep(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReducedMotion]);

  // Click-to-scroll to a specific step
  const scrollToStep = (index: number) => {
    setActiveStep(index);
    if (!containerRef.current || isReducedMotion || window.innerWidth < 768) return;

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = scrollTop + rect.top;
    const totalScroll = containerRef.current.offsetHeight - window.innerHeight;

    const stepFractions = [0.05, 0.35, 0.60, 0.88];
    const targetScrollY = containerTop + stepFractions[index] * totalScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  // Horizontal track translation for desktop
  const isDesktop = windowWidth >= 768;
  const cardWidth = Math.min(360, Math.max(300, windowWidth * 0.24));
  const gap = 32;
  const stepDistance = cardWidth + gap;

  // Calculate centered translateX so activeStep is prominently centered
  const centerOffset = (windowWidth / 2) - (cardWidth / 2) - (activeStep * stepDistance);

  return (
    <section 
      id="how-it-works"
      ref={containerRef}
      className={`relative bg-[#FAF8F5] text-[#121614] overflow-hidden ${
        isDesktop && !isReducedMotion ? 'min-h-[300vh]' : 'py-20 sm:py-28'
      }`}
      aria-label="How Vouch Works: Verification Pipeline"
    >
      {/* DESKTOP: STICKY STORYBOARD VIEW */}
      {isDesktop && !isReducedMotion ? (
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 lg:py-8 overflow-hidden select-none">
          
          {/* 1. Header with reference-inspired accent line & stage selector */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E1D8]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>02 / THE VERIFICATION PIPELINE</span>
                </p>
                <div className="relative inline-block">
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#121614] tracking-tight leading-tight">
                    HOW IT WORKS
                  </h2>
                  {/* Subtle accent line below heading inspired by reference screenshot */}
                  <div className="w-16 h-1 bg-[#1E3B2B] rounded-full mt-2" />
                </div>
              </div>

              {/* Interactive Stage Selector Bar */}
              <div 
                role="tablist"
                aria-label="How it works pipeline stages"
                className="flex items-center space-x-2 bg-[#F4EFEB] p-1.5 rounded-full border border-[#E5E1D8]"
              >
                {steps.map((st, idx) => (
                  <button
                    key={st.num}
                    role="tab"
                    aria-selected={activeStep === idx}
                    aria-label={`Step ${st.num}: ${st.stage}`}
                    onClick={() => scrollToStep(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold transition-all flex items-center space-x-1.5 ${
                      activeStep === idx
                        ? 'bg-[#1E3B2B] text-white shadow-xs'
                        : 'text-[#737A75] hover:text-[#121614] hover:bg-white/60'
                    }`}
                  >
                    <span className={activeStep === idx ? 'text-[#FAF8F5]' : 'text-[#737A75]'}>
                      {st.num}
                    </span>
                    <span>{st.stage}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Horizontal Storyboard Track (Landscape 4-step sequence) */}
          <div className="w-full overflow-hidden flex-1 flex items-center my-2">
            <div 
              className="flex items-stretch transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(${centerOffset}px)`,
                width: `${4 * stepDistance}px`,
              }}
            >
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;

                return (
                  <div
                    key={step.num}
                    onClick={() => scrollToStep(idx)}
                    style={{ width: `${cardWidth}px`, marginRight: `${gap}px` }}
                    className={`shrink-0 flex flex-col justify-between rounded-3xl p-5 sm:p-6 border transition-all duration-700 cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#1E3B2B] shadow-[0_16px_40px_rgba(30,59,43,0.12)] ring-2 ring-[#1E3B2B]/20 scale-100 opacity-100 z-20'
                        : 'bg-[#FAF8F5] border-[#E5E1D8] shadow-xs scale-[0.93] opacity-55 hover:opacity-85 z-10'
                    }`}
                  >
                    {/* Top: High-Fidelity Visual Card */}
                    <div className="w-full mb-4">
                      {idx === 0 && <WorkVisual active={isActive} />}
                      {idx === 1 && <EvidenceVisual active={isActive} />}
                      {idx === 2 && <ConfirmationVisual active={isActive} />}
                      {idx === 3 && <PassportVisual active={isActive} />}
                    </div>

                    {/* Middle: Sequence Number with Connecting Dashed Lines */}
                    <div className="relative flex items-center justify-center my-3 w-full">
                      {/* Connecting Line Left */}
                      <div 
                        className={`flex-1 h-0.5 border-t-2 border-dashed transition-colors duration-500 ${
                          idx === 0 
                            ? 'border-transparent' 
                            : isPast || isActive
                              ? 'border-[#1E3B2B]' 
                              : 'border-[#D5D1C8]'
                        }`} 
                      />

                      {/* Prominent Number Circle */}
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-black text-sm tracking-tight transition-all duration-500 shrink-0 mx-2 shadow-xs ${
                          isActive
                            ? 'bg-[#1E3B2B] text-white scale-110 ring-4 ring-[#1E3B2B]/15'
                            : isPast
                              ? 'bg-[#EBF6EE] text-[#059669] border border-[#059669]/30'
                              : 'bg-[#EFECE6] text-[#737A75] border border-[#E5E1D8]'
                        }`}
                      >
                        {isPast ? <Check className="w-5 h-5 stroke-[2.5]" /> : step.num}
                      </div>

                      {/* Connecting Line Right */}
                      <div 
                        className={`flex-1 h-0.5 border-t-2 border-dashed transition-colors duration-500 ${
                          idx === 3 
                            ? 'border-transparent' 
                            : isPast 
                              ? 'border-[#1E3B2B]' 
                              : 'border-[#D5D1C8]'
                        }`} 
                      />
                    </div>

                    {/* Bottom: Typography & Short Description */}
                    <div className="text-center pt-2">
                      <h3 className={`font-display font-black text-lg transition-colors ${
                        isActive ? 'text-[#121614]' : 'text-[#4A524D]'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs font-semibold mt-1 transition-colors leading-snug line-clamp-2 ${
                        isActive ? 'text-[#1E3B2B]' : 'text-[#737A75]'
                      }`}>
                        {step.tagline}
                      </p>
                      <p className={`text-[11px] mt-1.5 leading-relaxed line-clamp-2 transition-colors ${
                        isActive ? 'text-[#4A524D]' : 'text-[#8E9590]'
                      }`}>
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Bottom Progress Bar & Deep Dive Link */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full shrink-0">
            <div className="flex items-center justify-between pt-3 border-t border-[#E5E1D8] text-xs">
              <div className="flex items-center space-x-3">
                <span className="font-mono font-bold text-[#1E3B2B]">
                  STEP {steps[activeStep].num} OF 04
                </span>
                <span className="text-stone-300">|</span>
                <span className="font-mono text-[#737A75] uppercase tracking-wider hidden sm:inline">
                  {steps[activeStep].stage}
                </span>
              </div>

              {/* Progress bar line */}
              <div className="w-36 sm:w-56 h-1.5 bg-[#E5E1D8] rounded-full overflow-hidden mx-4">
                <div 
                  className="h-full bg-[#1E3B2B] transition-all duration-500 rounded-full"
                  style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                />
              </div>

              <Link
                to="/how-it-works"
                className="inline-flex items-center space-x-1.5 font-mono font-bold text-[#1E3B2B] hover:text-[#14281D] hover:underline"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C27A38]" />
              </Link>
            </div>
          </div>

        </div>
      ) : (
        /* MOBILE & REDUCED MOTION VIEW: CLEAN VERTICAL STORYBOARD STACK */
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold mb-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>02 / THE VERIFICATION PIPELINE</span>
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614] tracking-tight mb-2">
              HOW IT WORKS
            </h2>
            <div className="w-12 h-1 bg-[#1E3B2B] rounded-full mx-auto mb-4" />
            <p className="text-sm text-[#4A524D] max-w-md mx-auto leading-relaxed">
              Four steps that turn physical labor into a tamper-evident, portable professional identity.
            </p>
          </div>

          {/* Vertical Stack */}
          <ol className="space-y-8 relative">
            {steps.map((st, i) => (
              <li 
                key={st.num}
                className="bg-white rounded-3xl p-5 sm:p-7 border border-[#E5E1D8] shadow-sm relative flex flex-col space-y-4"
              >
                {/* Step Header with Circle & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#1E3B2B] text-white font-display font-black text-sm flex items-center justify-center shadow-xs">
                      {st.num}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-[#121614]">
                        {st.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#1E3B2B]">
                        {st.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2.5 py-1 rounded-full border border-[#059669]/20">
                    {st.badge}
                  </span>
                </div>

                {/* Visual Area */}
                <div className="w-full">
                  {i === 0 && <WorkVisual active={true} />}
                  {i === 1 && <EvidenceVisual active={true} />}
                  {i === 2 && <ConfirmationVisual active={true} />}
                  {i === 3 && <PassportVisual active={true} />}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4A524D] leading-relaxed pt-1 border-t border-[#ECE8E0]">
                  {st.description}
                </p>

                {/* Connecting Line to next step if not last */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-4 border-l-2 border-dashed border-[#1E3B2B]" />
                )}
              </li>
            ))}
          </ol>

          {/* Deep Dive Link */}
          <div className="mt-12 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono font-bold text-[#1E3B2B] hover:bg-[#FAF8F5] transition-colors shadow-2xs"
            >
              <span>DEEP DIVE: READ FULL SPECIFICATION</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C27A38]" />
            </Link>
          </div>

        </div>
      )}
    </section>
  );
};

/* =========================================================================
   SUB-VISUALS: HIGH-FIDELITY STEP MOCKUPS
   Clean, authentic editorial UI cards matching the Vouch aesthetic
========================================================================= */

const WorkVisual: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="w-full h-48 sm:h-52 bg-[#F8F6F1] rounded-2xl p-3 sm:p-3.5 border border-[#E5E1D8] flex flex-col justify-between text-left overflow-hidden shadow-2xs">
    {/* Mock Mobile App Top Bar */}
    <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
      <div className="flex items-center space-x-1.5">
        <Smartphone className="w-3.5 h-3.5 text-[#1E3B2B]" />
        <span className="text-[10px] font-mono font-bold text-[#1E3B2B] uppercase">VOUCH · FIELD LOG</span>
      </div>
      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
        ● LIVE LOG
      </span>
    </div>

    {/* Log Entry Body */}
    <div className="bg-white p-2.5 rounded-xl border border-[#E5E1D8] space-y-1.5 shadow-xs">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#121614]">Ravi Kumar</span>
        <span className="text-[9px] font-mono text-[#059669] font-bold bg-[#EBF6EE] px-1 rounded">Lead Wireman</span>
      </div>
      <p className="text-[10px] text-[#4A524D] font-medium leading-tight line-clamp-1">
        High-Pressure Steam Conduit Installation
      </p>
      <div className="text-[9px] font-mono text-[#737A75] flex items-center gap-1">
        <MapPin className="w-2.5 h-2.5 text-[#C27A38]" />
        <span>Dahej Berth 4 · 400m SS-316L Conduit</span>
      </div>
    </div>

    {/* CTA Indicator */}
    <div className="flex items-center justify-between text-[9px] font-mono text-[#1E3B2B] pt-1">
      <span className="text-[#059669] font-bold">✓ Scope Saved</span>
      <span className="underline font-bold">+ Attach Evidence →</span>
    </div>
  </div>
);

const EvidenceVisual: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="w-full h-48 sm:h-52 bg-[#F8F6F1] rounded-2xl p-3 sm:p-3.5 border border-[#E5E1D8] flex flex-col justify-between text-left overflow-hidden shadow-2xs">
    {/* Technical Proof Header */}
    <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
      <div className="flex items-center space-x-1.5">
        <FileCheck2 className="w-3.5 h-3.5 text-[#1E3B2B]" />
        <span className="text-[10px] font-mono font-bold text-[#1E3B2B] uppercase">EMPIRICAL PROOF</span>
      </div>
      <span className="text-[9px] font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold border border-blue-200">
        3 ARTIFACTS
      </span>
    </div>

    {/* Evidence Readings Box */}
    <div className="grid grid-cols-2 gap-1.5">
      <div className="bg-white p-2 rounded-xl border border-[#E5E1D8]">
        <span className="text-[9px] font-mono text-[#737A75] block">MEGGER TEST</span>
        <span className="text-xs font-mono font-bold text-[#1E3B2B]">1.84 Ω</span>
        <span className="text-[8px] text-emerald-700 font-bold block">✓ Code &lt; 2.0Ω</span>
      </div>
      <div className="bg-white p-2 rounded-xl border border-[#E5E1D8]">
        <span className="text-[9px] font-mono text-[#737A75] block">PRESSURE</span>
        <span className="text-xs font-mono font-bold text-[#1E3B2B]">42.0 Bar</span>
        <span className="text-[8px] text-emerald-700 font-bold block">✓ Hydrostatic OK</span>
      </div>
    </div>

    {/* Geotag & Metadata */}
    <div className="bg-white p-1.5 rounded-lg border border-[#E5E1D8] text-[9px] font-mono text-[#737A75] flex items-center justify-between">
      <span>📍 21.7051° N, 72.5932° E</span>
      <span className="text-[#1E3B2B] font-bold">CALIBRATED</span>
    </div>
  </div>
);

const ConfirmationVisual: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="w-full h-48 sm:h-52 bg-[#F8F6F1] rounded-2xl p-3 sm:p-3.5 border border-[#E5E1D8] flex flex-col justify-between text-left overflow-hidden shadow-2xs">
    {/* Verifier Header */}
    <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
      <div className="flex items-center space-x-1.5">
        <CheckCheck className="w-3.5 h-3.5 text-[#059669]" />
        <span className="text-[10px] font-mono font-bold text-[#1E3B2B] uppercase">SUPERVISOR SIGN-OFF</span>
      </div>
      <span className="text-[9px] font-mono bg-emerald-50 text-emerald-800 px-1.5 py-0.5 rounded font-bold border border-emerald-200">
        WHATSAPP/SMS
      </span>
    </div>

    {/* Verifier Quote & Role */}
    <div className="bg-white p-2.5 rounded-xl border border-[#E5E1D8] space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-bold text-[#121614]">Arjun Verma</span>
        <span className="text-[9px] font-mono text-[#737A75]">Chief Quality Eng.</span>
      </div>
      <p className="text-[9px] text-[#4A524D] italic leading-tight line-clamp-2">
        &quot;Live load testing witnessed and certified adhering strictly to safety standards.&quot;
      </p>
    </div>

    {/* Provenance Hash */}
    <div className="flex items-center justify-between text-[9px] font-mono pt-1 text-[#059669] font-bold">
      <span>✓ VERIFIED ON-SITE</span>
      <span className="text-[#737A75] font-normal">SHA-256 HASHED</span>
    </div>
  </div>
);

const PassportVisual: React.FC<{ active: boolean }> = ({ active }) => (
  <div className="w-full h-48 sm:h-52 bg-[#F8F6F1] rounded-2xl p-3 sm:p-3.5 border border-[#E5E1D8] flex flex-col justify-between text-left overflow-hidden shadow-2xs">
    {/* Passport Header */}
    <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
      <div className="flex items-center space-x-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#1E3B2B]" />
        <span className="text-[10px] font-mono font-bold text-[#1E3B2B] uppercase">VOUCH PASSPORT</span>
      </div>
      <span className="text-[9px] font-mono font-bold text-[#C27A38]">
        VOUCH-IN-2026-8842
      </span>
    </div>

    {/* Worker Credential Body */}
    <div className="bg-white p-2.5 rounded-xl border border-[#E5E1D8] space-y-1.5 shadow-xs">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#121614]">Ravi Kumar</span>
        <span className="text-[9px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-1.5 py-0.5 rounded">
          94% CONFIDENCE
        </span>
      </div>
      <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
        <div className="bg-[#059669] h-full w-[94%] rounded-full" />
      </div>
      <div className="flex items-center justify-between text-[8px] font-mono text-[#737A75]">
        <span>Pipefitting · TIG Welding</span>
        <span>12 Records · 5 Vouches</span>
      </div>
    </div>

    {/* Portable & QR scan */}
    <div className="flex items-center justify-between text-[9px] font-mono text-[#1E3B2B] pt-1">
      <span className="font-bold text-[#059669]">● PORTABLE CREDENTIAL</span>
      <span className="font-bold underline flex items-center gap-1">
        <QrCode className="w-3 h-3 text-[#1E3B2B]" />
        SCAN READY
      </span>
    </div>
  </div>
);

export default HowItWorksSection;
