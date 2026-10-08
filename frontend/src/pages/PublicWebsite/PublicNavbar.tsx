import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const PublicNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        ? 'text-[#173F4F] font-semibold after:content-[\'\'] after:absolute after:-bottom-1.5 after:left-0 after:right-0 after:h-[2px] after:bg-[#173F4F] after:rounded-full'
        : 'text-[#4A524D] hover:text-[#173F4F]'
    }`;

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-left text-base font-medium py-2.5 border-b border-[#EBE7DC] transition-colors ${
      isActive ? 'text-[#173F4F] font-bold' : 'text-[#4A524D] hover:text-[#202322]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4F0E6]/95 backdrop-blur-md border-b border-[#E2DDD2] shadow-[0_2px_12px_rgba(18,22,20,0.04)] py-3'
          : 'bg-[#F4F0E6]/80 backdrop-blur-xs border-b border-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark (Routes to /) */}
          <Link
            to="/"
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#173F4F] flex items-center justify-center text-white shadow-xs group-hover:bg-[#0E2934] transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#F4F0E6]" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-[#202322] leading-none">
                VOUCH
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#737A75] mt-0.5">
                Professional Passport
              </span>
            </div>
          </Link>

          {/* Desktop Center Navigation with Exact Routes */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
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

          {/* Right Log In CTA */}
          <div className="hidden md:flex items-center">
            <Link
              to="/login"
              className="group inline-flex items-center space-x-1.5 px-4 py-2 text-[14px] font-semibold text-[#173F4F] hover:text-[#202322] rounded-lg transition-colors"
            >
              <span>Log In</span>
              <ArrowRight className="w-4 h-4 text-[#C45B3C] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202322] hover:bg-[#EBE7DC] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F0E6] border-b border-[#E2DDD2] px-5 pt-3 pb-6 shadow-xl animate-fade-in-up">
          <div className="flex flex-col space-y-1">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              Home
            </NavLink>
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
              For Employers
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
              Passport
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={mobileNavLinkClasses}
            >
              About
            </NavLink>

            <div className="pt-4 flex flex-col space-y-2.5">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#173F4F] text-white font-semibold text-center text-sm shadow-xs flex items-center justify-center space-x-2"
              >
                <span>Log In</span>
                <ArrowRight className="w-4 h-4 text-[#C45B3C]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
