import { useState, useEffect } from 'react';
import { authService } from '../lib/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (authService.isAuthenticated()) {
        const userData = await authService.getCurrentUser();
        if (userData.isAdmin) {
          setUser(userData);
        } else {
          authService.logout();
          router.push('/login');
        }
      } else {
        router.push('/login');
      }
    } catch (error) {
      authService.logout();
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      const { user } = await authService.login(credentials);
      setUser(user);
      toast.success('เข้าสู่ระบบสำเร็จ');
      router.push('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.error || 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    toast.success('ออกจากระบบสำเร็จ');
    router.push('/login');
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };
};