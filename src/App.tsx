import React from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LandingPage } from './components/LandingPage';
import { RoleSelection } from './components/RoleSelection';
import { StudentDashboard } from './components/student/StudentDashboard';
import { TutorDashboard } from './components/tutor/TutorDashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { LogOut } from 'lucide-react';

const AppContent: React.FC = () => {
  const { user, logout, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-yellow-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading SignPath...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LandingPage />;
  }

  // Show role selection for new users (not admin)
  if (user.role === 'student' && !user.profile && user.email !== 'admin@signpath.com') {
    return <RoleSelection />;
  }

  // Render appropriate dashboard based on role
  const renderDashboard = () => {
    switch (user.role) {
      case 'admin':
        return <AdminDashboard />;
      case 'tutor':
        return <TutorDashboard />;
      case 'student':
      default:
        return <StudentDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Header with Logout */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-yellow-600">SignPath by Sally</h1>
              <div className="text-sm text-gray-600">
                {user.role === 'admin' ? '🔐 Administrator' : 
                 user.role === 'tutor' ? '👨‍🏫 Tutor' : '🎓 Student'}
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {renderDashboard()}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;