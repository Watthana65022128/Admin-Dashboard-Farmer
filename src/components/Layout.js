import { useAuth } from '../hooks/useAuth';
import { LogOut, Shield } from 'lucide-react';

export default function Layout({ children }) {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-agriculture-100 via-agriculture-200 to-agriculture-300">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-agriculture-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-8 h-8 text-agriculture-600 mr-3 py-8" />
              <div>
                <h1 className="text-2xl font-bold text-agriculture-800">Admin Dashboard</h1>
                <p className="text-agriculture-600">ระบบจัดการผู้ใช้งาน - แอปพลิเคชันการเกษตร</p>
              </div>
            </div>
            
            {user && (
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="font-semibold text-agriculture-800">{user.username}</p>
                  <p className="text-sm text-agriculture-600">{user.email}</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm('คุณต้องการออกจากระบบหรือไม่?')) {
                      logout();
                    }
                  }}
                  className="flex items-center px-4 py-2 bg-agriculture-500 text-white rounded-lg hover:bg-agriculture-600 transition-colors border border-agriculture-300"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  ออกจากระบบ
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