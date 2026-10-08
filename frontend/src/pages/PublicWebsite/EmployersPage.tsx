import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  FileText, 
  UserCheck, 
  AlertOctagon, 
  ExternalLink,
  SlidersHorizontal,
  Bookmark,
  Building
} from 'lucide-react';

export const EmployersPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36">
        
        {/* Employers Hero Section */}
        <section className="py-12 sm:py-20 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EFECE6] text-[#C27A38] text-xs font-mono font-bold uppercase mb-6 border border-[#E5E1D8]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FOR CONTRACTORS & SITE DIRECTORS</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                  DON&apos;T JUST READ<br />
                  A RESUME.<br />
                  <span className="text-[#1E3B2B]">SEE THE PROOF.</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8 max-w-2xl">
                  Evaluate skilled technicians through the work they have actually done, photographic evidence, and sign-offs from respected site engineers — not inflated CVs or arbitrary star ratings.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contractor"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md"
                  >
                    <span>Launch Contractor Portal</span>
                    <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                  </Link>
                  <Link
                    to="/passport"
                    className="inline-flex items-center justify-center space-x-1.5 px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-base font-medium transition-colors"
                  >
                    <span>Inspect Sample Passport →</span>
                  </Link>
                </div>
              </div>

              {/* Documentary Jobsite Supervisor Image */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-xl bg-gray-100 aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?w=1000&auto=format&fit=crop&q=80"
                    alt="Jobsite project manager reviewing blueprints"
                    className="w-full h-full object-cover filter saturate-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/85 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-xs p-4 rounded-xl border border-[#E5E1D8]">
                    <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#1E3B2B] mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>ZERO COMMISION RECRUITMENT</span>
                    </div>
                    <p className="text-xs text-[#121614]">
                      &quot;We saved 4 weeks of commissioning rework by verifying technicians&apos; past insulation test readouts before sending them to live switchgear.&quot;
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The 6 Evaluation Pillars for Hirers (No Star Ratings / Leaderboards) */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                THE EMPIRICAL VERIFICATION STANDARD
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                HOW CONTRACTORS EVALUATE EVIDENCE.
              </h2>
              <p className="text-lg text-[#4A524D]">
                Vouch completely eliminates subjective star ratings and vanity leaderboards. Evaluation is strictly grounded in verifiable technical proof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Real Work History</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Review the exact projects completed, roles held (Lead, Specialist, Wireman), and chronological site timelines.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Attached Technical Evidence</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Inspect high-resolution jobsite photos, calibrated Megger test reports (&lt; 2.0 ohms), and client handover vouchers.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Skill-Specific Confidence</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Confidence levels (HIGH, MEDIUM, BUILDING) are computed strictly from verified job volume, not popularity scores.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Supervisor Confirmations</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Every confirmation includes the verifier&apos;s legal name, role (Site Engineer, Maintenance Manager), and contracting company.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <AlertOctagon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Customer Confirmations</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Direct sign-offs from residential and commercial clients confirming that installations operated under load without defects.
                </p>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-[#E5E1D8] shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] mb-4">
                  <Building className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-[#121614] mb-2">Direct Contractor Portal</h3>
                <p className="text-sm text-[#4A524D] leading-relaxed">
                  Filter candidates by specific competencies like 415V LT panels, VRF flaring, or commercial switchgear in your target district.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Realistic Worker Preview Section */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-2">
                CANDIDATE EVALUATION DEMONSTRATION
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614]">
                WHAT CONTRACTORS SEE BEFORE HIRING.
              </h2>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-xl p-6 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#E5E1D8] gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#1E3B2B] shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&auto=format&fit=crop&q=80"
                      alt="Ravi Kumar candidate"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#121614]">
                      Ravi Kumar
                    </h3>
                    <p className="text-xs text-[#737A75]">
                      Electrician · 7 years experience · Mangaluru / Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded bg-[#EBF6EE] text-[#059669] font-mono text-xs font-bold border border-[#059669]/20">
                    HIGH CONFIDENCE
                  </span>
                </div>
              </div>

              {/* Skills Breakdown */}
              <div className="my-6 space-y-3">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-sm text-[#121614]">Electrical Wiring</span>
                    <p className="text-xs text-[#737A75]">Residential Conduit & Main LT Distribution</p>
                  </div>
                  <div className="text-xs font-mono text-[#059669] font-semibold">
                    8 work records · 12 evidence items · 3 supervisor confirmations
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="font-bold text-sm text-[#121614]">Panel Installation</span>
                    <p className="text-xs text-[#737A75]">Three-Phase Power Panels & Changeover Switches</p>
                  </div>
                  <div className="text-xs font-mono text-[#059669] font-semibold">
                    6 work records · 10 evidence items · 3 supervisor confirmations
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#4A524D]">
                  Inspect full work photos, megger readings, and verifier telephone references.
                </span>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <Link
                    to="/passport"
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-[#E5E1D8] text-[#121614] hover:bg-gray-50 text-xs font-bold text-center transition-colors"
                  >
                    View Professional Passport
                  </Link>
                  <Link
                    to="/contractor"
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#1E3B2B] text-white hover:bg-[#14281D] text-xs font-bold text-center transition-colors"
                  >
                    Open Contractor Portal →
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

export default EmployersPage;
