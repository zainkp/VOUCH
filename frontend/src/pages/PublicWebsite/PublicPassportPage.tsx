import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { api, ApiError, PassportDataResponse } from '../../services/api';
import { 
  mapWorkerProfile, 
  mapWorkRecord, 
  mapSkillConfidence 
} from '../../services/adapters';
import { 
  WorkerProfile, 
  WorkRecord, 
  SkillEvidenceBreakdown 
} from '../../types';
import { 
  ShieldCheck, 
  ArrowLeft, 
  QrCode, 
  Share2, 
  Printer, 
  CheckCircle2, 
  FileText,
  Calendar,
  ExternalLink,
  Loader2,
  AlertCircle
} from 'lucide-react';

export const PublicPassportPage: React.FC = () => {
  const { worker: fallbackWorker, workRecords: fallbackWorks, skills: fallbackSkills } = useApp();
  const { id, slug } = useParams<{ id?: string; slug?: string }>();

  const targetSlug = slug || id || 'ravi-kumar-82a7';

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [passportWorker, setPassportWorker] = useState<WorkerProfile>(fallbackWorker);
  const [passportWorks, setPassportWorks] = useState<WorkRecord[]>(fallbackWorks);
  const [passportSkills, setPassportSkills] = useState<SkillEvidenceBreakdown[]>(fallbackSkills);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPassport = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data: PassportDataResponse = await api.getPassport(targetSlug);
        const mappedWorks = (data.work_history || []).map(mapWorkRecord);
        const mappedWorker = mapWorkerProfile(data.worker);
        const mappedSkills = (data.demonstrated_skills || []).map((s, idx) => 
          mapSkillConfidence(s, idx)
        );

        setPassportWorker(mappedWorker);
        setPassportWorks(mappedWorks);
        setPassportSkills(mappedSkills.length > 0 ? mappedSkills : fallbackSkills);
      } catch (err: any) {
        console.warn('Could not fetch passport from API slug, falling back to local state:', err);
        // If not found on backend or error, gracefully display fallback context
        setPassportWorker(fallbackWorker);
        setPassportWorks(fallbackWorks);
        setPassportSkills(fallbackSkills);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPassport();
  }, [targetSlug, fallbackWorker, fallbackWorks, fallbackSkills]);

  const displayPassportId = passportWorker.passportId || `VOUCH-${targetSlug.toUpperCase()}`;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F0E6] text-[#202322] flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-3xl border border-[#E2DDD2] p-8 text-center space-y-4 max-w-sm w-full shadow-xs">
          <Loader2 className="w-8 h-8 text-[#173F4F] animate-spin mx-auto" />
          <div className="space-y-1">
            <h2 className="font-display font-bold text-lg text-[#202322]">
              Loading VOUCH Passport...
            </h2>
            <p className="text-xs text-[#737A75]">
              Retrieving cryptographic credential and verified evidence ledger.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F0E6] text-[#202322] flex flex-col font-sans selection:bg-[#173F4F] selection:text-white">
      {/* Top Navigation Banner */}
      <header className="bg-white border-b border-[#E2DDD2] sticky top-0 z-40 px-4 py-3 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#173F4F] hover:text-[#0E2934] py-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to Vouch Official Website</span>
          </Link>

          <div className="flex items-center space-x-2.5">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-lg border border-[#E2DDD2] text-xs font-semibold hover:bg-gray-50 flex items-center space-x-1.5 cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#173F4F]" />
              <span>{copied ? 'Link Copied!' : 'Share Passport'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex px-3 py-1.5 rounded-lg border border-[#E2DDD2] text-xs font-semibold hover:bg-gray-50 items-center space-x-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#173F4F]" />
              <span>Print Credential</span>
            </button>
            <Link
              to="/worker"
              className="px-3.5 py-1.5 rounded-lg bg-[#173F4F] text-white text-xs font-semibold hover:bg-[#0E2934] transition-colors cursor-pointer"
            >
              Open in App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Passport Document Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-8 my-4 sm:my-8">
        <div className="bg-[#FFDFF7] rounded-3xl border-2 border-[#173F4F] shadow-[0_20px_50px_rgba(18,22,20,0.08)] overflow-hidden">
          
          {/* Official Security Header */}
          <div className="bg-[#173F4F] text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
                <ShieldCheck className="w-7 h-7 text-[#C45B3C]" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-300 block">
                  GOVERNMENT OF INDIA · VOCATIONAL EVIDENCE PASSPORT
                </span>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                  {passportWorker.name}
                </h1>
                <p className="text-xs text-[#F4F0E6]/80 mt-0.5">
                  Passport ID: {displayPassportId} · Issued Mangaluru Center
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                VERIFIED CREDENTIAL
              </span>
              <span className="text-white/70 mt-1 text-[11px]">
                Evidence Completeness: {passportWorker.passportCompleteness}%
              </span>
            </div>
          </div>

          {/* Primary Identity Section */}
          <div className="p-6 sm:p-10 border-b border-[#E2DDD2] guilloche-pattern">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              <div className="sm:col-span-3 flex justify-center sm:justify-start">
                <div className="w-32 h-40 rounded-xl overflow-hidden border-2 border-[#173F4F] shadow-md bg-gray-100 relative">
                  <img
                    src={passportWorker.avatarUrl}
                    alt={passportWorker.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-white/90 px-1 py-0.5 rounded text-[8px] font-mono font-bold text-[#173F4F]">
                    BIOMETRIC ID
                  </div>
                </div>
              </div>

              <div className="sm:col-span-6 space-y-2">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Trade</span>
                    <span className="font-bold text-sm text-[#173F4F]">{passportWorker.trade}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Experience</span>
                    <span className="font-bold text-sm text-[#202322]">{passportWorker.experienceYears} Years Documented</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Base Location</span>
                    <span className="font-medium text-[#202322]">{passportWorker.location}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#737A75] uppercase block">Languages</span>
                    <span className="font-medium text-[#202322]">{passportWorker.languages?.join(' · ') || 'Kannada · Hindi · English'}</span>
                  </div>
                </div>
                <p className="text-xs text-[#4A524D] bg-[#F4F0E6] p-3 rounded-xl border border-[#E2DDD2] mt-2">
                  {passportWorker.bio}
                </p>
              </div>

              <div className="sm:col-span-3 flex flex-col items-center justify-center p-3 bg-[#F4F0E6] rounded-xl border border-[#E2DDD2] text-center">
                <div className="w-20 h-20 bg-white p-1 rounded-lg border border-[#E2DDD2] flex items-center justify-center mb-1">
                  <QrCode className="w-16 h-16 text-[#173F4F]" />
                </div>
                <span className="text-[9px] font-mono uppercase text-[#737A75]">
                  Live Digital Proof
                </span>
              </div>

            </div>
          </div>

          {/* Calibrated Skills List */}
          <div className="p-6 sm:p-10 border-b border-[#E2DDD2]">
            <h2 className="font-display font-bold text-lg text-[#202322] mb-4">
              DEMONSTRATED SKILLS CONFIDENCE
            </h2>
            <div className="space-y-3">
              {passportSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl border border-[#E2DDD2] bg-[#F4F0E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <h3 className="font-bold text-sm text-[#202322]">{skill.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        skill.confidenceLevel === 'HIGH'
                          ? 'bg-[#EDF4F0] text-[#3E6B52] border border-[#3E6B52]/20'
                          : 'bg-[#FEF3C7] text-[#B45309] border border-[#B45309]/20'
                      }`}>
                        {skill.confidenceLevel} CONFIDENCE
                      </span>
                    </div>
                    <p className="text-xs text-[#737A75] mt-1">{skill.description}</p>
                  </div>
                  <div className="text-xs font-mono text-[#4A524D] shrink-0 sm:text-right">
                    <span>{skill.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Confirmed Work Records */}
          <div className="p-6 sm:p-10">
            <h2 className="font-display font-bold text-lg text-[#202322] mb-4">
              VERIFIED WORK LEDGER ({passportWorks.length} ENTRIES)
            </h2>
            <div className="space-y-3">
              {passportWorks.slice(0, 6).map((record) => (
                <div
                  key={record.id}
                  className="p-4 rounded-xl border border-[#E2DDD2] hover:border-[#173F4F] transition-colors bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-[#E2DDD2] shrink-0">
                      <img
                        src={record.imageUrl}
                        alt={record.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-[#202322]">{record.title}</h3>
                      <p className="text-xs text-[#737A75] mt-0.5">
                        {record.employer} · {record.location} · {record.date}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {record.skills.map((s, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono bg-[#F4F0E6] text-[#173F4F] px-1.5 py-0.5 rounded border border-[#E2DDD2]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-[11px] font-mono font-bold ${
                      record.status === 'CONFIRMED'
                        ? 'bg-[#EDF4F0] text-[#3E6B52]'
                        : 'bg-amber-50 text-amber-800'
                    }`}>
                      {record.status === 'CONFIRMED' ? '✓ CONFIRMED' : 'AWAITING VOUCH'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PublicPassportPage;
