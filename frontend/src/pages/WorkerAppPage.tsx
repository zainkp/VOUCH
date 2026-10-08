import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { HomeTab } from './HomeTab';
import { WorkTab } from './WorkTab';
import { PassportTab } from './PassportTab';
import { ProfileTab } from './ProfileTab';
import { AddWorkModal } from '../modals/AddWorkModal';
import { WorkDetailModal } from '../modals/WorkDetailModal';
import { VerifierModal } from '../modals/VerifierModal';
import { QrModal } from '../modals/QrModal';
import { 
  ShieldCheck, 
  User, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  Award, 
  Home as HomeIcon,
  Plus
} from 'lucide-react';

export const WorkerAppPage: React.FC = () => {
  const { 
    currentTab, 
    setCurrentTab, 
    worker, 
    setActiveRole, 
    setIsAddWorkOpen 
  } = useApp();
  
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLogout = () => {
    // Clear authenticated worker session and return to /login
    setActiveRole('worker');
    navigate('/login');
  };

  const navItems: Array<{ id: 'home' | 'work' | 'passport' | 'profile'; label: string; icon: React.ComponentType<{ className?: string }> }> = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'passport', label: 'Passport', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#202322] flex flex-col font-sans selection:bg-[#173F4F] selection:text-white">
      
      {/* 1. Professional Web Application Header (Full Width) */}
      <header className="w-full bg-white border-b border-[#E2DDD2] sticky top-0 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Left: Vouch Brand & Workspace Indicator */}
          <div className="flex items-center space-x-6">
            <Link to="/worker" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#173F4F] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0E2934] transition-colors">
                <ShieldCheck className="w-5 h-5 text-[#F4F0E6]" strokeWidth={2.2} />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#202322]">
                VOUCH
              </span>
            </Link>

            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-[#737A75] border-l border-[#E2DDD2] pl-5">
              <span className="w-2 h-2 rounded-full bg-[#3E6B52]"></span>
              <span className="font-medium text-[#4A524D]">Worker Workspace</span>
              <span className="text-[#C45B3C] bg-[#F8ECE7] px-2 py-0.5 rounded font-semibold border border-[#C45B3C]/20">
                {worker.passportId}
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

          {/* Right: User Identity & Profile Dropdown */}
          <div className="flex items-center space-x-3">
            
            {/* Quick Add Work Button (Desktop) */}
            <button
              onClick={() => setIsAddWorkOpen(true)}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#F4F0E6] border border-[#E2DDD2] text-xs font-semibold text-[#173F4F] hover:bg-[#EBE7DC] transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-[#173F4F]" />
              <span>+ Add Work</span>
            </button>

            {/* Profile Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-3 p-1.5 pr-2.5 rounded-xl hover:bg-[#F4F0E6] border border-transparent hover:border-[#E2DDD2] transition-all cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E2DDD2] bg-[#EBE7DC] shrink-0">
                  <img
                    src={worker.avatarUrl}
                    alt={worker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left hidden sm:block">
                  <p className="text-xs font-bold text-[#202322] leading-tight">
                    {worker.name}
                  </p>
                  <p className="text-[11px] text-[#737A75]">
                    {worker.trade}
                  </p>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-[#737A75] hidden sm:block" />
              </button>

              {/* Dropdown Menu */}
              {isUserMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl border border-[#E2DDD2] shadow-lg py-2 z-50 animate-fade-in-up">
                    <div className="px-4 py-3 border-b border-[#EBE7DC]">
                      <p className="text-xs font-mono uppercase text-[#737A75] font-semibold">
                        Authenticated Account
                      </p>
                      <p className="text-sm font-bold text-[#202322] mt-0.5">
                        {worker.name}
                      </p>
                      <p className="text-xs text-[#4A524D]">
                        {worker.trade} · Worker Role
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
                        <span>View Full Profile</span>
                      </button>
                      <button
                        onClick={() => {
                          setCurrentTab('passport');
                          setIsUserMenuOpen(false);
                        }}
                        className="w-full px-4 py-2.5 text-left text-xs font-medium text-[#202322] hover:bg-[#F4F0E6] flex items-center space-x-2.5 cursor-pointer"
                      >
                        <Award className="w-4 h-4 text-[#737A75]" />
                        <span>View Vouch Passport</span>
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

            {/* Mobile Navigation Drawer Toggle */}
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
              <button
                onClick={() => {
                  setIsAddWorkOpen(true);
                  setIsMobileNavOpen(false);
                }}
                className="py-2 px-3 rounded-xl bg-[#173F4F] text-white text-xs font-semibold flex items-center space-x-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>+ Add Work</span>
              </button>

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

      {/* 2. Main Full-Width Application Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {currentTab === 'home' && <HomeTab />}
        {currentTab === 'work' && <WorkTab />}
        {currentTab === 'passport' && <PassportTab />}
        {currentTab === 'profile' && <ProfileTab />}
      </main>

      {/* Modals Preserved */}
      <AddWorkModal />
      <WorkDetailModal />
      <VerifierModal />
      <QrModal />

    </div>
  );
};

export default WorkerAppPage;
