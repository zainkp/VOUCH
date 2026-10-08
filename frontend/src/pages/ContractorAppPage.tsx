import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ContractorTab } from './ContractorTab';
import { WorkDetailModal } from '../modals/WorkDetailModal';
import { VerifierModal } from '../modals/VerifierModal';
import { QrModal } from '../modals/QrModal';
import { 
  ShieldCheck, 
  User, 
  LogOut, 
  Search, 
  Bookmark, 
  ChevronDown, 
  Menu, 
  X, 
  Home as HomeIcon,
  Briefcase,
  Building2,
  Mail,
  Phone,
  Lock,
  MapPin,
  CheckCircle2,
  FileCheck2,
  ExternalLink,
  Award,
  ArrowRight
} from 'lucide-react';

export const ContractorAppPage: React.FC = () => {
  const { 
    setActiveRole, 
    savedWorkerIds, 
    toggleSaveWorker, 
    isSavedWorker,
    worker: defaultWorker,
    workRecords,
    skills,
    stats
  } = useApp();
  
  const navigate = useNavigate();

  // Active navigation tab
  const [currentTab, setCurrentTab] = useState<'home' | 'find' | 'saved' | 'profile'>('home');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Inspected worker passport modal state
  const [inspectedWorker, setInspectedWorker] = useState<any | null>(null);

  const handleLogout = () => {
    // Clear employer session and return to /login
    setActiveRole('contractor');
    navigate('/login');
  };

  const navItems = [
    { id: 'home' as const, label: 'Home', icon: HomeIcon },
    { id: 'find' as const, label: 'Find Workers', icon: Search },
    { id: 'saved' as const, label: `Saved (${savedWorkerIds.length})`, icon: Bookmark },
    { id: 'profile' as const, label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#202322] flex flex-col font-sans selection:bg-[#173F4F] selection:text-white">
      
      {/* 1. Professional Web Application Header (Full Width) */}
      <header className="w-full bg-white border-b border-[#E2DDD2] sticky top-0 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Vouch Brand & Employer Workspace Context */}
          <div className="flex items-center space-x-6">
            <Link to="/contractor" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#173F4F] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0E2934] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#F4F0E6]" strokeWidth={2.2} />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#202322]">
                VOUCH
              </span>
            </Link>

            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[#737A75] border-l border-[#E2DDD2] pl-5">
              <span className="w-2 h-2 rounded-full bg-[#173F4F]"></span>
              <span className="font-semibold text-[#173F4F] bg-[#EDF4F0] px-2.5 py-0.5 rounded-md border border-[#3E6B52]/20">
                Employer Workspace
              </span>
            </div>
          </div>

          {/* Center: Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#173F4F] text-white shadow-xs'
                      : 'text-[#4A524D] hover:text-[#202322] hover:bg-[#F4F0E6]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#737A75]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right: Employer Account Identity & Dropdown */}
          <div className="flex items-center space-x-3">
            
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-1.5 pr-2.5 rounded-xl hover:bg-[#F4F0E6] border border-transparent hover:border-[#E2DDD2] transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E2DDD2] bg-[#173F4F] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  AV
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold text-[#202322] leading-tight">
                    Arjun Verma
                  </p>
                  <p className="text-[11px] text-[#737A75]">
                    Apex Infra Projects
                  </p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#737A75] hidden sm:block" />
              </button>

              {/* Profile Dropdown Menu */}
              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-[#E2DDD2] shadow-lg py-2 z-50 animate-fade-in-up">
                    <div className="px-4 py-3 border-b border-[#EBE7DC]">
                      <p className="text-xs font-mono uppercase text-[#737A75] font-semibold">
                        Employer Account
                      </p>
                      <p className="text-sm font-bold text-[#202322] mt-0.5">
                        Arjun Verma
                      </p>
                      <p className="text-xs text-[#4A524D]">
                        Apex Infra Projects Ltd
                      </p>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => {
                          setCurrentTab('profile');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-xs font-medium text-[#202322] hover:bg-[#F4F0E6] flex items-center space-x-2.5 cursor-pointer"
                      >
                        <User className="w-4 h-4 text-[#737A75]" />
                        <span>Employer Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentTab('saved');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-xs font-medium text-[#202322] hover:bg-[#F4F0E6] flex items-center space-x-2.5 cursor-pointer"
                      >
                        <Bookmark className="w-4 h-4 text-[#737A75]" />
                        <span>Saved Workers ({savedWorkerIds.length})</span>
                      </button>
                    </div>

                    <div className="pt-1 border-t border-[#EBE7DC]">
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2.5 text-left text-xs font-medium text-[#B91C1C] hover:bg-red-50 flex items-center space-x-2.5 cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-[#B91C1C]" />
                        <span>Log Out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Nav Drawer Toggle */}
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden p-2 rounded-xl text-[#4A524D] hover:bg-[#F4F0E6] border border-[#E2DDD2] cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileNavOpen && (
          <div className="md:hidden border-t border-[#E2DDD2] bg-white px-4 pt-3 pb-4 space-y-2">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navItems.map((item) => {
                const isActive = currentTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentTab(item.id);
                      setIsMobileNavOpen(false);
                    }}
                    className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer ${
                      isActive
                        ? 'bg-[#173F4F] text-white shadow-xs'
                        : 'bg-[#F4F0E6] text-[#4A524D] hover:bg-[#F4F0E6]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#737A75]'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#EBE7DC] flex items-center justify-between">
              <span className="text-xs text-[#737A75]">
                Signed in as <strong className="text-[#202322]">Arjun Verma</strong>
              </span>

              <button
                onClick={handleLogout}
                className="py-2 px-3 rounded-xl text-xs font-semibold text-[#B91C1C] hover:bg-red-50 flex items-center space-x-1.5 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. Main Full-Width Application Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* View 1 & 2: Home or Find Workers */}
        {(currentTab === 'home' || currentTab === 'find') && (
          <ContractorTab 
            onViewPassport={(workerData) => setInspectedWorker(workerData)}
            defaultActiveTab="DIRECTORY"
          />
        )}

        {/* View 3: Saved Workers Tab */}
        {currentTab === 'saved' && (
          <ContractorTab 
            onViewPassport={(workerData) => setInspectedWorker(workerData)}
            defaultActiveTab="SAVED"
          />
        )}

        {/* View 4: Employer Profile Tab */}
        {currentTab === 'profile' && (
          <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
            
            {/* Employer Profile Header */}
            <div className="bg-[#FFDFF7] rounded-3xl border border-[#E2DDD2] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#173F4F] text-white flex items-center justify-center font-display font-extrabold text-2xl sm:text-3xl shrink-0 shadow-xs border border-[#0E2934]">
                  AV
                </div>

                <div className="flex-1 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20">
                      AUTHENTICATED EMPLOYER
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#F4F0E6] text-[#737A75] border border-[#E2DDD2]">
                      COMMERCIAL CONTRACTOR
                    </span>
                  </div>

                  <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#202322] tracking-tight">
                    Arjun Verma
                  </h1>
                  <p className="text-base font-semibold text-[#173F4F]">
                    Lead Project Director · Apex Infrastructure & Engineering
                  </p>

                  <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-[#737A75]">
                    <MapPin className="w-3.5 h-3.5 text-[#737A75]" />
                    <span>Mangaluru, Udupi & Coastal Karnataka</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-[#FFDFF7] rounded-3xl border border-[#E2DDD2] p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center space-x-3 pb-3 border-b border-[#EBE7DC]">
                <Building2 className="w-5 h-5 text-[#173F4F]" />
                <div>
                  <h2 className="font-bold text-base text-[#202322]">Account Information</h2>
                  <p className="text-xs text-[#737A75]">Company profile and workspace classification</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2]">
                  <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-1">
                    ACCOUNT TYPE
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-[#202322]">Employer / Contractor</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EDF4F0] text-[#3E6B52] font-bold">
                      VERIFICATION SUITE
                    </span>
                  </div>
                  <p className="text-xs text-[#737A75] mt-1.5 leading-relaxed">
                    This account is authorized to inspect evidence-backed passports, examine supervisor verifications, and evaluate skilled technicians without platform commissions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2] space-y-2.5">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-0.5">
                      REGISTERED WORK EMAIL
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-[#202322] font-medium">
                      <Mail className="w-3.5 h-3.5 text-[#737A75]" />
                      <span>arjun.verma@apexinfra.co.in</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#E2DDD2]">
                    <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-0.5">
                      DIRECT PHONE
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-[#202322] font-medium">
                      <Phone className="w-3.5 h-3.5 text-[#737A75]" />
                      <span>+91 98452 88123</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#FFDFF7] rounded-3xl border border-[#E2DDD2] p-6 sm:p-8 shadow-xs space-y-5">
              <div className="flex items-center space-x-3 pb-3 border-b border-[#EBE7DC]">
                <Lock className="w-5 h-5 text-[#173F4F]" />
                <div>
                  <h2 className="font-bold text-base text-[#202322]">Security & Access</h2>
                  <p className="text-xs text-[#737A75]">Credential protection and corporate access controls</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-bold text-[#202322]">Employer Password & Authentication</p>
                  <p className="text-[#737A75] mt-0.5">
                    Secured with modern cryptographic hashing.
                  </p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-white border border-[#E2DDD2] text-xs font-medium text-[#3E6B52] self-start sm:self-auto">
                  Protected
                </span>
              </div>
            </div>

            {/* Session Management & Log Out */}
            <div className="bg-[#FFDFF7] rounded-3xl border border-[#E2DDD2] p-6 sm:p-8 shadow-xs space-y-4">
              <div>
                <h2 className="font-bold text-base text-[#202322]">Session Management</h2>
                <p className="text-xs text-[#737A75] mt-1">
                  To access a Worker account or another workspace, sign out of this Employer session and sign in with the corresponding credentials.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-[#B91C1C] text-xs font-bold transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out of Vouch</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* 3. Interactive Vouch Passport Inspection Modal */}
      {inspectedWorker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#F4F0E6] rounded-3xl border border-[#E2DDD2] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="bg-[#202322] text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center space-x-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C45B3C]" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F4F0E6]">
                  VOUCH PROFESSIONAL PASSPORT · EVIDENCE INSPECTION
                </span>
              </div>
              <button
                onClick={() => setInspectedWorker(null)}
                className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Close Passport"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Identity Banner */}
              <div className="bg-[#FFDFF7] rounded-2xl border border-[#E2DDD2] p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center space-x-4">
                  <div className="w-20 h-24 rounded-xl overflow-hidden border border-[#E2DDD2] bg-[#EBE7DC] shrink-0">
                    <img
                      src={inspectedWorker.avatarUrl}
                      alt={inspectedWorker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase text-[#3E6B52] font-semibold bg-[#EDF4F0] px-2 py-0.5 rounded border border-[#3E6B52]/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Sovereign Identity</span>
                    </div>
                    <h2 className="font-display font-extrabold text-2xl text-[#202322]">
                      {inspectedWorker.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#173F4F]">
                      {inspectedWorker.trade} · {inspectedWorker.experienceYears} Years Documented Exp
                    </p>
                    <p className="text-xs text-[#737A75] flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{inspectedWorker.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 self-end sm:self-center">
                  <button
                    onClick={() => toggleSaveWorker(inspectedWorker.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 border transition-all cursor-pointer ${
                      isSavedWorker(inspectedWorker.id)
                        ? 'bg-[#EDF4F0] text-[#3E6B52] border-[#3E6B52]/30'
                        : 'bg-white text-[#202322] border-[#E2DDD2] hover:bg-gray-50'
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{isSavedWorker(inspectedWorker.id) ? 'Saved' : 'Save Worker'}</span>
                  </button>
                  <Link
                    to={`/passport/${inspectedWorker.id}`}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-[#173F4F] hover:bg-[#0E2934] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors"
                  >
                    <span>Full Ledger</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Evidence Confidence Card */}
              <div className="bg-[#FFDFF7] rounded-2xl border border-[#E2DDD2] p-6 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#202322]">
                      Evidence Confidence Level
                    </h3>
                    <p className="text-xs text-[#737A75]">
                      Evaluated on supervisor confirmations & on-site photo records
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20">
                    {inspectedWorker.confidenceLevel} EVIDENCE CONFIDENCE
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                  <div className="p-3 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2]">
                    <span className="font-display font-extrabold text-xl text-[#202322] block">
                      {inspectedWorker.workRecordsCount}
                    </span>
                    <span className="text-[#737A75]">Work Records</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2]">
                    <span className="font-display font-extrabold text-xl text-[#202322] block">
                      {inspectedWorker.evidenceItemsCount || (inspectedWorker.workRecordsCount + 4)}
                    </span>
                    <span className="text-[#737A75]">Evidence Items</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2]">
                    <span className="font-display font-extrabold text-xl text-[#3E6B52] block">
                      {inspectedWorker.confirmationsCount}
                    </span>
                    <span className="text-[#737A75]">Confirmations</span>
                  </div>
                </div>
              </div>

              {/* Demonstrated Skills Breakdown */}
              <div className="bg-[#FFDFF7] rounded-2xl border border-[#E2DDD2] p-6 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-[#202322]">
                  Demonstrated Competencies
                </h3>
                <div className="space-y-2">
                  {(inspectedWorker.skillsSummary || inspectedWorker.trade)
                    .split(',')
                    .map((skillName: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2] flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-[#202322]">
                          {skillName.trim()}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#EDF4F0] text-[#3E6B52]">
                          VERIFIED EVIDENCE
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Verified Records Sample */}
              <div className="bg-[#FFDFF7] rounded-2xl border border-[#E2DDD2] p-6 shadow-xs space-y-3">
                <h3 className="font-bold text-sm text-[#202322]">
                  Recent Verified Work Records
                </h3>
                <div className="space-y-2.5">
                  {workRecords.slice(0, 2).map((r) => (
                    <div
                      key={r.id}
                      className="p-3.5 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2] flex items-start space-x-3.5 text-xs"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#EBE7DC] shrink-0 border border-[#E2DDD2]">
                        <img src={r.imageUrl} alt={r.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-bold text-[#202322] truncate">{r.title}</p>
                          <span className="text-[10px] font-mono text-[#3E6B52] font-bold">
                            ✓ CONFIRMED
                          </span>
                        </div>
                        <p className="text-[11px] text-[#737A75] mt-0.5">
                          {r.employer} · {r.date} · {r.location}
                        </p>
                        <p className="text-[11px] text-[#4A524D] mt-1 italic">
                          &quot;{r.description}&quot;
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-[#E2DDD2] flex items-center justify-between">
              <span className="text-xs text-[#737A75]">
                Independent Vouch Credential · Worker Sovereign Record
              </span>
              <button
                onClick={() => setInspectedWorker(null)}
                className="px-4 py-2 rounded-xl bg-[#173F4F] text-white text-xs font-semibold hover:bg-[#0E2934] transition-colors cursor-pointer"
              >
                Close Passport
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modals Preserved */}
      <WorkDetailModal />
      <VerifierModal />
      <QrModal />

    </div>
  );
};

export default ContractorAppPage;
