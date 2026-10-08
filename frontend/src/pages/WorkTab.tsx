import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { WorkRecord } from '../types';
import { Plus, CheckCircle2, Clock, ShieldCheck, Image, FileText, ArrowRight } from 'lucide-react';

export const WorkTab: React.FC = () => {
  const { 
    workRecords, 
    setSelectedWorkRecord, 
    setIsAddWorkOpen, 
    setActiveVerifierRecord, 
    setIsVerifierModalOpen 
  } = useApp();
  
  const [filter, setFilter] = useState<'ALL' | 'CONFIRMED' | 'ADDED'>('ALL');

  const filteredRecords = workRecords.filter(r => {
    if (filter === 'CONFIRMED') return r.status === 'CONFIRMED';
    if (filter === 'ADDED') return r.status !== 'CONFIRMED';
    return true;
  });

  return (
    <div className="flex-1 px-4 sm:px-5 pb-6 pt-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-[#111827]">Work Records & Evidence</h2>
          <p className="text-xs text-[#717A88]">
            Evidence items directly support specific skills
          </p>
        </div>
        <button
          onClick={() => setIsAddWorkOpen(true)}
          className="flex items-center space-x-1.5 px-3 py-2 bg-[#233B31] text-white rounded-xl text-xs font-semibold hover:bg-[#1E3B2B] active:translate-y-[1px] transition-all shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add Work</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 border-b border-[#ECEBE8] pb-2 text-xs">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
            filter === 'ALL'
              ? 'bg-[#233B31] text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          All ({workRecords.length})
        </button>
        <button
          onClick={() => setFilter('CONFIRMED')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
            filter === 'CONFIRMED'
              ? 'bg-[#059669] text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Confirmed ({workRecords.filter(r => r.status === 'CONFIRMED').length})
        </button>
        <button
          onClick={() => setFilter('ADDED')}
          className={`px-3 py-1.5 rounded-full font-medium transition-colors ${
            filter === 'ADDED'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Self Added ({workRecords.filter(r => r.status !== 'CONFIRMED').length})
        </button>
      </div>

      {/* Work Records Feed */}
      <div className="space-y-3">
        {filteredRecords.map(record => {
          const isConfirmed = record.status === 'CONFIRMED';
          const photosCount = record.evidenceItems.filter(e => e.type === 'PHOTO' || e.type === 'VIDEO').length;
          const docsCount = record.evidenceItems.filter(e => e.type !== 'PHOTO' && e.type !== 'VIDEO').length;
          const confsCount = record.confirmations.filter(c => c.status === 'CONFIRMED').length;

          return (
            <div
              key={record.id}
              className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs hover:border-gray-300 transition-all flex flex-col space-y-3"
            >
              <div 
                onClick={() => setSelectedWorkRecord(record)}
                className="flex items-start space-x-3 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-black/5">
                  <img
                    alt={record.title}
                    src={record.imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-bold text-[#111827] truncate pr-1">
                      {record.title}
                    </h3>
                    {isConfirmed ? (
                      <span className="px-2 py-0.5 rounded-full bg-[#E9F6ED] text-[#22633C] text-[10px] font-semibold flex items-center space-x-1 shrink-0 border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>Confirmed</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-semibold flex items-center space-x-1 shrink-0 border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>Needs Vouch</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-gray-600 truncate mt-0.5">
                    {record.employer} · {record.location}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    {record.date} {record.quantity ? `· ${record.quantity} ${record.quantityUnit}` : ''}
                  </p>
                </div>
              </div>

              {/* Skills Supported relationship (Core Product Model) */}
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block">
                  Supports Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {record.skills.map(s => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence & Confirmation counts */}
              <div className="flex items-center justify-between pt-1 border-t border-gray-100 text-[11px]">
                <div className="flex items-center space-x-3 text-gray-600 font-medium">
                  <span className="flex items-center space-x-1">
                    <Image className="w-3.5 h-3.5 text-gray-400" />
                    <span>{photosCount} photos</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <FileText className="w-3.5 h-3.5 text-gray-400" />
                    <span>{docsCount} docs</span>
                  </span>
                  <span>· {confsCount} supervisor vouch</span>
                </div>

                {!isConfirmed ? (
                  <button
                    onClick={() => {
                      setActiveVerifierRecord(record);
                      setIsVerifierModalOpen(true);
                    }}
                    className="flex items-center space-x-1 text-emerald-800 font-bold hover:underline bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Simulate Vouch</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedWorkRecord(record)}
                    className="text-gray-600 hover:text-gray-900 font-semibold flex items-center space-x-0.5"
                  >
                    <span>Audit trail</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
