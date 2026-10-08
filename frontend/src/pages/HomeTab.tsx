import React from 'react';
import { useApp } from '../context/AppContext';
import { WorkRecord, SkillEvidenceBreakdown } from '../types';
import { 
  Plus, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ExternalLink,
  QrCode,
  FileCheck2,
  Clock
} from 'lucide-react';

export const HomeTab: React.FC = () => {
  const { 
    worker, 
    workRecords, 
    skills,
    stats, 
    setCurrentTab, 
    setIsAddWorkOpen, 
    setIsQrModalOpen,
    setSelectedWorkRecord 
  } = useApp();

  const recentRecords = workRecords.slice(0, 3);

  // Confidence level badge helper based strictly on evidence (no percentages, no stars)
  const renderConfidenceBadge = (level: 'HIGH' | 'MEDIUM' | 'LOW') => {
    switch (level) {
      case 'HIGH':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#EBF6EE] text-[#059669] border border-[#059669]/20">
            HIGH CONFIDENCE
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#FEF6EE] text-[#C27A38] border border-[#C27A38]/25">
            BUILDING EVIDENCE
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#F4F1EA] text-[#737A75] border border-[#E5E1D8]">
            NEEDS EVIDENCE
          </span>
        );
    }
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* 1. Header Greeting & Primary Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#E5E1D8]">
        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight">
            Good morning, {worker.name.split(' ')[0]}.
          </h1>
          <p className="text-sm sm:text-base text-[#4A524D] mt-1 flex items-center space-x-2">
            <span>{worker.trade}</span>
            <span>·</span>
            <span>{worker.experienceYears} years experience</span>
            <span>·</span>
            <span>{worker.location.split(',')[0]}</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsAddWorkOpen(true)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#1E3B2B] hover:bg-[#14281D] text-white text-sm font-semibold transition-all shadow-xs cursor-pointer active:scale-[0.99]"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>+ Add Work</span>
          </button>
        </div>
      </div>

      {/* 2. Primary Professional Passport Section (Editorial / Identity Object) */}
      <section className="bg-white rounded-3xl border border-[#E5E1D8] shadow-xs overflow-hidden">
        {/* Passport Category Header */}
        <div className="px-6 sm:px-8 py-3.5 bg-[#121614] text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-4 h-4 text-[#C27A38]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FAF8F5]">
              YOUR VOUCH PASSPORT
            </span>
          </div>
          <span className="text-xs font-mono text-white/70">
            {worker.passportId}
          </span>
        </div>

        {/* Passport Content Body */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Identity Info */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border border-[#E5E1D8] bg-[#EFECE6] shrink-0 shadow-xs">
                <img
                  src={worker.portraitUrl}
                  alt={worker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase text-[#059669] font-semibold bg-[#EBF6EE] px-2.5 py-0.5 rounded-md border border-[#059669]/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Worker-Owned Professional Identity</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight">
                  {worker.name}
                </h2>
                <p className="text-base font-semibold text-[#1E3B2B]">
                  {worker.trade}
                </p>
                <p className="text-sm text-[#737A75] flex items-center space-x-2">
                  <span>{worker.experienceYears} years experience</span>
                  <span>·</span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#737A75]" />
                    <span>{worker.location}</span>
                  </span>
                </p>
              </div>
            </div>

            {/* Credential Breakdown & View Passport Action */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E5E1D8] flex flex-col justify-between space-y-5">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold mb-3">
                  Documented Identity Summary
                </p>
                <div className="grid grid-cols-3 gap-2 text-left">
                  <div>
                    <span className="font-display font-extrabold text-2xl text-[#121614] block">
                      {stats.skillCount}
                    </span>
                    <span className="text-xs text-[#737A75]">
                      Skills
                    </span>
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-2xl text-[#121614] block">
                      {stats.workCount}
                    </span>
                    <span className="text-xs text-[#737A75]">
                      Work Records
                    </span>
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-2xl text-[#059669] block">
                      {stats.confirmationCount}
                    </span>
                    <span className="text-xs text-[#737A75]">
                      Confirmations
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-2">
                <button
                  onClick={() => setCurrentTab('passport')}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#1E3B2B] hover:bg-[#14281D] text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>View Passport</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsQrModalOpen(true)}
                  className="py-2.5 px-3 rounded-xl border border-[#E5E1D8] bg-white hover:bg-gray-50 text-[#121614] text-xs font-medium flex items-center space-x-1 transition-colors cursor-pointer"
                  title="Share Passport QR"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#1E3B2B]" />
                  <span className="hidden sm:inline">Share</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Understated Professional Record Section */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
          YOUR PROFESSIONAL RECORD
        </h3>

        <div className="bg-white rounded-2xl border border-[#E5E1D8] p-6 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E1D8]">
            
            <button
              onClick={() => setCurrentTab('work')}
              className="py-3 sm:py-0 sm:px-6 text-left hover:opacity-80 transition-opacity cursor-pointer group first:sm:pl-0"
            >
              <span className="text-xs font-medium text-[#737A75] block group-hover:text-[#1E3B2B]">
                Work Records
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614] mt-1 block">
                {stats.workCount}
              </span>
              <span className="text-[11px] text-[#A1A7A2] mt-0.5 block">
                Independent jobsite logs on file →
              </span>
            </button>

            <button
              onClick={() => setCurrentTab('passport')}
              className="py-3 sm:py-0 sm:px-6 text-left hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <span className="text-xs font-medium text-[#737A75] block group-hover:text-[#1E3B2B]">
                Skills
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#121614] mt-1 block">
                {stats.skillCount}
              </span>
              <span className="text-[11px] text-[#A1A7A2] mt-0.5 block">
                Demonstrated trade competencies →
              </span>
            </button>

            <button
              onClick={() => setCurrentTab('work')}
              className="py-3 sm:py-0 sm:px-6 text-left hover:opacity-80 transition-opacity cursor-pointer group last:sm:pr-0"
            >
              <span className="text-xs font-medium text-[#737A75] block group-hover:text-[#1E3B2B]">
                Confirmations
              </span>
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#059669] mt-1 block">
                {stats.confirmationCount}
              </span>
              <span className="text-[11px] text-[#A1A7A2] mt-0.5 block">
                Independent supervisor vouches →
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* 4. Two-Column Workspace: Recent Work & Demonstrated Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Recent Work Records */}
        <section className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
              RECENT WORK
            </h3>
            <button
              onClick={() => setCurrentTab('work')}
              className="text-xs font-semibold text-[#1E3B2B] hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>View all records</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {recentRecords.map((item: WorkRecord) => {
              const isConfirmed = item.status === 'CONFIRMED';
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[#E5E1D8] p-5 shadow-xs hover:border-[#1E3B2B]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start space-x-4 min-w-0">
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#EFECE6] shrink-0 border border-[#E5E1D8]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-[#121614] truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#737A75] mt-0.5">
                        {item.location} · {item.date}
                      </p>
                      <p className="text-xs text-[#4A524D] mt-1 flex items-center space-x-1.5">
                        <FileCheck2 className="w-3.5 h-3.5 text-[#059669]" />
                        <span>
                          {item.evidenceItems.length} evidence items · {isConfirmed ? 'Confirmed by supervisor' : 'Awaiting confirmation'}
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedWorkRecord(item)}
                    className="self-end sm:self-center px-4 py-2 rounded-xl border border-[#E5E1D8] hover:border-[#1E3B2B] bg-[#FAF8F5] hover:bg-white text-xs font-semibold text-[#121614] transition-all cursor-pointer shrink-0"
                  >
                    View Record
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Right Column: Demonstrated Skills (Evidence-backed, no stars/percentages) */}
        <section className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#737A75] font-semibold">
              DEMONSTRATED SKILLS
            </h3>
            <button
              onClick={() => setCurrentTab('passport')}
              className="text-xs font-semibold text-[#1E3B2B] hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>View in passport</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {skills.slice(0, 4).map((skill: SkillEvidenceBreakdown) => (
              <div
                key={skill.id}
                className="bg-white rounded-2xl border border-[#E5E1D8] p-5 shadow-xs hover:border-[#1E3B2B]/40 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#121614]">
                    {skill.name}
                  </h4>
                  {renderConfidenceBadge(skill.confidenceLevel)}
                </div>

                <div className="pt-2 border-t border-[#ECE8E0] text-xs text-[#737A75] flex items-center justify-between flex-wrap gap-2">
                  <span>{skill.workRecordsCount} work records</span>
                  <span>·</span>
                  <span>{skill.evidenceCount} evidence items</span>
                  <span>·</span>
                  <span className="font-medium text-[#059669]">
                    {skill.confirmationsCount} confirmations
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
};

export default HomeTab;
