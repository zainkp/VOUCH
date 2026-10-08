import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  QrCode, 
  Shield, 
  CheckCircle2, 
  Share2, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Languages, 
  FileText, 
  Image, 
  ExternalLink 
} from 'lucide-react';
import { SkillConfidenceLevel } from '../types';

export const PassportTab: React.FC = () => {
  const { worker, skills, workRecords, stats, setIsQrModalOpen, setSelectedWorkRecord } = useApp();
  const [expandedSkillId, setExpandedSkillId] = useState<string | null>('skill_wiring');

  const getConfidenceBadge = (level: SkillConfidenceLevel) => {
    switch (level) {
      case 'HIGH':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-emerald-100 text-emerald-900 border border-emerald-300">
            HIGH CONFIDENCE
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-amber-100 text-amber-900 border border-amber-300">
            MEDIUM CONFIDENCE
          </span>
        );
      case 'LOW':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-stone-100 text-stone-700 border border-stone-300">
            NEEDS EVIDENCE
          </span>
        );
    }
  };

  return (
    <div className="flex-1 px-4 sm:px-5 pb-8 pt-3 space-y-4">
      {/* Top Header & Minimal Share Action */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-900 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-full border border-emerald-300/60 inline-block">
            Worker-Owned Professional Record
          </span>
          <h2 className="text-xl font-bold text-[#111827] mt-0.5">Vouch Professional Passport</h2>
        </div>
        <button
          onClick={() => setIsQrModalOpen(true)}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#233B31] text-white rounded-xl text-xs font-semibold hover:bg-[#1E3B2B] active:translate-y-[1px] transition-all shadow-xs"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>Share</span>
        </button>
      </div>

      {/* 1. PERSON: Worker Portable Identity Card */}
      <div className="bg-white rounded-[22px] border border-[#CBD5E1] shadow-xs overflow-hidden">
        {/* Clean Neutral Header */}
        <div className="bg-[#1E293B] text-white px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs font-bold tracking-wider text-emerald-300">
              VOUCH PASSPORT
            </span>
          </div>
          <span className="font-mono text-[11px] text-gray-300">
            {worker.passportId}
          </span>
        </div>

        <div className="p-4 bg-stone-50/50 space-y-3">
          <div className="flex items-start space-x-3.5">
            <div className="w-20 h-24 rounded-xl overflow-hidden shrink-0 border border-stone-300 bg-stone-200 shadow-xs">
              <img
                alt={worker.name}
                className="w-full h-full object-cover"
                src={worker.portraitUrl}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-extrabold text-[#111827] uppercase tracking-wide truncate">
                {worker.name}
              </h3>
              <p className="text-xs font-bold text-emerald-800">
                {worker.trade} · {worker.experienceYears} Years Documented Exp
              </p>
              
              <div className="mt-2 space-y-1 text-xs text-gray-600">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>{worker.location}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Languages className="w-3 h-3 text-gray-400 shrink-0" />
                  <span>Languages: {worker.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Portability Notice */}
          <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-gray-600">
            <span>Passport Completeness: <strong className="text-emerald-900 font-mono">{stats.passportCompleteness}%</strong></span>
            <span className="text-gray-500 font-medium italic">Worker-Owned Record</span>
          </div>
        </div>
      </div>

      {/* 2. SKILLS: Skill-Specific Evidence Confidence (Section 1 Core) */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs space-y-3">
        <div>
          <h3 className="text-sm font-bold text-[#111827]">Demonstrated Skills</h3>
          <p className="text-[11px] text-gray-500">
            Evidence confidence is measured from verified jobsite records, not generic star ratings.
          </p>
        </div>

        <div className="space-y-2.5">
          {skills.map(skill => {
            const isExpanded = expandedSkillId === skill.id;
            const relevantRecords = workRecords.filter(r => r.skills.includes(skill.name));

            return (
              <div
                key={skill.id}
                className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-stone-50/40"
              >
                {/* Header row */}
                <div
                  onClick={() => setExpandedSkillId(isExpanded ? null : skill.id)}
                  className="p-3.5 hover:bg-stone-100/60 cursor-pointer flex items-start justify-between"
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center space-x-2 mb-1 flex-wrap gap-y-1">
                      <span className="text-sm font-bold text-gray-900">{skill.name}</span>
                      {getConfidenceBadge(skill.confidenceLevel)}
                    </div>
                    {/* Explainable evidence string */}
                    <p className="text-xs text-gray-600 font-medium">
                      {skill.explanation}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-800 text-xs font-semibold pt-0.5 shrink-0">
                    <span>{isExpanded ? 'Hide' : 'View evidence'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </div>
                </div>

                {/* Explainable evidence accordion */}
                {isExpanded && (
                  <div className="p-3.5 bg-white border-t border-stone-200 text-xs space-y-3">
                    <p className="text-[11px] text-gray-600 italic">
                      "{skill.description}"
                    </p>

                    {/* Supporting records list */}
                    <div className="space-y-2">
                      <p className="font-bold text-gray-800 text-[11px] uppercase tracking-wider">
                        Supporting Work Records ({relevantRecords.length}):
                      </p>
                      {relevantRecords.map(r => (
                        <div
                          key={r.id}
                          onClick={() => setSelectedWorkRecord(r)}
                          className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 hover:border-gray-400 cursor-pointer flex items-center justify-between"
                        >
                          <div className="min-w-0 pr-2">
                            <p className="font-bold text-gray-900 truncate text-xs">{r.title}</p>
                            <p className="text-[11px] text-gray-500">
                              {r.employer} · {r.date}
                            </p>
                          </div>
                          {r.status === 'CONFIRMED' ? (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200 shrink-0">
                              Confirmed ✓
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[10px] shrink-0">
                              Self-added
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Why confidence is rated */}
                    <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-200 text-[11px] text-emerald-950 space-y-1">
                      <p className="font-bold">Why is this {skill.confidenceLevel.toLowerCase()} confidence?</p>
                      <p className="text-stone-700">
                        {skill.supervisorConfirmationsCount > 0
                          ? `Backed by ${skill.supervisorConfirmationsCount} direct supervisor confirmations and ${skill.evidenceCount} verified photos/documents from active jobsites.`
                          : 'Currently supported by worker declaration with minimal independent verifications. Additional confirmations will increase confidence.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. WORK HISTORY: Portable Experience across Multiple Employers/Clients */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#111827]">Work History</h3>
            <p className="text-[11px] text-gray-500">
              Portable project record across contractors and companies
            </p>
          </div>
          <span className="text-xs font-mono text-gray-400">{workRecords.length} records</span>
        </div>

        <div className="space-y-2">
          {workRecords.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedWorkRecord(item)}
              className="p-3 rounded-xl bg-stone-50/70 border border-stone-200 hover:border-gray-400 cursor-pointer flex items-center justify-between transition-all"
            >
              <div className="flex items-center space-x-3 min-w-0 pr-2">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                  <img alt={item.title} src={item.imageUrl} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-gray-900 text-xs truncate">{item.title}</p>
                  <p className="text-[11px] text-gray-600 truncate">
                    {item.employer} {item.role ? `· ${item.role}` : ''}
                  </p>
                  <p className="text-[10px] text-gray-400">{item.date} · {item.location}</p>
                </div>
              </div>

              {item.status === 'CONFIRMED' ? (
                <span className="px-2 py-0.5 rounded-full bg-[#E9F6ED] text-[#22633C] text-[10px] font-bold shrink-0 border border-emerald-200 flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Vouched</span>
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 text-[10px] shrink-0">
                  Self-added
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. CONFIRMATIONS: Provenance Model */}
      <div className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs space-y-3">
        <div>
          <h3 className="text-sm font-bold text-[#111827]">Independent Confirmations</h3>
          <p className="text-[11px] text-gray-500">
            Confirmations from supervisors carry higher evidentiary weight than self-reporting.
          </p>
        </div>

        <div className="space-y-2">
          {workRecords
            .flatMap(r => r.confirmations)
            .filter(c => c.status === 'CONFIRMED')
            .map(conf => (
              <div
                key={conf.id}
                className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-xs space-y-1.5"
              >
                <div className="flex items-center justify-between font-bold text-emerald-950">
                  <span>{conf.verifierName} ({conf.verifierRole})</span>
                  <span className="text-[10px] bg-emerald-200/80 text-emerald-900 px-2 py-0.5 rounded-full">
                    {conf.verifierType}
                  </span>
                </div>
                <div className="text-[11px] text-stone-700">
                  <span className="font-semibold">{conf.organization}</span> · Work: {conf.workTitle}
                </div>
                {conf.notes && (
                  <p className="text-[11px] text-stone-600 italic">"{conf.notes}"</p>
                )}
                <p className="text-[10px] text-gray-400 font-mono">{conf.date}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Primary Share Action */}
      <button
        onClick={() => setIsQrModalOpen(true)}
        className="w-full py-3.5 bg-[#233B31] text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-sm hover:bg-[#1E3B2B] active:translate-y-[1px] transition-all"
      >
        <Share2 className="w-4 h-4" />
        <span>Share My Vouch Passport (QR & Link)</span>
      </button>
    </div>
  );
};
