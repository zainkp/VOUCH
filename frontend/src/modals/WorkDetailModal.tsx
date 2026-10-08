import React from 'react';
import { useApp } from '../context/AppContext';
import { X, CheckCircle2, ShieldCheck, MapPin, Calendar, Briefcase, FileText, Image } from 'lucide-react';

export const WorkDetailModal: React.FC = () => {
  const { 
    selectedWorkRecord, 
    setSelectedWorkRecord, 
    setActiveVerifierRecord, 
    setIsVerifierModalOpen 
  } = useApp();

  if (!selectedWorkRecord) return null;

  const isConfirmed = selectedWorkRecord.status === 'CONFIRMED';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-t-[28px] sm:rounded-[28px] border border-[#ECEBE8] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-[#ECEBE8] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h3 className="text-base font-bold text-[#111827] truncate pr-2">
              {selectedWorkRecord.title}
            </h3>
            {isConfirmed ? (
              <span className="px-2 py-0.5 rounded-full bg-[#E9F6ED] text-[#22633C] text-[10px] font-bold flex items-center space-x-1 shrink-0 border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Confirmed</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-bold shrink-0">
                Self-added
              </span>
            )}
          </div>
          <button
            onClick={() => setSelectedWorkRecord(null)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto custom-scrollbar space-y-4">
          {/* Main Hero Photo */}
          <div className="w-full h-44 rounded-2xl overflow-hidden bg-stone-200 border border-black/5 shadow-xs">
            <img
              alt={selectedWorkRecord.title}
              src={selectedWorkRecord.imageUrl}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2.5 text-xs">
            <div className="flex items-center justify-between text-gray-600">
              <span className="flex items-center space-x-1.5 font-semibold text-gray-900">
                <Briefcase className="w-3.5 h-3.5 text-gray-400" />
                <span>{selectedWorkRecord.employer} {selectedWorkRecord.role ? `(${selectedWorkRecord.role})` : ''}</span>
              </span>
              <span className="flex items-center space-x-1.5 font-mono text-[11px] text-gray-500">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{selectedWorkRecord.date}</span>
              </span>
            </div>

            <div className="flex items-center space-x-1.5 text-gray-600">
              <MapPin className="w-3.5 h-3.5 text-gray-400" />
              <span>{selectedWorkRecord.location}</span>
            </div>

            <p className="text-gray-700 pt-1 leading-relaxed">
              {selectedWorkRecord.description}
            </p>

            {/* Skills Supported relationship */}
            <div className="pt-2 border-t border-gray-100">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider block mb-1">
                Directly Supports Skills:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedWorkRecord.skills.map(s => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Attached Evidence Items with Supported Skills (Section 3) */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2.5">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-gray-900">
                Attached Evidence Items ({selectedWorkRecord.evidenceItems.length})
              </h4>
              <span className="text-[10px] text-gray-400">Auditable Proof</span>
            </div>

            <div className="space-y-2">
              {selectedWorkRecord.evidenceItems.map(ev => (
                <div
                  key={ev.id}
                  className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5 min-w-0">
                      {ev.type === 'PHOTO' ? (
                        <div className="w-9 h-9 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                          <img alt={ev.title} src={ev.url} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 text-xs truncate">{ev.title}</p>
                        <p className="text-[10px] text-gray-400">{ev.type} · {ev.timestamp}</p>
                      </div>
                    </div>
                  </div>

                  {ev.description && (
                    <p className="text-[11px] text-gray-600 pl-1">{ev.description}</p>
                  )}

                  {/* Which skills this evidence supports */}
                  <div className="text-[10px] text-stone-600 flex items-center space-x-1 pt-1 border-t border-stone-200/60">
                    <span className="text-gray-400 font-semibold">Supports:</span>
                    <span className="font-bold text-emerald-900">
                      {ev.skillsSupported.length > 0 ? ev.skillsSupported.join(', ') : selectedWorkRecord.skills.join(', ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Confirmations with Provenance (Section 4) */}
          <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-2.5">
            <h4 className="text-xs font-bold text-gray-900">
              Independent Confirmations ({selectedWorkRecord.confirmations.length})
            </h4>

            {selectedWorkRecord.confirmations.length > 0 ? (
              <div className="space-y-2">
                {selectedWorkRecord.confirmations.map(conf => (
                  <div
                    key={conf.id}
                    className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-bold text-emerald-950">
                      <span>Confirmed by: {conf.organization || 'Direct Contractor'}</span>
                      <span className="text-[10px] bg-emerald-200 text-emerald-900 px-1.5 py-0.5 rounded-full font-mono">
                        {conf.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-gray-700">
                      <span><strong>Verifier:</strong> {conf.verifierName} ({conf.verifierRole})</span>
                    </div>
                    <div className="text-[11px] text-gray-700">
                      <span><strong>Relationship:</strong> {conf.verifierType}</span>
                    </div>
                    {conf.notes && (
                      <p className="text-[11px] text-stone-600 italic pt-0.5">"{conf.notes}"</p>
                    )}
                    <p className="text-[10px] text-gray-400 font-mono">{conf.date}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4 text-xs text-gray-500 space-y-2">
                <p>No independent confirmation recorded yet.</p>
                <p className="text-[10px] text-gray-400">Independent vouching upgrades evidence from self-reported to verified.</p>
                <button
                  onClick={() => {
                    setActiveVerifierRecord(selectedWorkRecord);
                    setIsVerifierModalOpen(true);
                  }}
                  className="px-3 py-1.5 bg-[#233B31] text-white rounded-xl text-xs font-semibold hover:bg-[#1E3B2B] flex items-center space-x-1.5 mx-auto"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Simulate Supervisor Vouch</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
