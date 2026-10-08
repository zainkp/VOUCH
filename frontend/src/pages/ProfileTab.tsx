import React from 'react';
import { useApp } from '../context/AppContext';
import { Shield, RotateCcw, Smartphone, ExternalLink, Award, MapPin, Briefcase, Users } from 'lucide-react';

export const ProfileTab: React.FC = () => {
  const { 
    worker, 
    resetDemoData, 
    isDeviceFramed, 
    setIsDeviceFramed, 
    setIsQrModalOpen, 
    activeRole, 
    setActiveRole,
    setCurrentTab
  } = useApp();

  return (
    <div className="flex-1 px-5 pb-8 pt-3 space-y-4">
      {/* Profile Header */}
      <div className="bg-white rounded-[22px] p-5 border border-[#ECEBE8] shadow-xs flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#233B31] shadow-xs mb-3">
          <img alt={worker.name} className="w-full h-full object-cover" src={worker.avatarUrl} />
        </div>
        <h2 className="text-lg font-bold text-[#111827]">{worker.name}</h2>
        <p className="text-xs font-semibold text-emerald-800">{worker.trade}</p>
        <p className="text-[11px] text-gray-500 mt-0.5">{worker.experienceYears} Years Documented Experience</p>

        <div className="flex items-center space-x-2 text-xs text-gray-600 mt-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <span>{worker.location}</span>
        </div>

        <p className="text-xs text-gray-600 mt-3 px-2 italic">
          "{worker.bio}"
        </p>

        {/* Passport Identity & Portability Metadata */}
        <div className="w-full grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-100 text-left text-xs font-mono">
          <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
            <span className="text-[10px] text-gray-400 block font-sans">PASSPORT ID</span>
            <span className="font-bold text-gray-900 text-xs">{worker.passportId}</span>
          </div>
          <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
            <span className="text-[10px] text-gray-400 block font-sans">OWNERSHIP</span>
            <span className="font-bold text-emerald-900 text-xs">Worker-Owned</span>
          </div>
        </div>
      </div>

      {/* Verified Certifications (If actual certifications exist, they appear inside passport) */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs space-y-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">
          Vocational Certificates & Credentials
        </h3>
        {worker.certifications.map(cert => (
          <div key={cert.id} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
            <div className="flex justify-between items-center font-bold text-gray-900">
              <span>{cert.name}</span>
              <span className="text-[10px] text-gray-400 font-mono">{cert.year}</span>
            </div>
            <p className="text-[11px] text-gray-600">Issued by: {cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Demo Controls & Role Switching */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-600">
          Demo Workflow Switcher
        </h3>

        <div className="space-y-2 text-xs">
          <button
            onClick={() => {
              setActiveRole(activeRole === 'worker' ? 'contractor' : 'worker');
              setCurrentTab('home');
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-200 transition-colors"
          >
            <span className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-emerald-700" />
              <span className="font-semibold">
                Switch Role: {activeRole === 'worker' ? 'View as Contractor / Hirer' : 'Return to Worker View'}
              </span>
            </span>
            <span className="text-[10px] text-emerald-700 font-bold">Step 10–12</span>
          </button>

          <button
            onClick={() => setIsQrModalOpen(true)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-gray-800 border border-stone-200 transition-colors"
          >
            <span className="flex items-center space-x-2">
              <ExternalLink className="w-4 h-4 text-emerald-700" />
              <span className="font-semibold">Share My Vouch Passport (QR)</span>
            </span>
            <span className="text-[10px] text-gray-400">Step 9</span>
          </button>

          <button
            onClick={() => setIsDeviceFramed(!isDeviceFramed)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-stone-50 hover:bg-stone-100 text-gray-800 border border-stone-200 transition-colors"
          >
            <span className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-[#1E293B]" />
              <span className="font-semibold">
                {isDeviceFramed ? 'Switch to Fluid Desktop View' : 'Switch to Smartphone Device Frame'}
              </span>
            </span>
            <span className="text-[10px] text-gray-400">Responsive</span>
          </button>

          <button
            onClick={() => {
              resetDemoData();
              alert('Demo state reset to initial seed values.');
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-50/70 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors"
          >
            <span className="flex items-center space-x-2">
              <RotateCcw className="w-4 h-4 text-amber-700" />
              <span className="font-semibold">Reset Demo Data</span>
            </span>
            <span className="text-[10px] text-amber-600">Rehearse</span>
          </button>
        </div>
      </div>

      {/* Product Positioning Rule Card */}
      <div className="p-3.5 rounded-2xl bg-stone-100/90 border border-stone-300 text-xs text-gray-800 space-y-1">
        <div className="flex items-center space-x-1.5 font-bold text-gray-900">
          <Shield className="w-4 h-4 text-emerald-700" />
          <span>VOUCH Product Principle</span>
        </div>
        <p className="text-[11px] leading-relaxed text-gray-600">
          "Vouch is a worker-owned, portable, evidence-backed professional identity for skilled and experience-based workers. The worker carries their identity across employers, projects, and cities."
        </p>
      </div>
    </div>
  );
};
