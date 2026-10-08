import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DeviceFrame } from './components/DeviceFrame';
import { TopBar } from './components/TopBar';
import { BottomNav } from './components/BottomNav';
import { HomeTab } from './pages/HomeTab';
import { WorkTab } from './pages/WorkTab';
import { PassportTab } from './pages/PassportTab';
import { ProfileTab } from './pages/ProfileTab';
import { ContractorTab } from './pages/ContractorTab';
import { AddWorkModal } from './modals/AddWorkModal';
import { WorkDetailModal } from './modals/WorkDetailModal';
import { VerifierModal } from './modals/VerifierModal';
import { QrModal } from './modals/QrModal';

const MainContent: React.FC = () => {
  const { currentTab, activeRole } = useApp();

  return (
    <DeviceFrame>
      {/* Top Header with Role Switcher */}
      <TopBar />

      {/* Main Tab Routing */}
      <main className="flex-1 flex flex-col">
        {activeRole === 'contractor' ? (
          <ContractorTab />
        ) : (
          <>
            {currentTab === 'home' && <HomeTab />}
            {currentTab === 'work' && <WorkTab />}
            {currentTab === 'passport' && <PassportTab />}
            {currentTab === 'profile' && <ProfileTab />}
          </>
        )}
      </main>

      {/* Persistent Bottom Navigation */}
      <BottomNav />

      {/* Modals & Overlays */}
      <AddWorkModal />
      <WorkDetailModal />
      <VerifierModal />
      <QrModal />
    </DeviceFrame>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;
