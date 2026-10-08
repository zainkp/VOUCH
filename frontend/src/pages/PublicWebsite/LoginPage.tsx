import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { api, ApiError } from '../../services/api';
import { 
  ShieldCheck, 
  ArrowLeft, 
  Loader2,
  AlertCircle
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { setActiveRole, setIsAuthenticated, setCurrentUser, refreshData } = useApp();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectParam = searchParams.get('redirect');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [forgotPasswordNotice, setForgotPasswordNotice] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    setIsLoading(true);

    try {
      const authRes = await api.login({
        email: cleanEmail,
        password,
      });

      // Save token and worker identity
      localStorage.setItem('vouch_auth_token', authRes.token);
      localStorage.setItem('vouch_user_email', authRes.email);
      if (authRes.worker_id) {
        localStorage.setItem('vouch_active_worker_id', authRes.worker_id);
      }

      setIsAuthenticated(true);
      setActiveRole(authRes.role);
      setCurrentUser({
        id: authRes.user_id,
        name: authRes.name,
        email: authRes.email,
        role: authRes.role,
        worker_id: authRes.worker_id,
        is_active: true,
        created_at: new Date().toISOString(),
      });

      // Hydrate authenticated worker data from backend before entering dashboard
      if (authRes.role !== 'contractor') {
        try {
          await refreshData();
        } catch (fetchErr) {
          console.warn('Dashboard hydration warning after login:', fetchErr);
        }
      }

      if (redirectParam) {
        navigate(redirectParam);
      } else if (authRes.role === 'contractor') {
        navigate('/contractor');
      } else {
        navigate('/worker');
      }
    } catch (err: any) {
      localStorage.removeItem('vouch_auth_token');
      localStorage.removeItem('vouch_active_worker_id');
      localStorage.removeItem('vouch_user_email');
      setIsAuthenticated(false);
      setCurrentUser(null);

      if (err instanceof ApiError) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Invalid email or password.');
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

          {/* RIGHT SIDE: Authentication Form */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] shadow-xs">
              
              <div className="mb-6">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#121614] tracking-tight mb-2">
                  Welcome back.
                </h2>
                <p className="text-sm text-[#4A524D]">
                  Sign in to your Vouch account.
                </p>
              </div>

              {/* Error Banner */}
              {errorMessage && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start space-x-2.5 text-xs text-red-700 animate-fade-in-up">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

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
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
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
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E1D8] bg-[#FAF8F5] text-sm text-[#121614] focus:border-[#1E3B2B] focus:bg-white focus:ring-1 focus:ring-[#1E3B2B] focus:outline-none transition-all placeholder:text-[#A1A7A2]"
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
                  disabled={isLoading}
                  className="w-full py-3.5 rounded-xl bg-[#1E3B2B] text-white font-semibold text-sm hover:bg-[#14281D] active:scale-[0.99] transition-all shadow-xs cursor-pointer mt-2 disabled:opacity-60 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Verifying account...</span>
                    </>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </form>

              {/* Destination to /signup */}
              <div className="pt-6 mt-6 border-t border-[#ECE8E0] text-sm text-[#4A524D] text-center">
                Don&apos;t have a Vouch account?{' '}
                <Link
                  to="/signup"
                  className="font-semibold text-[#1E3B2B] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Create an account</span>
                  <span className="text-[#C27A38]">→</span>
                </Link>
              </div>

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
