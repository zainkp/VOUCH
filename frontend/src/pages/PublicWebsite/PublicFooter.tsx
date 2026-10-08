import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PublicFooter: React.FC = () => {
  const { isAuthenticated, activeRole } = useApp();
  const buildPassportHref = isAuthenticated && activeRole === 'worker' ? '/build-passport' : '/login?redirect=/build-passport';
  const [selectedLang, setSelectedLang] = useState('English');

  const languages = [
    { name: 'English', label: 'English' },
    { name: 'Hindi', label: 'हिन्दी' },
    { name: 'Kannada', label: 'ಕನ್ನಡ' },
    { name: 'Malayalam', label: 'മലയാളം' },
    { name: 'Tamil', label: 'தமிழ்' },
  ];

  return (
    <footer className="bg-[#F5F2EB] text-[#141715] border-t border-[#DFD9CE] pt-16 pb-12 sm:pt-20 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-[#DFD9CE]">
          
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4 w-fit">
                <div className="w-8 h-8 rounded-lg bg-[#162B22] flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5 text-[#F5F2EB]" strokeWidth={2.2} />
                </div>
                <span className="font-display font-extrabold text-2xl tracking-tight text-[#141715]">
                  VOUCH
                </span>
              </Link>
              
              <p className="font-display text-xl sm:text-2xl font-bold text-[#162B22] tracking-tight mb-3">
                &quot;Your work speaks for you.&quot;
              </p>
              
              <p className="text-sm text-[#484F4A] leading-relaxed max-w-sm mb-6">
                A portable, evidence-backed professional identity for skilled and experience-based workers across trades.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <Link
                to={buildPassportHref}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#F5F2EB] bg-[#162B22] hover:bg-[#102019] px-3.5 py-2 rounded-lg transition-colors shadow-2xs"
              >
                <span>BUILD PASSPORT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C2672B]" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold text-[#484F4A] hover:text-[#141715] bg-[#ECE7DE] px-3 py-2 rounded-lg border border-[#DFD9CE] transition-colors"
              >
                <span>Log In</span>
              </Link>
            </div>
          </div>

          {/* Links Col 1: Platform (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#727A75] font-bold mb-4">
              PLATFORM PAGES
            </h4>
            <ul className="space-y-2.5 text-sm text-[#484F4A]">
              <li>
                <Link to="/workers" className="hover:text-[#162B22] transition-colors">
                  For Workers
                </Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-[#162B22] transition-colors">
                  For Employers & Contractors
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-[#162B22] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/passport" className="hover:text-[#162B22] transition-colors">
                  The Professional Passport
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#162B22] transition-colors">
                  About Vouch
                </Link>
              </li>
              <li>
                <Link to={buildPassportHref} className="hover:text-[#162B22] transition-colors font-medium text-[#162B22]">
                  Start Your Passport →
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2: About & Legal (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#727A75] font-bold mb-4">
              MISSION & CREDENTIALS
            </h4>
            <p className="text-xs text-[#727A75] leading-relaxed mb-6">
              Vouch is built to establish parity between skilled trades and white-collar professional credentials. Grounded in empirical work records, photographic evidence, and independent peer confirmations.
            </p>

            {/* Language Selector */}
            <div>
              <div className="flex items-center space-x-1.5 text-xs font-mono text-[#727A75] mb-2.5">
                <Globe className="w-3.5 h-3.5 text-[#162B22]" />
                <span className="uppercase tracking-wider">LANGUAGE / भाषा:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.name}
                    onClick={() => setSelectedLang(lang.name)}
                    className={`px-2.5 py-1 rounded text-xs transition-all ${
                      selectedLang === lang.name
                        ? 'bg-[#162B22] text-white font-semibold'
                        : 'bg-[#ECE7DE] text-[#484F4A] hover:bg-[#DFD9CE]'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#727A75] gap-4">
          <p>© {new Date().getFullYear()} VOUCH Professional Identity Platform. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-[#141715]">Field Methodology</Link>
            <span>·</span>
            <Link to="/passport" className="hover:text-[#141715]">Passport Architecture</Link>
            <span>·</span>
            <Link to="/login" className="hover:text-[#141715]">Portal Sign In</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
