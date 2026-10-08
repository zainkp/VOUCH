import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Building2 
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { setActiveRole, setIsAuthenticated } = useApp();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectParam = searchParams.get('redirect');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRoleSelection(true);
  };

  const handleGoogleSignIn = () => {
    setShowRoleSelection(true);
  };

  const handleSelectRole = (role: 'worker' | 'contractor') => {
    setIsAuthenticated(true);
    setActiveRole(role);
    if (role === 'worker') {
      if (redirectParam === '/build-passport' || redirectParam?.startsWith('/build-passport')) {
        navigate('/build-passport');
      } else {
        navigate('/worker');
      }
    } else {
      navigate('/contractor');
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
          <span>Back to Vouch</span>
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
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Vouch branding, statement, headline, and authentic documentary worker image */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="flex items-center space-x-2 text-xs font-mono font-semibold tracking-wider uppercase text-[#1E3B2B] mb-4">
              <ShieldCheck className="w-4 h-4 text-[#C27A38]" />
              <span>VOUCH · PROFESSIONAL PASSPORT</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-[#121614] tracking-tight leading-[1.06] mb-5">
              YOUR WORK<br />
              <span className="text-[#1E3B2B]">SPEAKS FOR YOU.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A524D] leading-relaxed mb-8 max-w-xl">
              Your experience shouldn&apos;t disappear when a job ends. Vouch gives your work a professional identity you can carry with you.
            </p>

            {/* Documentary Worker Photography */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E1D8] bg-[#EFECE6] shadow-xs max-w-xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&auto=format&fit=crop&q=80"
                  alt="Real electrician working on-site"
                  className="w-full h-full object-cover filter saturate-[0.95]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121614]/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono text-[#FAF8F5]/90">
                    FIELD VERIFICATION · INDEPENDENT TRADE CREDENTIALS
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Authentication Form or Secondary Role Selection */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              
              {!showRoleSelection ? (
                /* Primary Sign In View */
                <div className="w-full">
                  
                  <div className="mb-8">
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight mb-2">
                      Welcome back.
                    </h2>
                    <p className="text-sm text-[#4A524D]">
                      Sign in to your Vouch account.
                    </p>
                  </div>

                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-white text-sm text-[#121614] focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-mono uppercase text-[#737A75] font-semibold block">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-white text-sm text-[#121614] focus:border-[#1E3B2B] focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
                      />
                    </div>

                    <div className="flex items-center justify-end pt-1">
                      <button
                        type="button"
                        onClick={() => setForgotPasswordNotice(!forgotPasswordNotice)}
                        className="text-xs text-[#737A75] hover:text-[#121614] transition-colors cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    </div>

                    {forgotPasswordNotice && (
                      <div className="p-3 rounded-xl bg-[#EBF6EE] border border-[#059669]/20 text-xs text-[#059669] leading-relaxed">
                        If an account exists for this email, password reset instructions have been sent.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#1E3B2B] text-white font-semibold text-sm hover:bg-[#14281D] active:scale-[0.99] transition-all shadow-xs cursor-pointer mt-2"
                    >
                      Sign In
                    </button>
                  </form>

                  {/* Subtle Divider */}
                  <div className="relative my-7 flex items-center justify-center">
                    <div className="w-full border-t border-[#E5E1D8]"></div>
                    <span className="absolute bg-[#FAF8F5] px-3 text-xs font-mono text-[#737A75] uppercase">
                      OR
                    </span>
                  </div>

                  {/* Continue with Google */}
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="w-full py-3 rounded-xl border border-[#E5E1D8] bg-white text-sm font-medium text-[#121614] hover:bg-gray-50 active:scale-[0.99] transition-all flex items-center justify-center space-x-2.5 shadow-2xs cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  {/* Destination to /build-passport */}
                  <div className="pt-8 mt-8 border-t border-[#ECE8E0] text-sm text-[#4A524D] text-center">
                    Don&apos;t have a Vouch account?{' '}
                    <button
                      type="button"
                      onClick={() => setShowRoleSelection(true)}
                      className="font-semibold text-[#1E3B2B] hover:underline inline-flex items-center space-x-1 cursor-pointer"
                    >
                      <span>Build your Professional Passport</span>
                      <span className="text-[#C27A38]">→</span>
                    </button>
                  </div>

                </div>
              ) : (
                /* Secondary Role Selection Step (Section 7) */
                <div className="w-full animate-fade-in-up">
                  
                  <div className="mb-6">
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight mb-2">
                      How will you use Vouch?
                    </h2>
                    <p className="text-sm text-[#4A524D]">
                      Select your primary workspace to continue.
                    </p>
                  </div>

                  <div className="space-y-3.5 mb-6">
                    
                    {/* Worker Selection Card */}
                    <button
                      type="button"
                      onClick={() => handleSelectRole('worker')}
                      className="w-full p-5 rounded-2xl border border-[#E5E1D8] bg-white hover:border-[#1E3B2B] hover:shadow-xs transition-all text-left flex items-start space-x-4 cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] shrink-0 mt-0.5 group-hover:bg-[#1E3B2B] group-hover:text-white transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-[#121614]">Worker</h3>
                          <ArrowRight className="w-4 h-4 text-[#737A75] group-hover:text-[#1E3B2B] group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-xs text-[#737A75] leading-relaxed">
                          Build and manage your professional identity.
                        </p>
                      </div>
                    </button>

                    {/* Employer Selection Card */}
                    <button
                      type="button"
                      onClick={() => handleSelectRole('contractor')}
                      className="w-full p-5 rounded-2xl border border-[#E5E1D8] bg-white hover:border-[#1E3B2B] hover:shadow-xs transition-all text-left flex items-start space-x-4 cursor-pointer group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#EBF6EE] flex items-center justify-center text-[#1E3B2B] shrink-0 mt-0.5 group-hover:bg-[#1E3B2B] group-hover:text-white transition-colors">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-base text-[#121614]">Employer</h3>
                          <ArrowRight className="w-4 h-4 text-[#737A75] group-hover:text-[#1E3B2B] group-hover:translate-x-0.5 transition-all" />
                        </div>
                        <p className="text-xs text-[#737A75] leading-relaxed">
                          Evaluate evidence-backed workers.
                        </p>
                      </div>
                    </button>

                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setShowRoleSelection(false)}
                      className="text-xs text-[#737A75] hover:text-[#121614] transition-colors cursor-pointer"
                    >
                      ← Back to sign in
                    </button>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      {/* Subtle Bottom Footer */}
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

export default LoginPage;
