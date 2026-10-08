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
    <div className="w-full max-w-5xl mx-auto space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-[#E5E1D8]">
        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight">
            Work Records & Evidence
          </h1>
          <p className="text-xs sm:text-sm text-[#737A75] mt-1">
            Documented on-site project records supporting trade competencies
          </p>
        </div>
        <button
          onClick={() => setIsAddWorkOpen(true)}
          className="self-start sm:self-auto flex items-center space-x-2 px-5 py-2.5 bg-[#1E3B2B] text-white rounded-xl text-xs font-semibold hover:bg-[#14281D] active:translate-y-[1px] transition-all shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4 text-white" />
          <span>+ Add Work Record</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 pb-2 text-xs overflow-x-auto">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            filter === 'ALL'
              ? 'bg-[#1E3B2B] text-white shadow-xs'
              : 'bg-white text-[#4A524D] hover:bg-gray-50 border border-[#E5E1D8]'
          }`}
        >
          All Records ({workRecords.length})
        </button>
        <button
          onClick={() => setFilter('CONFIRMED')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            filter === 'CONFIRMED'
              ? 'bg-[#059669] text-white shadow-xs'
              : 'bg-white text-[#4A524D] hover:bg-gray-50 border border-[#E5E1D8]'
          }`}
        >
          Confirmed ({workRecords.filter(r => r.status === 'CONFIRMED').length})
        </button>
        <button
          onClick={() => setFilter('ADDED')}
          className={`px-4 py-2 rounded-xl font-semibold transition-all cursor-pointer ${
            filter === 'ADDED'
              ? 'bg-[#121614] text-white shadow-xs'
              : 'bg-white text-[#4A524D] hover:bg-gray-50 border border-[#E5E1D8]'
          }`}
        >
          Self Added ({workRecords.filter(r => r.status !== 'CONFIRMED').length})
        </button>
      </div>

      {/* Work Records Feed */}
      <div className="space-y-4">
        {filteredRecords.map(record => {
          const isConfirmed = record.status === 'CONFIRMED';
          const photosCount = record.evidenceItems.filter(e => e.type === 'PHOTO' || e.type === 'VIDEO').length;
          const docsCount = record.evidenceItems.filter(e => e.type !== 'PHOTO' && e.type !== 'VIDEO').length;
          const confsCount = record.confirmations.filter(c => c.status === 'CONFIRMED').length;

          return (
            <div
              key={record.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E5E1D8] shadow-xs hover:border-[#1E3B2B]/40 transition-all flex flex-col space-y-4"
            >
              <div 
                onClick={() => setSelectedWorkRecord(record)}
                className="flex items-start space-x-4 cursor-pointer"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#EFECE6] shrink-0 border border-[#E5E1D8]">
                  <img
                    alt={record.title}
                    src={record.imageUrl}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-[#121614] truncate pr-1">
                      {record.title}
                    </h3>
                    {isConfirmed ? (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#E9F6ED] text-[#22633C] text-[11px] font-bold flex items-center space-x-1 shrink-0 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Confirmed</span>
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold flex items-center space-x-1 shrink-0 border border-amber-200">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span>Needs Vouch</span>
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-[#4A524D] truncate mt-1">
                    {record.employer} · {record.location}
                  </p>
                  <p className="text-xs text-[#737A75] mt-0.5">
                    {record.date} {record.quantity ? `· ${record.quantity} ${record.quantityUnit}` : ''}
                  </p>
                </div>
              </div>

              {/* Skills Supported relationship */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] text-xs space-y-1.5">
                <span className="text-[11px] font-mono uppercase font-bold text-[#737A75] tracking-wider block">
                  Demonstrates Skills:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {record.skills.map(s => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-[#EBF6EE] text-[#1E3B2B] text-xs font-bold border border-[#059669]/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence & Confirmation counts */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-[#ECE8E0] text-xs gap-3">
                <div className="flex items-center space-x-3 text-[#4A524D] font-medium">
                  <span className="flex items-center space-x-1.5">
                    <Image className="w-3.5 h-3.5 text-[#737A75]" />
                    <span>{photosCount} photos</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#737A75]" />
                    <span>{docsCount} docs</span>
                  </span>
                  <span>·</span>
                  <span className="text-[#059669] font-semibold">{confsCount} supervisor vouches</span>
                </div>

                <div className="flex items-center space-x-3 self-end sm:self-auto">
                  {!isConfirmed && (
                    <button
                      onClick={() => {
                        setActiveVerifierRecord(record);
                        setIsVerifierModalOpen(true);
                      }}
                      className="flex items-center space-x-1.5 text-emerald-800 font-bold hover:underline bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>Simulate Vouch</span>
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedWorkRecord(record)}
                    className="text-[#121614] hover:text-[#1E3B2B] font-semibold flex items-center space-x-1 cursor-pointer py-1"
                  >
                    <span>View audit record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkTab;
