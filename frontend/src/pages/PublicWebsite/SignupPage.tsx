import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { api, ApiError } from '../../services/api';
import { 
  ShieldCheck, 
  ArrowLeft, 
  User, 
  Building2,
  Loader2,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export const SignupPage: React.FC = () => {
  const { setActiveRole, setIsAuthenticated, setCurrentUser } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'worker' | 'contractor'>('worker');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!cleanEmail) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsLoading(true);

    try {
      const authRes = await api.register({
        name: cleanName,
        email: cleanEmail,
        password,
        role,
      });

      // Save token and worker identity
      localStorage.setItem('vouch_auth_token', authRes.token);
      localStorage.setItem('vouch_user_email', authRes.email);
      if (authRes.worker_id) {
        localStorage.setItem('vouch_active_worker_id', authRes.worker_id);
      }

      // Update AppContext
      setIsAuthenticated(true);
      setActiveRole(authRes.role);
      setCurrentUser({
        user_id: authRes.user_id,
        name: authRes.name,
        email: authRes.email,
        role: authRes.role,
        worker_id: authRes.worker_id,
      });

      // Redirect newly registered worker to onboarding / Build Passport
      if (authRes.role === 'contractor') {
        navigate('/contractor');
      } else {
        navigate('/build-passport');
      }
    } catch (err: any) {
      if (err instanceof ApiError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Failed to create account. Please check your network and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121614] flex flex-col justify-between selection:bg-[#1E3B2B] selection:text-white">
      
      {/* Top Navigation */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-sm font-medium text-[#4A524D] hover:text-[#121614] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#737A75]" />
          <span>← Back to Vouch</span>
        </Link>

        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#1E3B2B] flex items-center justify-center text-white shadow-xs group-hover:bg-[#14281D] transition-colors">
            <ShieldCheck className="w-5 h-5 text-[#FAF8F5]" strokeWidth={2.2} />
          </div>
          <span className="font-display font-extrabold text-xl tracking-tight text-[#121614]">
            VOUCH
          </span>
        </Link>
      </header>

      {/* Main Two-Column Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Value proposition & features */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#1E3B2B] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#C27A38]" />
              <span>CREATE ACCOUNT · SECURE PASSPORT</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[48px] text-[#121614] tracking-tight leading-[1.08] mb-5">
              JOIN THE VERIFIED<br />
              <span className="text-[#1E3B2B]">SKILLS NETWORK.</span>
            </h1>

            <p className="text-base text-[#4A524D] leading-relaxed mb-6">
              Create an account to build your permanent, verifiable track record or hire skilled professionals backed by independent field evidence.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E3B2B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A524D]">
                  <strong className="text-[#121614]">Independent Evidence:</strong> Every project backed by photos, supervisor sign-offs, and verifications.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E3B2B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A524D]">
                  <strong className="text-[#121614]">Portable Identity:</strong> Carry your skills passport across contractors, projects, and cities.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#1E3B2B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#4A524D]">
                  <strong className="text-[#121614]">Zero Paper Resumes:</strong> QR-enabled instant credential sharing.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E1D8] bg-[#F4F1EA] text-xs text-[#737A75]">
              Already have an account?{' '}
              <Link to="/login" className="font-bold text-[#1E3B2B] hover:underline">
                Sign in to your account →
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE: Signup Form */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] shadow-xs">
              
              <div className="mb-6">
                <h2 className="font-display font-extrabold text-2xl text-[#121614] tracking-tight mb-1">
                  Create your Vouch account
                </h2>
                <p className="text-xs text-[#4A524D]">
                  Choose your role and enter your details below.
                </p>
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-2.5 text-xs text-red-700 animate-fade-in-up">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSignUp} className="space-y-4">
                
                {/* Role Toggle */}
                <div>
                  <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-2">
                    I want to join as
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRole('worker')}
                      className={`p-3 rounded-xl border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                        role === 'worker'
                          ? 'border-[#1E3B2B] bg-[#EBF6EE] text-[#1E3B2B] shadow-2xs font-semibold'
                          : 'border-[#E5E1D8] bg-white text-[#737A75] hover:border-gray-300'
                      }`}
                    >
                      <User className="w-4 h-4" />
                      <div>
                        <div className="text-xs">Worker</div>
                        <div className="text-[10px] text-[#737A75]">Build passport</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole('contractor')}
                      className={`p-3 rounded-xl border text-left flex items-center space-x-2.5 transition-all cursor-pointer ${
                        role === 'contractor'
                          ? 'border-[#1E3B2B] bg-[#EBF6EE] text-[#1E3B2B] shadow-2xs font-semibold'
                          : 'border-[#E5E1D8] bg-white text-[#737A75] hover:border-gray-300'
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <div>
                        <div className="text-xs">Employer</div>
                        <div className="text-[10px] text-[#737A75]">Hire & verify</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                  />
                </div>

                {/* Passwords grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-1.5">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Min 8 chars"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-1.5">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Repeat password"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-[#1E3B2B] text-white font-semibold text-sm hover:bg-[#14281D] active:scale-[0.99] transition-all shadow-xs cursor-pointer mt-3 disabled:opacity-60 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <span>Create Account & Continue</span>
                  )}
                </button>
              </form>

              <div className="mt-5 pt-4 border-t border-[#ECE8E0] text-center text-xs text-[#737A75]">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-[#1E3B2B] hover:underline">
                  Sign In
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#737A75] gap-3">
        <p>© {new Date().getFullYear()} VOUCH Professional Identity Platform.</p>
        <div className="flex items-center space-x-5">
          <Link to="/" className="hover:text-[#121614] transition-colors">Home</Link>
          <span>·</span>
          <Link to="/about" className="hover:text-[#121614] transition-colors">About</Link>
          <span>·</span>
          <Link to="/build-passport" className="hover:text-[#121614] transition-colors">Build Passport</Link>
        </div>
      </footer>

    </div>
  );
};

export default SignupPage;
