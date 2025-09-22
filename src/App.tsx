import React, { useState } from 'react';
import { LanguageProvider } from './components/LanguageProvider';
import { AuthProvider } from './components/AuthContext';
import { SimpleNavbar } from './components/SimpleNavbar';
import { VillageLandingPage } from './components/VillageLandingPage';
import { TaxPaymentPage } from './components/TaxPaymentPage';
import { GrievancePage } from './components/GrievancePage';
import { ManageVillagerPage } from './components/ManageVillagerPage';

import { GramPanchayatPage } from './components/GramPanchayatPage';
import { MediaPage } from './components/MediaPage';
import { NewsPage } from './components/NewsPage';
import { ContractsPage } from './components/ContractsPage';
import { LoginPage } from './components/LoginPage';
import { AdminPage } from './components/AdminPage';
import { AdminContractsPage } from './components/AdminContractsPage';
import { AdminFloatingContractsButton } from './components/AdminFloatingContractsButton';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Check if current URL should show admin page
  React.useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/admin/contracts') {
      setCurrentPage('admin-contracts');
    }
  }, []);

  // Update URL when page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page === 'admin') {
      window.history.pushState({}, '', '/admin');
    } else if (page === 'admin-contracts') {
      window.history.pushState({}, '', '/admin/contracts');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <VillageLandingPage />;
      case 'tax':
        return <TaxPaymentPage />;
      case 'grievance':
        return <GrievancePage />;
      case 'villager':
        return <ManageVillagerPage />;

      case 'committee':
        return <GramPanchayatPage />;
      case 'media':
        return <MediaPage />;
      case 'news':
        return <NewsPage />;
      case 'contracts':
        return <ContractsPage />;
      case 'login':
        return <LoginPage onNavigate={handlePageChange} />;
      case 'admin':
        return <AdminPage />;
      case 'admin-contracts':
        return <AdminContractsPage />;
      default:
        return <VillageLandingPage />;
    }
  };

  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          {currentPage !== 'login' && currentPage !== 'admin' && currentPage !== 'admin-contracts' && (
            <SimpleNavbar 
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          )}
          
          <main>
            {renderCurrentPage()}
          </main>

          {/* Show floating contracts button only on admin page */}
          {currentPage === 'admin' && <AdminFloatingContractsButton onNavigate={handlePageChange} />}

          <Toaster 
            position="top-right"
            richColors
            closeButton
          />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}