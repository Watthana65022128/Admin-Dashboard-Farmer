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
    } catch (error) {
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
    <div className="min-h-screen bg-gradient-to-br from-agriculture-100 via-agriculture-200 to-agriculture-300 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center border border-agriculture-200">
          <Shield className="w-16 h-16 text-agriculture-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-agriculture-800 mb-2">Admin Dashboard</h1>
          <p className="text-agriculture-600">ระบบจัดการผู้ใช้งาน - แอปพลิเคชันการเกษตร</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-agriculture-200">
          <h2 className="text-2xl font-bold text-center text-agriculture-800 mb-8">
            เข้าสู่ระบบแอดมิน
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-agriculture-700 mb-2">
                อีเมล
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 text-agriculture-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-agriculture-300 rounded-lg focus:ring-2 focus:ring-agriculture-500 focus:border-transparent outline-none transition-all"
                  placeholder="กรุณากรอกอีเมล"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-agriculture-700 mb-2">
                รหัสผ่าน
              </label>
              <div className="relative">
                <Lock className="w-5 h-5 text-agriculture-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-agriculture-300 rounded-lg focus:ring-2 focus:ring-agriculture-500 focus:border-transparent outline-none transition-all"
                  placeholder="กรุณากรอกรหัสผ่าน"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-agriculture-600 to-agriculture-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-agriculture-700 hover:to-agriculture-800 focus:ring-2 focus:ring-agriculture-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center border border-agriculture-300"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <LogIn className="w-5 h-5 mr-2" />
              )}
              {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}