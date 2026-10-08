import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HomeTab } from './HomeTab';
import { WorkTab } from './WorkTab';
import { PassportTab } from './PassportTab';
import { ProfileTab } from './ProfileTab';
import { BottomNav } from '../components/BottomNav';
import { AddWorkModal } from '../modals/AddWorkModal';
import { WorkDetailModal } from '../modals/WorkDetailModal';
import { VerifierModal } from '../modals/VerifierModal';
import { QrModal } from '../modals/QrModal';
import { ShieldCheck, ArrowLeft, LogOut, Briefcase, QrCode } from 'lucide-react';

export const WorkerAppPage: React.FC = () => {
  const { currentTab, worker, setIsQrModalOpen, setActiveRole } = useApp();
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
              <span className="text-[10px] font-mono uppercase bg-white/10 px-2 py-0.5 rounded text-emerald-200 hidden md:inline">
                Worker Portal
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            {/* Quick QR Trigger */}
            <button
              onClick={() => setIsQrModalOpen(true)}
              className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[11px] transition-colors cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-[#C27A38]" />
              <span>Show QR</span>
            </button>

            {/* Switch to Contractor View */}
            <button
              onClick={() => {
                setActiveRole('contractor');
                navigate('/contractor');
              }}
              className="hidden md:flex items-center space-x-1 text-[11px] font-mono text-emerald-200 hover:text-white transition-colors cursor-pointer"
            >
              <Briefcase className="w-3 h-3" />
              <span>Employer Mode</span>
            </button>

            {/* Log Out back to Landing */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Log Out"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exit</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Responsive Application Shell */}
      <div className="w-full max-w-xl flex-1 flex flex-col bg-white sm:my-4 sm:rounded-3xl sm:border border-[#E5E1D8] sm:shadow-xl overflow-hidden relative pb-16">
        
        {/* Worker Tab Header */}
        <div className="px-5 pt-3.5 pb-2.5 border-b border-[#E5E1D8] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5E1D8] bg-gray-100">
              <img src={worker.avatarUrl} alt={worker.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm text-[#121614] leading-tight">
                {worker.name}
              </h2>
              <span className="text-[11px] text-[#737A75]">
                {worker.trade} · {worker.experienceYears} Years Documented
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold bg-[#EBF6EE] text-[#059669] px-2 py-0.5 rounded border border-[#059669]/20">
            {worker.passportId}
          </span>
        </div>

        {/* Tab Content View */}
        <main className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
          {currentTab === 'home' && <HomeTab />}
          {currentTab === 'work' && <WorkTab />}
          {currentTab === 'passport' && <PassportTab />}
          {currentTab === 'profile' && <ProfileTab />}
        </main>

        {/* Persistent Bottom Navigation */}
        <BottomNav />

        {/* Interactive Modals */}
        <AddWorkModal />
        <WorkDetailModal />
        <VerifierModal />
        <QrModal />
      </div>

    </div>
  );
};

export default WorkerAppPage;
