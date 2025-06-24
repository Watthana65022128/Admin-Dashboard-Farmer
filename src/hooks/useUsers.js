import { useState, useEffect } from 'react';
import { userService } from '../lib/userService';
import toast from 'react-hot-toast';

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const userData = await userService.getAllUsers();
      setUsers(userData);
    } catch (error) {
      setError(error.response?.data?.error || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
      toast.error('ไม่สามารถโหลดข้อมูลผู้ใช้ได้');
    } finally {
      setLoading(false);
    }
  };

  const banUser = async (userId, reason) => {
    try {
      await userService.banUser(userId, reason);
      toast.success('ระงับการใช้งานสำเร็จ');
      await loadUsers(); // Reload users
    } catch (error) {
      toast.error(error.response?.data?.error || 'เกิดข้อผิดพลาดในการระงับผู้ใช้');
      throw error;
    }
  };

  const unbanUser = async (userId) => {
    try {
      await userService.unbanUser(userId);
      toast.success('ยกเลิกการระงับสำเร็จ');
      await loadUsers(); // Reload users
    } catch (error) {
      toast.error(error.response?.data?.error || 'เกิดข้อผิดพลาดในการยกเลิกการระงับ');
      throw error;
    }
  };

  const getStatistics = () => {
    const totalUsers = users.length;
    const activeUsers = users.filter(user => !user.isBanned).length;
    const bannedUsers = users.filter(user => user.isBanned).length;
    const adminUsers = users.filter(user => user.isAdmin).length;

    return {
      totalUsers,
      activeUsers,
      bannedUsers,
      adminUsers
    };
  };

  return {
    users,
    loading,
    error,
    loadUsers,
    banUser,
    unbanUser,
    getStatistics
  };
};