import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  WorkerProfile, 
  WorkRecord, 
  SkillEvidenceBreakdown, 
  Confirmation, 
  ViewRole,
  EvidenceItem 
} from '../types';
import { initialWorker, initialWorkRecords, initialSkills } from '../data/mockData';
import { calculatePassportCompleteness } from '../utils/evidenceEngine';
import { api, ApiError } from '../services/api';
import { 
  mapWorkerProfile, 
  mapWorkRecord, 
  mapSkillConfidence 
} from '../services/adapters';

interface AppContextType {
  worker: WorkerProfile;
  workRecords: WorkRecord[];
  skills: SkillEvidenceBreakdown[];
  isLoading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  
  currentTab: 'home' | 'work' | 'passport' | 'profile';
  setCurrentTab: (tab: 'home' | 'work' | 'passport' | 'profile') => void;
  selectedWorkRecord: WorkRecord | null;
  setSelectedWorkRecord: (record: WorkRecord | null) => void;
  isAddWorkOpen: boolean;
  setIsAddWorkOpen: (open: boolean) => void;
  isVerifierModalOpen: boolean;
  setIsVerifierModalOpen: (open: boolean) => void;
  activeVerifierRecord: WorkRecord | null;
  setActiveVerifierRecord: (record: WorkRecord | null) => void;
  isQrModalOpen: boolean;
  setIsQrModalOpen: (open: boolean) => void;
  isDeviceFramed: boolean;
  setIsDeviceFramed: (framed: boolean) => void;
  
  // Authentication & Access Flow
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;

  // Role & Contractor Mode
  activeRole: ViewRole;
  setActiveRole: (role: ViewRole) => void;
  savedWorkerIds: string[];
  toggleSaveWorker: (workerId: string) => void;
  isSavedWorker: (workerId: string) => boolean;

  // Actions
  addWorkRecord: (newRecord: Partial<WorkRecord>) => WorkRecord;
  confirmWorkRecord: (recordId: string, verifierName: string, verifierRole: string, organization?: string, notes?: string) => void;
  rejectWorkRecord: (recordId: string, verifierName: string) => void;
  resetDemoData: () => void;
  
  // Computed metrics
  stats: {
    workCount: number;
    skillCount: number;
    confirmationCount: number;
    passportCompleteness: number;
    overallConfidence: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [worker, setWorker] = useState<WorkerProfile>(initialWorker);
  const [workRecords, setWorkRecords] = useState<WorkRecord[]>(initialWorkRecords);
  const [skills, setSkills] = useState<SkillEvidenceBreakdown[]>(initialSkills);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [currentTab, setCurrentTab] = useState<'home' | 'work' | 'passport' | 'profile'>('home');
  const [selectedWorkRecord, setSelectedWorkRecord] = useState<WorkRecord | null>(null);
  const [isAddWorkOpen, setIsAddWorkOpen] = useState(false);
  const [isVerifierModalOpen, setIsVerifierModalOpen] = useState(false);
  const [activeVerifierRecord, setActiveVerifierRecord] = useState<WorkRecord | null>(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isDeviceFramed, setIsDeviceFramed] = useState(true);
  const [activeRole, setActiveRole] = useState<ViewRole>('worker');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [savedWorkerIds, setSavedWorkerIds] = useState<string[]>(['worker_001']);

  /**
   * Primary API Data Loader for Worker Profile & Work History
   * Connects GET /api/workers/me and GET /api/work
   */
  const loadApiData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Concurrently fetch profile and work history from FastAPI backend
      const [profileRes, workRes] = await Promise.all([
        api.getMyProfile(),
        api.getWork(),
      ]);

      const mappedWorks = workRes.map(mapWorkRecord);
      const completeness = calculatePassportCompleteness(mappedWorks);
      const mappedWorker = mapWorkerProfile(profileRes, completeness);

      const mappedSkills = (profileRes.demonstrated_skills || []).map((s, idx) => 
        mapSkillConfidence(s, idx)
      );

      setWorker(mappedWorker);
      setWorkRecords(mappedWorks);
      setSkills(mappedSkills.length > 0 ? mappedSkills : initialSkills);
    } catch (err: any) {
      console.warn('Backend connection error in AppContext:', err);
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Could not connect to VOUCH backend server.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadApiData();
  }, [loadApiData]);

  const addWorkRecord = (data: Partial<WorkRecord>): WorkRecord => {
    const supportedSkills = data.skills && data.skills.length > 0 ? data.skills : ['Electrical Wiring'];
    
    const evidenceItems: EvidenceItem[] = data.evidenceItems && data.evidenceItems.length > 0
      ? data.evidenceItems
      : [
          {
            id: `ev_${Date.now()}`,
            type: 'PHOTO',
            title: 'Jobsite Installation Photo',
            url: data.imageUrl || 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80',
            timestamp: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            skillsSupported: supportedSkills,
            description: 'Direct site photo showing completed wiring run.',
          },
        ];

    const newRecord: WorkRecord = {
      id: data.id || `work_${Date.now()}`,
      title: data.title || 'Untitled Work',
      employer: data.employer || 'Independent / Client Site',
      role: data.role || 'Technician',
      date: data.date || new Date().toISOString().split('T')[0],
      description: data.description || '',
      location: data.location || 'Mangaluru',
      quantity: data.quantity || 1,
      quantityUnit: data.quantityUnit || 'units',
      status: data.status || 'PENDING',
      imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80',
      skills: supportedSkills,
      evidenceCount: evidenceItems.length,
      evidenceItems,
      confirmations: data.confirmations || [],
      confidence: data.confidence || 0,
      createdAt: data.createdAt || new Date().toISOString(),
    };

    setWorkRecords(prev => [newRecord, ...prev]);
    return newRecord;
  };

  const confirmWorkRecord = (
    recordId: string, 
    verifierName: string, 
    verifierRole: string, 
    organization?: string, 
    notes?: string
  ) => {
    setWorkRecords(prev =>
      prev.map(r => {
        if (r.id === recordId) {
          const newConfirmation: Confirmation = {
            id: `conf_${Date.now()}`,
            verifierName,
            verifierRole: verifierRole || 'Site Supervisor',
            verifierType: 'SUPERVISOR',
            organization: organization || 'Direct Contractor',
            workTitle: r.title,
            status: 'CONFIRMED',
            date: new Date().toISOString().split('T')[0],
            notes: notes || 'Verified quality and adherence to electrical safety specs.',
          };
          return {
            ...r,
            status: 'CONFIRMED',
            confirmations: [...r.confirmations, newConfirmation],
          };
        }
        return r;
      })
    );
  };

  const rejectWorkRecord = (recordId: string, verifierName: string) => {
    setWorkRecords(prev =>
      prev.map(r => {
        if (r.id === recordId) {
          const newConfirmation: Confirmation = {
            id: `conf_${Date.now()}`,
            verifierName,
            verifierRole: 'Reviewer',
            verifierType: 'SUPERVISOR',
            workTitle: r.title,
            status: 'REJECTED',
            date: new Date().toISOString().split('T')[0],
            notes: 'Insufficient technical verification provided.',
          };
          return {
            ...r,
            status: 'REJECTED',
            confirmations: [...r.confirmations, newConfirmation],
          };
        }
        return r;
      })
    );
  };

  const toggleSaveWorker = (workerId: string) => {
    setSavedWorkerIds(prev => 
      prev.includes(workerId) ? prev.filter(id => id !== workerId) : [...prev, workerId]
    );
  };

  const isSavedWorker = (workerId: string) => savedWorkerIds.includes(workerId);

  const resetDemoData = () => {
    loadApiData();
  };

  const totalConfirmations = workRecords.reduce(
    (acc, r) => acc + (r.confirmations || []).filter(c => c.status === 'CONFIRMED').length, 
    0
  );

  const stats = {
    workCount: workRecords.length,
    skillCount: skills.length,
    confirmationCount: totalConfirmations,
    passportCompleteness: worker.passportCompleteness,
    overallConfidence: worker.overallEvidenceConfidence || 0,
  };

  return (
    <AppContext.Provider
      value={{
        worker,
        workRecords,
        skills,
        isLoading,
        error,
        refreshData: loadApiData,
        currentTab,
        setCurrentTab,
        selectedWorkRecord,
        setSelectedWorkRecord,
        isAddWorkOpen,
        setIsAddWorkOpen,
        isVerifierModalOpen,
        setIsVerifierModalOpen,
        activeVerifierRecord,
        setActiveVerifierRecord,
        isQrModalOpen,
        setIsQrModalOpen,
        isDeviceFramed,
        setIsDeviceFramed,
        isAuthenticated,
        setIsAuthenticated,
        activeRole,
        setActiveRole,
        savedWorkerIds,
        toggleSaveWorker,
        isSavedWorker,
        addWorkRecord,
        confirmWorkRecord,
        rejectWorkRecord,
        resetDemoData,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
