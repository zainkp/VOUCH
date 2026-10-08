import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PublicNavbar } from './PublicNavbar';
import { PublicFooter } from './PublicFooter';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  User, 
  Building2, 
  Smartphone, 
  Lock, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { setActiveRole } = useApp();
  const navigate = useNavigate();
  const [phone, setPhone] = useState('9876543210');
  const [selectedRole, setSelectedRole] = useState<'worker' | 'contractor'>('worker');

  const handleLogin = (role: 'worker' | 'contractor') => {
    setActiveRole(role);
    if (role === 'worker') {
      navigate('/worker');
    } else {
      navigate('/contractor');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col">
      <PublicNavbar />

      <main className="flex-1 pt-28 sm:pt-36 pb-20 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-4">
          
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E1D8] shadow-[0_20px_50px_rgba(18,22,20,0.06)] text-center">
            
            {/* Brand Logo Header */}
            <div className="w-12 h-12 rounded-xl bg-[#1E3B2B] flex items-center justify-center text-white mx-auto mb-4 shadow-xs">
              <ShieldCheck className="w-7 h-7 text-[#FAF8F5]" strokeWidth={2.2} />
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] mb-2">
              Log In to Vouch
            </h1>
            <p className="text-xs text-[#737A75] mb-8">
              Access your verified Professional Passport or contractor evaluation portal.
            </p>

            {/* Role Selectors */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setSelectedRole('worker')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'worker'
                    ? 'border-[#1E3B2B] bg-[#EBF6EE] ring-1 ring-[#1E3B2B]'
                    : 'border-[#E5E1D8] hover:bg-gray-50'
                }`}
              >
                <User className={`w-5 h-5 mb-1.5 ${selectedRole === 'worker' ? 'text-[#1E3B2B]' : 'text-[#737A75]'}`} />
                <span className="font-bold text-xs text-[#121614] block">Worker</span>
                <span className="text-[10px] text-[#737A75]">Passport Holder</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('contractor')}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedRole === 'contractor'
                    ? 'border-[#1E3B2B] bg-[#EBF6EE] ring-1 ring-[#1E3B2B]'
                    : 'border-[#E5E1D8] hover:bg-gray-50'
                }`}
              >
                <Building2 className={`w-5 h-5 mb-1.5 ${selectedRole === 'contractor' ? 'text-[#1E3B2B]' : 'text-[#737A75]'}`} />
                <span className="font-bold text-xs text-[#121614] block">Employer</span>
                <span className="text-[10px] text-[#737A75]">Site Contractor</span>
              </button>
            </div>

            {/* Simulated Phone Input */}
            <div className="space-y-4 mb-6 text-left">
              <div>
                <label className="text-xs font-mono text-[#737A75] uppercase block mb-1">
                  Mobile Number (India)
                </label>
                <div className="flex rounded-xl border border-[#E5E1D8] overflow-hidden focus-within:border-[#1E3B2B] focus-within:ring-1 focus-within:ring-[#1E3B2B]">
                  <span className="px-3 py-3 bg-[#FAF8F5] text-xs font-mono text-[#737A75] border-r border-[#E5E1D8]">
                    +91
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter 10-digit mobile number"
                    className="flex-1 px-3 py-2.5 text-sm font-medium text-[#121614] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Direct Login Button */}
            <button
              onClick={() => handleLogin(selectedRole)}
              className="w-full py-3.5 rounded-xl bg-[#1E3B2B] text-white font-bold text-sm hover:bg-[#14281D] active:scale-[0.99] transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer mb-6"
            >
              <span>{selectedRole === 'worker' ? 'Continue to Worker Application' : 'Continue to Contractor Portal'}</span>
              <ArrowRight className="w-4 h-4 text-[#C27A38]" />
            </button>

            {/* Hackathon Demo Notice */}
            <div className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E5E1D8] text-xs text-[#737A75] text-left mb-6">
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-[#1E3B2B] font-bold uppercase mb-1">
                <Sparkles className="w-3 h-3 text-[#C27A38]" />
                <span>DEMONSTRATION AUTHENTICATION</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Pre-configured with pilot demonstration profiles: Ravi Kumar (Lead Electrician) and Apex Buildcon (Site Contractor).
              </p>
            </div>

            <div className="pt-4 border-t border-[#ECE8E0] text-xs text-[#737A75]">
              Don&apos;t have a passport yet?{' '}
              <Link to="/build-passport" className="font-bold text-[#1E3B2B] hover:underline">
                Start Building Your Passport
              </Link>
            </div>

          </div>

        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default LoginPage;
