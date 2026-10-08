import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { api, ApiError, ConfirmationStatus, VerifierType } from '../services/api';
import { Check, X, HelpCircle, Shield, Building2, AlertCircle, Loader2 } from 'lucide-react';

export const VerifierModal: React.FC = () => {
  const { 
    isVerifierModalOpen, 
    setIsVerifierModalOpen, 
    activeVerifierRecord, 
    refreshData,
    worker 
  } = useApp();

  const [verifierName, setVerifierName] = useState('Anil Sharma');
  const [verifierRole, setVerifierRole] = useState('Lead Electrical Engineer');
  const [organization, setOrganization] = useState('Delta Infra Projects');
  const [relationship, setRelationship] = useState<VerifierType>('SUPERVISOR');
  const [notes, setNotes] = useState('Verified installation and insulation resistance testing under live load.');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedState, setConfirmedState] = useState<'IDLE' | 'CONFIRMED' | 'REJECTED'>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isVerifierModalOpen || !activeVerifierRecord) return null;

  const handleDecision = async (decision: ConfirmationStatus) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // 1. Check if an existing confirmation token exists for this record
      let token = activeVerifierRecord.confirmations?.find(c => c.status === 'PENDING')?.id;
      
      // If no valid token found or if it starts with mock prefix, request a fresh confirmation token from FastAPI backend
      if (!token || token.startsWith('conf_')) {
        const req = await api.requestConfirmation({
          work_record_id: activeVerifierRecord.id,
          verifier_name: verifierName.trim() || 'Site Supervisor',
          verifier_type: relationship,
        });
        token = req.token;
      }

      // 2. Submit decision to FastAPI backend: POST /api/confirmations/{token}/confirm
      await api.submitConfirmation(token, decision, notes);

      // 3. Refresh app state to recalculate confidence metrics and update statuses
      await refreshData();

      setConfirmedState(decision === 'CONFIRMED' ? 'CONFIRMED' : 'REJECTED');
      setTimeout(() => {
        setConfirmedState('IDLE');
        setIsVerifierModalOpen(false);
      }, 1200);
    } catch (err: any) {
      console.error('Failed to submit verification decision:', err);
      if (err instanceof ApiError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Could not record verification decision on backend.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-md rounded-[28px] border border-stone-300 shadow-2xl overflow-hidden flex flex-col">
        {/* Clean Header */}
        <div className="bg-[#141715] text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-[#C2672B]" />
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-300 block">
                INDEPENDENT PROVENANCE
              </span>
              <h3 className="text-sm font-bold">Vouch Work Confirmation</h3>
            </div>
          </div>
          <button
            onClick={() => {
              setIsVerifierModalOpen(false);
              setErrorMessage(null);
            }}
            className="text-white/60 hover:text-white text-lg font-bold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Verifier Body */}
        <div className="p-5 space-y-4 text-xs">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-2 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <div className="flex-1">{errorMessage}</div>
            </div>
          )}

          {/* Question Banner */}
          <div className="p-3.5 bg-[#E5EFE8] rounded-2xl border border-[#245E3F]/30">
            <p className="text-[10px] font-bold text-[#162B22] uppercase tracking-wider mb-0.5">
              Work Confirmation Request
            </p>
            <h4 className="text-sm font-bold text-[#141715]">
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
                {activeVerifierRecord.date} {activeVerifierRecord.quantity ? `· ${activeVerifierRecord.quantity} ${activeVerifierRecord.quantityUnit || 'units'}` : ''}
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
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white text-gray-900"
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
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white text-gray-900"
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
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white text-gray-900"
                  placeholder="e.g. Site Supervisor"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Relationship
                </label>
                <select
                  value={relationship}
                  onChange={e => setRelationship(e.target.value as VerifierType)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white text-gray-900"
                >
                  <option value="SUPERVISOR">Supervisor (High Provenance)</option>
                  <option value="EMPLOYER">Direct Employer (High Provenance)</option>
                  <option value="CUSTOMER">Client / Owner (Medium Provenance)</option>
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
                className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-white text-gray-900"
                placeholder="Brief comment on quality or compliance..."
              />
            </div>
          </div>

          {/* Feedback */}
          {confirmedState === 'CONFIRMED' && (
            <div className="p-3 bg-[#162B22] text-white rounded-xl text-center font-bold animate-in zoom-in-95 flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>Confirmation Recorded! Updating Skill Confidence...</span>
            </div>
          )}

          {confirmedState === 'REJECTED' && (
            <div className="p-3 bg-red-600 text-white rounded-xl text-center font-bold animate-in zoom-in-95 flex items-center justify-center space-x-2">
              <X className="w-5 h-5" />
              <span>Record Flagged as Rejected</span>
            </div>
          )}

          {/* Decision Buttons */}
          {confirmedState === 'IDLE' && (
            <div className="pt-2 flex flex-col space-y-2">
              <button
                onClick={() => handleDecision('CONFIRMED')}
                disabled={isSubmitting}
                className="w-full py-3 bg-[#162B22] hover:bg-[#102019] text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-xs transition-all active:translate-y-[1px] cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Recording Confirmation...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Confirm Work Record</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleDecision('REJECTED')}
                  disabled={isSubmitting}
                  className="py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-semibold text-xs border border-red-200 flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-50"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reject</span>
                </button>
                <button
                  onClick={() => setIsVerifierModalOpen(false)}
                  disabled={isSubmitting}
                  className="py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-50"
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

export default VerifierModal;
