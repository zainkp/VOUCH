import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  User, 
  Lock, 
  LogOut, 
  FileCheck2,
  Mail,
  Phone,
  Languages
} from 'lucide-react';

export const ProfileTab: React.FC = () => {
  const { worker, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear active worker ID, stored email, and authentication state
    logout();
    navigate('/login');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      
      {/* 1. Worker Profile Hero Banner */}
      <div className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#1E3B2B] bg-[#EFECE6] shrink-0 shadow-xs">
            <img
              src={worker.avatarUrl}
              alt={worker.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#EBF6EE] text-[#059669] border border-[#059669]/20">
                ACTIVE WORKER SESSION
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-[#FAF8F5] text-[#737A75] border border-[#E5E1D8]">
                ID: {worker.passportId}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight">
              {worker.name}
            </h1>
            <p className="text-base font-semibold text-[#1E3B2B]">
              {worker.trade} · {worker.experienceYears} Years Documented Experience
            </p>

            <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-[#737A75]">
              <MapPin className="w-3.5 h-3.5 text-[#737A75]" />
              <span>{worker.location}</span>
            </div>

            <p className="text-xs text-[#4A524D] italic max-w-xl pt-1">
              &quot;{worker.bio}&quot;
            </p>
          </div>
        </div>
      </div>

      {/* 2. Account Information (Informational Account Type) */}
      <div className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#ECE8E0]">
          <User className="w-5 h-5 text-[#1E3B2B]" />
          <div>
            <h2 className="font-bold text-base text-[#121614]">Account Information</h2>
            <p className="text-xs text-[#737A75]">Account classification and authenticated workspace</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8]">
            <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-1">
              ACCOUNT TYPE
            </span>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm text-[#121614]">Worker</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#EBF6EE] text-[#059669] font-bold">
                PORTABLE PASSPORT
              </span>
            </div>
            <p className="text-xs text-[#737A75] mt-1.5 leading-relaxed">
              This account is configured for an individual skilled worker to build, maintain, and share an independent professional identity.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] space-y-2.5">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-0.5">
                REGISTERED EMAIL
              </span>
              <div className="flex items-center space-x-2 text-xs text-[#121614] font-medium">
                <Mail className="w-3.5 h-3.5 text-[#737A75]" />
                <span>{worker.email || (typeof localStorage !== 'undefined' ? localStorage.getItem('vouch_user_email') : null) || 'registered@vouchwork.in'}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-[#E5E1D8]">
              <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-0.5">
                REGISTERED PHONE
              </span>
              <div className="flex items-center space-x-2 text-xs text-[#121614] font-medium">
                <Phone className="w-3.5 h-3.5 text-[#737A75]" />
                <span>{worker.phone || 'Not provided'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Personal & Vocational Information */}
      <div className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#ECE8E0]">
          <Award className="w-5 h-5 text-[#1E3B2B]" />
          <div>
            <h2 className="font-bold text-base text-[#121614]">Professional & Vocational Records</h2>
            <p className="text-xs text-[#737A75]">Documented trade background and verified credentials</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8]">
              <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-1">
                OPERATING REGION
              </span>
              <p className="font-medium text-[#121614]">{worker.location}</p>
              <p className="text-[11px] text-[#737A75] mt-1">
                Portable across all regional contractors and job sites.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8]">
              <span className="text-[11px] font-mono uppercase text-[#737A75] font-semibold block mb-1">
                LANGUAGES
              </span>
              <div className="flex items-center space-x-1.5 font-medium text-[#121614]">
                <Languages className="w-3.5 h-3.5 text-[#737A75]" />
                <span>{worker.languages && worker.languages.length > 0 ? worker.languages.join(', ') : 'No languages added yet'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono uppercase text-[#737A75] font-semibold block">
              VOCATIONAL CERTIFICATES & CREDENTIALS
            </span>
            <div className="space-y-2.5">
              {worker.certifications.map(cert => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E5E1D8] flex items-center justify-between text-xs"
                >
                  <div>
                    <p className="font-bold text-[#121614]">{cert.name}</p>
                    <p className="text-[11px] text-[#737A75] mt-0.5">
                      Issued by: {cert.issuer}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#737A75] bg-white px-2.5 py-1 rounded-lg border border-[#E5E1D8]">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Security & Authentication */}
      <div className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center space-x-3 pb-3 border-b border-[#ECE8E0]">
          <Lock className="w-5 h-5 text-[#1E3B2B]" />
          <div>
            <h2 className="font-bold text-base text-[#121614]">Security & Session</h2>
            <p className="text-xs text-[#737A75]">Account credential protection and session security</p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <p className="font-bold text-[#121614]">Password & Credentials</p>
            <p className="text-[#737A75] mt-0.5">
              Secured with modern cryptographic hashing.
            </p>
          </div>
          <span className="px-3 py-1 rounded-xl bg-white border border-[#E5E1D8] text-xs font-medium text-[#059669] self-start sm:self-auto">
            Protected
          </span>
        </div>
      </div>

      {/* 5. Clean Log Out Section (Separate Account Concept) */}
      <div className="bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 shadow-xs space-y-4">
        <div>
          <h2 className="font-bold text-base text-[#121614]">Session Management</h2>
          <p className="text-xs text-[#737A75] mt-1">
            To access an Employer account or another workspace, sign out of this Worker session and sign in with the corresponding credentials.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-[#B91C1C] text-xs font-bold transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out of Vouch</span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProfileTab;
