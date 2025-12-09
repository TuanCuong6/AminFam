import { LogOut, Settings, Bell, User, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

interface HeaderProps {
  sidebarOpen: boolean;
}

export default function Header({ sidebarOpen }: HeaderProps) {
  const { admin, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20 ${sidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>
      <div className="flex items-center space-x-2">
        <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
          Gia Đình Hạnh Phúc
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {admin?.name?.charAt(0)}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-900">{admin?.name}</p>
              <p className="text-xs text-gray-600">{admin?.role}</p>
            </div>
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition text-gray-700 text-sm">
                <User className="w-4 h-4" />
                <span>Hồ Sơ Của Tôi</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 transition text-gray-700 text-sm">
                <Settings className="w-4 h-4" />
                <span>Cài Đặt</span>
              </button>
              <hr className="my-2" />
              <button
                onClick={() => {
                  logout();
                  setShowMenu(false);
                }}
                className="w-full flex items-center space-x-3 px-4 py-2 hover:bg-red-50 transition text-red-600 text-sm"
              >
                <LogOut className="w-4 h-4" />
                <span>Đăng Xuất</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
