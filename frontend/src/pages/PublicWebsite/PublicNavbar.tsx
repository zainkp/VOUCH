import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const PublicNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-[14px] font-medium transition-colors cursor-pointer ${
      isActive
        ? 'text-[#1E3B2B] font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#1E3B2B] after:rounded-full'
        : 'text-[#4A524D] hover:text-[#1E3B2B]'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-left text-base font-medium py-2.5 border-b border-[#ECE8E0] transition-colors ${
      isActive ? 'text-[#1E3B2B] font-bold' : 'text-[#4A524D] hover:text-[#121614]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5E1D8] shadow-[0_2px_12px_rgba(18,22,20,0.04)] py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Routes to /) */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#1E3B2B] flex items-center justify-center text-white shadow-xs group-hover:bg-[#14281D] transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#FAF8F5]" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#121614] leading-none">
                VOUCH
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#737A75] mt-0.5">
                Professional Passport
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation with Real SPA Routes */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/workers" className={navLinkClasses}>
              For Workers
            </NavLink>
            <NavLink to="/employers" className={navLinkClasses}>
              For Employers
            </NavLink>
            <NavLink to="/how-it-works" className={navLinkClasses}>
              How It Works
            </NavLink>
            <NavLink to="/passport" className={navLinkClasses}>
              Passport
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-3.5 py-2 text-[13px] font-medium text-[#4A524D] hover:text-[#121614] rounded-md transition-colors"
            >
              Log In
            </Link>
            <Link
              to="/build-passport"
              className="group inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-[#1E3B2B] text-[#FAF8F5] text-[13px] font-semibold tracking-wide hover:bg-[#14281D] active:scale-[0.98] transition-all shadow-xs vouch-btn"
            >
              <span>Build Your Passport</span>
              <ArrowUpRight className="w-4 h-4 text-[#C27A38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden space-x-2">
            <button
              onClick={() => navigate('/build-passport')}
              className="px-3 py-1.5 rounded-md bg-[#1E3B2B] text-[#FAF8F5] text-xs font-semibold"
            >
              Passport
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#121614] hover:bg-[#EFECE6] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation with Real SPA Routes */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF8F5] border-b border-[#E5E1D8] px-5 pt-3 pb-6 shadow-xl animate-fade-in-up">
          <div className="flex flex-col space-y-1">
            <NavLink
              to="/workers"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              For Workers
            </NavLink>
            <NavLink
              to="/employers"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              For Employers & Contractors
            </NavLink>
            <NavLink
              to="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              How It Works
            </NavLink>
            <NavLink
              to="/passport"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              The Professional Passport
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              About Vouch
            </NavLink>

            <div className="pt-4 flex flex-col space-y-2.5">
              <Link
                to="/build-passport"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#1E3B2B] text-white font-semibold text-center text-sm shadow-xs"
              >
                Build Your Passport →
              </Link>
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg border border-[#E5E1D8] text-[#4A524D] font-medium text-center text-sm"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
