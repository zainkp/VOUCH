import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { 
  ArrowRight, 
  ArrowDown, 
  ShieldCheck, 
  PlusCircle, 
  Paperclip, 
  CheckCheck, 
  QrCode, 
  Camera, 
  FileText, 
  UserCheck, 
  Share2,
  CheckCircle2,
  Smartphone
} from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      num: '01',
      stage: 'WORK',
      title: 'RECORD WHAT YOU ACTUALLY DID',
      tagline: 'Log jobs in minutes right from your phone.',
      description: 'Record project details when completing a residential, commercial, or industrial installation. Capture trade roles, exact location, materials installed, and quantitative metrics (e.g. 6 three-phase panels, 3BHK conduit wiring).',
      icon: <PlusCircle className="w-6 h-6 text-[#1E3B2B]" />,
      actionItems: [
        'Site name & district location',
        'Specific trade role (Lead Wireman, HVAC Specialist, Master Carpenter)',
        'Scope of work & quantitative delivery units'
      ],
      sample: 'Ravi logged: "Completed 3BHK residential conduit piping, distribution board wiring, earthing pit, and RCCB installation at Kadri Hills, Mangaluru."'
    },
    {
      num: '02',
      stage: 'EVIDENCE',
      title: 'ATTACH UNBIASED TECHNICAL PROOF',
      tagline: 'Photos, test certificates, and signed orders replace resumes.',
      description: 'Attach empirical evidence directly from the jobsite. Take high-resolution photos of conduit routing, megger soil earth resistance test readouts, pressure testing gauges, or physical delivery challans signed by client representatives.',
      icon: <Paperclip className="w-6 h-6 text-[#1E3B2B]" />,
      actionItems: [
        'Jobsite installation photos showing neat cable dressing & labeling',
        'Calibrated meter readings (e.g. Megger earth resistance < 2.0 ohms)',
        'Signed paper vouchers, inspection sign-off sheets, or municipal permits'
      ],
      sample: 'Attached: "Photo of Main LT distribution board" + "Earth resistance Megger readout: 1.84 Ω" + "Client inspection sign-off sheet".'
    },
    {
      num: '03',
      stage: 'CONFIRMATION',
      title: 'INDEPENDENT CONFIRMATION VIA LIGHTWEIGHT LINK',
      tagline: 'Supervisors and clients verify in 30 seconds with zero app installation.',
      description: 'Send a quick verification SMS or WhatsApp link to your site engineer, contractor, or customer. They inspect your photos and description and confirm with a single tap. Their legal name, verified role, and organization are recorded permanently.',
      icon: <CheckCheck className="w-6 h-6 text-[#1E3B2B]" />,
      actionItems: [
        'Works via simple WhatsApp/SMS browser link — no login needed for verifier',
        'Attribution of verifier role (Site Supervisor, Chief Engineer, Direct Builder)',
        'Written supervisor notes confirming adherence to electrical/building codes'
      ],
      sample: 'Mahesh Shetty (Site Supervisor, ABC Electricals) confirmed: "Clean cabling adhering strictly to safety code. Breakers verified under live load."'
    },
    {
      num: '04',
      stage: 'PASSPORT',
      title: 'PORTABLE PROFESSIONAL IDENTITY',
      tagline: 'A living credential that belongs to you forever.',
      description: 'Your logged work and confirmations mathematically calculate skill-specific confidence tiers. You receive a verified Professional Passport with an instant QR code that you can present to any prospective employer on day one.',
      icon: <QrCode className="w-6 h-6 text-[#1E3B2B]" />,
      actionItems: [
        'Skill-specific confidence ratings (HIGH CONFIDENCE, MEDIUM CONFIDENCE)',
        'Shareable web link and instant QR code for instant jobsite verification',
        'Lifelong ownership: independent of any past employer or broker'
      ],
      sample: 'Result: "VOUCH-IN-2026-8842 · Electrical Wiring HIGH CONFIDENCE (12 records · 17 items · 5 confirmations)".'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36">
        
        {/* How It Works Hero */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                <ShieldCheck className="w-4 h-4" />
                <span>THE VERIFICATION ENGINE</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                FROM WORK<br />
                <span className="text-[#1E3B2B]">TO PROOF.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
                How Vouch turns raw physical labor into a tamper-evident, portable professional identity through a transparent four-stage pipeline.
              </p>

              <div className="flex items-center space-x-4">
                <Link
                  to="/build-passport"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md"
                >
                  <span>Start Your Passport</span>
                  <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                </Link>
                <Link
                  to="/passport"
                  className="px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-sm font-semibold transition-colors"
                >
                  View Passport Structure →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Animated Flow Pipeline: WORK → EVIDENCE → CONFIRMATION → PASSPORT */}
        <section className="py-16 sm:py-24 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-2">
                THE 4-STAGE PIPELINE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614]">
                HOW EVIDENCE BECOMES IDENTITY
              </h2>
            </div>

            {/* Visual connecting pipeline bar */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-16">
              {stages.map((st, idx) => (
                <div
                  key={st.stage}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    activeStep === idx
                      ? 'bg-[#1E3B2B] text-white border-[#1E3B2B] shadow-lg ring-2 ring-[#1E3B2B]'
                      : 'bg-white hover:bg-gray-50 text-[#121614] border-[#E5E1D8]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      activeStep === idx ? 'bg-white/20 text-white' : 'bg-[#EFECE6] text-[#737A75]'
                    }`}>
                      {st.num}
                    </span>
                    <span className={`text-xs font-mono font-bold tracking-wider ${
                      activeStep === idx ? 'text-[#C27A38]' : 'text-[#737A75]'
                    }`}>
                      STAGE {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg tracking-tight">
                    {st.stage}
                  </h3>
                  <p className={`text-xs mt-1 leading-snug ${
                    activeStep === idx ? 'text-white/80' : 'text-[#737A75]'
                  }`}>
                    {st.tagline}
                  </p>
                </div>
              ))}
            </div>

            {/* Deep-Dive into the Active Stage */}
            <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] p-6 sm:p-12 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="w-9 h-9 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] shrink-0">
                      {stages[activeStep].icon}
                    </span>
                    <div>
                      <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block">
                        STAGE {stages[activeStep].num} · {stages[activeStep].stage}
                      </span>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614]">
                        {stages[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A524D] leading-relaxed mb-6 mt-4">
                    {stages[activeStep].description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono uppercase text-[#737A75] font-bold block">
                      KEY REQUIREMENTS:
                    </span>
                    {stages[activeStep].actionItems.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#121614]">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E1D8]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#737A75] font-bold block mb-2">
                    REAL-WORLD AUDIT RECORD
                  </span>
                  <div className="bg-white p-4 rounded-xl border border-[#E5E1D8] text-xs text-[#121614] leading-relaxed italic mb-4">
                    &quot;{stages[activeStep].sample}&quot;
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#1E3B2B]">
                    <span>STATUS: VERIFIED ON-SITE</span>
                    <span className="font-bold">✓ CODE COMPLIANT</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Sequential 4-Step Narrative Cards */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614]">
                STEP-BY-STEP BREAKDOWN
              </h2>
              <p className="text-sm text-[#737A75] mt-2">
                A transparent journey from initial job logging to portable passport verification.
              </p>
            </div>

            {stages.map((st, index) => (
              <div
                key={st.num}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] shadow-2xs flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EBF6EE] flex items-center justify-center font-display font-extrabold text-2xl text-[#1E3B2B] shrink-0">
                  {st.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-xs font-mono text-[#059669] font-bold mb-1">
                    <span>STAGE {index + 1}: {st.stage}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#121614] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-sm text-[#4A524D] leading-relaxed mb-4">
                    {st.description}
                  </p>
                  <div className="bg-[#FAF8F5] p-3 rounded-lg border border-[#E5E1D8] text-xs text-[#737A75] font-mono">
                    Example: {st.sample}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>

      <PublicFooter />
    </div>
  );
};

export default HowItWorksPage;
