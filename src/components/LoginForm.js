import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Shield, Mail, Lock, LogIn } from 'lucide-react';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch {
      // Error handled in useAuth hook
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-green-200 to-green-300 flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="max-w-sm sm:max-w-md w-full">
        {/* Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 mb-6 sm:mb-8 text-center border border-green-200">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-3 sm:mb-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2">Admin Dashboard</h1>
          <p className="text-sm sm:text-base text-green-600">ระบบจัดการผู้ใช้งาน - แอปพลิเคชันการเกษตร</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 border border-green-200">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-green-800 mb-6 sm:mb-8">
            เข้าสู่ระบบแอดมิน
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-green-700 mb-2">
                อีเมล
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="กรุณากรอกอีเมล"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-green-700 mb-2">
                รหัสผ่าน
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="กรุณากรอกรหัสผ่าน"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2.5 sm:py-3 px-4 rounded-lg text-sm sm:text-base font-semibold hover:from-green-700 hover:to-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center border border-green-300"
            >
              {loading ? (
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <LogIn className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              )}
              <span className="text-sm sm:text-base">{loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}