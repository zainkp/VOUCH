import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  Bookmark, 
  CheckCircle2, 
  ExternalLink,
  Briefcase
} from 'lucide-react';

export const EmployerSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="employers" className="py-20 sm:py-28 lg:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-widest text-[#C27A38] font-bold mb-3">
              06 / CONTRACTOR & HIRER EVALUATION
            </p>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#121614] tracking-tight leading-[1.08] mb-6">
              DON&apos;T JUST READ<br />
              A RESUME.<br />
              <span className="text-[#1E3B2B]">SEE THE PROOF.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8">
              Discover skilled workers through the work they&apos;ve actually done — and the people who can confirm it.
            </p>

            {/* Evidence Evaluation Highlights (NOT A Job Board) */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#121614]">Search by specific trade tasks</h3>
                  <p className="text-xs text-[#737A75] mt-0.5">Filter by demonstrated capabilities like 415V LT panels, VRF copper piping, or multi-story formwork.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#121614]">Review raw on-site proof</h3>
                  <p className="text-xs text-[#737A75] mt-0.5">Inspect timestamped jobsite photos, megger test certificates, and physical work order sheets.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-6 h-6 rounded-md bg-[#EBF6EE] flex items-center justify-center shrink-0 text-[#059669] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#121614]">Direct peer confirmations</h3>
                  <p className="text-xs text-[#737A75] mt-0.5">See sign-offs from respected site supervisors and builders with known company affiliations.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/employers"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-sm"
              >
                <span>Employer Verification Model</span>
                <ArrowRight className="w-4 h-4 text-[#C27A38]" />
              </Link>
              <Link
                to="/contractor"
                className="inline-flex items-center space-x-2 px-6 py-4 rounded-xl bg-white border border-[#E5E1D8] text-[#121614] hover:bg-[#FAF8F5] text-sm font-semibold transition-colors"
              >
                <span>Explore Worker Directory →</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Contractor Evaluation Terminal Preview */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-[#E5E1D8] shadow-[0_20px_50px_rgba(18,22,20,0.08)]">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-5">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#121614]">
                  <Briefcase className="w-4 h-4 text-[#1E3B2B]" />
                  <span>CONTRACTOR EVIDENCE PORTAL</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#EFECE6] text-[#4A524D]">
                  FILTER: ELECTRICIAN
                </span>
              </div>

              {/* Search Bar Simulation */}
              <div className="flex items-center space-x-2 bg-white px-3.5 py-2.5 rounded-xl border border-[#E5E1D8] mb-5 text-xs text-[#737A75]">
                <Search className="w-4 h-4 text-[#737A75]" />
                <span className="text-[#121614] font-medium">Distribution Board · 5+ yrs experience</span>
                <div className="ml-auto flex items-center space-x-1.5 text-[11px] font-mono text-[#1E3B2B]">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Active Filters (2)</span>
                </div>
              </div>

              {/* Verified Worker Evaluation Card (Routes to /passport) */}
              <div 
                onClick={() => navigate('/passport')}
                className="bg-white rounded-2xl p-5 border border-[#E5E1D8] hover:border-[#1E3B2B] transition-all cursor-pointer shadow-xs group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5E1D8] bg-gray-100 shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&auto=format&fit=crop&q=80"
                        alt="Ravi Kumar candidate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-display font-bold text-base text-[#121614]">
                          Ravi Kumar
                        </h4>
                        <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                      </div>
                      <p className="text-xs text-[#4A524D] mt-0.5">
                        Electrician · 7 years · Mangaluru / Mumbai
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); navigate('/contractor'); }}
                    className="p-2 text-[#737A75] hover:text-[#1E3B2B] transition-colors" 
                    title="Open in Contractor Portal"
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                {/* Evidence Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-[#FAF8F5] p-3 rounded-xl border border-[#ECE8E0] text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Skill Confidence</span>
                    <span className="font-bold text-[#059669] flex items-center space-x-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>HIGH CONFIDENCE</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Audit Proof</span>
                    <span className="font-semibold text-[#121614] block mt-0.5">
                      8 records · 3 confirmations
                    </span>
                  </div>
                </div>

                {/* Verified Trades Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EBF6EE] text-[#1E3B2B] border border-[#059669]/20 font-medium">
                    LT Power Panels
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EBF6EE] text-[#1E3B2B] border border-[#059669]/20 font-medium">
                    Earth Resistance &lt; 2Ω
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#FAF8F5] text-[#4A524D] border border-[#E5E1D8]">
                    3-Phase Motor Rewind
                  </span>
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between pt-3 border-t border-[#ECE8E0] text-xs font-semibold text-[#1E3B2B]">
                  <span className="group-hover:underline">View Passport & Evidence Audit</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

              {/* Second Worker Summary Simulation */}
              <div 
                onClick={() => navigate('/contractor')}
                className="mt-3 bg-white/70 hover:bg-white rounded-xl p-3.5 border border-[#E5E1D8] flex items-center justify-between text-xs cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center font-bold text-[#1E3B2B]">
                    SM
                  </div>
                  <div>
                    <span className="font-bold text-[#121614] block">Suresh M.</span>
                    <span className="text-[11px] text-[#737A75]">Industrial HVAC Technician · 5 records verified</span>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-[#059669] font-bold">HIGH CONFIDENCE</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
