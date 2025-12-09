import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  BarChart3,
  FileText,
  Heart,
  Menu,
  X,
  Shield,
  Home,
  UserCircle
} from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Dashboard from './components/Dashboard';
import FamilyManagement from './components/FamilyManagement';
import MemberManagement from './components/MemberManagement';
import Statistics from './components/Statistics';
import Reports from './components/Reports';
import UserManagement from './components/UserManagement';
import MyProfile from './components/MyProfile';
import Header from './components/Header';

type TabType = 'dashboard' | 'families' | 'members' | 'statistics' | 'reports' | 'users' | 'profile';

function AppContent() {
  const { isLoggedIn } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (!isLoggedIn) {
    if (showForgotPassword) {
      return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
    }
    return <Login onForgotPassword={() => setShowForgotPassword(true)} />;
  }

  const menuItems = [
    { id: 'dashboard' as TabType, label: 'Tổng Quan', icon: LayoutDashboard },
    { id: 'families' as TabType, label: 'Quản Lý Gia Đình', icon: Users },
    { id: 'members' as TabType, label: 'Quản Lý Người Dùng', icon: UserCircle },
    { id: 'statistics' as TabType, label: 'Thống Kê & Phân Tích', icon: BarChart3 },
    { id: 'reports' as TabType, label: 'Báo Cáo Hạnh Phúc', icon: FileText },
    { id: 'users' as TabType, label: 'Quản Trị Admin', icon: Shield },
  ];

  const handleNavigate = (tab: string) => {
    setActiveTab(tab as TabType);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'families':
        return <FamilyManagement />;
      case 'members':
        return <MemberManagement />;
      case 'statistics':
        return <Statistics />;
      case 'reports':
        return <Reports />;
      case 'users':
        return <UserManagement />;
      case 'profile':
        return <MyProfile onBack={() => setActiveTab('dashboard')} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        sidebarOpen={sidebarOpen}
        onNavigateToProfile={() => setActiveTab('profile')}
      />
      <div className="flex flex-1">
        <aside
          className={`${sidebarOpen ? 'w-64' : 'w-20'
            } bg-gradient-to-b from-pink-400 to-rose-500 text-white transition-all duration-300 flex flex-col fixed left-0 top-0 h-screen z-30 overflow-y-auto`}
        >
          <div className="p-6 flex items-center justify-between flex-shrink-0">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <Home className="w-8 h-8" />
                <Heart className="w-8 h-8" />
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center ${sidebarOpen ? 'space-x-3 px-4' : 'justify-center px-2'
                    } py-3 rounded-lg transition-all ${activeTab === item.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </aside>

        <main className={`flex-1 overflow-auto ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
          <div className="p-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
