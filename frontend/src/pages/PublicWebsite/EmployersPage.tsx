import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { ScrollReveal } from '../../components/ScrollReveal';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Search, 
  FileText, 
  UserCheck, 
  Building2, 
  Camera, 
  Layers, 
  Bookmark, 
  ChevronRight, 
  Sparkles, 
  Check, 
  XCircle, 
  BookmarkCheck,
  FileCheck,
  MapPin,
  Clock,
  Eye
} from 'lucide-react';

interface WorkerCandidate {
  id: string;
  name: string;
  trade: string;
  experience: string;
  location: string;
  photoUrl: string;
  confidence: string;
  workRecordsCount: number;
  evidenceCount: number;
  confirmationsCount: number;
  skills: string[];
}

const CANDIDATE_DATABASE: WorkerCandidate[] = [
  {
    id: 'ravi-kumar-8821',
    name: 'Ravi Kumar',
    trade: 'Electrician',
    experience: '7 years experience',
    location: 'Mangaluru',
    photoUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&auto=format&fit=crop&q=80',
    confidence: 'HIGH CONFIDENCE',
    workRecordsCount: 8,
    evidenceCount: 12,
    confirmationsCount: 3,
    skills: ['Electrical Wiring', 'Panel Installation']
  },
  {
    id: 'imran-shaikh-4412',
    name: 'Imran Shaikh',
    trade: 'Plumber',
    experience: '6 years experience',
    location: 'Bengaluru',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    confidence: 'HIGH CONFIDENCE',
    workRecordsCount: 11,
    evidenceCount: 15,
    confirmationsCount: 4,
    skills: ['CPVC Piping', 'Hydrostatic Testing']
  },
  {
    id: 'anand-verma-9923',
    name: 'Anand Verma',
    trade: 'Industrial Welder',
    experience: '8 years experience',
    location: 'Chennai',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    confidence: 'HIGH CONFIDENCE',
    workRecordsCount: 9,
    evidenceCount: 14,
    confirmationsCount: 5,
    skills: ['TIG Welding', 'Structural Fabrication']
  }
];

export const EmployersPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTrade, setSelectedTrade] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedCandidates, setSavedCandidates] = useState<string[]>(['ravi-kumar-8821', 'imran-shaikh-4412']);
  const [activeEvidenceCategory, setActiveEvidenceCategory] = useState<'photo' | 'record' | 'confirmation'>('photo');

  const filteredCandidates = CANDIDATE_DATABASE.filter(c => {
    const matchesTrade = selectedTrade === 'All' || c.trade.toLowerCase().includes(selectedTrade.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      c.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrade && matchesSearch;
  });

  const toggleSaveCandidate = (id: string) => {
    if (savedCandidates.includes(id)) {
      setSavedCandidates(savedCandidates.filter(item => item !== id));
    } else {
      setSavedCandidates([...savedCandidates, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col selection:bg-[#EBF6EE] selection:text-[#1E3B2B]">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 animate-page-enter">
        
        {/* ==================================================
            SECTION 1: EMPLOYER HERO
            ================================================== */}
        <section className="py-12 sm:py-20 lg:py-24 border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7">
                <ScrollReveal delay={0}>
                  <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#EBF6EE] text-[#059669] text-xs font-mono font-bold uppercase mb-6 border border-[#059669]/20">
                    <ShieldCheck className="w-4 h-4 text-[#059669]" />
                    <span>FOR CONTRACTORS, HIRING MANAGERS & LABOUR LEADERS</span>
                  </div>

                  <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#121614] tracking-tight leading-[1.04] mb-6">
                    DON&apos;T JUST READ<br />
                    A RESUME.<br />
                    <span className="text-[#1E3B2B]">SEE THE PROOF.</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-8 max-w-2xl">
                    Find skilled workers through the work they&apos;ve actually done — supported by evidence and confirmations from the people they&apos;ve worked with.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={180}>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4">
                    <Link
                      to="/contractor"
                      className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-[#1E3B2B] text-white font-semibold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-sm group vouch-btn"
                    >
                      <span>EXPLORE WORKERS</span>
                      <ArrowRight className="w-4 h-4 text-[#C27A38] group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/how-it-works"
                      className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-base font-medium transition-colors vouch-btn"
                    >
                      <span>HOW IT WORKS</span>
                      <ChevronRight className="w-4 h-4 text-[#737A75]" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>

              {/* Documentary Jobsite Supervisor Image + Overlay Worker Preview */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={160}>
                  <div className="relative">
                    {/* Authentic contractor/supervisor reviewing jobsite quality */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#E5E1D8] shadow-xl bg-gray-100 aspect-[4/5] reveal-image-container">
                      <img
                        src="/images/supervisor-blueprints.jpg"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&auto=format&fit=crop&q=80';
                        }}
                        alt="Jobsite supervisor inspecting electrical engineering blueprints"
                        className="w-full h-full object-cover filter saturate-[0.95] reveal-image-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/85 via-[#121614]/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 rounded bg-[#121614]/80 text-[#FAF8F5] font-mono text-[10px] tracking-wider uppercase border border-white/10 backdrop-blur-xs">
                          CONTRACTOR EVALUATION
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>


        {/* ==================================================
            SECTION 2: THE PROBLEM (Editorial Contrast)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  THE HIRING BLINDSPOT
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-6">
                  A RESUME TELLS YOU WHAT SOMEONE SAYS.<br />
                  <span className="text-[#1E3B2B]">A PASSPORT SHOWS WHAT THEY&apos;VE DONE.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  Traditional hiring often depends on resumes, references and personal reputation. Vouch gives employers a clearer view of the work behind a worker&apos;s experience.
                </p>
              </div>
            </ScrollReveal>

            {/* Editorial Contrast: Traditional vs Vouch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Traditional */}
              <ScrollReveal delay={100}>
                <div className="bg-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#E5E1D8] relative overflow-hidden h-full">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E1D8]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E4545] flex items-center space-x-2">
                      <XCircle className="w-4 h-4 text-[#9E4545]" />
                      <span>TRADITIONAL RECRUITMENT</span>
                    </span>
                    <span className="text-xs text-[#737A75]">Unverifiable Claims</span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Inflated Resumes</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Keyword-stuffed CVs with unverifiable project titles that cannot tell you if a technician can actually wire a live 415V switchgear.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Biased References</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Phone references that are hard to reach, outdated, or provided by personal acquaintances rather than accountable site supervisors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF0F0] text-[#9E4545] flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Verbal Claims on Site</h4>
                        <p className="text-sm text-[#737A75] leading-relaxed">
                          Discovering skill mismatches only after sending a crew onto a live site — leading to expensive downtime, rework, and safety hazards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* VOUCH Standard */}
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#1E3B2B] shadow-lg relative overflow-hidden h-full">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E1D8]">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#059669] flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                      <span>THE VOUCH STANDARD</span>
                    </span>
                    <span className="text-xs font-bold text-[#1E3B2B]">Auditable Evidence</span>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Granular Work Records</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          Exact timeline of completed installations, technical scope, site locations, and specific role responsibilities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Photographic & Test Evidence</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          High-resolution images of physical work, conduit routing, panel termination, and signed Megger/pressure test certificates.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#121614] text-base mb-1">Independent Confirmations</h4>
                        <p className="text-sm text-[#4A524D] leading-relaxed">
                          Direct sign-offs from named site engineers, contractors, and project owners who observed the work under actual operating conditions.
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
            SECTION 3: DISCOVER WORKERS (Contractor Evaluation Tool)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  CANDIDATE DISCOVERY
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                  FIND PEOPLE<br />
                  <span className="text-[#1E3B2B]">BY WHAT THEY CAN DO.</span>
                </h2>
                <p className="text-lg text-[#4A524D]">
                  Evaluate candidates strictly by verified evidence and skill confidence — no vanity ratings, no applicant spam, and no commission fees.
                </p>
              </div>
            </ScrollReveal>

            {/* Realistic Contractor Search Interface */}
            <ScrollReveal delay={120}>
              <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-xl p-6 sm:p-8 mb-8">
                
                {/* Search & Filter Bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 pb-6 border-b border-[#E5E1D8]">
                  <div className="relative flex-1">
                    <Search className="w-5 h-5 text-[#737A75] absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by trade or skill (e.g. Electrician, Panel Installation, Bangalore)..."
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] text-sm text-[#121614] focus:outline-none focus:border-[#1E3B2B]"
                    />
                  </div>
                  
                  {/* Popular Trade Filter Tabs */}
                  <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
                    {['All', 'Electrician', 'Plumber', 'Welder'].map((trade) => (
                      <button
                        key={trade}
                        onClick={() => setSelectedTrade(trade)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 vouch-btn ${
                          selectedTrade === trade
                            ? 'bg-[#1E3B2B] text-white'
                            : 'bg-[#FAF8F5] text-[#4A524D] hover:bg-[#EFECE6] border border-[#E5E1D8]'
                        }`}
                      >
                        {trade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Worker Candidates List Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  {filteredCandidates.map((worker) => (
                    <div
                      key={worker.id}
                      className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E1D8] hover:border-[#1E3B2B] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Top Bar */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#1E3B2B] shrink-0">
                              <img
                                src={worker.photoUrl}
                                alt={worker.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-display font-extrabold text-lg text-[#121614]">
                                {worker.name}
                              </h4>
                              <p className="text-xs text-[#737A75]">
                                {worker.trade} · {worker.location}
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={() => toggleSaveCandidate(worker.id)}
                            className={`p-2 rounded-lg transition-colors vouch-btn ${
                              savedCandidates.includes(worker.id)
                                ? 'text-[#1E3B2B] bg-[#EBF6EE]'
                                : 'text-[#737A75] hover:bg-white'
                            }`}
                            title="Save to shortlist"
                          >
                            <Bookmark className="w-4 h-4" fill={savedCandidates.includes(worker.id) ? '#1E3B2B' : 'none'} />
                          </button>
                        </div>

                        {/* Confidence Tag & Evidence Footprint */}
                        <div className="mb-4">
                          <span className="px-2.5 py-1 rounded bg-[#EBF6EE] text-[#059669] font-mono text-[10px] font-bold border border-[#059669]/20 inline-block mb-2">
                            {worker.confidence}
                          </span>
                          <p className="text-xs font-mono text-[#4A524D]">
                            {worker.workRecordsCount} work records · {worker.confirmationsCount} confirmations
                          </p>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {worker.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 rounded bg-white text-[#121614] text-[11px] font-medium border border-[#E5E1D8]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link
                        to={`/passport/${worker.id}`}
                        className="w-full py-2.5 rounded-xl bg-white border border-[#E5E1D8] text-[#1E3B2B] hover:bg-[#1E3B2B] hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center space-x-1.5 vouch-btn"
                      >
                        <span>VIEW PASSPORT</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>

              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ==================================================
            SECTION 4: OPEN THE PASSPORT (Employer Deep View)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  TRANSPARENT INSPECTION
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                  SEE THE WORK<br />
                  <span className="text-[#1E3B2B]">BEHIND THE EXPERIENCE.</span>
                </h2>
                <p className="text-lg text-[#4A524D] leading-relaxed">
                  Open any worker&apos;s passport to audit real project histories, equipment test logs, and supervisor sign-offs before making hiring decisions.
                </p>
              </div>
            </ScrollReveal>

            {/* Large Worker Passport Preview for Hirers */}
            <ScrollReveal delay={120} variant="passport">
              <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-2xl p-6 sm:p-10">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-[#E5E1D8] gap-6">
                  <div className="flex items-center space-x-5">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#1E3B2B] shadow-sm shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&auto=format&fit=crop&q=80"
                        alt="Ravi Kumar candidate"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-3xl text-[#121614]">
                        RAVI KUMAR
                      </h3>
                      <p className="text-sm text-[#4A524D] font-medium">
                        Electrician · 7 years experience · Mangaluru / Mumbai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <Link
                      to="/passport/ravi-kumar-8821"
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#1E3B2B] text-white font-bold text-xs hover:bg-[#14281D] transition-colors flex items-center justify-center space-x-2 shadow-sm vouch-btn"
                    >
                      <span>VIEW EVIDENCE</span>
                      <ArrowRight className="w-4 h-4 text-[#C27A38]" />
                    </Link>
                  </div>
                </div>

                {/* Skills Breakdown */}
                <div className="py-8 border-b border-[#E5E1D8]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-bold block mb-4">
                    VERIFIED SKILL PORTFOLIO
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#121614]">Electrical Wiring</span>
                        <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded">
                          HIGH CONFIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">8 records · 12 evidence · 3 confirmations</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#121614]">Panel Installation</span>
                        <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded">
                          HIGH CONFIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">6 records · 10 evidence · 3 confirmations</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-[#121614]">Troubleshooting</span>
                        <span className="text-[10px] font-mono font-bold bg-[#EFECE6] text-[#C27A38] px-2 py-0.5 rounded">
                          BUILDING EVIDENCE
                        </span>
                      </div>
                      <p className="text-xs text-[#737A75]">2 records · 3 evidence · 1 confirmation</p>
                    </div>
                  </div>
                </div>

                {/* Work History & Confirmations Timeline */}
                <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-bold block mb-3">
                      WORK HISTORY TIMELINE
                    </span>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                        <h5 className="font-bold text-sm text-[#121614]">Commercial Electrical Installation</h5>
                        <p className="text-xs text-[#4A524D]">ABC Electricals · 2024–2026</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8]">
                        <h5 className="font-bold text-sm text-[#121614]">Residential Wiring</h5>
                        <p className="text-xs text-[#4A524D]">Independent Contractor · 2022–2024</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-bold block mb-3">
                      AUDITED CONFIRMATIONS
                    </span>
                    <div className="space-y-3">
                      <div className="p-4 rounded-xl bg-[#EBF6EE] border border-[#059669]/20">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#1E3B2B]">3 Supervisor Confirmations</span>
                          <Check className="w-4 h-4 text-[#059669]" />
                        </div>
                        <p className="text-[11px] text-[#4A524D] mt-1">Confirmed by Site Engineers at ABC Electricals & Coastal Power</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#EBF6EE] border border-[#059669]/20">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-[#1E3B2B]">1 Customer Confirmation</span>
                          <Check className="w-4 h-4 text-[#059669]" />
                        </div>
                        <p className="text-[11px] text-[#4A524D] mt-1">Confirmed by Residential Property Manager (Mangaluru)</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ==================================================
            SECTION 5: EVIDENCE (Every Confidence Has a Reason)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  THE EVIDENCE STANDARD
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-6">
                  EVERY CONFIDENCE<br />
                  <span className="text-[#1E3B2B]">HAS A REASON.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  Vouch doesn&apos;t ask employers to trust an arbitrary rating. It lets them see the evidence behind a worker&apos;s demonstrated skills.
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive Evidence Breakdown Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Evidence Category Selector & Reveal */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={100}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#1E3B2B] shadow-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-6">
                      <div>
                        <h3 className="font-display font-extrabold text-xl text-[#121614]">
                          Electrical Wiring
                        </h3>
                        <span className="text-xs font-mono text-[#059669] font-bold">
                          HIGH CONFIDENCE
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#EBF6EE] text-[#059669] font-bold">
                        VERIFIED EVIDENCE
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs bg-[#FAF8F5] p-4 rounded-xl border border-[#E5E1D8] mb-6">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
                        <span className="text-[#4A524D]">Logged Records:</span>
                        <span className="font-bold text-[#121614]">8 work records</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
                        <span className="text-[#4A524D]">Attached Artifacts:</span>
                        <span className="font-bold text-[#121614]">12 evidence items</span>
                      </div>
                      <div className="flex items-center justify-between pb-2 border-b border-[#E5E1D8]">
                        <span className="text-[#4A524D]">Supervisor Confirmations:</span>
                        <span className="font-bold text-[#059669]">3 sign-offs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#4A524D]">Customer Confirmations:</span>
                        <span className="font-bold text-[#059669]">1 sign-off</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setActiveEvidenceCategory('photo')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors vouch-btn ${
                          activeEvidenceCategory === 'photo'
                            ? 'bg-[#1E3B2B] text-white'
                            : 'bg-[#FAF8F5] text-[#4A524D] hover:bg-[#EFECE6]'
                        }`}
                      >
                        1. Work Photo
                      </button>
                      <button
                        onClick={() => setActiveEvidenceCategory('record')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors vouch-btn ${
                          activeEvidenceCategory === 'record'
                            ? 'bg-[#1E3B2B] text-white'
                            : 'bg-[#FAF8F5] text-[#4A524D] hover:bg-[#EFECE6]'
                        }`}
                      >
                        2. Work Record
                      </button>
                      <button
                        onClick={() => setActiveEvidenceCategory('confirmation')}
                        className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors vouch-btn ${
                          activeEvidenceCategory === 'confirmation'
                            ? 'bg-[#1E3B2B] text-white'
                            : 'bg-[#FAF8F5] text-[#4A524D] hover:bg-[#EFECE6]'
                        }`}
                      >
                        3. Confirmation
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Active Visual Item Display */}
              <div className="lg:col-span-6">
                <ScrollReveal delay={200}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E1D8] shadow-sm">
                    {activeEvidenceCategory === 'photo' && (
                      <div className="space-y-4 animate-fade-in-up">
                        <span className="text-xs font-mono uppercase text-[#737A75] block">
                          1. ON-SITE PHOTOGRAPHIC PROOF
                        </span>
                        <div className="rounded-xl overflow-hidden border border-[#E5E1D8] aspect-video relative">
                          <img
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80"
                            alt="Electrical conduit installation"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-3 left-3 bg-[#121614]/85 text-white text-[11px] font-mono px-3 py-1 rounded backdrop-blur-xs">
                            Item #01 · 415V Three-Phase Busbar Assembly
                          </div>
                        </div>
                        <p className="text-xs text-[#4A524D] leading-relaxed">
                          Inspect the physical quality of wiring, wire management, crimping, and component alignment before extending an offer.
                        </p>
                      </div>
                    )}

                    {activeEvidenceCategory === 'record' && (
                      <div className="space-y-4 animate-fade-in-up">
                        <span className="text-xs font-mono uppercase text-[#737A75] block">
                          2. AUDITABLE PROJECT RECORD
                        </span>
                        <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] font-mono text-xs space-y-2">
                          <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                            <span className="text-[#737A75]">Project:</span>
                            <span className="font-bold text-[#121614]">Commercial Hub Retrofit</span>
                          </div>
                          <div className="flex justify-between border-b border-[#E5E1D8] pb-2">
                            <span className="text-[#737A75]">Location:</span>
                            <span className="font-bold text-[#121614]">Mangaluru, Karnataka</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#737A75]">Scope:</span>
                            <span className="font-bold text-[#121614]">6 panels · 415V distribution</span>
                          </div>
                        </div>
                        <p className="text-xs text-[#4A524D]">
                          Every record provides context on project scale, timeline, and exact technical responsibilities.
                        </p>
                      </div>
                    )}

                    {activeEvidenceCategory === 'confirmation' && (
                      <div className="space-y-4 animate-fade-in-up">
                        <span className="text-xs font-mono uppercase text-[#737A75] block">
                          3. SIGNED SUPERVISOR CONFIRMATION
                        </span>
                        <div className="p-5 rounded-xl bg-[#EBF6EE] border border-[#059669]/30">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center font-bold text-xs">
                              ✓
                            </div>
                            <div>
                              <h4 className="font-bold text-sm text-[#121614]">ABC Electricals Pvt Ltd</h4>
                              <p className="text-[11px] text-[#059669] font-mono">Site Supervisor · Signed 14 Sept 2026</p>
                            </div>
                          </div>
                          <p className="text-xs text-[#1E3B2B] italic">
                            &quot;Verified all panel crimps, phase balancing, and commissioning under full load.&quot;
                          </p>
                        </div>
                        <p className="text-xs text-[#4A524D]">
                          Direct accountability from licensed site supervisors removes reliance on fake resumes.
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 6: CONFIRMATION (Trust the People)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  MULTI-PARTY VERIFICATION
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                  TRUST THE PEOPLE<br />
                  <span className="text-[#1E3B2B]">WHO WERE THERE.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed">
                  Confirmations on Vouch come directly from the engineers, contractors, and clients who stood on the jobsite.
                </p>
              </div>
            </ScrollReveal>

            {/* Two Distinct Confirmation Proof Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Example 1: Supervisor Confirmation */}
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#1E3B2B] shadow-md h-full">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-4">
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-[#121614]">
                        ABC Electricals
                      </h4>
                      <p className="text-xs text-[#737A75] font-mono">Site Supervisor Confirmation</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#EBF6EE] text-[#059669] font-mono text-xs font-bold border border-[#059669]/20">
                      ✓ CONFIRMED
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-[#4A524D] mb-4">
                    <p><span className="text-[#737A75]">Confirmed Work:</span> Commercial Panel Installation</p>
                    <p><span className="text-[#737A75]">Role Verified:</span> Lead Technician</p>
                    <p><span className="text-[#737A75]">Sign-Off Date:</span> September 2026</p>
                  </div>

                  <p className="text-xs text-[#1E3B2B] bg-[#FAF8F5] p-3 rounded-lg border border-[#E5E1D8] italic">
                    &quot;Ravi executed the 415V busbar wiring and passed inspection on first test.&quot;
                  </p>
                </div>
              </ScrollReveal>

              {/* Example 2: Customer Confirmation */}
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-2xl border-2 border-[#1E3B2B] shadow-md h-full">
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8] mb-4">
                    <div>
                      <h4 className="font-display font-extrabold text-lg text-[#121614]">
                        Residential Client
                      </h4>
                      <p className="text-xs text-[#737A75] font-mono">Customer Confirmation</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#EBF6EE] text-[#059669] font-mono text-xs font-bold border border-[#059669]/20">
                      ✓ CONFIRMED
                    </span>
                  </div>

                  <div className="space-y-2 text-xs font-mono text-[#4A524D] mb-4">
                    <p><span className="text-[#737A75]">Confirmed Work:</span> Residential Wiring & Distribution</p>
                    <p><span className="text-[#737A75]">Location:</span> Kadri Hills, Mangaluru</p>
                    <p><span className="text-[#737A75]">Sign-Off Date:</span> August 2024</p>
                  </div>

                  <p className="text-xs text-[#1E3B2B] bg-[#FAF8F5] p-3 rounded-lg border border-[#E5E1D8] italic">
                    &quot;Completed the entire duplex conduit and inverter switchboard with zero faults.&quot;
                  </p>
                </div>
              </ScrollReveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            SECTION 7: SAVE & REVISIT (Minimal Shortlist)
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#F4EFEB] border-b border-[#E5E1D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <ScrollReveal delay={0}>
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-3">
                  SHORTLIST MANAGEMENT
                </span>
                <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#121614] tracking-tight leading-[1.08] mb-4">
                  BUILD A SHORTLIST<br />
                  <span className="text-[#1E3B2B]">YOU CAN TRUST.</span>
                </h2>
                <p className="text-lg text-[#4A524D]">
                  This is not a job marketplace. It is a professional worker discovery and evaluation tool for building high-integrity trade crews.
                </p>
              </div>
            </ScrollReveal>

            {/* Minimal Saved Workers Concept */}
            <ScrollReveal delay={120}>
              <div className="bg-white rounded-3xl border-2 border-[#1E3B2B] shadow-xl p-6 sm:p-8 max-w-4xl">
                <div className="flex items-center justify-between pb-6 border-b border-[#E5E1D8] mb-6">
                  <div className="flex items-center space-x-2">
                    <BookmarkCheck className="w-5 h-5 text-[#1E3B2B]" />
                    <h3 className="font-display font-extrabold text-xl text-[#121614]">
                      SAVED WORKERS DOCKET ({savedCandidates.length})
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#737A75]">READY FOR ON-SITE DEPLOYMENT</span>
                </div>

                <div className="space-y-4 mb-8">
                  {CANDIDATE_DATABASE.filter(c => savedCandidates.includes(c.id)).map((candidate) => (
                    <div
                      key={candidate.id}
                      className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#1E3B2B] shrink-0">
                          <img
                            src={candidate.photoUrl}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-base text-[#121614]">{candidate.name}</h4>
                          <p className="text-xs text-[#737A75]">{candidate.trade} · {candidate.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                        <span className="px-2.5 py-1 rounded bg-[#EBF6EE] text-[#059669] font-mono text-[10px] font-bold">
                          {candidate.confidence}
                        </span>
                        <Link
                          to={`/passport/${candidate.id}`}
                          className="px-4 py-2 rounded-lg bg-white border border-[#E5E1D8] text-[#1E3B2B] hover:bg-[#1E3B2B] hover:text-white text-xs font-bold transition-colors vouch-btn"
                        >
                          Inspect Proof →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#4A524D]">
                    Need more verified trade specialists for upcoming tenders?
                  </span>
                  <Link
                    to="/contractor"
                    className="px-6 py-3 rounded-xl bg-[#1E3B2B] text-white text-xs font-bold hover:bg-[#14281D] transition-colors shadow-sm vouch-btn"
                  >
                    EXPLORE WORKERS →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </section>


        {/* ==================================================
            SECTION 8: FINAL EMPLOYER CTA
            ================================================== */}
        <section className="py-20 sm:py-28 bg-[#FAF8F5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <ScrollReveal delay={0}>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E3B2B] font-bold block mb-4">
                VERIFIABLE HIRING
              </span>
              
              <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-[#121614] tracking-tight leading-[1.06] mb-6">
                FIND THE RIGHT PERSON.<br />
                <span className="text-[#1E3B2B]">SEE WHY THEY&apos;RE RIGHT.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl text-[#4A524D] leading-relaxed mb-10 max-w-2xl mx-auto">
                Explore professional passports built from real work, supporting evidence and independent confirmations.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contractor"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-9 py-4 rounded-xl bg-[#1E3B2B] text-white font-bold text-base hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-md group vouch-btn"
                >
                  <span>EXPLORE WORKERS</span>
                  <ArrowRight className="w-4 h-4 text-[#C27A38] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl border border-[#E5E1D8] bg-white text-[#121614] hover:bg-[#FAF8F5] text-base font-medium transition-colors vouch-btn"
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

export default EmployersPage;
