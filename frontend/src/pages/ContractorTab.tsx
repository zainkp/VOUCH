import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { nearbyWorkers } from '../data/mockData';
import { Search, Bookmark, BookmarkCheck, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

export const ContractorTab: React.FC = () => {
  const { 
    worker, 
    setCurrentTab, 
    setActiveRole, 
    savedWorkerIds, 
    toggleSaveWorker, 
    isSavedWorker,
    stats
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrade, setSelectedTrade] = useState('All');
  const [activeTab, setActiveTab] = useState<'DIRECTORY' | 'SAVED'>('DIRECTORY');

  // Directory includes Ravi with his live updated stats plus peer workers
  const directoryWorkers = [
    {
      id: worker.id,
      name: worker.name,
      trade: worker.trade,
      experienceYears: worker.experienceYears,
      location: worker.location.split(',')[0],
      confidenceLevel: 'HIGH',
      workRecordsCount: stats.workCount,
      confirmationsCount: stats.confirmationCount,
      avatarUrl: worker.portraitUrl,
      skillsSummary: 'Electrical Wiring, Commercial Panel Installation',
    },
    ...nearbyWorkers.filter(w => w.id !== worker.id).map(w => ({
      ...w,
      skillsSummary: w.primarySkill,
    })),
  ];

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

  return (
    <div className="flex-1 px-4 sm:px-5 pb-8 pt-3 space-y-4">
      {/* Contractor Header */}
      <div>
        <span className="text-[10px] font-mono tracking-wider uppercase text-gray-500 font-bold bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200 inline-block mb-1">
          Contractor & Hirer Mode
        </span>
        <h2 className="text-xl font-bold text-[#111827]">Evaluate Evidence-Backed Workers</h2>
        <p className="text-xs text-gray-600">
          Inspect worker-owned passports and supervisor-vouched records before hiring.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by trade, skill, or city (e.g. Electrician, Mangaluru)..."
          className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#233B31]"
        />
      </div>

      {/* Trade Filters & Tabs */}
      <div className="space-y-2">
        <div className="flex items-center space-x-1.5 overflow-x-auto custom-scrollbar pb-1 text-xs">
          {['All', 'Electrician', 'Plumber', 'Welder'].map(trade => (
            <button
              key={trade}
              onClick={() => setSelectedTrade(trade)}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                selectedTrade === trade
                  ? 'bg-[#233B31] text-white'
                  : 'bg-white text-gray-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {trade}
            </button>
          ))}
        </div>

        <div className="flex border-b border-stone-200 text-xs">
          <button
            onClick={() => setActiveTab('DIRECTORY')}
            className={`py-1.5 px-3 font-bold border-b-2 transition-colors ${
              activeTab === 'DIRECTORY'
                ? 'border-[#233B31] text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Nearby Workers ({directoryWorkers.length})
          </button>
          <button
            onClick={() => setActiveTab('SAVED')}
            className={`py-1.5 px-3 font-bold border-b-2 transition-colors ${
              activeTab === 'SAVED'
                ? 'border-[#233B31] text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            Saved for Jobs ({savedWorkerIds.length})
          </button>
        </div>
      </div>

      {/* Worker Evaluation Cards (NO generic star ratings or rank scores) */}
      <div className="space-y-3">
        {filteredWorkers.map(w => {
          const isSaved = isSavedWorker(w.id);

          return (
            <div
              key={w.id}
              className="bg-white rounded-2xl p-4 border border-[#ECEBE8] shadow-xs hover:border-stone-300 transition-all flex flex-col space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 border border-black/5 shrink-0">
                    <img alt={w.name} src={w.avatarUrl} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{w.name}</h3>
                    <p className="text-xs text-gray-600">
                      {w.trade} · {w.experienceYears} years
                    </p>
                    <div className="flex items-center space-x-1 text-[11px] text-gray-400 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{w.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => toggleSaveWorker(w.id)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isSaved
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-stone-50 text-gray-400 border-stone-200 hover:text-gray-600'
                  }`}
                  title={isSaved ? 'Saved' : 'Save Worker'}
                >
                  {isSaved ? <BookmarkCheck className="w-4 h-4 text-emerald-700" /> : <Bookmark className="w-4 h-4" />}
                </button>
              </div>

              {/* Explainable Confidence Tier (NOT a generic percentage rating!) */}
              <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <span className="font-bold text-emerald-950 text-[11px] uppercase tracking-wide">
                      {w.confidenceLevel} EVIDENCE CONFIDENCE
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-600 font-medium mt-0.5">
                    {w.workRecordsCount} work records · {w.confirmationsCount} supervisor confirmations
                  </p>
                </div>
              </div>

              {/* Supported skills preview */}
              <p className="text-xs text-gray-600">
                <span className="font-semibold text-gray-700">Demonstrated Skills: </span>
                {w.skillsSummary}
              </p>

              {/* Action */}
              <div className="pt-1 flex items-center justify-between border-t border-gray-100 text-xs">
                <button
                  onClick={() => toggleSaveWorker(w.id)}
                  className="text-gray-500 hover:text-gray-800 font-medium"
                >
                  {isSaved ? '✓ Saved for Upcoming Project' : '+ Save for Later'}
                </button>

                <button
                  onClick={() => {
                    setActiveRole('worker');
                    setCurrentTab('passport');
                  }}
                  className="px-3 py-1.5 bg-[#233B31] text-white rounded-xl font-semibold flex items-center space-x-1 hover:bg-[#1E3B2B] transition-all"
                >
                  <span>View Passport</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}

        {filteredWorkers.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 text-xs text-gray-500 space-y-1">
            <p className="font-bold text-gray-700">No workers found matching your filter</p>
            <p>Try clearing search keywords or selecting "All" trades.</p>
          </div>
        )}
      </div>
    </div>
  );
};
