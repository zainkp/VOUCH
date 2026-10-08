import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Check, X, HelpCircle, Shield, Building2 } from 'lucide-react';

export const VerifierModal: React.FC = () => {
  const { 
    isVerifierModalOpen, 
    setIsVerifierModalOpen, 
    activeVerifierRecord, 
    confirmWorkRecord, 
    rejectWorkRecord,
    worker 
  } = useApp();

  const [verifierName, setVerifierName] = useState('Anil Sharma');
  const [verifierRole, setVerifierRole] = useState('Lead Electrical Engineer');
  const [organization, setOrganization] = useState('Delta Infra Projects');
  const [relationship, setRelationship] = useState('SUPERVISOR');
  const [notes, setNotes] = useState('Verified installation and insulation resistance testing under live load.');
  const [confirmedState, setConfirmedState] = useState<'IDLE' | 'CONFIRMED' | 'REJECTED'>('IDLE');

  if (!isVerifierModalOpen || !activeVerifierRecord) return null;

  const handleConfirm = () => {
    confirmWorkRecord(
      activeVerifierRecord.id, 
      verifierName, 
      verifierRole, 
      organization, 
      notes
    );
    setConfirmedState('CONFIRMED');
    setTimeout(() => {
      setConfirmedState('IDLE');
      setIsVerifierModalOpen(false);
    }, 1200);
  };

  const handleReject = () => {
    rejectWorkRecord(activeVerifierRecord.id, verifierName);
    setConfirmedState('REJECTED');
    setTimeout(() => {
      setConfirmedState('IDLE');
      setIsVerifierModalOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-[28px] border border-stone-300 shadow-2xl overflow-hidden flex flex-col">
        {/* Clean Header */}
        <div className="bg-[#1E293B] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-emerald-400" />
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">
                INDEPENDENT PROVENANCE
              </span>
              <h3 className="text-sm font-bold">Vouch Work Confirmation</h3>
            </div>
          </div>
          <button
            onClick={() => setIsVerifierModalOpen(false)}
            className="text-white/60 hover:text-white text-lg font-bold p-1"
          >
            ✕
          </button>
        </div>

        {/* Verifier Body */}
        <div className="p-5 space-y-4 text-xs">
          {/* Question Banner */}
          <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200">
            <p className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider mb-0.5">
              Work Confirmation Request
            </p>
            <h4 className="text-sm font-bold text-[#111827]">
              Did {worker.name} perform this work?
            </h4>
            <p className="text-[11px] text-gray-600 mt-1">
              Independent confirmations from supervisors carry higher evidentiary weight than self-reported claims.
            </p>
          </div>

          {/* Work Summary */}
          <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">Worker:</span>
              <span className="font-bold text-gray-900">{worker.name} ({worker.trade})</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">Work:</span>
              <span className="font-bold text-gray-900">{activeVerifierRecord.title}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">Scope:</span>
              <span className="font-medium text-gray-800">
                {activeVerifierRecord.date} {activeVerifierRecord.quantity ? `· ${activeVerifierRecord.quantity} ${activeVerifierRecord.quantityUnit}` : ''}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 font-medium">Location:</span>
              <span className="font-medium text-gray-800">{activeVerifierRecord.location}</span>
            </div>
          </div>

          {/* Provenance Details Form */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Confirmed By (Name)
                </label>
                <input
                  type="text"
                  value={verifierName}
                  onChange={e => setVerifierName(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white"
                  placeholder="e.g. Anil Sharma"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white"
                  placeholder="e.g. Delta Infra Projects"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Your Role
                </label>
                <input
                  type="text"
                  value={verifierRole}
                  onChange={e => setVerifierRole(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white"
                  placeholder="e.g. Site Supervisor"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Relationship
                </label>
                <select
                  value={relationship}
                  onChange={e => setRelationship(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white"
                >
                  <option value="SUPERVISOR">Supervisor (High Provenance)</option>
                  <option value="EMPLOYER">Direct Employer (High Provenance)</option>
                  <option value="CUSTOMER">Client / Owner (Medium Provenance)</option>
                  <option value="COLLEAGUE">Co-Worker (Low Provenance)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-gray-700 block mb-1">
                Verification Note
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white"
                placeholder="Brief comment on quality or compliance..."
              />
            </div>
          </div>

          {/* Feedback */}
          {confirmedState === 'CONFIRMED' && (
            <div className="p-3 bg-emerald-700 text-white rounded-xl text-center font-bold animate-in zoom-in-95 flex items-center justify-center space-x-2">
              <Check className="w-5 h-5" />
              <span>Confirmation Recorded! Updating Skill Confidence...</span>
            </div>
          )}

          {confirmedState === 'REJECTED' && (
            <div className="p-3 bg-red-600 text-white rounded-xl text-center font-bold animate-in zoom-in-95 flex items-center justify-center space-x-2">
              <X className="w-5 h-5" />
              <span>Record Flagged for Review</span>
            </div>
          )}

          {/* Decision Buttons */}
          {confirmedState === 'IDLE' && (
            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={handleConfirm}
                className="w-full py-3 bg-[#233B31] hover:bg-[#1E3B2B] text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all active:translate-y-[1px]"
              >
                <Check className="w-4 h-4" />
                <span>Confirm Work Record</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleReject}
                  className="py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-semibold text-xs border border-red-200 flex items-center justify-center space-x-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reject</span>
                </button>
                <button
                  onClick={() => setIsVerifierModalOpen(false)}
                  className="py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Not Sure</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
