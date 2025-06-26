import { useAuth } from '../hooks/useAuth';
import { LogOut, Shield } from 'lucide-react';

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-agriculture-100 via-agriculture-200 to-agriculture-300">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-6 sm:mb-8 border border-agriculture-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex items-center w-full lg:w-auto">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-agriculture-600 mr-2 sm:mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-agriculture-800 truncate">Admin Dashboard</h1>
                <p className="text-xs sm:text-sm text-agriculture-600 truncate">ระบบจัดการผู้ใช้งาน - แอปพลิเคชันการเกษตร</p>
              </div>
            </div>
            
            {user && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                <div className="text-left sm:text-right order-2 sm:order-1">
                  <p className="font-semibold text-agriculture-800 text-sm sm:text-base truncate">{user.username}</p>
                  <p className="text-xs sm:text-sm text-agriculture-600 truncate">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
                      logout();
                    }
                  }}
                  className="flex items-center justify-center px-3 py-2 sm:px-4 bg-agriculture-500 text-white rounded-lg hover:bg-agriculture-600 transition-colors border border-agriculture-300 text-sm sm:text-base w-full sm:w-auto order-1 sm:order-2"
                >
                  <LogOut className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="truncate">ออกจากระบบ</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}