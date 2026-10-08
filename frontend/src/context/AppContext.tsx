import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  WorkerProfile, 
  WorkRecord, 
  SkillEvidenceBreakdown, 
  Confirmation, 
  ViewRole,
  EvidenceItem 
} from '../types';
import { initialWorker, initialWorkRecords, initialSkills, nearbyWorkers } from '../data/mockData';
import { calculateSkillConfidence, calculatePassportCompleteness } from '../utils/evidenceEngine';

interface AppContextType {
  worker: WorkerProfile;
  workRecords: WorkRecord[];
  skills: SkillEvidenceBreakdown[];
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
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [worker, setWorker] = useState<WorkerProfile>(initialWorker);
  const [workRecords, setWorkRecords] = useState<WorkRecord[]>(initialWorkRecords);
  const [skills, setSkills] = useState<SkillEvidenceBreakdown[]>(initialSkills);
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

  // Recompute skill confidences and passport completeness whenever work records change
  useEffect(() => {
    const updatedSkills = skills.map(skill => {
      const calculation = calculateSkillConfidence(skill.name, workRecords);
      return {
        ...skill,
        confidenceLevel: calculation.confidenceLevel,
        workRecordsCount: calculation.workRecordsCount,
        evidenceCount: calculation.evidenceCount,
        confirmationsCount: calculation.confirmationsCount,
        supervisorConfirmationsCount: calculation.supervisorConfirmationsCount,
        explanation: calculation.explanation,
      };
    });
    setSkills(updatedSkills);

    const completeness = calculatePassportCompleteness(workRecords, worker);
    setWorker(prev => ({
      ...prev,
      passportCompleteness: completeness,
    }));
  }, [workRecords]);

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
      id: `work_${Date.now()}`,
      title: data.title || 'Untitled Work',
      employer: data.employer || 'Self added',
      role: data.role || 'Technician',
      date: data.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      description: data.description || '',
      location: data.location || 'Mangaluru',
      quantity: data.quantity || 1,
      quantityUnit: data.quantityUnit || 'units',
      status: 'ADDED',
      imageUrl: data.imageUrl || 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&auto=format&fit=crop&q=80',
      skills: supportedSkills,
      evidenceCount: evidenceItems.length,
      evidenceItems,
      confirmations: [],
      createdAt: new Date().toISOString(),
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
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
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
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
            notes: 'Insufficient load calculation data provided.',
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
    setWorker(initialWorker);
    setWorkRecords(initialWorkRecords);
    setSkills(initialSkills);
    setSelectedWorkRecord(null);
    setSavedWorkerIds(['worker_001']);
  };

  const totalConfirmations = workRecords.reduce(
    (acc, r) => acc + r.confirmations.filter(c => c.status === 'CONFIRMED').length, 
    0
  );

  const stats = {
    workCount: workRecords.length,
    skillCount: skills.length,
    confirmationCount: totalConfirmations,
    passportCompleteness: worker.passportCompleteness,
  };

  return (
    <AppContext.Provider
      value={{
        worker,
        workRecords,
        skills,
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
