import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { ScrollReveal } from '../../components/ScrollReveal';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  User, 
  Briefcase, 
  MapPin, 
  Layers, 
  Camera, 
  CheckCheck, 
  FileCheck,
  Sparkles
} from 'lucide-react';

export const BuildPassportPage: React.FC = () => {
  const { worker, addWorkRecord, setActiveRole } = useApp();
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [name, setName] = useState('Ravi Kumar');
  const [trade, setTrade] = useState('Electrician');
  const [experienceYears, setExperienceYears] = useState('7');
  const [location, setLocation] = useState('Mangaluru, Karnataka');
  const [languages, setLanguages] = useState('Hindi, Kannada, English');

  // Selected Skills
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Electrical Wiring',
    'Panel Installation',
  ]);

  // First Work Record
  const [workTitle, setWorkTitle] = useState('3BHK Residential Conduit & Distribution Board');
  const [employer, setEmployer] = useState('ABC Electricals (Contractor)');
  const [role, setRole] = useState('Lead Electrician');
  const [workDescription, setWorkDescription] = useState('Completed conduit wiring, earthing pits, RCCB breakers, and load distribution testing.');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80');
  const [verifierName, setVerifierName] = useState('Mahesh Shetty');
  const [verifierRole, setVerifierRole] = useState('Site Supervisor');

  const availableTrades = [
    'Electrician',
    'Plumber',
    'Carpenter',
    'Mechanic',
    'Welder & Fabricator',
    'HVAC Technician',
    'Heavy Equipment Operator',
    'Construction Mason',
    'Painter & Finisher',
  ];

  const skillOptionsByTrade: Record<string, string[]> = {
    Electrician: [
      'Electrical Wiring',
      'Panel Installation',
      'AC Feeds & Isolators',
      'Motor Rewind & Repair',
      'Earthing & Megger Testing',
      'LT Switchgear Commissioning',
    ],
    Plumber: [
      'CPVC Line Piping',
      'Pressure Testing',
      'Sanitary Fixtures',
      'Drainage Grading',
      'Solar Water Heaters',
    ],
    default: [
      'Site Safety Compliance',
      'Material Handling',
      'Blueprint Reading',
      'Quality Inspection',
    ]
  };

  const currentTradeSkills = skillOptionsByTrade[trade] || skillOptionsByTrade['default'];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleFinishOnboarding = () => {
    // Add the first work record using AppContext engine
    addWorkRecord({
      title: workTitle,
      employer,
      role,
      description: workDescription,
      location,
      imageUrl: photoUrl,
      skills: selectedSkills,
    });

    setActiveRole('worker');
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 animate-page-enter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <ScrollReveal delay={0}>
            {/* Progress Indicator */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-xs font-mono text-[#737A75] mb-2">
                <span className="font-bold text-[#1E3B2B]">PASSPORT ONBOARDING</span>
                <span>STEP {step} OF 4</span>
              </div>
              <div className="w-full h-1.5 bg-[#E5E1D8] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1E3B2B] transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E1D8] shadow-[0_20px_50px_rgba(18,22,20,0.06)]">
            
            {/* STEP 1: Basic Information */}
            {step === 1 && (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                    STEP 01 · PROFESSIONAL IDENTITY
                  </span>
                  <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614]">
                    START BUILDING YOUR PROFESSIONAL PASSPORT.
                  </h1>
                  <p className="text-sm text-[#4A524D] mt-2">
                    Enter your real trade identity. Your passport belongs to you and will accompany you across every future employer.
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ravi Kumar"
                      className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Primary Profession / Trade
                      </label>
                      <select
                        value={trade}
                        onChange={(e) => setTrade(e.target.value)}
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none bg-white"
                      >
                        {availableTrades.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Years of Trade Experience
                      </label>
                      <input
                        type="number"
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        min="1"
                        max="50"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Primary Work Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Mangaluru, Karnataka"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Languages Spoken On-Site
                      </label>
                      <input
                        type="text"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        placeholder="e.g. Hindi, Kannada, English"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE8E0] flex items-center justify-between">
                  <span className="text-xs text-[#737A75]">
                    Already registered? <Link to="/login" className="text-[#1E3B2B] font-bold underline">Log In</Link>
                  </span>
                  <button
                    onClick={() => setStep(2)}
                    className="px-7 py-3.5 rounded-xl bg-[#1E3B2B] text-white font-bold text-sm hover:bg-[#14281D] transition-colors flex items-center space-x-2 cursor-pointer shadow-sm vouch-btn"
                  >
                    <span>Next: Select Skills</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Demonstrated Skills Selection */}
            {step === 2 && (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                    STEP 02 · TRADE COMPETENCIES
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614]">
                    WHAT ARE YOUR CORE TRADE CAPABILITIES?
                  </h2>
                  <p className="text-sm text-[#4A524D] mt-2">
                    Select the specific skills you demonstrate on-site. You will anchor these skills with evidence in the next step.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentTradeSkills.map((sk) => {
                    const isSelected = selectedSkills.includes(sk);
                    return (
                      <div
                        key={sk}
                        onClick={() => toggleSkill(sk)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#1E3B2B] bg-[#EBF6EE] ring-1 ring-[#1E3B2B]'
                            : 'border-[#E5E1D8] hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-sm font-bold text-[#121614]">{sk}</span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          isSelected ? 'bg-[#1E3B2B] border-[#1E3B2B] text-white' : 'border-gray-300'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE8E0] flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="px-5 py-3 rounded-xl border border-[#E5E1D8] text-xs font-bold text-[#4A524D] hover:bg-gray-50 flex items-center space-x-1 cursor-pointer vouch-btn"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={selectedSkills.length === 0}
                    className="px-7 py-3.5 rounded-xl bg-[#1E3B2B] text-white font-bold text-sm hover:bg-[#14281D] disabled:opacity-50 transition-colors flex items-center space-x-2 cursor-pointer shadow-sm vouch-btn"
                  >
                    <span>Next: Add First Work Record</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Add First Work Record & Site Evidence */}
            {step === 3 && (
              <div>
                <div className="mb-8">
                  <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                    STEP 03 · YOUR FIRST VERIFIED WORK RECORD
                  </span>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614]">
                    ATTACH REAL WORK EVIDENCE
                  </h2>
                  <p className="text-sm text-[#4A524D] mt-2">
                    Enter a real project you completed. This anchors your passport with verified empirical proof.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                      Work Record Title
                    </label>
                    <input
                      type="text"
                      value={workTitle}
                      onChange={(e) => setWorkTitle(e.target.value)}
                      placeholder="e.g. 3BHK Conduit Wiring & Main Distribution Board"
                      className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Employer / Subcontractor Name
                      </label>
                      <input
                        type="text"
                        value={employer}
                        onChange={(e) => setEmployer(e.target.value)}
                        placeholder="e.g. ABC Electricals"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Your Role on the Jobsite
                      </label>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g. Lead Electrician"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                      Technical Description of Completed Tasks
                    </label>
                    <textarea
                      rows={3}
                      value={workDescription}
                      onChange={(e) => setWorkDescription(e.target.value)}
                      placeholder="Describe cable sizing, conduit routing, breaker amperage, or test procedures..."
                      className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-medium focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Site Supervisor / Verifier Name
                      </label>
                      <input
                        type="text"
                        value={verifierName}
                        onChange={(e) => setVerifierName(e.target.value)}
                        placeholder="e.g. Mahesh Shetty"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] block mb-1 font-semibold">
                        Verifier Role
                      </label>
                      <input
                        type="text"
                        value={verifierRole}
                        onChange={(e) => setVerifierRole(e.target.value)}
                        placeholder="e.g. Site Supervisor / Engineer"
                        className="w-full p-3.5 rounded-xl border border-[#E5E1D8] text-sm font-semibold focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#ECE8E0] flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="px-5 py-3 rounded-xl border border-[#E5E1D8] text-xs font-bold text-[#4A524D] hover:bg-gray-50 flex items-center space-x-1 cursor-pointer vouch-btn"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={handleFinishOnboarding}
                    className="px-8 py-3.5 rounded-xl bg-[#1E3B2B] text-white font-bold text-sm hover:bg-[#14281D] transition-colors flex items-center space-x-2 cursor-pointer shadow-md vouch-btn"
                  >
                    <span>Generate My Passport</span>
                    <Sparkles className="w-4 h-4 text-[#C27A38]" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Success Passport Generated */}
            {step === 4 && (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-2xl bg-[#EBF6EE] flex items-center justify-center text-[#059669] mx-auto mb-4 border border-[#059669]/20">
                  <ShieldCheck className="w-9 h-9" />
                </div>

                <span className="text-xs font-mono text-[#059669] font-bold uppercase tracking-wider block mb-1">
                  PASSPORT SUCCESSFULLY MINTED
                </span>

                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] mb-3">
                  WELCOME TO VOUCH, {name.toUpperCase()}!
                </h2>

                <p className="text-sm text-[#4A524D] max-w-md mx-auto leading-relaxed mb-8">
                  Your first work record has been recorded in your permanent ledger. You can now manage records, send confirmation links, and share your passport QR code.
                </p>

                {/* Passport Card Mini-Preview */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E5E1D8] max-w-md mx-auto mb-8 text-left">
                  <div className="flex items-center justify-between pb-3 border-b border-[#ECE8E0] mb-3">
                    <span className="text-xs font-mono font-bold text-[#1E3B2B]">
                      VOUCH-IN-2026-8842
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669]">
                      VERIFIED HOLDER
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#121614]">{name}</h3>
                  <p className="text-xs text-[#737A75]">{trade} · {experienceYears} Years Documented · {location}</p>
                  <div className="mt-3 text-xs font-mono text-[#1E3B2B] bg-white p-2 rounded border border-[#E5E1D8]">
                    1 Work Record Logged · {selectedSkills.join(', ')}
                  </div>
                </div>

                <button
                  onClick={() => navigate('/worker')}
                  className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#1E3B2B] text-white font-bold text-sm hover:bg-[#14281D] shadow-md inline-flex items-center justify-center space-x-2 cursor-pointer vouch-btn"
                >
                  <span>Enter Worker Application</span>
                  <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                </button>
              </div>
            )}

          </div>
          </ScrollReveal>

        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default BuildPassportPage;
