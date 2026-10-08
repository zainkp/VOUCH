import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ContractorTab } from './ContractorTab';
import { WorkDetailModal } from '../modals/WorkDetailModal';
import { VerifierModal } from '../modals/VerifierModal';
import { QrModal } from '../modals/QrModal';
import { ShieldCheck, ArrowLeft, User, LogOut, Briefcase } from 'lucide-react';

export const ContractorAppPage: React.FC = () => {
  const { setActiveRole } = useApp();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col items-center">
      
      {/* Top Application Header */}
      <header className="w-full bg-[#1E3B2B] text-white border-b border-[#14281D] sticky top-0 z-40 px-4 py-2.5 shadow-xs">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center space-x-3">
            <Link
              to="/"
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-emerald-200 hover:text-white transition-colors py-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Vouch Website</span>
            </Link>
            <span className="text-white/30 hidden sm:inline">|</span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4 text-[#C27A38]" />
              </div>
              <span className="font-display font-extrabold text-sm tracking-tight text-white">
                VOUCH
              </span>
              <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded text-emerald-200">
                Contractor Evaluation Portal
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            {/* Switch to Worker View */}
            <button
              onClick={() => {
                setActiveRole('worker');
                navigate('/worker');
              }}
              className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-emerald-200" />
              <span>Worker Application</span>
            </button>

            {/* Exit to Public Website */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Exit Portal"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exit</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Responsive Application Shell */}
      <div className="w-full max-w-2xl flex-1 flex flex-col bg-white sm:my-4 sm:rounded-3xl sm:border border-[#E5E1D8] sm:shadow-xl overflow-hidden relative pb-10">
        
        {/* Contractor Portal Sub-Header */}
        <div className="px-5 pt-4 pb-3 border-b border-[#E5E1D8] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm text-[#121614] leading-tight">
                Verified Trade Talent Directory
              </h2>
              <span className="text-[11px] text-[#737A75]">
                Evaluate technicians by evidence confidence, site photos, and supervisor sign-offs
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded border border-[#059669]/20 hidden sm:inline">
            ZERO COMMISION
          </span>
        </div>

        {/* Directory Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col pt-2">
          <ContractorTab />
        </main>

        {/* Interactive Modals */}
        <WorkDetailModal />
        <VerifierModal />
        <QrModal />
      </div>

    </div>
  );
};

export default ContractorAppPage;
