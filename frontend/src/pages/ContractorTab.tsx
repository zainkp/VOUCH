import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Bookmark, 
  BookmarkCheck, 
  MapPin, 
  FileCheck2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Filter,
  X
} from 'lucide-react';

interface ContractorTabProps {
  onViewPassport: (workerData: any) => void;
  defaultActiveTab?: 'DIRECTORY' | 'SAVED';
}

export const ContractorTab: React.FC<ContractorTabProps> = ({ 
  onViewPassport, 
  defaultActiveTab = 'DIRECTORY' 
}) => {
  const { 
    worker: liveWorker, 
    savedWorkerIds, 
    toggleSaveWorker, 
    isSavedWorker,
    stats
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrade, setSelectedTrade] = useState('All');
  const [activeTab, setActiveTab] = useState<'DIRECTORY' | 'SAVED'>(defaultActiveTab);

  useEffect(() => {
    setActiveTab(defaultActiveTab);
  }, [defaultActiveTab]);

  // Quick trade filters specified in Section 7
  const trades = [
    'All',
    'Electrician',
    'Plumber',
    'Welder',
    'Carpenter',
    'Technician',
    'Mechanic',
    'Painter',
    'Construction'
  ];

  // Authentic evidence-backed directory workers
  const directoryWorkers = [
    {
      id: liveWorker.id,
      name: liveWorker.name,
      trade: liveWorker.trade,
      experienceYears: liveWorker.experienceYears,
      location: liveWorker.location.split(',')[0],
      confidenceLevel: 'HIGH',
      workRecordsCount: 8,
      evidenceItemsCount: 12,
      confirmationsCount: 3,
      avatarUrl: liveWorker.portraitUrl,
      skillsSummary: 'Electrical Wiring, Commercial Panel Installation',
    },
    {
      id: 'worker_anil',
      name: 'Anil Joseph',
      trade: 'Electrician',
      experienceYears: 5,
      location: 'Mangaluru',
      confidenceLevel: 'HIGH',
      workRecordsCount: 6,
      evidenceItemsCount: 9,
      confirmationsCount: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'Residential Wiring, Panel Installation',
    },
    {
      id: 'worker_002',
      name: 'Suresh M.',
      trade: 'Plumber',
      experienceYears: 9,
      location: 'Bengaluru',
      confidenceLevel: 'HIGH',
      workRecordsCount: 14,
      evidenceItemsCount: 20,
      confirmationsCount: 9,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'Commercial Pipefitting, Drainage Systems',
    },
    {
      id: 'worker_003',
      name: 'Vikram Patil',
      trade: 'Welder',
      experienceYears: 5,
      location: 'Udupi',
      confidenceLevel: 'MEDIUM',
      workRecordsCount: 6,
      evidenceItemsCount: 8,
      confirmationsCount: 3,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'TIG & Arc Welding, Structural Fabrication',
    },
    {
      id: 'worker_dinesh',
      name: 'Dinesh Acharya',
      trade: 'Carpenter',
      experienceYears: 8,
      location: 'Mangaluru',
      confidenceLevel: 'HIGH',
      workRecordsCount: 11,
      evidenceItemsCount: 15,
      confirmationsCount: 6,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'Modular Formwork, Hardwood Joinery',
    },
    {
      id: 'worker_riaz',
      name: 'Mohammed Riaz',
      trade: 'Technician',
      experienceYears: 6,
      location: 'Mangaluru',
      confidenceLevel: 'HIGH',
      workRecordsCount: 7,
      evidenceItemsCount: 11,
      confirmationsCount: 4,
      avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'HVAC Installation, Chiller Commissioning',
    },
    {
      id: 'worker_karthik',
      name: 'Karthik Poojary',
      trade: 'Construction',
      experienceYears: 4,
      location: 'Surathkal',
      confidenceLevel: 'LOW',
      workRecordsCount: 5,
      evidenceItemsCount: 7,
      confirmationsCount: 2,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      skillsSummary: 'Rebar Tying, Concrete Curing',
    },
  ];

  // Filter based on search query, selected trade, and directory vs saved mode
  const filteredWorkers = directoryWorkers.filter(w => {
    const matchesSearch = 
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.trade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.skillsSummary.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTrade = selectedTrade === 'All' || w.trade.toLowerCase().includes(selectedTrade.toLowerCase());
    const matchesSaved = activeTab === 'DIRECTORY' || isSavedWorker(w.id);

    return matchesSearch && matchesTrade && matchesSaved;
  });

  const renderConfidenceBadge = (level: string) => {
    switch (level) {
      case 'HIGH':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#E5EFE8] text-[#245E3F] border border-[#245E3F]/20 inline-flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#245E3F]"></span>
            <span>HIGH EVIDENCE CONFIDENCE</span>
          </span>
        );
      case 'MEDIUM':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#FAF0E6] text-[#C2672B] border border-[#C2672B]/25 inline-flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C2672B]"></span>
            <span>MEDIUM EVIDENCE CONFIDENCE</span>
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wide bg-[#F5F2EB] text-[#727A75] border border-[#DFD9CE] inline-flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#727A75]"></span>
            <span>BUILDING EVIDENCE</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      
      {/* 1. Contractor Home Greeting & Search (Section 6) */}
      <div className="space-y-6">
        <div>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#141715] tracking-tight">
            Good morning, Arjun.
          </h1>
          <p className="text-sm sm:text-base text-[#484F4A] mt-1">
            Find skilled workers with experience you can verify.
          </p>
        </div>

        {/* Search Field */}
        <div className="relative w-full max-w-3xl">
          <div className="flex items-center bg-white rounded-2xl border border-[#DFD9CE] shadow-xs focus-within:border-[#162B22] focus-within:ring-1 focus-within:ring-[#162B22] transition-all p-1.5">
            <div className="pl-3.5 pr-2 text-[#727A75]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by trade, skill or location (e.g. Electrician in Mangaluru)..."
              className="flex-1 py-2.5 text-sm sm:text-base text-[#141715] placeholder:text-[#A1A7A2] focus:outline-none bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 text-[#727A75] hover:text-[#141715] transition-colors mr-1 cursor-pointer"
                title="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#162B22] hover:bg-[#102019] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs shrink-0"
            >
              Search
            </button>
          </div>
        </div>

        {/* 2. Quick Trade Filters (Section 7) */}
        <div className="space-y-2.5 pt-1">
          <p className="text-xs font-mono uppercase tracking-wider text-[#727A75] font-semibold">
            Browse by trade
          </p>
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
            {trades.map(trade => (
              <button
                key={trade}
                onClick={() => setSelectedTrade(trade)}
                className={`px-3.5 py-1.5 rounded-xl font-medium shrink-0 transition-all cursor-pointer ${
                  selectedTrade === trade
                    ? 'bg-[#162B22] text-white shadow-xs font-semibold'
                    : 'bg-white text-[#484F4A] hover:bg-[#F5F2EB] border border-[#DFD9CE]'
                }`}
              >
                {trade}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Worker Discovery / Saved Section (Section 8, 9, 10, 12) */}
      <section className="space-y-5">
        
        {/* Section Header & Subtext */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 border-b border-[#DFD9CE] gap-2">
          <div>
            <h2 className="font-display font-extrabold text-xl text-[#141715] tracking-tight">
              {activeTab === 'DIRECTORY' ? 'WORKERS WITH EVIDENCE' : 'SAVED WORKERS'}
            </h2>
            <p className="text-xs sm:text-sm text-[#727A75] mt-0.5">
              {activeTab === 'DIRECTORY'
                ? 'Explore workers whose experience is supported by real work records, evidence and confirmations.'
                : 'Workers you have shortlisted for upcoming project sites.'}
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono">
            <button
              onClick={() => setActiveTab('DIRECTORY')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'DIRECTORY'
                  ? 'bg-[#F5F2EB] text-[#162B22] font-bold border border-[#DFD9CE]'
                  : 'text-[#727A75] hover:text-[#141715]'
              }`}
            >
              All Workers ({directoryWorkers.length})
            </button>
            <span>·</span>
            <button
              onClick={() => setActiveTab('SAVED')}
              className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'SAVED'
                  ? 'bg-[#F5F2EB] text-[#162B22] font-bold border border-[#DFD9CE]'
                  : 'text-[#727A75] hover:text-[#141715]'
              }`}
            >
              Saved ({savedWorkerIds.length})
            </button>
          </div>
        </div>

        {/* Worker Cards Feed (Professional Editorial Layout) */}
        <div className="space-y-4">
          {filteredWorkers.map(w => {
            const isSaved = isSavedWorker(w.id);

            return (
              <div
                key={w.id}
                className="bg-[#E6EDE8] rounded-3xl p-6 sm:p-7 border border-[#DFD9CE] shadow-xs hover:border-[#162B22]/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                
                {/* Left & Center: Worker Photo, Identity, Trade & Skills */}
                <div className="flex items-start space-x-5 min-w-0 flex-1">
                  
                  {/* Photo container */}
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-[#ECE7DE] border border-[#DFD9CE] shrink-0 shadow-xs">
                    <img
                      src={w.avatarUrl}
                      alt={w.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Identity details */}
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#141715] tracking-tight uppercase truncate">
                        {w.name}
                      </h3>
                    </div>

                    <p className="text-sm font-semibold text-[#162B22]">
                      {w.trade}
                    </p>

                    <p className="text-xs text-[#727A75] flex items-center space-x-2">
                      <span>{w.experienceYears} years experience</span>
                      <span>·</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-[#727A75]" />
                        <span>{w.location}</span>
                      </span>
                    </p>

                    {/* Demonstrated Skills summary */}
                    <div className="pt-2 text-xs text-[#484F4A]">
                      <span className="text-[#727A75] font-medium">Demonstrated Skills: </span>
                      <span className="font-semibold text-[#141715]">{w.skillsSummary}</span>
                    </div>
                  </div>

                </div>

                {/* Right: Evidence Confidence, Counts & Action Buttons */}
                <div className="lg:border-l lg:border-[#ECE7DE] lg:pl-6 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0">
                  
                  {/* Evidence Confidence tier (Strictly evidence-backed, NO stars, NO percentages) */}
                  <div className="space-y-1 sm:text-right lg:text-right">
                    <div>
                      {renderConfidenceBadge(w.confidenceLevel)}
                    </div>
                    <p className="text-xs text-[#727A75] mt-1 font-medium">
                      {w.workRecordsCount} work records · {w.evidenceItemsCount} evidence items · {w.confirmationsCount} supervisor confirmations
                    </p>
                  </div>

                  {/* Actions: View Passport & Save */}
                  <div className="flex items-center space-x-3 w-full sm:w-auto pt-1">
                    <button
                      onClick={() => toggleSaveWorker(w.id)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-1.5 border transition-all cursor-pointer ${
                        isSaved
                          ? 'bg-[#E5EFE8] text-[#245E3F] border-[#245E3F]/30'
                          : 'bg-[#F5F2EB] hover:bg-white text-[#484F4A] border-[#DFD9CE]'
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSaved ? 'Saved ✓' : 'Save'}</span>
                    </button>

                    <button
                      onClick={() => onViewPassport(w)}
                      className="px-5 py-2.5 rounded-xl bg-[#162B22] hover:bg-[#102019] text-white text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
                    >
                      <span>View Passport</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}

          {filteredWorkers.length === 0 && (
            <div className="p-12 text-center bg-white rounded-3xl border border-[#DFD9CE] text-xs text-[#727A75] space-y-2">
              <p className="font-bold text-base text-[#141715]">
                {activeTab === 'SAVED' ? 'No saved workers yet' : 'No workers found'}
              </p>
              <p className="max-w-md mx-auto">
                {activeTab === 'SAVED'
                  ? 'Browse the directory of verified workers and click "Save" to shortlist technicians for your projects.'
                  : 'Try selecting a different trade category or clearing your search keywords.'}
              </p>
            </div>
          )}
        </div>

      </section>

    </div>
  );
};

export default ContractorTab;
