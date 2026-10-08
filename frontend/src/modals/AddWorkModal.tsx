import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { extractWorkFromNaturalLanguage } from '../services/aiService';
import { X, Mic, Check, Image, FileText, UserCheck } from 'lucide-react';

export const AddWorkModal: React.FC = () => {
  const { isAddWorkOpen, setIsAddWorkOpen, addWorkRecord } = useApp();

  const [promptText, setPromptText] = useState(
    'I installed six electrical panels at a commercial building last week.'
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [formattedData, setFormattedData] = useState<{
    title: string;
    trade: string;
    skills: string[];
    quantity: number;
    quantity_unit: string;
    date: string;
    location: string;
    employer: string;
    role: string;
  } | null>(null);

  const [supervisorName, setSupervisorName] = useState('Anil Sharma (Site Supervisor)');
  const [selectedPhoto, setSelectedPhoto] = useState<string>(
    'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80'
  );

  if (!isAddWorkOpen) return null;

  const handleFormat = async () => {
    if (!promptText.trim()) return;
    setIsProcessing(true);
    try {
      const result = await extractWorkFromNaturalLanguage(promptText);
      setFormattedData({
        title: result.title,
        trade: result.trade,
        skills: result.skills,
        quantity: result.quantity || 1,
        quantity_unit: result.quantity_unit || 'units',
        date: result.date || new Date().toISOString().split('T')[0],
        location: result.location || 'Mangaluru',
        employer: 'Delta Infra Projects',
        role: 'Panel Assembly Wireman',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-IN';
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setPromptText(transcript);
      };
      recognition.start();
    } else {
      setIsListening(true);
      setTimeout(() => {
        setPromptText('I installed six electrical panels at a commercial building last week.');
        setIsListening(false);
      }, 1000);
    }
  };

  const handleSave = () => {
    if (!formattedData) return;

    addWorkRecord({
      title: formattedData.title,
      employer: formattedData.employer || 'Self added',
      role: formattedData.role || 'Technician',
      date: formattedData.date,
      description: promptText,
      location: formattedData.location,
      quantity: formattedData.quantity,
      quantityUnit: formattedData.quantity_unit,
      skills: formattedData.skills,
      imageUrl: selectedPhoto,
      evidenceItems: [
        {
          id: `ev_${Date.now()}`,
          type: 'PHOTO',
          title: 'Panel Installation Photo',
          url: selectedPhoto,
          timestamp: formattedData.date,
          skillsSupported: formattedData.skills,
          description: 'On-site photograph showing completed busbar wiring.',
        },
      ],
    });

    setIsAddWorkOpen(false);
    setFormattedData(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-t-[28px] sm:rounded-[28px] border border-[#ECEBE8] shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-5 py-4 bg-white border-b border-[#ECEBE8] flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#111827]">Add Work Record</h3>
            <p className="text-xs text-gray-500">
              Work → Evidence → Independent Confirmation → Passport
            </p>
          </div>
          <button
            onClick={() => setIsAddWorkOpen(false)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto custom-scrollbar space-y-4">
          {/* Step 1: Describe Work Naturally */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-900">
                1. Describe what you worked on
              </label>
              <button
                type="button"
                onClick={handleVoiceInput}
                className={`flex items-center space-x-1 text-xs px-2.5 py-0.5 rounded-full border transition-all ${
                  isListening
                    ? 'bg-red-500 text-white border-red-500 animate-pulse'
                    : 'bg-stone-100 text-stone-700 border-stone-300 hover:bg-stone-200'
                }`}
              >
                <Mic className="w-3 h-3" />
                <span>{isListening ? 'Listening...' : 'Voice input'}</span>
              </button>
            </div>

            <textarea
              rows={3}
              value={promptText}
              onChange={e => setPromptText(e.target.value)}
              placeholder="e.g. I installed six electrical panels at a commercial building last week..."
              className="w-full text-xs p-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#233B31] text-gray-900"
            />

            {/* Quick Demo Prompts */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              <span className="text-[10px] text-gray-400 self-center mr-1">Demo examples:</span>
              <button
                type="button"
                onClick={() => setPromptText('I installed six electrical panels at a commercial building last week.')}
                className="text-[10px] bg-stone-200/80 hover:bg-stone-300 text-stone-800 px-2 py-0.5 rounded-md font-medium"
              >
                6 Commercial Panels
              </button>
              <button
                type="button"
                onClick={() => setPromptText('Completed 3BHK residential conduit piping, earthing and distribution board in Kadri.')}
                className="text-[10px] bg-stone-200/80 hover:bg-stone-300 text-stone-800 px-2 py-0.5 rounded-md font-medium"
              >
                3BHK House Wiring
              </button>
            </div>

            {!formattedData && (
              <button
                onClick={handleFormat}
                disabled={isProcessing || !promptText.trim()}
                className="w-full mt-2 py-2.5 bg-[#233B31] text-white rounded-xl text-xs font-bold hover:bg-[#1E3B2B] disabled:opacity-50 transition-all flex items-center justify-center space-x-2 shadow-xs"
              >
                {isProcessing ? (
                  <span>Structuring Work Record...</span>
                ) : (
                  <span>Structure Work Record</span>
                )}
              </button>
            )}
          </div>

          {/* Step 2: Clean Structured Work Record Preview */}
          {formattedData && (
            <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-3 animate-in fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <span className="text-xs font-bold text-gray-900 flex items-center space-x-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2. Review & Edit Structured Record</span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium">Worker verified</span>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">Project Title</label>
                <input
                  type="text"
                  value={formattedData.title}
                  onChange={e => setFormattedData({ ...formattedData, title: e.target.value })}
                  className="w-full text-xs font-semibold p-2 rounded-lg border border-gray-300 bg-stone-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Employer / Contractor</label>
                  <input
                    type="text"
                    value={formattedData.employer}
                    onChange={e => setFormattedData({ ...formattedData, employer: e.target.value })}
                    className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-stone-50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Worker Role</label>
                  <input
                    type="text"
                    value={formattedData.role}
                    onChange={e => setFormattedData({ ...formattedData, role: e.target.value })}
                    className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-stone-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Quantity</label>
                  <input
                    type="number"
                    value={formattedData.quantity}
                    onChange={e => setFormattedData({ ...formattedData, quantity: parseInt(e.target.value, 10) || 1 })}
                    className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-stone-50"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-700 block mb-1">Unit</label>
                  <input
                    type="text"
                    value={formattedData.quantity_unit}
                    onChange={e => setFormattedData({ ...formattedData, quantity_unit: e.target.value })}
                    className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-stone-50"
                  />
                </div>
              </div>

              {/* Skills Supported (Key requirement: explicit relationship) */}
              <div>
                <label className="text-[11px] font-bold text-gray-700 block mb-1">
                  Skills Supported By This Work:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {formattedData.skills.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold"
                    >
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Step 3: Attach Evidence */}
              <div className="pt-2 border-t border-gray-100 space-y-1.5">
                <label className="text-[11px] font-bold text-gray-700 block">
                  3. Jobsite Photo Evidence
                </label>
                <div className="flex items-center space-x-2.5">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-stone-200 bg-stone-100 shrink-0">
                    <img alt="Evidence" src={selectedPhoto} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-gray-600">
                    <p className="font-semibold text-gray-800">415V LT Panel Completion Photo</p>
                    <p className="text-[10px] text-gray-400">Attached & linked directly to {formattedData.skills.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Step 4: Request Confirmation */}
              <div className="pt-2 border-t border-gray-100 space-y-1.5">
                <label className="text-[11px] font-bold text-gray-700 flex items-center space-x-1">
                  <UserCheck className="w-3.5 h-3.5 text-gray-500" />
                  <span>4. Request Independent Confirmation</span>
                </label>
                <input
                  type="text"
                  value={supervisorName}
                  onChange={e => setSupervisorName(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg border border-gray-300 bg-stone-50"
                  placeholder="Supervisor or contractor contact"
                />
                <p className="text-[10px] text-gray-400">
                  Supervisor vouches provide higher evidentiary confidence than unverified claims.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center space-x-2">
                <button
                  onClick={handleSave}
                  className="flex-1 py-2.5 bg-[#233B31] text-white rounded-xl text-xs font-bold hover:bg-[#1E3B2B] shadow-xs active:translate-y-[1px] transition-all flex items-center justify-center space-x-1.5"
                >
                  <Check className="w-4 h-4" />
                  <span>Save to My Vouch Passport</span>
                </button>
                <button
                  onClick={() => setFormattedData(null)}
                  className="px-3 py-2.5 bg-stone-100 text-stone-700 rounded-xl text-xs font-semibold hover:bg-stone-200"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
