import React from 'react';
import { useApp } from '../context/AppContext';
import { WorkRecord } from '../types';
import { Plus, Share2, CheckCircle2, Clock, ArrowRight, Shield } from 'lucide-react';

export const HomeTab: React.FC = () => {
  const { 
    worker, 
    workRecords, 
    stats, 
    setCurrentTab, 
    setIsAddWorkOpen, 
    setIsQrModalOpen,
    setSelectedWorkRecord 
  } = useApp();

  const recentRecords = workRecords.slice(0, 3);

  return (
    <div className="flex-1 px-5 pb-6 pt-3 space-y-4">
      {/* 1. Who am I? — Worker Identity Hero */}
      <section className="bg-white rounded-[22px] p-4 border border-[#ECEBE8] shadow-xs">
        <div className="flex items-center space-x-3.5">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
            <img 
              alt={worker.name} 
              className="w-full h-full object-cover" 
              src={worker.portraitUrl}
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1 border border-emerald-200/60">
              Worker-Owned Record
            </span>
            <h2 className="text-base font-bold text-[#111827] truncate">
              {worker.name}
            </h2>
            <p className="text-xs font-medium text-gray-600">
              {worker.trade} · {worker.experienceYears} years · {worker.location.split(',')[0]}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 mt-2.5 pt-2.5 border-t border-gray-100 flex items-center space-x-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
          <span>Portable across employers, contractors, and project sites.</span>
        </p>
      </section>

      {/* 2. How complete is my passport? — Passport Completeness */}
      <section className="bg-white rounded-[20px] p-4 border border-[#ECEBE8] shadow-xs space-y-2">
        <div className="flex items-center justify-between text-xs">
          <div>
            <h3 className="font-bold text-gray-900">Passport completeness</h3>
            <p className="text-[11px] text-gray-500">Measures documented evidence & independent confirmations</p>
          </div>
          <span className="text-sm font-bold font-mono text-emerald-800">
            {stats.passportCompleteness}%
          </span>
        </div>

        <div className="w-full bg-[#EBECEF] h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#233B31] h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${stats.passportCompleteness}%` }}
          />
        </div>

        <div className="flex justify-between text-[10px] text-gray-400 pt-0.5 font-medium">
          <span>Profile</span>
          <span>•</span>
          <span>Work Records</span>
          <span>•</span>
          <span>Photo Evidence</span>
          <span>•</span>
          <span>Supervisor Vouches</span>
        </div>
      </section>

      {/* 3. What evidence have I built? — Summary Metrics */}
      <section className="bg-[#FAF8F5] rounded-2xl p-3 border border-[#E7E5DF]">
        <div className="grid grid-cols-3 divide-x divide-[#E2E1DD] text-center">
          <button 
            onClick={() => setCurrentTab('work')}
            className="px-1 hover:opacity-80 transition-opacity text-left sm:text-center"
          >
            <span className="text-xl font-bold text-[#111827] block leading-none font-mono">
              {stats.workCount}
            </span>
            <span className="text-[11px] font-medium text-gray-500 mt-1 block">
              Work records
            </span>
          </button>

          <button 
            onClick={() => setCurrentTab('passport')}
            className="px-1 hover:opacity-80 transition-opacity text-left sm:text-center"
          >
            <span className="text-xl font-bold text-[#111827] block leading-none font-mono">
              {stats.skillCount}
            </span>
            <span className="text-[11px] font-medium text-gray-500 mt-1 block">
              Skills backed
            </span>
          </button>

          <button 
            onClick={() => setCurrentTab('work')}
            className="px-1 hover:opacity-80 transition-opacity text-left sm:text-center"
          >
            <span className="text-xl font-bold text-[#111827] block leading-none font-mono">
              {stats.confirmationCount}
            </span>
            <span className="text-[11px] font-medium text-gray-500 mt-1 block">
              Confirmations
            </span>
          </button>
        </div>
      </section>

      {/* 4. What should I do next? — Primary & Secondary Actions */}
      <section className="space-y-2">
        {/* Primary Action: Add Work */}
        <button
          onClick={() => setIsAddWorkOpen(true)}
          className="w-full py-3 px-4 bg-[#233B31] hover:bg-[#1E3B2B] text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all active:translate-y-[1px]"
        >
          <Plus className="w-4 h-4" />
          <span>Add Work Record</span>
        </button>

        {/* Secondary Action: Share Passport */}
        <button
          onClick={() => setIsQrModalOpen(true)}
          className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 text-[#19202A] border border-[#CBD5E1] rounded-xl font-semibold text-xs flex items-center justify-center space-x-2 transition-all active:translate-y-[1px]"
        >
          <Share2 className="w-3.5 h-3.5 text-gray-600" />
          <span>Share My Vouch Passport</span>
        </button>
      </section>

      {/* Recent Work (Only 2–3 items) */}
      <section className="space-y-2.5 pt-1">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Recent Work
          </h3>
          <button 
            onClick={() => setCurrentTab('work')}
            className="text-[11px] font-medium text-emerald-800 hover:text-emerald-950 flex items-center space-x-0.5"
          >
            <span>View all records</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {recentRecords.map((item: WorkRecord) => {
            const isConfirmed = item.status === 'CONFIRMED';
            return (
              <div 
                key={item.id}
                onClick={() => setSelectedWorkRecord(item)}
                className="bg-white p-3 rounded-xl border border-[#ECEBE8] hover:border-gray-300 cursor-pointer flex items-center justify-between transition-all"
              >
                <div className="flex items-center space-x-3 min-w-0 pr-2">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-100 shrink-0 border border-black/5">
                    <img alt={item.title} className="w-full h-full object-cover" src={item.imageUrl} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 truncate">{item.employer}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{item.date}</p>
                  </div>
                </div>

                {isConfirmed ? (
                  <span className="px-2 py-0.5 rounded-full bg-[#E9F6ED] text-[#22633C] text-[10px] font-semibold flex items-center space-x-1 shrink-0 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Confirmed</span>
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10px] font-medium shrink-0">
                    Self-added
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
