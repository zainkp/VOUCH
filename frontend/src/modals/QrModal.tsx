import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode';
import { useApp } from '../context/AppContext';
import { X, Copy, Check, ExternalLink, Shield } from 'lucide-react';

export const QrModal: React.FC = () => {
  const navigate = useNavigate();
  const { isQrModalOpen, setIsQrModalOpen, worker, stats, setActiveRole, setCurrentTab } = useApp();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const publicUrl = `https://vouch.work/p/ravi-kumar-8842`;

  useEffect(() => {
    if (isQrModalOpen) {
      QRCode.toDataURL(publicUrl, {
        width: 220,
        margin: 2,
        color: {
          dark: '#111827',
          light: '#ffffff',
        },
      })
        .then(url => setQrDataUrl(url))
        .catch(err => console.error(err));
    }
  }, [isQrModalOpen, publicUrl]);

  if (!isQrModalOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(publicUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenContractorView = () => {
    setIsQrModalOpen(false);
    setActiveRole('contractor');
    setCurrentTab('home');
    navigate('/contractor');
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white w-full max-w-sm rounded-[28px] border border-stone-300 shadow-2xl p-5 text-center space-y-3.5 flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex justify-between items-center pb-2 border-b border-gray-100">
          <div className="flex items-center space-x-1.5 text-left">
            <Shield className="w-4 h-4 text-emerald-700" />
            <span className="text-xs font-bold text-gray-900">Share My Vouch Passport</span>
          </div>
          <button
            onClick={() => setIsQrModalOpen(false)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Worker Summary */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1 border border-emerald-200">
            Worker-Owned Professional Record
          </span>
          <h3 className="text-base font-bold text-[#111827]">{worker.name}</h3>
          <p className="text-xs text-gray-600">{worker.trade} · {worker.experienceYears} Years Exp · {worker.location.split(',')[0]}</p>
        </div>

        {/* QR Code */}
        <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 relative flex items-center justify-center">
          {qrDataUrl ? (
            <img alt="Passport QR" src={qrDataUrl} className="w-44 h-44 rounded-lg" />
          ) : (
            <div className="w-44 h-44 flex items-center justify-center text-xs text-gray-400">
              Generating QR...
            </div>
          )}
        </div>

        <p className="text-[11px] text-gray-500 max-w-[240px] leading-relaxed">
          Contractors can scan this to review your work history, verified evidence, and supervisor vouches.
        </p>

        {/* Link & Actions */}
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between p-2 rounded-xl bg-stone-100 border border-stone-200 text-xs font-mono text-gray-700">
            <span className="truncate pr-2">{publicUrl}</span>
            <button
              onClick={handleCopy}
              className="text-emerald-800 hover:text-emerald-950 p-1 font-sans font-semibold shrink-0"
              title="Copy URL"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 bg-[#233B31] text-white rounded-xl text-xs font-bold hover:bg-[#1E3B2B] active:translate-y-[1px] transition-all flex items-center justify-center space-x-1.5 shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Shareable Link</span>
              </>
            )}
          </button>

          <button
            onClick={handleOpenContractorView}
            className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-gray-800 rounded-xl text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
            <span>Simulate Contractor Scanning This Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};
