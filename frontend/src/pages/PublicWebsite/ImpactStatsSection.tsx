import React, { useState, useEffect } from 'react';
import { Layers, Users, CheckCheck, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../../components/ScrollReveal';

export const ImpactStatsSection: React.FC = () => {
  const [counts, setCounts] = useState({
    records: 0,
    workers: 0,
    confirmations: 0,
  });

  useEffect(() => {
    // Smooth illustrative count-up animation on mount
    const duration = 1200;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        records: Math.floor(ease * 10450),
        workers: Math.floor(ease * 4120),
        confirmations: Math.floor(ease * 7890),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          records: 10450,
          workers: 4120,
          confirmations: 7890,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#F4F0E6] relative border-b border-[#E2DDD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle prototype pilot banner */}
        <ScrollReveal delay={0}>
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E2DDD2] text-xs font-mono text-[#737A75]">
            <span className="uppercase tracking-widest text-[#173F4F] font-bold">
              09 / PILOT SCALE & RECORD METRICS
            </span>
            <span className="bg-[#EBE7DC] px-2.5 py-0.5 rounded text-[11px] text-[#4A524D]">
              Illustrative Pilot Data
            </span>
          </div>
        </ScrollReveal>

        {/* 3 Restrained Number Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left">
          
          {/* Stat 1: Work Records */}
          <ScrollReveal delay={0}>
            <div className="p-6 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2] h-full">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#173F4F] text-xs font-mono font-bold uppercase mb-2">
                <Layers className="w-4 h-4" />
                <span>LOGGED WORK RECORDS</span>
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202322] tracking-tight mb-2">
                {counts.records.toLocaleString()}+
              </div>
              <p className="text-sm text-[#4A524D]">
                Verified on-site trade tasks spanning residential wiring, LT switchgear, plumbing lines, and structural fabrication.
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 2: Skilled Workers */}
          <ScrollReveal delay={100}>
            <div className="p-6 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2] h-full">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#3E6B52] text-xs font-mono font-bold uppercase mb-2">
                <Users className="w-4 h-4" />
                <span>SKILLED WORKERS</span>
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202322] tracking-tight mb-2">
                {counts.workers.toLocaleString()}+
              </div>
              <p className="text-sm text-[#4A524D]">
                Tradespeople carrying self-sovereign professional passports across Karnataka, Maharashtra, and Tamil Nadu.
              </p>
            </div>
          </ScrollReveal>

          {/* Stat 3: Independent Confirmations */}
          <ScrollReveal delay={200}>
            <div className="p-6 rounded-2xl bg-[#F4F0E6] border border-[#E2DDD2] h-full">
              <div className="flex items-center justify-center md:justify-start space-x-2 text-[#C45B3C] text-xs font-mono font-bold uppercase mb-2">
                <CheckCheck className="w-4 h-4" />
                <span>FIELD CONFIRMATIONS</span>
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#202322] tracking-tight mb-2">
                {counts.confirmations.toLocaleString()}+
              </div>
              <p className="text-sm text-[#4A524D]">
                Independent sign-offs completed by site engineers, builders, and direct clients with zero administrative friction.
              </p>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
