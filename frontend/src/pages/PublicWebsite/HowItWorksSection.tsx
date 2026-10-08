import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Paperclip, CheckCheck, QrCode, ArrowRight, ShieldCheck } from 'lucide-react';

interface Step {
  num: string;
  stage: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  detail: string[];
}

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      num: '01',
      stage: 'WORK',
      title: 'ADD YOUR WORK',
      tagline: 'Record what you have actually done.',
      description: 'Log your completed project in minutes. Record the site location, your trade role, quantity of work, and specific technical specifications.',
      icon: <PlusCircle className="w-6 h-6 text-[#1E3B2B]" />,
      detail: ['Project scope & location', 'Trade role (Lead, Specialist)', 'Direct materials and specifications'],
    },
    {
      num: '02',
      stage: 'EVIDENCE',
      title: 'BUILD THE EVIDENCE',
      tagline: 'Attach photos, documents, work records and other proof.',
      description: 'Photos of clean wiring runs, megger insulation test readouts, signed challans, or municipal permits. Empirical proof replaces empty claims.',
      icon: <Paperclip className="w-6 h-6 text-[#1E3B2B]" />,
      detail: ['Site installation photos', 'Inspection & test sheets', 'Official jobsite vouchers'],
    },
    {
      num: '03',
      stage: 'CONFIRMATION',
      title: 'GET IT CONFIRMED',
      tagline: 'Employers, supervisors or customers independently confirm.',
      description: 'Send a lightweight verification link via SMS or WhatsApp. The site engineer or supervisor confirms the work quality with one tap — no app install needed.',
      icon: <CheckCheck className="w-6 h-6 text-[#1E3B2B]" />,
      detail: ['One-tap supervisor confirmation', 'Verifier role & company attribution', 'Written technical notes'],
    },
    {
      num: '04',
      stage: 'PASSPORT',
      title: 'CARRY YOUR PASSPORT',
      tagline: 'Share your professional identity with your next employer.',
      description: 'Your verified skills compile into a tamper-evident Professional Passport. Show your QR code or share your link to prove your caliber before setting foot on site.',
      icon: <QrCode className="w-6 h-6 text-[#1E3B2B]" />,
      detail: ['Evidence-calculated skill confidence', 'Instant QR code scan for contractors', 'Worker owns the credentials permanently'],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold mb-3">
            02 / THE VERIFICATION PIPELINE
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
            FROM WORK<br />
            TO PROOF.
          </h2>
          <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
            Four simple steps that turn everyday trade labor into an undeniable, portable asset that stays with you forever.
          </p>
        </div>

        {/* PRIMARY VISUAL CONNECTING PIPELINE: WORK → EVIDENCE → CONFIRMATION → PASSPORT */}
        <div className="mb-14 sm:mb-16 bg-[#F4EFEB] rounded-2xl p-4 sm:p-6 border border-[#E5E1D8]">
          <p className="text-xs font-mono uppercase tracking-wider text-[#737A75] mb-4 text-center sm:text-left">
            THE CORE VOUCH ENGINE:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 sm:gap-2 relative">
            {steps.map((s, index) => (
              <div 
                key={s.stage}
                onClick={() => setActiveStep(index)}
                className={`relative flex items-center p-3 sm:p-4 rounded-xl cursor-pointer transition-all ${
                  activeStep === index
                    ? 'bg-[#1E3B2B] text-white shadow-md'
                    : 'bg-white hover:bg-[#FAF8F5] text-[#121614] border border-[#E5E1D8]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2.5">
                    <span className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                      activeStep === index ? 'bg-white/20 text-[#FAF8F5]' : 'bg-[#EFECE6] text-[#737A75]'
                    }`}>
                      {s.num}
                    </span>
                    <span className="text-xs sm:text-sm font-bold tracking-wider font-mono">
                      {s.stage}
                    </span>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className={`hidden sm:block w-4 h-4 ml-auto ${
                      activeStep === index ? 'text-[#C27A38]' : 'text-[#737A75]'
                    }`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Sequential Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              onMouseEnter={() => setActiveStep(idx)}
              className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                activeStep === idx
                  ? 'border-[#1E3B2B] bg-[#FAF8F5] shadow-[0_12px_28px_rgba(30,59,43,0.09)] ring-1 ring-[#1E3B2B]'
                  : 'border-[#E5E1D8] bg-white hover:border-[#737A75]'
              }`}
            >
              <div>
                {/* Header with Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-display font-extrabold text-[#1E3B2B]/40">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="font-display font-bold text-lg text-[#121614] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-[#1E3B2B] mb-3">
                  {step.tagline}
                </p>
                <p className="text-sm text-[#4A524D] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Technical Points */}
              <div className="pt-4 border-t border-[#ECE8E0] space-y-1.5">
                {step.detail.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center space-x-2 text-xs text-[#737A75]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3B2B]"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Callout */}
        <div className="mt-12 sm:mt-16 p-6 rounded-xl bg-[#EFECE6] border border-[#E5E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-[#1E3B2B] shrink-0" />
            <div>
              <p className="text-sm font-bold text-[#121614]">
                Tamper-Resistant & Worker-Owned
              </p>
              <p className="text-xs text-[#4A524D]">
                Confirmations are cryptographically tied to verifier contact handles. No employer can delete your past records or hold your passport hostage.
              </p>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs text-[#1E3B2B] font-semibold bg-white px-3 py-1.5 rounded-md border border-[#E5E1D8]">
            VERIFIED AUDIT TRAIL
          </div>
        </div>

        {/* Dedicated Page Link */}
        <div className="mt-8 text-center">
          <Link
            to="/how-it-works"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono font-bold text-[#1E3B2B] hover:bg-[#FAF8F5] transition-colors shadow-2xs"
          >
            <span>DEEP DIVE: READ FULL ENGINE SPECIFICATION</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C27A38]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
